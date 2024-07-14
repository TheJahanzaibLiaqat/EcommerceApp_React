import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div>
      <div className="bg-yellow-300 h-[90vh] text-center py-[200px]  font-bold">
        <div className="text-xl md:text-2xl mt-3">Learn with Us</div>
        <div className="text-5xl md:text-6xl text-white mt-3">Grow with us</div>
        <div className="text-3xl md:text-4xl mt-3">Learn
        <ReactTyped className="pl-3"
      strings={[
        "Web Development",
        "Digital Marketing",
        "Ethical Hacking",
      ]}
      typeSpeed={100}
      backSpeed={50}
     
      loop
    >
      
    </ReactTyped>

        
        </div>
        <button className="bg-black text-white p-3 px-9 mt-10 hover:px-10 shadow-black shadow-lg duration-100">Submit</button>
      </div>
    </div>
  )
}

export default Banner
