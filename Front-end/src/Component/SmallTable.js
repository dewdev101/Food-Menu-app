import { useState, useEffect } from "react";


const SmallTable = (  { table, setTableId } ) => {


  return table.map((r) => (
    <div  className="bg-red-400 rounded-lg w-[50px] h-[50px] md:w-[100px] md:h-[100px] self-center flex items-center pl-4 hover:bg-teal-300 md:text-2xl md:pl-10 md:ml-12"
          onClick={()=>setTableId(r)} >
          {r}
    </div>
    )
  );
  
  
    };

export default SmallTable;
