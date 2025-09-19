// components/NavItems.jsx
import { NavLink } from "react-router-dom";

export default function NavItems({ items, className = "" }) {
  return (
    <>
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.href}
          className={({ isActive }) =>
            `text-sm font-semibold ${
              isActive ? "text-yellow-400" : "text-white"
            } ${className}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
}
