import React from "react";
import testProfile1 from "../images/test1.jpeg";
import testProfile2 from "../images/test2.jpg";
import testProfile3 from "../images/test3.jpg";
const Testimonials = () => {
  const dpImgStyle =
    "rounded-full absolute left-1/4 top-[-5rem] left-0 w-32 h-32 border-gray-300 shadow-md mt-4";
  return (
    <section id="testimonials" className="bg-indigo-500 mt-12 md:mt-32 mb-5">
      <h1 className="text-amber-300 font-extrabold text-2xl text-center pt-5">
        Discover our testimonials
      </h1>
      <div className="flex flex-col items-center mt-24">
        <div className="flex flex-col items-center card bg-indigo-100 w-11/12 p-6 relative rounded-lg my-24">
          <div className="profile ">
            <img src={testProfile1} className={dpImgStyle} alt="" />
            <p className="w-[2.5rem] h-[2.5rem]"> </p>
            <p className="font-bold text-2xl text-rose-800	">John</p>
            <p className="text-yellow-700">Software Developer</p>
          </div>
          <div className="comment mt-10">
            <p>
              "I have been using ToDOoList for quite some time now and I must
              say, it has been a game changer for me. As someone who struggles
              with staying organized and on top of tasks, ToDoList has been an
              absolute lifesaver. The interface is user-friendly and easy to
              navigate, making it simple to add and manage tasks. But what truly
              sets To do list apart is its helpfulness. It has all the necessary
              features to keep me on track and ensure that I never miss a
              deadline. Thanks to To do list, I have become more productive and
              efficient in my daily tasks. I highly recommend it to anyone
              looking for a reliable and efficient task management tool. Thank
              you, ToDoList, for making my life so much easier!"
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center card bg-indigo-100 w-11/12 p-6 relative rounded-lg my-24">
          <div className="profile ">
            <img src={testProfile2} className={dpImgStyle} alt="" />
            <p className="w-[2.5rem] h-[2.5rem]"> </p>
            <p className="font-bold text-2xl text-rose-800	">Radha</p>
            <p className="text-yellow-700">Popular Agriculturist</p>
          </div>
          <div className="comment mt-10">
            <p>
              "ToDoList has been an invaluable tool for planning my agricultural
              activities. The ability to create and organize tasks, set
              reminders, and track progress has significantly improved my
              productivity and efficiency. I've been able to better plan my
              planting schedules, monitor crop growth, and manage my resources
              more effectively. Thanks to ToDoList, I've seen a noticeable
              increase in the yield and quality of my crops."{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center card bg-indigo-100 w-11/12 p-6 relative rounded-lg my-24">
          <div className="profile ">
            <img src={testProfile3} className={dpImgStyle} alt="" />
            <p className="w-[2.5rem] h-[2.5rem]"> </p>
            <p className="font-bold text-2xl text-rose-800	">Rohit</p>
            <p className="text-yellow-700">School Student</p>
          </div>
          <div className="comment mt-10">
            <p>
              "ToDoList has been a lifesaver for me as a student. I used to
              struggle with keeping track of assignments, deadlines, and exam
              dates. But with ToDoList, I've been able to organize my workload
              effectively and stay on top of my studies. The app's features like
              creating subtasks and setting reminders have been particularly
              helpful in breaking down large assignments into smaller, more
              manageable steps. I'm now able to manage my time better and
              achieve higher grades. Thanks, ToDoList!"{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
