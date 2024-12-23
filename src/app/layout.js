import "./globals.css";
import Header from "../components/Header";
import "../styles/fonts.css";
export const metadata = {
  title: "Santalum",
  description: "Medicina estética",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
    </html>
  );
}
