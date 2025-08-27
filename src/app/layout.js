import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "Malek Tech | Web Design",
  description: "Malek Tech Designs Fullstack Websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.boxicons.com/fonts/basic/boxicons.min.css"
          rel="stylesheet"
        />
        <link href="/web-icon.png" rel="icon" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
