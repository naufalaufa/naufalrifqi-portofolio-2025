import { FaArrowAltCircleUp } from "react-icons/fa";
const SideIcon = () => {
  return (
    <a
      href="#main"
      className="fixed bottom-2 right-2 bg-blue-300 rounded-full cursor-pointer"
    >
      <FaArrowAltCircleUp size={45} />
    </a>
  );
};

export default SideIcon;
