import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { DressService, SizeService } from "../service/data-service";
import DressDetails from "./DressDetails";


function DressById() {
    const { id } = useParams();
    const [stateIns, setStateIns] = useState({
      dress:"",
      size:[],
    });

    const responseOk = (response) => {
        console.log(response.data)
        const sizeSvc = new SizeService();
        const promise2 = sizeSvc.findByDresses(id)
        console.log(id)
    
        promise2.then((res) => responseOkSize(res,response)).catch(responseKoSize)
      };
      const responseKO = (error)=>{
        console.log(error)
      };

      const responseOkSize = (resSize, resDress) => {
        console.log(resSize.data);
        setStateIns({
          dress:resDress.data,
          size:resSize.data,
        });
      };
      const responseKoSize = (error) =>{
        console.log(error)
      }
      
  const loadData = () => {
    const dressSvc = new DressService();
    const promise = dressSvc.findById(id);

    promise.then(responseOk).catch(responseKO)
  };
    
useEffect(loadData,[id]);
return (
    <div className="container">
    <DressDetails
    dressName={stateIns.dress.dressName}
    price={stateIns.dress.price}
    imagePath={stateIns.dress.imagePath} 
    size={stateIns.size}
   />
    </div>
  );
}



export default DressById;