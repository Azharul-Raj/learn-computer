import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const CourseDetails = () => {
  const single = useLoaderData();
  const { name, img, description, price, rating } = single;

  return (
    <div>
      <div className="text-center">
        <Link to='/premium'>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            GET PREMIUM ACCESS
          </button>
        </Link>
      </div>
      <div className="container my-10 mx-auto p-4 md:p-0">
        <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
          <div
            className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute text-xl">
              <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
            </div>
          </div>
          <div className="bg-white w-full md:w-2/3">
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                {/* <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3>Saint Basil's Cathedral</h3>
            <p className="mb-0 mt-3 text-grey-dark text-sm italic">Moscow - Russia</p>
            <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden"/>
          </div> */}
                <div className="w-full lg:w-full lg:px-3">
                  <h2 className="text-3xl font-bold">{name}</h2>
                  <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                    {description}
                  </p>
                  <div className="flex justify-between mt-5">
                    <p>PRICE : {price}$</p>
                    <p className="flex">Rating : {rating} <FaStar/></p>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      DOWNLOAD PDF
                    </button>
                  </div>
                </div>

                {/* <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">Visit now</button>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
