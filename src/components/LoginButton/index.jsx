import React from "react";

export default function LoginButton() {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold text-white">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}
