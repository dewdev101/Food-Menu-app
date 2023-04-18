import Nav from "../Component/Nav";
import CartPopUp from "../Component/CartPopUp";
import ListMenu from "../Component/ListMenu";
import { useState, useEffect } from "react";
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
      url: "http://localhost:5000/myKitchen/getCategories",
    }).then((res) => {
      setMenu(res.data);
      console.log("res.data>>>>", res.data);
      // console.log(
      //   "catgory",
      //   res.data?.map((r) => r.categoryName)
      // );
      setCategories([...new Set(res.data?.map((r) => r.category))]);
      console.log("unique ", [
        ...new Set(res.data?.map((r) => r.category)),
      ]); // unique menu
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
      url: "http://localhost:5000/dewKitchen/createOrder",
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
        <div className="mx-auto text-center w-screen pt-12 pb-1 Object-cover hidden-overflow rounded-lg">
          <img
            className="p-4  w-[350px] mx-auto rounded-lg shadow-lg"
            alt="Doreamon "
            src="https://lh5.googleusercontent.com/proxy/OOLPeoIKpdepNl7UpQ4zFV2z9HYxVljs9JIUOiuJTsCSe6k40i1yc6NQ26cR2a53JKJ92SS6hPpy3SEtfpo3xwKGh_L4IJASo-6jn38u3OCA6X64aTSXD9d94hmn2auLxVo=w1200-h630-p-k-no-nu"
          />
        </div>
        <div className="">
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
