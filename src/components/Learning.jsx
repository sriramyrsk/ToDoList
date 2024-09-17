import React from "react";

const Learning = () => {
  return (
    <>
      <section id="learnings" className="bg-orange-300 px-2 py-5  md:p-5 my-7">
        <h1 className="font-extrabold text-4xl my-3 text-red-600">
          Things I Learnt
        </h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          I was able to understand the basic flow of how react works,I was able
          to understand the need for react over vannila js and understood how
          the web development works like what is server,apis,etc. I learnt the
          following concepts on a vey basic level
        </p>
        <ul className="flex flex-col bg-white py-3 px-2 md:px-5 md:w-fit rounded-lg my-3 font-bold ">
          <li>1.Components</li>
          <li>2.Props</li>
          <li>3.Hooks(useState,useEffect,useNavigate,etc)</li>
          <li>
            4.Server,JSON file, Api , Proxy, Fetch
            methods(GET,POST,DELETE,PATCH,PUT)
          </li>
          <li>5.Using Packages like Toastify and React Icons </li>
          <li>6.Routing and Layouts</li>
          <li>7.Condtitional rendering</li>
          <li>8.TailWind CSS</li>
        </ul>
      </section>
    </>
  );
};

export default Learning;
