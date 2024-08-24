"use client";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

// Define the type for the post data
type Post = {
  id: number;
  title: string;
  postText: string;
  username: string;
  Likes: number[];
};


export default function Home() {
  const router = useRouter();
  // Use the defined type in the state
  const [postsData, setPostsData] = useState<Post[]>([]);
  const { authState } = useContext(AuthContext);
  console.log(authState);
  const fetchData = () => {
    axios
      .get("https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/posts")
      .then((res) => {
        setPostsData(res.data);
        console.log("here is the data", res.data);
      });
    
  };
  useEffect(() => {
    fetchData();
  }, []);

  const data = "";
  // const posts = [
  //   {
  //     id: 1,
  //     title: "random title",
  //     postText: "gewrogpihr",
  //     username: "k_janoudi",
  //     createdAt: "2024-05-26T16:43:12.000Z",
  //     updatedAt: "2024-05-26T16:43:12.000Z",
  //     Likes: [
  //       {
  //         id: 33,
  //         createdAt: "2024-06-29T12:41:10.000Z",
  //         updatedAt: "2024-06-29T12:41:10.000Z",
  //         PostId: 1,
  //         UserId: 3,
  //       },
  //     ],
  //   },
  //   // other posts...
  // ];
  function hasUserLikedPost(
 
    postId: number,
    userId: number
  ): boolean {
    // Find the post with the given postId
    const post = postsData.find((p: any) => p.id === postId);

    if (!post) {
      return false;
    }

    return post.Likes.some((like: any) => like.UserId === userId);
  }
  console.log(hasUserLikedPost(1, 3)); // Output: true
  console.log(hasUserLikedPost( 2, 3)); // Output: false

  const likeAPost = (postId: number) => {
    axios
      .post(
        "https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        fetchData();
      });
  };

  console.log("authenticated?",authState.status)

  return (
    <div className="App">
      {postsData.slice().reverse().map((item) => (
        <div className="post" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <div className="body px-4" onClick={() => router.push(`${`post/${item.id}`}`)}>
            {item.postText}
          </div>
          <div className="footer  justify-between px-5 items-center py-2">
            <div>{item.username}</div>
            <div className="flex gap-2">
              <ThumbUpIcon
                className={` ${
                  hasUserLikedPost(item.id, authState.id)
                    ? "text-gray-500"
                    : "text-gray-300"
                } `}
                onClick={() => {
                  likeAPost(item.id);
                }}
              />

              <label>{item.Likes.length}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
