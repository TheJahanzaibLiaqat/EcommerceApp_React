import { IoIosPeople } from "react-icons/io";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdOutlineNaturePeople } from "react-icons/md";

const Product = () => {
  return (
    <div className="pt-28">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 space-y-24 md:space-y-0 mx-16 text-center">
        <div className="h-[60vh] md:h-[60vh] md:mb-20 lg:h-[60vh] shadow-2xl rounded-lg relative cursor-pointer hover:scale-105 duration-500">
          <IoIosPeople className="text-[120px] absolute left-[28%] lg:left-[35%] md:left-[35%] -top-14" />
          <div className="mt-14 text-xl font-bold">Web Development</div>
          <div className="text-3xl mt-9 font-bold">$149</div>
          <div className="mt-9">
            Lorem ipsum dolor sit
            <hr className="w-[60vw] md:w-[30vw] lg:w-[23vw] mx-auto mt-2" />
          </div>
          <div className="mt-2 w-[60vw] md:w-[30vw] lg:w-[25vw] mx-auto">
            Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur
            <hr className="w-[60vw] md:w-[30vw]  lg:w-[23vw] mx-auto mt-2" />
          </div>
          <div className="mt-2">
            Lorem ipsum dolor sit ipsum dolor
            <hr className="w-[60vw] md:w-[30vw]  lg:w-[23vw] mx-auto mt-2" />
          </div>

          <button className="bg-yellow-300 text-white p-2 px-5 rounded-md mt-7 ">Start Trial</button>
        </div>






        <div className="h-[60vh] md:h-[60vh] md:mb-20 lg:h-[60vh] bg-yellow-100 shadow-2xl rounded-lg relative cursor-pointer hover:scale-105 duration-500">
          <FaPeopleCarryBox className="text-[100px] absolute left-[32%] lg:left-[38%] md:left-[35%]  -top-14" />
          <div className="mt-14 text-xl font-bold">App Development</div>
          <div className="text-3xl mt-9 font-bold">$149</div>
          <div className="mt-9">
            Lorem ipsum dolor sit
            <hr className="w-[60vw] md:w-[30vw] lg:w-[23vw] mx-auto mt-2" />
          </div>
          <div className="mt-2 w-[60vw] md:w-[30vw] lg:w-[25vw] mx-auto">
            Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur
            <hr className="w-[60vw] md:w-[30vw]  lg:w-[23vw] mx-auto mt-2" />
          </div>
          <div className="mt-2">
            Lorem ipsum dolor sit ipsum dolor
            <hr className="w-[60vw] md:w-[30vw]  lg:w-[23vw] mx-auto mt-2" />
          </div>

          <button className="bg-black text-white p-2 px-5 rounded-md mt-7 ">Start Trial</button>
        </div>




        <div className="h-[60vh] md:h-[60vh] md:mb-20 lg:h-[60vh] shadow-2xl rounded-lg relative cursor-pointer hover:scale-105 duration-500">
          <MdOutlineNaturePeople className="text-[100px] absolute left-[32%] lg:left-[38%] md:left-[35%]  -top-14" />
          <div className="mt-14 text-xl font-bold">Digital Marketing</div>
          <div className="text-3xl mt-9 font-bold">$149</div>
          <div className="mt-9">
            Lorem ipsum dolor sit
            <hr className="w-[60vw] md:w-[30vw] lg:w-[23vw] mx-auto mt-2" />
          </div>
          <div className="mt-2 w-[60vw] md:w-[30vw] lg:w-[25vw] mx-auto">
            Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur
            <hr className="w-[60vw] md:w-[30vw]  lg:w-[23vw] mx-auto mt-2" />
          </div>
          <div className="mt-2">
            Lorem ipsum dolor sit ipsum dolor
            <hr className="w-[60vw] md:w-[30vw]  lg:w-[23vw] mx-auto mt-2" />
          </div>

          <button className="bg-yellow-300 text-white p-2 px-5 rounded-md mt-7 ">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
