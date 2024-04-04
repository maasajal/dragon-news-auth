import moment from "moment";
import logo from "../../../assets/logo.png";
import LatestNews from "../../Home/LatestNews";
const Header = () => {
  return (
    <div className="text-center">
      <img src={logo} alt="The Dragon News" className="mx-auto mb-2" />
      <p className="my-3">Journalism Without Fear or Favour</p>
      <p className="text-xl"> {moment().format("dddd, MMMM D, YYYY")} </p>
      <LatestNews />
    </div>
  );
};
export default Header;
