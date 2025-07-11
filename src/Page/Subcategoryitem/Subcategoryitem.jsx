import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { IoStarHalfSharp } from "react-icons/io5";


const Subcategoryitem = () => {
    const updatecraftinfo = useLoaderData();
    const { subcategoryname, description, image } = updatecraftinfo;

    const [craft, setcraft] = useState([]);
    const [subcategory, setsubcategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/craftlist')
            .then(res => res.json())
            .then(data => setcraft(data));
    }, [])

    useEffect(() => {
        const filteredsubcategory = craft.filter(item => item.subcategory === subcategoryname);
        setsubcategory(filteredsubcategory);
    }, [craft]);


    return (
        <div className="mb-10">
            <Helmet>
                <title>prakritik-shongi-subcategoryitem</title>
            </Helmet>
            <div className="text-center mb-5">
                <img src={image} className="mb-4 h-[600px] w-full" />
                <h1 className="md:text-5xl text-2xl font-semibold mb-4">{subcategoryname}</h1>
                <p className="w-10/12 lg:w-8/12 mx-auto text-lg">{description}</p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
                {
                    subcategory.map(subcategorys =>
                        <div key={subcategorys._id}>
                            <div className="card card-compact bg-base-100 shadow-xl border-orange-400 border">
                                <figure><img src={subcategorys.imageurl} className="w-full h-64" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-[28px] font-semibold">{subcategorys.title}</h2>
                                    <p className="text-xl font-medium">{subcategorys.subcategory}</p>
                                    <h1 className="text-lg"><span className="font-medium">Price :</span> {subcategorys.price}</h1>
                                    <div className="flex justify-between text-lg">
                                        <h1><span className="font-medium">Processing Time :</span>   {subcategorys.processingtime}</h1>
                                        <h2 className="flex items-center gap-1">{subcategorys.rating} <IoStarHalfSharp className="text-[#d3a873] text-xl" /></h2>
                                    </div>
                                    <p className="text-lg h-[120px]">{subcategorys.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/craftdetails/${subcategorys._id}`} className="btn text-lg bg-[#cec1ab] text-[#FFFFFF] hover:text-gray-700 border border-orange-400">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="mt-6 text-center">
                <Link to='/' className="btn btn-outline text-[#947351] hover:text-[#FFFFFF] hover:bg-[#947351] hover:border-[#947351] lg:text-lg mr-5">Go Home</Link>
            </div>
        </div>
    );
};

export default Subcategoryitem;