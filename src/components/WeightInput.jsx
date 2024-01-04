import React, { useState } from "react";

const units = {
  g: { size: 1, name: "gram" },
  kg: { size: 1000, name: "kilogram" },
  lb: { size: 454, name: "pound" },
};

function convert(quantity, targetUnit) {
  const { amount, unit } = quantity;

  const newAmount = (units[unit].size * amount) / units[targetUnit].size;
  const roundedAmount = Number(newAmount.toFixed(2));

  return { amount: roundedAmount, unit: targetUnit };
}

function WeightInput(props) {
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("g");

  const handleChangeUnit = (e) => {
    const targetUnit = e.target.value;
    const result = convert({ amount, unit }, targetUnit);
    setUnit(targetUnit);
    setAmount(result.amount);
  };
  return (
    <>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <select value={unit} onChange={handleChangeUnit}>
        {Object.entries(units).map(([key, unit]) => (
          <option key={key} value={key}>
            {unit.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default WeightInput;
