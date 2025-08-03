import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Craftcategory = () => {
    const [subcategory, setsubcategory] = useState([]);

    useEffect(() => {
        fetch('https://prakritik-shongi-backend.vercel.app/subcategorylist')
            .then(res => res.json())
            .then(data => {
                setsubcategory(data)
            });
    }
        , [])

    return (
        <div className="mb-10">
            <div className="mb-5">
                <h1 className="text-center text-3xl md:text-5xl font-bold">Craft Categories</h1>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    subcategory.map(subcategorys =>
                        <Link to={`/subcategoryitem/${subcategorys._id}`} subcategorys={subcategorys} key={subcategorys._id}><div className="card rounded-3xl border-2 border-[#c2c2c2]">
                            <div className="rounded-3xl p-4 mt-4 bg-[#eff6ffb3]  w-11/12 mx-auto">
                                <figure><img src={subcategorys.image} className="h-52 md:w-96 rounded-2xl" alt="Shoes" /></figure>
                            </div>
                            <div className="p-4 flex flex-col lg:h-[170px] md:h-[210px]">
                                <h2 className="card-title text-[#131313] text-2xl font-semibold my-3 flex-grow-0">{subcategorys.subcategoryname}</h2>
                                <p className="text-[#131313] text-base flex-grow">{subcategorys.description}</p>
                            </div>
                        </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Craftcategory;