import React from "react";
import { IoLocationOutline } from "react-icons/io5";
const RightSidebar = () => {
  return (
    <div className="col-2 left-sidebar  right-sidebar h h-100 bg-primary">
      <div className="wrapper p-2 flex-column gap-3 flex-lg-column align-items-center">
        <div className="text-center mb-4">
          {" "}
          <img
            className="rounded-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s"
            alt=""
          />
        </div>
        <div className="text-center mb-4">
          <h4 className="mb-2">Emy Organda</h4>
          <h6>Artist/Designer</h6>
        </div>
        <div className="gap-3 d-flex flex-column mb-5">
          <div className="text-center p-2 gap-2 mx-auto rounded-3 bg-secondary w-75 d-flex align-items-center">
            <IoLocationOutline />
            <h6 className="pb-1">Egypt,mansoura</h6>
          </div>
          <div className="text-center p-2 gap-2 mx-auto rounded-3 bg-secondary w-75 d-flex align-items-center">
            <IoLocationOutline />
            <h6 className="pb-1">Egypt,mansoura</h6>
          </div>
          <div className="text-center p-2 gap-2 mx-auto rounded-3 bg-secondary w-75 d-flex align-items-center">
            <IoLocationOutline />
            <h6 className="pb-1">Egypt,mansoura</h6>
          </div>
        </div>
        <div>
          <div className="challenges">
            <div className="text-center p-2 mx-auto rounded-3 bg-secondary w-75">
              <h6 className="pb-1 text-center">challenges</h6>
            </div>
            <div className="challenges">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
