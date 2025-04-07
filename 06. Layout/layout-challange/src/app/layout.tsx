import Link from "next/link";
import { ReactNode } from "react";
import "./globals.css";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-purple-800 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link className="hover:text-purple-400" href={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-400" href={"/about"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-400" href={"/contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="flex flex-1">
            <aside className="w-64 bg-purple-200 p-4">
              <ul>
                <li>
                  <Link
                    href={"/category/technology"}
                    className="block py-2 hover:bg-purple-300"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/category/design"}
                    className="block py-2 hover:bg-purple-300"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/category/business"}
                    className="block py-2 hover:bg-purple-300"
                  >
                    Business
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
};
export default BaseLayout;
