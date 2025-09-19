import React from "react";

export default function HomeLayout({ children }) {
  return (
    <>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-200 p-4">{children}</div>

        <div></div>
      </div>
    </>
  );
}
