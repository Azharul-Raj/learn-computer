import React from "react";
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa';

const RightSide = ({ course }) => {
  const { img, name, course_uid, description, price, rating } = course;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
        <img className="rounded-t-lg h-52 w-full" src={img} alt="" />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description.slice(0,150)}
        </p>
        <div className="flex justify-between">
          <p>Price : {price }$</p>
          <p className="flex">Rating : {rating} <span className="m-[1px]"><FaStar/></span></p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
