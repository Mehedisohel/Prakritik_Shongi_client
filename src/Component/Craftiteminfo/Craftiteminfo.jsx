import { IoStarHalfSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Craftiteminfo = ({ craft }) => {
  return (
    <div>
      <div className="bg-[#efeae3] rounded-3xl w-full">
        <div className="card card-side flex flex-col md:flex-row">
          <figure className="md:pl-3 p-3">
            <img
              src={craft.imageurl}
              alt={craft.title}
              className="rounded-3xl h-56 md:w-72 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold">{craft.title}</h2>
            <h3 className="text-lg font-medium text-gray-700">{craft.subcategory}</h3>
            <p className="text-lg">Price: {craft.price}</p>
            <div className="flex justify-between items-center text-lg">
              <span>{craft.stockStatus}</span>
              <span className="flex items-center gap-1">
                {craft.rating}
                <IoStarHalfSharp className="text-[#d3a873] text-xl" />
              </span>
            </div>
            <div className="card-actions justify-end">
              <Link
                to={`/craftdetails/${craft._id}`}
                className="btn text-lg bg-[#cec1ab] hover:bg-[#bfa46a] text-white hover:text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Craftiteminfo.propTypes = {
  craft: PropTypes.shape({
    imageurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    stockStatus: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Craftiteminfo;
