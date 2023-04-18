import Nav from "../Component/Nav";
import SmallTable from "../Component/SmallTable";
import { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const my_list = [...Array(15).keys()].map((i) => i + 1);
  const [tableId, setTableId] = useState(0);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const data = JSON.stringify({
      table_id: 5,
    });
    const config = {
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setOrder(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [tableId]);

  return (
    <>
      <div className=" flex flex-col static ">
        <div>
          <Nav />
        </div>
        <div className="absolute  mt-2">
    
        </div>
        <div className="text-center font-bold text-3xl mt-12  pt-5">
          รายการสั่งอาหาร
        </div>
        <div className="p-5">กดเลือกโต๊ะ</div>
        <div className="pl-4">โต๊ะที่เลือก: {tableId} </div>
        <div className="grid grid-cols-5 gap-2 content-around pl-4">
          <SmallTable table={my_list} setTableId={setTableId} />
        </div>
        <div className="p-4">
          จำนวนคำสั่งซื้อ:{order.length}
          {order.map((r) => {
            return (
              <>
                <div className="border-2 border-green-500 my-2">
                  <p> หมายเลขคำสั่งซื้อ#{r.order_id} </p>
                  <p> โต๊ะ:{r.table_id} </p>
                  <p> สถานะ:{r.status} </p>
                  <p>
                    {r.items.map((s) => {
                      return (
                        <>
                          <div className="bg-red-200 flex flex-cols flex justify-between pr-2">
                            <div>{s.name}</div>
                            <div>
                              ${s.price} x {s.quantity}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </p>
                  <div className="text-right pr-2"> รวม${r.total_price} </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Table;
