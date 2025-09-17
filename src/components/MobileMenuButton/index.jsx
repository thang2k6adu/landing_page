// components/MobileMenuButton.jsx
export default function MobileMenuButton({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
      aria-expanded={isOpen}
    >
      <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="size-6"
        aria-hidden="true"
      >
        {isOpen ? (
          <path
            d="M6 18 18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}