import { LuPlus } from "react-icons/lu";
export default function Section3() {
    

    return(

        <div className="bg-slate-100 " >
        <div className="xl:w-[85%]  w-[95%] mx-auto  mt-16 xl:p-8  p-3 " > 
            
              <div  className="item w-full  border   bg-white  p-6 space-y-5 " > 
                    
                    
                <div className="flex  space-x-5 items-center  " >
                    <LuPlus className="w-[32px] h-[32px] text-white bg-blue-500 rounded-full " /> 
                    <h2 className="text-3xl font-bold ">Add your own </h2>

                </div>

                <div>



                Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
                </div>
                
                <div>

                    <button className="text-purple-800  w-full   transition-all   xl:w-auto   hover:bg-purple-800 hover:text-white  border-purple-900 border-2 px-4 py-1 rounded-lg ">
                        Add new
                    </button>

                </div>
                
            </div>  
    
    
    </div> 
    </div>
    )

}