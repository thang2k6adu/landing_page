import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

export default function ScrollWheel() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY / 5); // chỉnh hệ số 5 cho tốc độ xoay
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 left-6 w-12 h-12 rounded-full border-4 border-black flex items-center justify-center shadow-lg bg-white"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <BookOpen className="w-6 h-6 text-gray-700" />
    </div>
  );
}
