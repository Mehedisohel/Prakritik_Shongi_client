import { IoStarHalfSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Craftiteminfo = ({ craft }) => {
    
    return (
        <div className="">
            <div className="bg-[#efeae3] rounded-3xl w-full">
                <div className="card card-side flex flex-col md:flex-row">
                    <figure className="md:pl-3 p-3"><img src={craft.imageurl} className="rounded-3xl  h-56 md:w-72" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">{craft.title}</h2>
                        <h2 className="text-lg font-medium">{craft.subcategory}</h2>
                        <h1 className="text-lg">Price : {craft.price}</h1>
                        <div className="flex justify-between text-lg">
                            <h1>{craft.stockStatus}</h1>
                            <h2 className="flex items-center gap-1">{craft.rating} <IoStarHalfSharp className="text-[#d3a873] text-xl" /></h2>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/craftdetails/${craft._id}`} className="btn text-lg bg-[#cec1ab] text-[#FFFFFF] hover:text-gray-700" >View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Craftiteminfo;