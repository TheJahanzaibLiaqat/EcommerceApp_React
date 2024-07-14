const NewsLetter = () => {
  return (
    <div className="bg-yellow-300 py-20 lg:flex justify-around">
      <div>
        <div className="text-2xl text-center lg:text-start md:text-4xl font-bold text-white">
          Want to Learn Latest IT Skills?
        </div>
        <div className="text-white text-center lg:text-start mt-3">
          Sign up to our news letter and stay upto date
        </div>
      </div>

      <div className="pt-10 lg:pt-0">
        <div>
          <input type="text" placeholder="Enter Email" className=" w-[60vw] ms-[78px] lg:ms-0 lg:w-[20vw] lg:h-[5vh] p-2 rounded-md me-4" />
          <button className="bg-black text-white block md:inline  mx-auto md:mx-0 p-2 px-9 mt-4 md:mt-0 hover:px-10 rounded-md shadow-black shadow-sm duration-100">
            Notify Me
          </button>
        </div>
        <div className="mt-7 lg:mt-4 text-white mx-auto lg:mx-0 lg:text-start text-center w-[85vw] md:w-[50vw] lg:w-[28vw]">
          We care about the protection of your data. Read our
          <span className="text-blue-700"> Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
