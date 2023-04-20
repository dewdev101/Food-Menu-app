import { Link } from "react-router-dom";
import { FaCartPlus, FaBars } from "react-icons/fa";
const Nav = ({ setToggle, toggle }) => {
  return (
    <>
      <div className=" fixed  bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-row w-screen  h-[50px] p-2 space-x-2 font-kanit">
        <div className=" w-1/8 my-auto text-cyan-700">
          <img src="" />
          <Link to="/">
            <FaBars />
          </Link>
        </div>
        <div className=" text-2xl font-bold text-cyan-700">ThaiCuisine</div>
        <div className="cursor-pointer  my-auto w-[45%] md:w-[80%] px-2">
          <Link to="/faq">FAQ</Link>
        </div>
        <div
          className="w-1/8 my-auto text-2xl  text-blue-500 "
          onClick={() => setToggle(!toggle)}
        >
          <Link to="/checkBill">
            {" "}
            <FaCartPlus />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Nav;
