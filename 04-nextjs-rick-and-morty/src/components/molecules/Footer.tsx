import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-blue-800 border-t border-gray-200 h-[80px]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full justify-between">
          <Link
            href="/About"
            className="text-base text-white hover:text-gray-200"
          >
            About
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://rickandmortyapi.com/"
            className="text-base text-white hover:text-gray-200"
          >
            Rick and Morty API
          </a>
          <p className="text-base text-white">
            &copy; {new Date().getFullYear()}
            <span className={"hidden sm:inline-block"}>
              , All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
