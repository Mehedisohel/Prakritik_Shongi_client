import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoStarHalfSharp } from "react-icons/io5";

const Craftiteminfo = () => {
  const { id } = useParams();  // get craft id from URL
  const [craft, setCraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://prakritik-shongi-backend.vercel.app/craftlist/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch craft");
        return res.json();
      })
      .then(data => {
        setCraft(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading craft details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!craft) return <p>No craft found</p>;

  return (
    <div className="bg-[#efeae3] rounded-3xl w-full p-5 max-w-4xl mx-auto my-10">
      <div className="card card-side flex flex-col md:flex-row">
        <figure className="md:pl-3 p-3">
          <img
            src={craft.imageurl}
            alt={craft.title}
            className="rounded-3xl h-56 md:w-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold">{craft.title}</h2>
          <h3 className="text-xl font-medium text-gray-700">{craft.subcategory}</h3>
          <p className="text-lg">Price: {craft.price}</p>
          <div className="flex justify-between items-center text-lg">
            <span>{craft.stockStatus}</span>
            <span className="flex items-center gap-1">
              {craft.rating}
              <IoStarHalfSharp className="text-[#d3a873] text-xl" />
            </span>
          </div>
          <div className="mt-5">
            <p>{craft.description || "No description available."}</p>
          </div>
          <div className="card-actions justify-end mt-5">
            <Link
              to="/allcrafts"
              className="btn bg-[#cec1ab] hover:bg-[#bfa46a] text-white"
            >
              Back to Crafts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craftiteminfo;
