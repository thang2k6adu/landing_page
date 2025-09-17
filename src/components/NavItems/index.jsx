// components/NavItems.jsx
export default function NavItems({ items, className = '' }) {
  return (
    <>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`text-sm font-semibold text-white ${className}`}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}