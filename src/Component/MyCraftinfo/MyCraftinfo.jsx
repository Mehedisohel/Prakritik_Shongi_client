import { Link } from "react-router-dom";
import { IoStarHalfSharp } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa6";
import Swal from "sweetalert2";
// import { useState } from "react";


const MyCraftinfo = ({ myallcrafts }) => {
    const { _id } = myallcrafts;
    // const { myallcraft ,setmyallcraft } = useState(myallcrafts)

    const handledelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/craftlist/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="bg-[#efeae3] rounded-3xl w-full">
                <div className="card card-side flex flex-col md:flex-row">
                    <figure className="md:pl-3 p-3"><img src={myallcrafts.imageurl} className="rounded-3xl h-56 md:w-72" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">{myallcrafts.title}</h2>
                        <h2 className="text-lg font-medium">{myallcrafts.subcategory}</h2>
                        <h1 className="text-lg">Price : {myallcrafts.price}</h1>
                        <div className="flex justify-between text-lg">
                            <h1>{myallcrafts.customization}</h1>
                            <h2 className="flex items-center gap-1">{myallcrafts.rating} <IoStarHalfSharp className="text-[#d3a873] text-xl" /></h2>
                        </div>
                        <div className="card-actions justify-end mt-2">
                            <div>
                                <Link to={`/craftdetails/${myallcrafts._id}`} className="btn text-lg bg-[#cec1ab] text-[#FFFFFF] hover:text-gray-700">View Details</Link>
                            </div>
                            <div className="">
                                <Link to={`/mycrafts/updateinfo/${_id}`} className="btn text-xl bg-[#947351] text-[#FFFFFF] mr-2 hover:text-gray-700"><FaPen /></Link>
                                <button onClick={() => handledelete(_id)} className="btn text-xl  bg-[#947251b6] text-[#FFFFFF] hover:text-gray-700"><RiDeleteBinFill /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftinfo;