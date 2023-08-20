import React from 'react'
import Button from 'react-bootstrap/Button';
import "../Styles/dress-details.css"
export default function DressDetails(props) {
    
  return (
    <div className="container-fluid p-5">
      <div className="card mb-3">
      <div className="row g-0">
    <div className="col-md-4">
      <img src={props.imagePath} alt="Dress" className="img-fluid rounded-start" />
      </div>
      <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-name-dress">{props.dressName}</h4>
        <p className="card-price"> {props.price + "$"}</p>
        <div className="size-list">
          {props.size.map((size)=> (
            <div key={size.sizeId} className="size" role='button'>{size.sizeName}</div>
          ))}
        </div>
        <Button className='btn-add-to-cart' variant="danger" size="lg" active>
        Add to cart 🛒
      </Button>
        

      </div>
      </div>
      </div>
      </div>
      </div>
     
     
      
  )
}
