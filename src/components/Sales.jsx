import React from 'react';
import NewModels from "./models/NewModels";
import {Link} from "react-router-dom";
import { newModelsSales } from '../models'

const Sales = () => {
  return (
    <>
      <section className="sales">
        <div className="inner">
          <NewModels title="СКИДКИ ДО 90%" type={newModelsSales}/>
        </div>
      </section>
    </>
  );
};

export default Sales;