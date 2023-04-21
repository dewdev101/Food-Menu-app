import { CircularProgress } from "@mui/material";

const MakePayment = ({ setPaymentToggle, updateBill, tableId, setLoading }) => {
  return (
    <>
      <div className="  ">
        <div className="bg-white p-4 rounded-lg font-kanit">
          <div className="text-xl">ยืนยันการชำระเงิน</div>
          <div className=" p-2 flex justify-center space-x-2">
            <div
              className="bg-[#FFCE6E] px-2 py-1 rounded-lg cursor-pointer"
              onClick={() => {
                updateBill(tableId);
                setLoading(true);
                setPaymentToggle(false);
              }}
            >
              ยืนยัน
            </div>
            <div
              className="bg-[#FFF1D2] px-2 py-1 rounded-lg cursor-pointer"
              onClick={() => setPaymentToggle(false)}
            >
              ปฏิเสธ
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MakePayment;
