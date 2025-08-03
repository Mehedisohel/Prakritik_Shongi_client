import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Updatecraftiteminfo = () => {
    const updatecraftinfo = useLoaderData();
    const navigate = useNavigate();
    const { _id, title, subcategory, imageurl, description, price, rating, customization, stockStatus, processingtime } = updatecraftinfo;

    const handleupdatecraft = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const subcategory = form.subcategory.value;
        const imageurl = form.imageurl.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const processingtime = form.processingtime.value;

        const updatecraft = { title, subcategory, imageurl, description, price, rating, customization, stockStatus, processingtime };

        fetch(`https://prakritik-shongi-backend.vercel.app/craftlist/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatecraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    });
                    form.reset();
                    navigate('/mycrafts');
                } else {
                    Swal.fire({
                        title: 'No Change!',
                        text: 'No fields were updated.',
                        icon: 'info',
                        confirmButtonText: 'OK'
                    });
                }
            });
    };

    return (
        <div className="my-6 lg:w-8/12 w-11/12 mx-auto">
            <div>
                <h1 className="text-center lg:text-5xl text-3xl font-bold text-[#a7542dc7]">Crafts Update</h1>
                <p className="text-center my-5 text-xl">Craft your legacy in our Collection! Introduce your artisanal marvels. Describe your masterpiece and add images to exhibit your craftsmanship to the world.</p>
            </div>
            <div>
                <form onSubmit={handleupdatecraft} className="">
                    {/* Title and Subcategory */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Item Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} placeholder="Item Title" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Subcategory</span>
                            </label>
                            <select name='subcategory' className="px-3 w-full border-2 rounded-lg h-12" required>
                                <option value={subcategory}>{subcategory}</option>
                                <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
                                <option value="Wooden Home Decor">Wooden Home Decor</option>
                                <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
                                <option value="Jute Home Decor">Jute Home Decor</option>
                                <option value="Jute Kitchenware & utensils">Jute Kitchenware & utensils</option>
                                <option value="Jute and wooden jewellery">Jute and wooden jewellery</option>
                            </select>
                        </div>
                    </div>
                    {/* Photo Url */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Image</span>
                        </label>
                        <input type="url" name="imageurl" defaultValue={imageurl} className="input input-bordered w-full" required />
                    </div>
                    {/* Short Description */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Item Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} className="input input-bordered w-full" required />
                    </div>
                    {/* Price and Rating */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* Customization and stockstatus */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Customization</span>
                            </label>
                            <select name='customization' className="p-3 w-full border-2 rounded-lg h-12" required>
                                <option value={customization}>{customization}</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Stock Status</span>
                            </label>
                            <select name='stockStatus' className="p-3 w-full border-2 rounded-lg h-12" required>
                                <option value={stockStatus}>{stockStatus}</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                    </div>
                    {/* Processing time */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Processing Time</span>
                        </label>
                        <input type="text" name="processingtime" defaultValue={processingtime} className="input input-bordered w-full" required />
                    </div>
                    {/* Button */}
                    <div className="w-full my-4">
                        <button type="submit" className="btn w-full text-lg bg-[#ded5c7]">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updatecraftiteminfo;