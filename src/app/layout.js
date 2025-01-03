import "./globals.css";

import "../styles/fonts.css";
import NewFooter from "@/structure/Footer";

export const metadata = {
  title: "Santalum",
  description: "Medicina estética",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  
        {children}
        <NewFooter/>
        </body>
    </html>
  );
}
