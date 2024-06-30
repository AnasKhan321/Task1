"use client"
import Image from "next/image"
import {useState } from "react"
import { FaLock } from "react-icons/fa";
export default function Section1(){

    const [issignin  , setissignin]  = useState(true)



    return(
        <div className="bg-stone-100" > 

           <div className="w-[95%] mx-auto flex pt-10 xl:w-[85%]  flex-col xl:flex-row  ">
               <div className="paragraph xl:w-3/5  w-full p-5 xl:p-0  "> 
                    <h1 className="xl:text-3xl  md:text-2xl text-xl  font-bold  italic  mt-5 " >
                    Explore your <span  className="text-blue-300">hobby</span>  or <span className='text-purple-900'>passion</span>
                    </h1>

                    <p className="tracking-widest leading-9 mt-10 " >
                    Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…

                    </p>

                    <p   className="tracking-widest leading-9 mt-10 " >   
                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                    </p>


                  

                     <img src="/container1.png " alt="" className="w-full mt-16" />

                    
                
                </div> 
                <div className="form xl:w-2/5 w-full mt-10 flex  flex-col xl:p-0 p-10 ">

                        <div className="swithc flex items-center justify-start w-[26rem] mx-auto mb-10 ">
                            <div onClick={()=>{setissignin(true)}} className={`second ml-4  cursor-pointer 
                                ${!issignin? "text-gray-900"  : "text-purple-800 font-bold "}
                                 `}>
                                <div >
                                Sign in 
                                </div>
                                {issignin && 
                                <div className="bg-purple-800 w-full h-[3px] rounded-lg "></div>
                                }
                               
                                
                            </div>
                           

                            <div onClick={()=>{setissignin(false)}} className={`second ml-4  cursor-pointer 
                                ${issignin? "text-gray-900"  : "text-purple-800 font-bold "}
                                 `}>
                                <div> 
                                Join in 
                                    </div> 

                                



                                    {!issignin && 
                                <div className="bg-purple-800 w-full h-[3px] rounded-lg "></div>
                                }
                            </div>
                        </div>

                        <div className="form1 space-y-3 flex flex-col items-center ">
 
                            <img src="/google.png " alt="" className="cursor-pointer " />
                            <img src="/facbook.png" alt=""  className="cursor-pointer"/>


                        </div>

                        <div className="text-center font-bold text-base  md:text-xl mt-10  ">
                        Or connect with 
                        </div>

                        <div>

                            

                <form className="xl:w-[26rem]  w-full  mx-auto">
                <div className="mt-5 ">
                
                    <input type="email" id="email" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full  focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="anascoder4@gmail.com" required />
                </div>
                <div className="mb-2 mt-5">
               
                    <input type="password" placeholder="Password" id="password" className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full  focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                {issignin && 

                <div className="flex justify-between mb-5 items-center" > 
                <div className="flex items-center ">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-bold text-black tracking-wide  " >Remember me</label>
                </div>

                <div className="flex space-x-2 items-center"> 
                    <FaLock className="text-gray-400"/>
                    <div  className="xl:text-base text-sm" >

                        Forgot Password ?
                    </div>
                    
                    </div> 


                </div> 
                
                }

                {issignin && 
                  <button type="submit" className=" transition-all text-white bg-purple-900  xl:text-black  xl:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300  hover:bg-purple-800 hover:text-white  font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center        dark:focus:ring-purple-800 border border-black">Continue</button>
                
                }
                {!issignin && 
                
                    <div className=" mb-2 text-center  " style={{fontSize : "12px"}}>

                By continuing, you agree to our <span className="font-bold " >Terms of Service</span>  and  <span className="font-bold ">  Privacy Policy. </span>
                    </div>
                
                }

                {!issignin && 
                
                <button type="submit" className="text-white transition-all	 hover:bg-transparent hover:text-black  bg-purple-900 text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center        dark:focus:ring-blue-800 border border-black">Agree and Continue</button>
                }
              
                </form>


                        </div>
                </div>
             </div> 

            
        </div> 
    )
}