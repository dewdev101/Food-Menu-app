import { Link } from "react-router-dom";
import { FaCartPlus, FaBars } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";

const Nav = ({ setToggleCheckBill }) => {
  return (
    <>
      <div className=" fixed   bg-[#FFAB09] flex flex-row w-screen p-2 h-[50px] space-x-2 font-kanit relative ">
        <div className=" w-1/8 my-auto text-black">
          <img src="" />
          <Link to="/">
            <FaBars />
          </Link>
        </div>
        <div className=" text-2xl font-bold text-black">ThaiCuisine</div>
        <div className="cursor-pointer  my-auto w-[45%] md:w-[80%] px-2">
          <Link to="/faq">FAQ</Link>
        </div>
        <div
          className=" w-2/8  text-3xl mr-2  text-black cursor-pointer bg-red-200  hover:bg-white absolute  "
          onClick={() => console.log("Cart Click!")}
        >
          <div className="fixed right-4">
            {" "}
            <Link to="/checkBill">
              {" "}
              <BsFillCartCheckFill className="pt-1 hover:text-white flex " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
