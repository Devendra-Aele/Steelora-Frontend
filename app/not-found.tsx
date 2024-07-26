import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="text-black h-full flex flex-col gap-3 justify-center items-center font-RidleyGrotesk ">
      <h1 className="text-center text-9xl">404</h1>
      <div>
        <Link href="/" className="underline text-xl">
          Go back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
