// components/Logo.jsx
export default function Logo() {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        alt="Company Logo"
        className="h-8 w-auto"
      />
    </a>
  );
}