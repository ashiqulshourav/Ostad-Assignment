import { useEffect, useState } from "react";

const Expense = () => {
  const [taskName, setTaskName] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const [expenseList, setExpenseList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  //   add button click
  const addExpense = () => {
    if (taskName.trim() !== "" && parseFloat(taskValue)) {
      const newExpense = {
        name: taskName.trim(),
        amount: parseInt(taskValue),
      };
      setExpenseList([...expenseList, newExpense]);
      setTaskName("");
      setTaskValue("");
    }
  };

  //   Total Expense
  useEffect(() => {
    const newTotalExpense = expenseList.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    setTotalExpense(newTotalExpense);
  }, [expenseList]);

  // Delete item
  const deleteExpense = (index) => {
    const updatedList = expenseList.filter((item, i) => i !== index);
    setExpenseList(updatedList);
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
                  placeholder="Enter you Expense name"
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
                  onClick={addExpense}
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
                  {expenseList.map((expense, index) => {
                    return (
                      <div
                        key={index}
                        className="content-row flex items-center justify-between py-2"
                      >
                        <div className="item-name w-[50%]">{expense.name}</div>
                        <div className="item-value w-[150px] text-center">
                          <strong>${expense.amount}</strong>
                        </div>
                        <button
                          className="bg-red-500 px-5 py-1 rounded text-white hover:bg-red-600 transition cursor-pointer"
                          onClick={() => deleteExpense(index)}
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
                  Total Expense <strong>${totalExpense}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expense;
