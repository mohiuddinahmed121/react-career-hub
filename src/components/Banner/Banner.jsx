import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="bg-base-200 mb-9">
        <div class="pt-10 flex justify-around lg:flex-row-reverse">
          <img
            src="../../../images/user.png"
            class="pt-10 max-w-sm rounded-lg"
          />
          <div>
            <h1 class="text-5xl font-bold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p class="py-6">
              Explore thousands of job opportunities with <br /> all the
              information you need. Its your future. <br /> Come find it. Manage
              all your job application from start to finish.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
