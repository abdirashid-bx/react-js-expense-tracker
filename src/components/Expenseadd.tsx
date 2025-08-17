import React, { useRef, useState } from 'react'
import { Trash2 } from "lucide-react";
export default function Expenseadd() {
    const ref=useRef(0)
    const id=useRef(0)
    const [desc,setdesc]=useState("");
    const [amount,setamount]=useState("");
    const [task,settastk]=useState([]);
     const handleadd=()=>{
        if(desc.trim() && amount.trim()){
            const update={
                  des: desc,
            amou:amount,
            idtask:++id.current 
            }
            console.log(id)
            settastk(
           [update,...task]
          
        ) 
        setdesc("")
           setamount("")
        }
        const total=parseInt(amount)+ref.current
        ref.current=total
     
        
    
     }

     const handedelete=(id : any,amou)=>{
      const updatetask=task.filter((t) => t.idtask !== id)
       const total=ref.current-parseInt(amou)
        ref.current=total
      settastk(updatetask)
     }
   
  return (
    <div className='flex-1   flex items-center flex-col p-10'>
     <div className='bg-[#ffff] shadow-2xl rounded-2xl  p-5 w-full md:w-2xl gap-6 flex flex-col'>
        <div className='flex flex-col items-center   gap-5'>
          <h1 className='text-gray-500 text-xl  font-bold '>Expense Tracker</h1>
        <p className='text-green-600 font-semibold text-lg'>Balance:${ref.current}</p>
      <input
      value={desc}
      onChange={(t)=>setdesc(t.target.value)}
  type="text"
  placeholder="Description"
  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none   "
/>

<input
 placeholder='0'
       value={amount}
      onChange={(t)=>setamount(t.target.value)}
  type="number"

  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none   "
/>

        <button 
        onClick={handleadd}
        className='bg-green-900 text-white py-2 rounded-md w-full hover:bg-green-800 cursor-pointer
        '>Add expense</button>
        </div>

       <p className='text-center font-semibold text-lg text-gray-800'>Expense List</p>

     <ul className="flex flex-col gap-4 mb-3">
 
     
    {task.map((t,index)=>(
 <li key={index} className='flex justify-between items-center'>
    <p className="font-medium text-base text-gray-800">
        {t?.des}
        </p>

        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold text-gray-700">  ${t?.amou}</p>
          <button 
          onClick={()=> handedelete(t?.idtask,t?.amou)}
          className="p-2 rounded-full hover:bg-red-100 transition">
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        </div>
 </li>
    ))}
     
    </ul>
   

     </div>
    </div>
  )
}
