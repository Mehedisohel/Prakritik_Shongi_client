import { useEffect, useState } from "react";
import Craftiteminfo from "../Craftiteminfo/Craftiteminfo";
import { Link } from "react-router-dom";


const Craftitem = () => {

    const [craftitem, setcraftitem] = useState([]);
    const [showcraft, setshowcraft] = useState(false);

    useEffect(() => {
        fetch('https://prakritik-shongi-backend.vercel.app/craftlist')
            .then(res => res.json())
            .then(data => {
                setcraftitem(data)
                setshowcraft(data.length > 8);
            });
    }
        , [])


    const displaycraftitem = craftitem.slice(0, 8)

    return (
        <div className="mb-11">
            <div className="mb-5">
                <h1 className="text-center text-3xl md:text-5xl font-bold">Crafted Legacy</h1>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    displaycraftitem.map(craft => <Craftiteminfo craft={craft} key={craft._id}></Craftiteminfo>)
                }
            </div>
            <div className="text-center mt-6">
                {showcraft && ( 
                    <button className="btn text-lg bg-[#cec1ab] text-[#FFFFFF] hover:text-gray-700">
                        <Link to='/allcrafts'>See All Crafts</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Craftitem;