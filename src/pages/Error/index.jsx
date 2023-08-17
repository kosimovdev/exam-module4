import React from 'react';
import { NavLink } from 'react-router-dom';

const index = () => {
  return (
    <div className="h-[500px] ">
      {/* <h1 className="text-3xl text-center">
        Error <br /> Data not found <br /> please back to Home Page
      </h1> */}
      <div className="grid place-content-center">
        <img
          className="w-[800px] h-[400px]"
          src="https://cdn.dribbble.com/users/702789/screenshots/16077553/driibbble_-_404_page.png"
          alt="#"
        />
      </div>
      <div className="grid place-content-center">
        <NavLink
          to="/home"
          className="w-[200px] py-3 px-3 rounded-md bg-indigo-600 text-white mt-5 text-center hover:bg-indigo-500"
        >
          Go To Home
        </NavLink>
      </div>
    </div>
  );
};

export default index;