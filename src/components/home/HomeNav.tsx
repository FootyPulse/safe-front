import NavItem from "./NavItem";
import {
  FaHome,
  FaNewspaper,
  FaUsers,
  FaUser,
  FaSignal,
  FaChessBoard,
  FaChess,
} from "react-icons/fa";

export default function HomeNav() {
  return (
    <div className="flex flex-col justify-around mr-10">
      <NavItem title="Home" icon={<FaHome />} href="/" />
      <NavItem title="Scores" icon={<FaChessBoard />} href="scores" />
      <NavItem title="Live" icon={<FaSignal />} href="live" />
      <NavItem title="News" icon={<FaNewspaper />} href="news" />
      <NavItem title="Teams" icon={<FaUsers />} href="teams" />
      <NavItem title="Players" icon={<FaUser />} href="players" />
    </div>
  );
}
