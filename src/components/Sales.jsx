import React from 'react';
import NewModels from "./NewModels";
import {Link} from "react-router-dom";

const Sales = () => {
  return (
    <>
      <section className="sales">
        <div className="inner">
          <NewModels title="СКИДКИ ДО 90%"/>
        </div>
      </section>
    </>
  );
};

export default Sales;