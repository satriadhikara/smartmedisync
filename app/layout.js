import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import localFont from "next/font/local";
import "material-symbols";

const inter = Inter({ subsets: ["latin"] });
const madeSans = localFont({
  src: [
    {
      path: "../public/fonts/MADE-Outer-Sans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MADE-Outer-Sans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/MADE-Outer-Sans-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={madeSans.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
