import { Inter } from "next/font/google";
// import "./globals.css";
import "../styles/main.scss";
import SmoothScrolling from "@/components/SmoothScrolling";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smooth Scrolling In Next.js 14",
  description:
    "Tutorial on Smooth Scrolling In Next.js 14. You can find full video from CodeBucks channel on youtube.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
