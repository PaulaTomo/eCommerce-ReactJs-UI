import MyCard from "../Components/MyCard";
import NewCollectionOne from "../Images/aqua.webp";
import NewCollectionTwo from "../Images/NewCollection/newCollection1.webp";
import NewCollectionThree from "../Images/NewCollection/newCollection3.webp";
import NewCollection4 from "../Images/NewCollection/newCollection4.webp";
import NewCollection5 from "../Images/NewCollection/newCollection5.webp";
import NewCollection6 from "../Images/NewCollection/newCollection6.jpg";
import NewCollection7 from "../Images/NewCollection/NewCollection7.webp";
import NewCollection8 from "../Images/NewCollection/NewCollection8.jpg";
import NewCollection9 from "../Images/NewCollection/newCollection9.jpg";
import NewCollection10 from "../Images/NewCollection/newCollection10.jpg";


function NewCollection() {
    return (

        <div className="container-fluid pt-5">
            <div className="row justify-content-around">
                <h1>New Collection</h1>

                <MyCard
                    imageSrc={NewCollectionOne}
                    nameDress="Turquoise Belle"
                    price={339}
                />
                <MyCard
                    imageSrc={NewCollectionTwo}
                    nameDress="Purple Belle "
                    price={229}
                />
                <MyCard
                    imageSrc={NewCollectionThree}
                    nameDress="Diamond Belle"
                    price={199}
                />
                <MyCard
                    imageSrc={NewCollection4}
                    nameDress="BlackMoon Belle "
                    price={189}
                />
                <MyCard
                    imageSrc={NewCollection5}
                    nameDress="Ellegance Night belle "
                    price={199}
                />
                <MyCard
                    imageSrc={NewCollection6}
                    nameDress="Crina Belle "
                    price={179}
                />
                <MyCard
                    imageSrc={NewCollection7}
                    nameDress="Cherie Belle"
                    price={219}
                />
                <MyCard
                    imageSrc={NewCollection8}
                    nameDress="Blue Belle"
                    price={199}
                />
                <MyCard
                    imageSrc={NewCollection9}
                    nameDress="LoveDress Belle "
                    price={199}
                /> <MyCard
                imageSrc={NewCollection10}
                nameDress="Red&Black Belle "
                price={199}
            />
            </div>
        </div>
    )


}

export default NewCollection;