import Ai from "../../assets/Ai.png"

const About = () => {
  return (
    <div>
      <div className="md:flex py-20">
        <div className="md:w-[50vw]">
          <img src={Ai} alt="" />
        </div>
        <div className="py-10 md:py-20">
          <div className="uppercase text-center md:text-start font-bold text-yellow-300 text-xl">Learn from Experts</div>
          <div className="w-[70vw] md:w-[40vw] mx-auto md:mx-0 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            officia, aperiam ipsa debitis delectus, rerum error eum eius modi
            perspiciatis doloremque nostrum qui labore ad consequuntur.
            Quibusdam eius hic odit.
          </div>
          <button className="bg-black block text-white mx-auto md:mx-0 p-3 px-9 mt-10 hover:px-10 shadow-black shadow-lg duration-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
