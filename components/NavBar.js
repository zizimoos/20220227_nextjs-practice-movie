import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavBar(props) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <nav>
        <Link href="/">
          <a style={{ color: router.pathname === "/" ? "active" : "blue" }}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            style={{ color: router.pathname === "/about" ? "active" : "blue" }}
          >
            About
          </a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
        }
        .active {
          color: red;
        }
        a {
          margin-right: 20px;
          text-decoration: none;
          color: blue;
        }
      `}</style>
    </>
  );
}

export default NavBar;
