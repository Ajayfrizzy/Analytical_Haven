import React from "react";
import { contact } from "../assets";

const GetinTouch = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <h1 className="text-[#193D6F] font-campton font-medium lg:text-[2.5rem] text-[1.2rem] lg:mt-12 mt-5">
          Get in touch
        </h1>
        <div className="lg:flex items-center justify-between lg:mt-2 mt-1">
          <div>
            <h1 className="lg:text-4xl text-[1.2rem] font-semibold font-campton">
              Contact us today for free
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:ml-0 ml-1 w-16 h-3 lg:w-[190px] lg:h-[14px] -m-2"
                  viewBox="0 0 219 11"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.33804 2.7039C9.95984 3.30132 22.1062 3.3312 55.0789 3.39094C106.567 3.48055 147.43 4.1377 158.788 5.09356C159.689 5.18318 87.516 5.84033 80.1042 5.3624C68.5497 4.58576 13.3698 5.24292 2.26621 6.13904C-0.890144 6.37801 0.293501 7.21439 2.35077 7.39362C5.56347 7.69232 14.1871 7.66245 37.8317 7.60271C54.4589 7.57283 186.744 8.25987 201.201 9.48457C209.317 10.1716 214.249 10.7989 216.504 10.6495C218.392 10.53 218.42 10.1716 216.786 9.18586C215.686 8.5287 216.926 8.14038 217.716 7.96116C218.927 7.66245 218.42 6.64684 216.898 5.84033C214.841 4.73512 211.29 4.76499 212.981 5.87021C213.347 6.10917 213.432 6.70658 212.136 6.5871C208.359 6.22865 181.671 3.77925 174.428 3.36106C97.0978 -1.17929 21.627 2.13636 5.64802 1.03114C-0.0165111 0.61295 2.57625 2.34546 5.33804 2.7039Z"
                    fill="#0022EC"
                  />
                </svg>
              </div>
              consultation
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-7 mt-10 lg:p-7">
          <div className="flex justify-center items-center">
            <img src={contact} alt="" />
          </div>

          <div class="rounded-lg bg-white p-5 shadow-2xl lg:p-12 lg:-mr-8">
            <div className="mb-5">
              <h1 className="text-[#193D6F] font-campton font-medium lg:text-lg">
                Get more updates
              </h1>
              <h1 className="text-[#193D6F] font-campton font-semibold lg:text-[2rem] text-[1.2rem]">
                Send Us a Message
              </h1>
            </div>
         <div className="w-full overflow-hidden rounded-lg">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeVx9mJKTtwg1anw9qfL-iXTTaHkYjRb61l7r_t3Tgr862oaA/viewform?embedded=true" 
                width="100%" 
                height="400" 
                frameBorder="0"
                className="min-h-[600px] lg:min-h-[400px]"
              >
                Loading…
              </iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;
