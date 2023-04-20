const ListMenu = (props) => {
  // console.log("props",props);
  const { categories, updateCart, menu, setToggle, cart } = props;
  const data = categories.map((category) => {
    return menu.filter((s) => s.categoryName === category);
  });
  console.log("ListMenu", data);
  // console.log("menu", menu);
  console.log("categories", categories);
  return (
    <>
      {" "}
      {data.map((r, idx) =>
        r.map((s, idx) => (
          <div className="flex bg-transparant p-2  space-x-2 mx-5 ">
            <div className="flex flex-col border-b-2 border-slate-300 pb-2">
              <div className="text-xl font-kanit font-bold pb-4 pl-2 ">
                <span
                  className={
                    idx === 0 ? "bg-[#FFAB09] px-2 rounded-lg" : "opacity-0"
                  }
                >
                  {idx === 0 ? `เมนู${s.categoryName}` : []}
                </span>
              </div>
              <div className="BigBox flex flex-row w-full gap-2  md:p-1  md:mx-auto md:pl-[60px] ">
                <div className=" FoodImage bg-slate-300 ">
                  <img
                    className="w-[100px] aspect-[4/3] object-cover   rounded-lg "
                    src={s.image}
                    alt="Sishuka"
                  />
                </div>
                <div className=" flex flex-row">
                  <div>
                    <div className="flex flex-col px-2 w-[150px] font-kanit my-auto py-2">
                      <div className=" float-left  ">{s.name}</div>
                      <div className="font-bold ">{s.price} บาท</div>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer font-bold font-kanit bg-[#FF9908] w-[80px] my-auto p-3 rounded-lg text-center hover:bg-[#FFAB09] shadow-lg shadow-bg-[#FE7605]"
                    onClick={() => {
                      updateCart({
                        quantity: 1,
                        cart: cart,
                        id: s.id,
                        name: s.name,
                        price: s.price,
                        sign: 0,
                      });
                      setToggle(true);
                    }}
                  >
                    เพิ่ม
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default ListMenu;
