import Nav from "../Component/Nav";
import axios from "axios";
import { useState, useEffect } from "react";

const CheckBillMain = () => {
  const [bill, setBill] = useState([]);
  const [tableId, setTableId] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const tableNumber = [...Array(16).keys()].filter((r) => r > 0);
  //fetch
  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:5000/dewKitchen/getOrders",
    }).then((response) => {
      console.log("response.data", response.data);
      setBill(response.data);
    });
  }, []);

  //Choose table
  const CheckBillByTableId = (tableId) => {
    console.log("tableId", tableId);
    const preparedData = JSON.stringify({ tableId: tableId });
    console.log("preparedData", preparedData);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/myKitchen/getOrderByTableId",
      headers: {
        "Content-Type": "application/json",
      },
      data: preparedData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("respon555", response.data);
        console.log(JSON.stringify(response.data));
        setBill(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("Bill>>>", bill);

  const calculateBill = () => {
    const _result = bill[0].items.reduce((acc, r) => acc + r.totalPrice, 0);
    console.log("_result", _result);

    return setTotalPrice(_result);
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="font-kanit bg-slate-200 h-screen">
        <div className="">[]</div>
        <div className="text-2xl text-center mt-7   p-2">
          <div className="text-2xl text-center font-bold">เลือกโต๊ะที่นั่ง</div>
          <div className="grid grid-cols-5  mx-auto mt-5 gap-4 font-bold">
            {tableNumber?.map((r) => (
              <button
                className="p-4 bg-[#FFAB09]  rounded-lg "
                onClick={() => {
                  CheckBillByTableId(r);
                  setTableId(r);
                  setToggle(true);
                  calculateBill();
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-row">
            <div className="w-[80%]">
              โต๊ะ {tableId} ยอดรวม{" "}
              <span className="font-bold text-xl bg-[#FFF1D2] px-1 rounded-lg">
                {totalPrice}
              </span>{" "}
              บาท
            </div>
            <div>
              <button className="bg-[#FFF1D2] p-2 text-center my-auto rounded-lg">
                เช็คบิล
              </button>
            </div>
          </div>
          {toggle && (
            <div>
              <div>หมายเลขคำสั่งซื้อ #160001</div>

              {bill.map((r) =>
                r.items.map((r) => {
                  return (
                    <>
                      <div className="flex bg-red-50 ">
                        <div className="p-2 w-2/3">{r.menu.name}</div>
                        <div className="flex px-2">
                          <div>{r.menu.price}</div>
                          <div className="px-2">x{r.quantity}</div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}

              <div className="text-right font-bold">รวม {totalPrice} บาท</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CheckBillMain;
