"use client";

import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";

type PageProps = {
  params: {
    id: any;
  };
};

type Post = {
  title: string;
  postText: string;
  username: string;
  id: any;
};

type Comment = {
  commentBody: string;
  username: string;
  id: number;
};

const Page = ({ params }: PageProps) => {
  const router = useRouter();
  const { authState, setAuthState } = useContext(AuthContext);
  const [post, setPost] = useState<Post>({
    title: "",
    postText: "",
    username: "",
    id: "",
  });
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const { id } = params;

  const addComment = () => {
    axios
      .post(
        "https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/comments",
        {
          commentBody: newComment,
          PostId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          console.log(response.data.error);
        } else {
          const commentToAdd = {
            commentBody: newComment,
            username: response.data.username,
            id: response.data.id,
          };
          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });
  };

  const deleteComment = (id: number) => {
    axios
      .delete(
        `https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/comments/${id}`,
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then(() => {
        setComments(
          comments.filter((val) => {
            return val.id != id;
          })
        );
      });
  };

  const deletePost = (id: any) => {
    axios
      .delete(
        `https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/posts/${id}`,
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then(() => {
        router.push("/");
      });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/posts/byId/${id}`
        );
        setPost(res.data);
        console.log("This is the data:", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/comments/${id}`
        );
        setComments(res.data);
        console.log("This is the data:", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
    fetchComments();
  }, [id]);

  return (
    <div className="flex lg:flex-row flex-col w-full h-full px-1 pb-10">
      <div className="leftSide ">
        <div className="w-full md:w-[500px] h-[500px] rounded-[10px] flex flex-col mt-[50px] post">
          {post ? (
            <>
              <div className="title"> {post.title} </div>
              <div className="body px-5">{post.postText}</div>
              <div className="footer py-3">
                {post.username}
                {authState.username === post.username && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    Delete Post
                  </button>
                )}
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            className="px-2 md:w-[250px] w-full "
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={addComment}> Add Comment</button>
        </div>
        <div className="listOfComments px-1">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment flex flex-col md:w-9/12 w-full">
                <div className="text-gray-500">{comment.username}</div>

                <div className="flex gap-3 items-center justify-between font-semibold text-gray-800">
                  <div>{comment.commentBody}</div>
                  {authState.username === comment.username && (
                    <div
                      onClick={() => deleteComment(comment.id)}
                      className="border  border-gray-400 rounded-full inline-block text-gray-600
                  px-2 cursor-pointer"
                    >
                      X
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
