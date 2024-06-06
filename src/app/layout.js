import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const menuItems = [
  {
    item: "Favorites",
    link:"/favorites",
  },
  {
    item: "Watchlist",
    link:"/watchlist",
  },
  {
    description:'',
    image:'/images/usuario-blanco.png'
  }
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar menu={menuItems}/>
        {children}
      </body>
    </html>
  );
}
