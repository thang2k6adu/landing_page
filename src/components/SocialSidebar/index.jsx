import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { PiThreadsLogo } from "react-icons/pi"; // Threads icon

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col items-center space-y-4 bg-transparent p-3 rounded-r-lg">
      {/* Icons */}
      <a href="#" className="text-black hover:text-blue-500">
        <FaFacebookF size={20} />
      </a>
      <a href="#" className="text-black hover:text-pink-500">
        <FaInstagram size={20} />
      </a>
      <a href="#" className="text-black hover:text-gray-300">
        <PiThreadsLogo size={20} />
      </a>
      <a href="#" className="text-black hover:text-black">
        <FaTiktok size={20} />
      </a>
      <a href="#" className="text-black hover:text-red-600">
        <FaYoutube size={22} />
      </a>

      {/* Divider */}
      <div className="w-px h-8 bg-black my-2" />

      {/* Text */}
      <span className="text-black text-xs [writing-mode:vertical-rl] rotate-180">
        Follow Us
      </span>
    </div>
  );
}
