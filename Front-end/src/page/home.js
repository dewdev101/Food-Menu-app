import Nav from "../Component/Nav";
import CartPopUp from "../Component/CartPopUp";
import ListMenu from "../Component/ListMenu";
import { useState, useEffect } from "react";
import SlideImg from "../Component/SlideImg";
import axios from "axios";
// import supabase from "../config/supabaseConfig"

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tableId, setTableId] = useState();

  useEffect(() => {
    const a = axios({
      method: "post",
      url: "http://localhost:5000/myKitchen/getMenu",
    }).then((res) => {
      setMenu(res.data);
      console.log("res.data>>>>", res.data);
      // console.log(
      //   "catgory",
      //   res.data?.map((r) => r.categoryName)
      // );
      setCategories([...new Set(res.data?.map((r) => r.categoryName))]);
    });
  }, []);

  const updateCart = ({ cart, quantity, id, name, price, sign }) => {
    // console.log(
    //   `update Cart : ${cart}, Quantity:${quantity}, Id:${id}, Name:${name}, Price:${price}`
    // );
    const tempCart = [...cart]; //copy array
    const index = cart?.findIndex((r) => r.id === id);

    if (index !== -1) {
      tempCart[index].quantity += quantity + sign;
    } else {
      tempCart.push({ id, name, quantity, price });
    }
    const filterQuantity0 = tempCart.filter((r) => r.quantity > 0);
    console.log("-----------", filterQuantity0);
    setCart(filterQuantity0);
  };
  console.log("cart", cart);

  const CreateOrder = (cart, tableId) => {
    console.log("cart in Confirm", cart);
    const confirmData = cart.map((r) => ({
      menuId: r.id,
      price: r.price,
      quantity: r.quantity,
      totalPrice: r.price * r.quantity,
    }));
    console.log("confirmData", confirmData);
    const _preparedData = { tableId: Number(tableId), items: confirmData };
    console.log("_preparedData", _preparedData);
    axios({
      method: "POST",
      url: "http://localhost:5000/dewKitchne/createOrder",
      data: _preparedData,
    }).then((response) => {
      console.log("createOrder response.data:", response.data);
      setCart([]);
    });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-slate-200 to-slate-100  w-screen">
        <div>
          <Nav toggle={toggle} setToggle={setToggle} />
        </div>
        <SlideImg />
        <div className="text-center text-2xl font-bold font-kanit my-2 bg-slate-50">
          รายการอาหาร
        </div>
        <div className="w-full md:grid grid-cols-3 md:mr-[100px] md:text-center ">
          <ListMenu
            categories={categories}
            updateCart={updateCart}
            menu={menu}
            setMenu={setMenu}
            setToggle={setToggle}
            toggle={toggle}
            cart={cart}
            setCart={setCart}
          />
        </div>
        <div>
          <div>
            {toggle && (
              <CartPopUp
                menu={menu}
                setMenu={setMenu}
                toggle={toggle}
                setToggle={setToggle}
                setCart={setCart}
                cart={cart}
                updateCart={updateCart}
                tableId={tableId}
                setTableId={setTableId}
                CreateOrder={CreateOrder}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
