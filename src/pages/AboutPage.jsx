import React from "react";
import AboutContent from "../components/AboutContent";
import Learning from "../components/Learning";
import References from "../components/References";

const AboutPage = () => {
  const linkStyle =
    "mx-2 flex flex-row items-center my-2 hover:text-yellow-200";
  return (
    <>
      {/* <h1>hello</h1> */}
      <div className="min-h-screen flex flex-col">
        <AboutContent />
        <Learning />
        <References />
      </div>
    </>
  );
};

export default AboutPage;
