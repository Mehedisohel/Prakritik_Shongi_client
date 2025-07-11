import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoStarHalfSharp } from "react-icons/io5";

const Craftdetails = () => {
    const crafts = useLoaderData();
    const { id } = useParams();
    const craft = crafts?.find(craftlist => craftlist._id === id);
    
    return (
        <div>
            <Helmet>
                <title>prakritik-shongi-craftdetails</title>
            </Helmet>
            <div>
                <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/vZG6d99/home-entryway-with-modern-furnishing-design.jpg')" }}>
                    <div className='min-h-screen p-5'>
                        <div className="card card-side glass mx-auto w-11/12 my-24">
                            <figure className="w-9/12 rounded-2xl pl-4"><img src={craft.imageurl} className="rounded-xl" /></figure>
                            <div className="card-body">
                                <div>
                                    <h2 className="card-title text-4xl mb-1">{craft.title}</h2>
                                    <h2 className="text-xl font-medium mb-3">{craft.subcategory}</h2>
                                </div>
                                <div className="mb-2">
                                    <hr />
                                </div>
                                <div className="flex gap-2">
                                    <h1 className="text-xl font-medium">Description :</h1>
                                    <p className="text-lg w-4/6">{craft.description}</p>
                                </div>
                                <div className="text-lg flex justify-between">
                                    <h1><span className="text-xl font-medium">Price :</span> {craft.price}</h1>
                                    <h1><span className="text-xl font-medium">Stock Status :</span>  {craft.stockStatus}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-lg"><span className="text-xl font-medium">Processing Time :</span> {craft.processingtime}</h1>
                                    <h2 className="flex items-center gap-1 text-xl">{craft.rating} <IoStarHalfSharp className="text-black text-xl" /></h2>
                                </div>
                                <div>
                                    <h1 className="text-lg"><span className="text-xl font-medium">Customization : </span>{craft.customization}</h1>
                                </div>
                                <div className="my-2">
                                    <hr />
                                </div>
                                <div className="flex gap-2">
                                    <div className="text-2xl font-medium"><h1>Author :</h1></div>
                                    <div className="text-lg mt-8">
                                        <h1><span className="font-medium">Name :  </span>{craft.name}</h1>
                                        <h1><span className="font-medium">Email :  </span>{craft.email}</h1>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to='/' className="btn bg-[#ddc9a7] text-lg">Go Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Craftdetails;