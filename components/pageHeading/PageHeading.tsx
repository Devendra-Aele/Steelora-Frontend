

const PageHeading=({data}:{data:any})=>{
    const pageHeading={
        heading:"Aluminium Railing",
        description:"Railings are essential components in architectural design, providing safety and aesthetic appeal to buildings and structures. Our range of railings includes Aluminium and Stainless Steel options, each offering unique advantages and applications."
    }

    return (
        <div className="bg-dark-grey  py-10 lg:py-14">
          <h1 className="section-heading mb-2">{data.heading}</h1>
          <p className="para !text-center w-[96.102%]  md:w-[88%] lg:w-[70%] xl:w-[60%] mx-auto">
             {data.description}
          </p>
        </div>
    )
}
export default PageHeading