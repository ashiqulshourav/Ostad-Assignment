export default function AddList({taskList, onRemove}){

    // pass index number to remove item
    const handleRemoveTask = (index)=>{
        onRemove(index);
    }
    return (
        <>
            <div className="list">
                <div className="list-inner py-8">
                    <div className="list-header bg-slate-400 p-2 rounded text-white font-medium flex justify-between items-center mb-4">
                        <span className="list-number w-[30px] text-right">Sl.</span>
                        <span className="item-name w-full max-w-[calc(100%-180px)] pl-5">Name</span>
                        <span className="action w-[150px] text-center">Action</span>                        
                    </div>
                    <ul className="list-body p-2 py-6 border rounded">
                         {taskList.map((task, index) =>{
                            return <li key={index} className={`flex justify-between items-center ${index === taskList.length - 1 ? "" : "pb-6"}`}>
                            <span className="list-number w-[30px] text-right">{index + 1}</span>
                            <span className="item-name w-full max-w-[calc(100%-180px)] pl-5">{task}</span>
                            <button className="relative w-[150px] inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-red-500  hover:text-white transition" onClick={handleRemoveTask}>
                                <span className="relative w-full px-8 py-1.5 transition bg-white rounded group-hover:bg-opacity-0">
                                    Delete
                                </span>
                            </button>   
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}