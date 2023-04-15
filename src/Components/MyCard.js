
import NewCollectionOne from "../Images/aqua.webp";
import NewCollectionTwo from "../Images/NewCollection/newCollection1.webp";
import NewCollectionThree from "../Images/NewCollection/newCollection3.webp";

import "../Styles/card.css"
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

function MyCard(){
    return(

    <div className="container  m-0 ">
        <h1 className="title-section">New Collection</h1>
        <div className="row">
            <div className="col row">
                <div className="card border-0 " >
                    <Image className="img-newCollection" src={NewCollectionOne} alt={""}/>
                        <div className="card-body">
                            <h5 className="card-title">Rochie de seara</h5>
                        </div>
                </div>
            </div>
            <div className="col row">
                <div className="card border-0">
                    <Image className="img-newCollection" src={NewCollectionTwo} alt={""}/>
                    <div className="card-body">
                            <h5 className="card-title">Rochie de seara</h5>

                        </div>
                </div>
            </div>
            <div className="col row">
                <div className="card border-0">
                    <Image className="img-newCollection" src={NewCollectionThree} alt={""}/>

                    <div className="card-body">
                            <h5 className="card-title">Rochie de seara</h5>

                        </div>
                </div>
            </div>
            <div className="col row">
                <div className="card border-0" >
                    <Image className="img-newCollection" src={NewCollectionOne} alt={""}/>

                    <div className="card-body">
                            <h5 className="card-title">Rochie de seara</h5>
                        </div>
                </div>
            </div>
        </div>
          </div>
    )
}
export default MyCard;