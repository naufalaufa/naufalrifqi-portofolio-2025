import { FaArrowUp } from "react-icons/fa";

const SideIcon = () => {
  return (
    <a
      href="#main"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/40"
    >
      <FaArrowUp size={15} />
    </a>
  );
};

export default SideIcon;
