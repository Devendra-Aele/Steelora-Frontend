import { weServe } from "@/public/assets/home"
import Image from "next/image"


export const WeServe=()=>{
  const weServeAsset=[
    weServe.oilAndGas,
    weServe.foodAndDairy,
    weServe.petrochemical,
    weServe.pulpAndPaper,
    weServe.portAndInfra,
    weServe.buildingConstruction
  ]
    return(
        <div className="section-y-padding section-x-padding ">
            <h4>Industry We Serve</h4>
            <div className="mt-3">

            <p className="para text-center mb-8">
            Steelora is the newest entrant in the luxury market backbone by the pioneer of stainless steel production. With adopting experience, in parting skills and manufacturing excellence- these describe Steelora and its existence best. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-6 xl:gap-y-3 lg:gap-y-4 gap-x-2 md:gap-x-6 lg:gap-x-8 w-[50%] lg:w-[60%] xl:w-[80%] 
         xl:gap-x-12 
        m-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   w-[50%] lg:w-[60%] xl:w-[80%]  xl:gap-3
        m-auto border-red-500 bg-white justify-center"> */}
            {weServeAsset.map((item,index)=>{
                return(
                    <div key={index} className=" w-[100%] flex items-center justify-center">
                         <Image
                           src={item}
                           alt="image"
                        //    width={500}
                           />
                   
                    </div>
                )
                
            })}
             
        </div>
        </div>
        
        </div>
    )
}