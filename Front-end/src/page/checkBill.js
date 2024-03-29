import Nav from "../Component/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import React from "react";
import MakePayment from "../Component/MakePayment";
import { Link } from "react-router-dom";

const CheckBillMain = () => {
  const [bill, setBill] = useState([]);
  const [tableId, setTableId] = useState(0);
  const [toggleCheckBill, setToggleCheckBill] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fetch, setFetch] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

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
        const _bill = response.data.filter(r=>r.status === "PENDING")
        console.log("bill filter",_bill)
        setBill(_bill);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("bill>>>", bill);

  useEffect(() => {
    calculateBill();
    const intervalId = setInterval(() => {
      console.log("Interval is running");
      setLoading(true);
    }, 0);

    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Interval has been stopped");
      setLoading(false);
    }, 3000);
  }, [bill]);

  const calculateBill = () => {
    setTotalPrice([]);
    const _result = bill
      .map((r) =>
        r.items.map((r) => r.totalPrice).reduce((acc, r) => acc + r, 0)
      )
      .reduce((acc, r) => acc + r, 0);
    console.log("result.......", _result);
    const finalResult = setTotalPrice(_result);

    return finalResult;
  };

  const updateBill = (tableId) => {
    const _data = JSON.stringify({
      tableId: tableId,
      status: "ชำระเงินเรียบร้อย",
    });
    setLoading(true);
    const config = {
      method: "post",
      url: "http://localhost:5000/myKitchen/updateOrdersHandler",
      headers: {
        "Content-Type": "application/json",
      },
      data: _data,
    };
    axios
      .request(config)
      .then((res) => {
        delay();
        console.log("res.data updateBill:", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const delay = () => {
    const intervalId = setInterval(() => {
      console.log("Interval is running");
      setLoading(false);
    }, 3000);

    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Interval has been stopped");
      setIsDone(true);
    }, 3000);
  };

  return (
    <>
      <div className="font-kanit bg-slate-200 h-screen w-screen  ">
        <div>
          <Nav />
        </div>
        <div className="text-2xl text-center mt-2 p-2 ">
          <div className="text-2xl text-center font-bold">เลือกโต๊ะที่นั่ง</div>
          <div className="grid grid-cols-5  mx-auto mt-5 gap-4 font-bold p-2">
            {tableNumber?.map((r) => (
              <button
                className="p-4 bg-[#FFAB09]  rounded-lg "
                onClick={() => {
                  CheckBillByTableId(r);
                  setTableId(r);
                  setToggleCheckBill("checkBill");
                  setFetch(!fetch);
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {toggleCheckBill === "checkBill" &&
          bill.length > 0 &&
          !loading &&
          bill[0].status !== "ชำระเงินเรียบร้อย" && (
            <div className="p-4 relative bg-slate-200 duration-500">
              <div className="flex flex-row">
                <div className="w-[80%] md:w-[90%]">
                  โต๊ะ{" "}
                  <span className="bg-[#FFF1D2] px-1 rounded-lg">
                    {tableId}
                  </span>{" "}
                  ยอดรวม{" "}
                  <span className=" text- bg-[#FFF1D2] px-1 rounded-lg">
                    {totalPrice}
                  </span>{" "}
                  บาท
                </div>
                <div className="">
                  <button
                    className="bg-[#FFF1D2] p-2 text-center my-auto rounded-lg md:w-[200px] md:mr-5 "
                    onClick={() => {
                      setPaymentToggle(true);
                    }}
                  >
                    เช็คบิล
                  </button>
                </div>
              </div>

              <div className="mt-2 w-screen">
                <div className="my-2 ">
                  หมายเลขคำสั่งซื้อ{" "}
                  <div className="grid grid-cols-5 mx-4 gap-1">
                    {bill.map((r) => (
                      <div className="bg-[#FFF1D2] px-2 rounded-lg w-[50px]">
                        #{r.id}
                      </div>
                    ))}
                  </div>
                  <div className="my-1">
                    สถานะ
                    <span
                      className={` px-1 rounded-lg mx-2   ${
                        bill[0].status === "PENDING"
                          ? "bg-[#FFCE6E]"
                          : "bg-teal-200"
                      } `}
                    >
                      {bill[0].status}
                    </span>
                  </div>
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

                <div className="text-right font-bold mr-8 md:mr-[100px]">
                  รวม {totalPrice} บาท
                </div>
              </div>
            </div>
          )}

        {toggleCheckBill === "checkBill" &&
          (bill.length === 0 || bill[0].status === "ชำระเงินเรียบร้อย") && (
            <>
              <div
                className={`${loading === false ? "opacity-100" : "opacity-0"}`}
              >
                <div className="duration-500 mt-10">
                  <img src="sorry.png" />
                </div>
                <div className="text-center text-xl">ไม่มีรายการอาหาร</div>
              </div>
            </>
          )}

        {paymentToggle && (
          <div className="flex top-0 right-0 min-h-screen w-screen  backdrop-blur-sm absolute">
            <div className=" my-auto mx-auto ">
              {" "}
              <MakePayment
                setPaymentToggle={setPaymentToggle}
                updateBill={updateBill}
                tableId={tableId}
                setLoading={setLoading}
              />{" "}
            </div>
          </div>
        )}

        {loading && (
          <div className="flex top-0 right-0 min-h-screen w-screen  backdrop-blur-sm absolute duration-500">
            <div className="flex flex-col my-auto mx-auto bg-white w-1/2 h-[100px] rounded-lg">
              {" "}
              <div className="mx-auto my-auto">
                <CircularProgress disableShrink className="mx-auto my-auto" />{" "}
              </div>
              <div className="text-center text-slate-500 pb-2">
                {" "}
                กำลังดำเนินการ...
              </div>
            </div>
          </div>
        )}
        {isDone && (
          <div className="flex top-0 right-0 min-h-screen w-screen  backdrop-blur-sm absolute duration-500">
            <div className="flex flex-col my-auto mx-auto bg-white w-2/4 h-[100px] rounded-lg text-center text-slate-500 p-2">
              <div className="">การชำระเงินสำเร็จ</div>
              <div>ขอบคุณครับ</div>
              <button
                className="bg-[#FFCE6E]  py-1 mx-3 rounded-lg"
                onClick={() => []}
              >
                <Link to="/"> กลับสู่หน้าหลัก </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CheckBillMain;
