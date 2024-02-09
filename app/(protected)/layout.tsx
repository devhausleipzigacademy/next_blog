import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/create">Create BlogPost</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="h-screen w-full flex flex-col justify-center items-center">
        {children}
      </main>
    </>
  );
}

export default layout;
