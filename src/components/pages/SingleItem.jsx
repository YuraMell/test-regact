import React from 'react';
import {Route, Routes, useParams, useLocation } from "react-router-dom";
import {Layout} from "../Layout";

const SingleItem = () => {
  const params = useParams();
  const location = useLocation();
  const locationSearch = location.search;
  console.log(location)

  return (
    <>
      <h2>Single {params.id} </h2>
    </>
  );
};

export default SingleItem;