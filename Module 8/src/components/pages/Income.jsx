import { useEffect, useState } from "react";

const Income = () => {
  const [taskName, setTaskName] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const [incomeList, setIncomeList] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  //   add button click
  const addIncome = () => {
    if (taskName.trim() !== "" && parseFloat(taskValue)) {
      const newIncome = {
        name: taskName.trim(),
        amount: parseInt(taskValue),
      };
      setIncomeList([...incomeList, newIncome]);
      setTaskName("");
      setTaskValue("");
    }
  };

  //   Total Income
  useEffect(() => {
    const newTotalIncome = incomeList.reduce(
      (total, income) => total + income.amount,
      0
    );
    setTotalIncome(newTotalIncome);
  }, [incomeList]);

  // Delete item
  const deleteIncome = (index) => {
    const updatedList = incomeList.filter((item, i) => i !== index);
    setIncomeList(updatedList);
  };

  return (
    <>
      <div className="container-fluid px-4 py-5">
        <div className="container mx-auto">
          <div className="main-content">
            <div className="main-content-inner">
              <div className="content-header flex justify-between w-full">
                <input
                  type="text"
                  placeholder="Enter you Income name"
                  className="border rounded px-2 py-1 text-lg w-[60%]"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="amount"
                  className="border rounded px-2 py-1 text-lg w-[20%]"
                  value={taskValue}
                  onChange={(e) => setTaskValue(e.target.value)}
                />
                <input
                  type="submit"
                  value="Add"
                  onClick={addIncome}
                  className="bg-blue-500 px-5 py-1 rounded text-white hover:bg-blue-600 transition cursor-pointer w-[80px]"
                />
              </div>
              <div className="content-body border rounded-t-md mt-5">
                <div className="content-body-inner p-2">
                  <div className="content-row flex items-center justify-between border-b pb-2">
                    <div className="item-name w-[50%]">
                      <strong>Task Name</strong>
                    </div>
                    <div className="item-value w-[150px] text-center">
                      <strong>Price</strong>
                    </div>
                    <button className="bg-red-500 px-5 py-1 rounded text-white hover:bg-red-600 transition cursor-pointer opacity-0">
                      Delete
                    </button>
                  </div>
                  {}
                  {incomeList.map((income, index) => {
                    return (
                      <div
                        key={index}
                        className="content-row flex items-center justify-between py-2"
                      >
                        <div className="item-name w-[50%]">{income.name}</div>
                        <div className="item-value w-[150px] text-center">
                          <strong>${income.amount}</strong>
                        </div>
                        <button
                          className="bg-red-500 px-5 py-1 rounded text-white hover:bg-red-600 transition cursor-pointer"
                          onClick={() => deleteIncome(index)}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="content-footer p-2 border border-t-0 rounded-b-md">
                <div className="total text-right">
                  Total Income <strong>${totalIncome}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Income;
