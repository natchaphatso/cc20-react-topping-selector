import { toppings } from "./database/data.js";
import { useState } from "react";
import ShowTopping from "./ShowTopping.jsx";
console.log(toppings);

function App() {
  //state สำหรับ toppings
  const [toppingsSelected, setToppingsSelected] = useState([]);
  const [isShow, setIsShow] = useState(false);

  //ตัวจับ toggle checkbox
  function hdlToggle(topping) {
    //เช็คถ้า toppings ถูกเลือกแล้ว
    if (toppingsSelected.includes(topping)) {
      setToppingsSelected(
        //ไปหยิบทุกอย่างจากตะกร้า แล้วคัดอันที่ไม่ใช่ตัวที่เลือกใส่ตะกร้าใหม่
        toppingsSelected.filter((topp) => topp !== topping)
      );
    } else {
      //ถ้าไม่ก็ใส่กลับ
      setToppingsSelected([...toppingsSelected, topping]);
    }
  }

  //function ผลรวม
  function allSum() {
    return toppingsSelected
      .reduce((total, topping) => total + topping.price, 0)
      .toFixed(2);
  }

  return (
    <div className="app flex flex-col justify-center items-center h-100%">
      <h1 className="text-3xl font-bold">Select Toppings</h1>
      <div className="main border rounded-2xl w-96 flex flex-col py-4 px-2 my-4 gap-4 items-center">
        {toppings.map((topping) => (
          <div
            key={topping.name}
            className="flex justify-between items-center border rounded-2xl w-full p-2"
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-neutral mr-2"
                checked={toppingsSelected.includes(topping)}
                onChange={() => hdlToggle(topping)}
                disabled={isShow}
              />
              {topping.name}
            </label>
            <span>฿{topping.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="total w-96 font-semibold text-xl flex justify-between pb-4">
        <p>Total</p>
        <p>฿{allSum()}</p>
      </div>
      <button
        className="btn btn-neutral w-96 cursor-pointer"
        onClick={() => setIsShow(true)}
      >
        {isShow ? "Edit Selection" : "Checkout"}
      </button>
      {isShow && (
        <div className="my-4">
          {/* <button
            className="btn btn-neutral w-96 cursor-pointer"
            onClick={() => setIsShow(false)}
          >
            Click to Edit Selection
          </button> */}
          <div>
            {toppingsSelected.map((topping) => (
              <ShowTopping key={topping.name} allTop={topping} />
            ))}
            <div className="flex justify-between font-bold text-2xl pt-4">
              <p>Total</p>
              <p>฿{allSum()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
