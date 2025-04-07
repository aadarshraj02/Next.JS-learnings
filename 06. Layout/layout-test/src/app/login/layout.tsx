import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Login Main</Link>
        </li>
        <li>
          <Link href="/login/login-user">Login User</Link>
        </li>
        <li>
          <Link href="/login/login-admin">Login Admin</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};
export default Layout;
