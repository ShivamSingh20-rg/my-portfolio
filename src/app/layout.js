import "./globals.css";

export const metadata = {
  title: "Shivam Singh | Full Stack Developer",
  description: "Personal Portfolio Website of Shivam Singh Gaharwar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>   
    </html>
  );
}