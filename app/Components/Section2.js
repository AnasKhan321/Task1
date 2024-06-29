import { FaPeopleGroup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoBasketSharp } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
export default function Section2(){

    return(
        <div className="xl:w-[85%] w-[95%] mx-auto mt-10  justify-between  xl:space-y-5 space-y-10  flex flex-wrap "> 
            
                <div  className="item  border  rounded-lg  cursor-pointer   border-purple-900  flex flex-col justify-center xl:items-start items-center    w-[90%]  xl:w-[45%] p-6 space-y-10  " > 
                    
                    
                    <div className="flex  space-x-5 items-center  " >
                        <FaPeopleGroup className="w-[32px] h-[32px] text-purple-800 " /> 
                        <h2 className="text-3xl font-bold ">People </h2>

                    </div>

                    <div>



                    Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                    </div>
                    
                    <div>

                        <button className="text-purple-800 border-purple-900 border-2 px-4 py-1 rounded-lg ">
                            Connect
                        </button>

                    </div>
                    
                </div> 


 
                <div  className="item  border-green-900  rounded-lg cursor-pointer   flex flex-col justify-center xl:items-start items-center        w-[90%]  xl:w-[45%]  border  p-6 space-y-5 " > 
                    
                    
                    <div className="flex  space-x-5 items-center  " >
                        <FaLocationDot className="w-[32px] h-[32px] text-green-800 " /> 
                        <h2 className="text-3xl font-bold ">Place </h2>

                    </div>

                    <div>



                    Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
                    </div>
                    
                    <div>

                        <button className="text-purple-800  border-purple-900 border-2 px-4 py-1 rounded-lg ">
                            Meet Up
                        </button>

                    </div>
                    
                </div> 




                <div  className="item mt-5 border-red-900  cursor-pointer   rounded-lg  w-[90%]   flex flex-col justify-center xl:items-start items-center   xl:w-[45%]  border  p-6 space-y-5 " > 
                    
                    
                    <div className="flex  space-x-5 items-center  " >
                        <IoBasketSharp className="w-[32px] h-[32px] text-red-800 " /> 
                        <h2 className="text-3xl font-bold ">Product  </h2>

                    </div>

                    <div>



                    Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
                    </div>
                    
                    <div>

                        <button className="text-purple-800 border-purple-900 border-2 px-4 py-1 rounded-lg ">
                            Get it 
                        </button>

                    </div>
                    
                </div> 




                <div  className="item  w-[90%] border-blue-900  rounded-lg  flex flex-col justify-center xl:items-start items-center    cursor-pointer  xl:w-[45%]  mt-5  border  p-6 space-y-5 " > 
                    
                    
                    <div className="flex  space-x-5 items-center  " >
                        <FaCalendarCheck className="w-[32px] h-[32px] text-blue-800 " /> 
                        <h2 className="text-3xl font-bold ">Program </h2>

                    </div>

                    <div>



                    Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
                    </div>
                    
                    <div>

                        <button className="text-purple-800 border-purple-900 border-2 px-4 py-1 rounded-lg ">
                            Attend
                        </button>

                    </div>
                    
                </div> 

            
            
            
             </div> 
    )
}