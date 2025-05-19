import React from "react";

function ShowTopping({ allTop }) {
  return (
    <div
      className="show-topping border rounded-2xl bg-neutral text-white w-96 flex py-4 px-2 mb-2 gap-2 justify-between items-center
    shadow-pink-900"
    >
      <p>{allTop.name}</p>
      <p>${allTop.price.toFixed(2)}</p>
    </div>
  );
}

export default ShowTopping;
