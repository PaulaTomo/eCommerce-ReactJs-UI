import {Button, InputGroup} from "react-bootstrap";
import {Form} from "react-bootstrap";
import Title from "./Title";
import React from "react";
import "../Styles/formPromo.css"
function FormPromo(){
    return(
        <div className="container-fluid p-5 mt-4 bg-light text-center">
            <Title  title={<h4>Stay connected to our campaigns and promotions</h4>}/>
            <div className="col">
            <InputGroup className="input mb-sm-2">
            <Form.Control
                placeholder="Enter your email address to receive our newsletter"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <Button className="btn-danger">
                SUBSCRIBE
            </Button>
        </InputGroup>
            </div>
        </div>
    )
}
export default FormPromo;
