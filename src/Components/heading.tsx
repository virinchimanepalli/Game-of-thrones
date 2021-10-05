import React, { ReactNode } from "react";
import Navbar from "./navbar";

const Heading = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  return (
    <>
      <div className="flex bg-gray-50 h-screen">
        <div className="flex flex-col w-0 flex-1 bg-gray-50  h-full">
          <Navbar />
          <h2 className="text-3xl mb-1 mt-8 font-bold leading-7 text-grey-900 mx-auto">
            {heading}
          </h2>
          <div
            className="flex px-64 mt-8 flex-1 flex-col space-y-10"
            style={{ paddingBottom: "8%" }}
          >
            {/* main */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
