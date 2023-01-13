import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} text="Server 1" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text="Server 2" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Server 3" />
      <SideBarIcon icon={<FaPoo size="20" />} text="Server 4" />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text="Setting" />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
