import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import { Helmet } from 'react-helmet-async';

const AddCraft = () => {
    
    const { user } = useContext(AuthContext)

    const handlesubmitcraft = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const subcategory = form.subcategory.value;
        const imageurl = form.imageurl.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const processingtime = form.processingtime.value;

        const newcraft ={ name, email, title, subcategory, imageurl, description, price, rating, customization, stockStatus, processingtime}
        

        // set data to server
        fetch('https://prakritik-shongi-server.vercel.app/craftlist',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newcraft)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Item Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
                  form.reset();
            }
        })

    }

    return (
        <div className="my-6 lg:w-8/12 w-11/12 mx-auto">
            <Helmet>
                <title>prakritik-shongi-addcraft</title>
            </Helmet>
            <div>
                <h1 className="text-center lg:text-5xl text-3xl font-bold text-[#a7542dc7]">Crafts Collection</h1>
                <p className="text-center my-5 text-xl">Craft your legacy in our Collection! Introduce your artisanal marvels.Describe your masterpiece and add images to exhibit your craftsmanship to the world.</p>
            </div>
            <div>
                <form onSubmit={handlesubmitcraft} className="">
                    {/* Email and name */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user.displayName} placeholder={user.displayName} className="input input-bordered w-full" disabled />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user.email} placeholder={user.email} className="input input-bordered w-full" disabled />
                        </div>
                    </div>
                    {/* Title and Subcategory */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Item Title</span>
                            </label>
                            <input type="Text" name="title" placeholder="Item Title" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Subcategory</span>
                            </label>
                            <select type="dropdown" name='subcategory' className="px-3 w-full border-2 rounded-lg h-12" required >
                                <option value="Select Subcategory">Select Subcategory</option>
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
                        <input type="url" name="imageurl" placeholder="Image Url" className="input input-bordered w-full" required />
                    </div>
                    {/* Short Description */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Item Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Item Short Description" className="input input-bordered w-full" required />
                    </div>
                    {/* Price and Rating */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Price</span>
                            </label>
                            <input type="Text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Rating</span>
                            </label>
                            <input type="Text" name="rating" placeholder="Rating" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* Customization and stockstatus */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Customization</span>
                            </label>
                            <select type="dropdown" name='customization' className="p-3 w-full border-2 rounded-lg h-12" required >
                                <option value="Select Customization">Select Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Stock Status</span>
                            </label>
                            <select type="dropdown" name='stockStatus' className="p-3 w-full border-2 rounded-lg h-12" required >
                                <option value="None">Select Stock Status</option>
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
                        <input type="text" name="processingtime" placeholder="Processing Time" className="input input-bordered w-full" required />
                    </div>
                    {/* Button */}
                    <div className="w-full my-4">
                        <button className="btn w-full text-lg bg-[#ded5c7] ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraft;