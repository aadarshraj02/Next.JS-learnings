import Link from "next/link";
import { ReactNode } from "react";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-purple-800 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
};
export default BaseLayout;
