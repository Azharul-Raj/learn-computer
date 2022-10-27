import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
  const course = useLoaderData();
  console.log(course);
    return (
        <div>
            This is premium
        </div>
    );
};

export default Premium;