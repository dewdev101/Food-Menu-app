import Nav from "../Component/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import MakePayment from "../Component/MakePayment";

const CheckBillMain = () => {
  const [bill, setBill] = useState([]);
  const [tableId, setTableId] = useState(0);
  const [toggleCheckBill, setToggleCheckBill] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fetch, setFetch] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const tableNumber = [...Array(16).keys()].filter((r) => r > 0);
  //fetch
  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:5000/myKitchen/getOrders",
    }).then((response) => {
      console.log("response.data", response.data);
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
        console.log("bill response", response.data);
        setBill(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("bill>>>", bill);

  const calculateBill = () => {
    const _result = bill
      .map((r) =>
        r.items.map((r) => r.totalPrice).reduce((acc, r) => acc + r, 0)
      )
      .reduce((acc, r) => acc + r, 0);
    console.log("result.......", _result);

    return setTotalPrice(_result);
  };

  return (
    <>
      <div className="font-kanit bg-slate-200 h-screen">
        <div>
          <Nav setToggleCheckBill={setToggleCheckBill} />
        </div>
        <div className="text-2xl text-center pt-[70px] p-2 ">
          <div className="text-2xl text-center font-bold">เลือกโต๊ะที่นั่ง</div>
          <div className="grid grid-cols-5  mx-auto mt-5 gap-4 font-bold">
            {tableNumber?.map((r) => (
              <button
                className="p-4 bg-[#FFAB09]  rounded-lg "
                onClick={() => {
                  CheckBillByTableId(r);
                  setTableId(r);
                  setToggleCheckBill("checkBill");
                  calculateBill();
                  setFetch(!fetch);
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        {toggleCheckBill === "checkBill" && bill.length > 0 && (
          <div className="p-4 relative  ">
            <div className="flex flex-row">
              <div className="w-[80%]">
                โต๊ะ {tableId} ยอดรวม{" "}
                <span className="font-bold text-xl bg-[#FFF1D2] px-1 rounded-lg">
                  {totalPrice}
                </span>{" "}
                บาท
              </div>
              <div>
                <button
                  className="bg-[#FFF1D2] p-2 text-center my-auto rounded-lg"
                  onClick={() => setPaymentToggle(true)}
                >
                  เช็คบิล
                </button>
              </div>
            </div>

            <div className="mt-2">
              <div className="my-1">
                หมายเลขคำสั่งซื้อ{" "}
                {bill.map((r) => (
                
                  <span className="bg-[#FFF1D2] px-2 rounded-lg font-bold w-[50px]">
                  #{r.id} 
                  </span>
                 
                ))
                }<span className={`font-bold px-1 rounded-lg mx-2 ${bill[0].status === "PENDING" ? "bg-[#FFCE6E]" : "bg-teal-200"} `}>{bill[0].status}</span>
              </div>

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
          </div>
        )}
        {paymentToggle && (
          <div className="flex top-0 right-0 min-h-screen w-screen  backdrop-blur-sm absolute">
            <div className=" my-auto mx-auto ">
              {" "}
              <MakePayment setPaymentToggle={setPaymentToggle} />{" "}
            </div>
          </div>
        )}
        {/* <div className="flex top-0 right-0 min-h-screen w-screen  backdrop-blur-sm absolute">
          <div className=" my-auto mx-auto ">
            {" "}
            <MakePayment />{" "}
          </div>
        </div> */}
      </div>
    </>
  );
};
export default CheckBillMain;
