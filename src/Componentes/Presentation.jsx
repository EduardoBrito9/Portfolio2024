import React from "react";

const Presentation = () => {
  return (
    <div className=" min-h-[60vh] flex flex-col-reverse lg:flex-row  gap-20 lg:gap-0 items-center justify-between">
      <div className=" space-y-10 text-center lg:text-left">
        <h1 className=" text-4xl lg:text-7xl font-bold">
          Nice to meet you!👋 <br />
          <span className=" underline underline-offset-8  decoration-green-500">
            {" "}
            I'm Eduardo.
          </span>
        </h1>
        <p className=" md:w-96 text-lg text-gray-300">
          Based in Brazil, I'm a web developer passionate about building a
          modern web application that users love.
        </p>

        <a
          className=" inline-block text-3xl font-bold hover:text-green-400 transition"
          href="mailto:eduardobritodev@gmail.com"
        >
          Contact Me 📭
          <div className=" w-40 h-2 bg-green-500 rounded-full"></div>
          <div className=" w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        </a>
      </div>
      <div>
        <div className=" h-72 w-72 space-y-3 -rotate-[30deg] relative">
          <div className=" flex gap-3 translate-x-8">
            <div className=" h-32 w-32 bg-green-500 rounded-2xl"></div>
            <div className=" h-32 w-32 bg-indigo-500 rounded-full"></div>
          </div>
          <div className=" flex gap-3 -translate-x-8">
            <div className=" h-32 w-32 bg-indigo-500 rounded-2xl"></div>
            <div className=" h-32 w-32 bg-green-500 rounded-full"></div>
          </div>
          <div className=" glow absolute top-[40%] right-[60%] -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
