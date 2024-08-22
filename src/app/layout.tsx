import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { AuthProvider } from "../context/AuthContext"; // Ensure the path is correct

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
