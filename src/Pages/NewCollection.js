import MyCard from "../Components/MyCard";
import {useEffect, useState} from "react";
import axios from "axios";


export default function NewCollection(props) {
    const [dress, setDress] = useState([])

    useEffect(() => {
        axios({

            method:'GET',
            url:'http://localhost:8085/dresses_store/dresses/list',
            headers:{
                accept:'application/json'
            }
        })
            .then((response) => {
                console.log(response)
                setDress(response.data);
            })
            .catch((reject) => {
                alert('Error')
            })
    },[]);

    return (
        <>


            <div className="container-fluid pt-5">
                <div className="row justify-content-around">

                    {dress.map((myDress) => (
                        <MyCard
                            key={myDress.id}
                            imageSrc={myDress.imagePath} 
                            nameDress={myDress.dressName}
                            price={myDress.price}
                            id={myDress.id}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}
