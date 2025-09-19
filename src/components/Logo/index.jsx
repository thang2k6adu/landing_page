import { Link } from "react-router-dom";

export default function Logo({ logo1, logo2 }) {
  return (
    <Link to={'/'} className="flex items-center">
      {logo1 && (
        <img
          src={logo1}
          alt="Logo 1"
          className="h-8 w-auto"
        />
      )}
      {logo2 && (
        <img
          src={logo2}
          alt="Logo 2"
          className="pl-4 h-8 w-auto"
        />
      )}
    </Link>
  );
}