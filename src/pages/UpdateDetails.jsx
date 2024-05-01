/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateDetails = () => {

    const art = useLoaderData();

    const { _id, image, item, category, description, price, customization, stock, time, rating } = art;

    const handleUpdateArt = (event) => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const item = form.item.value;
        const category = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const time = form.time.value;
        const rating = form.rating.value;

        const updatedArt = { image, item, category, description, price, customization, stock, time, rating }

        console.log(updatedArt);

        //send data to the server
        fetch(` https://b9a10-art-and-craft-server.vercel.app/artCraft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedArt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <h2>Update Your Art & Craft: {item}</h2>

            <form onSubmit={handleUpdateArt}>

                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text'>Image</span>
                    </label>
                    <label className='input-group'>
                        <input type="url" placeholder='image_url' name="image" className='input input-bordered w-full' />
                    </label>
                </div>

                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Item_Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" defaultValue={image} placeholder='item_name' name="item" className='input input-bordered w-full' />
                    </label>
                </div>

                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Subcategory_Name</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" defaultValue={category} placeholder='sub_name' name="subcategory" className='input input-bordered w-full' />
                    </label>
                </div>

                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text'>Short Description</span>
                    </label>
                    <label className='input-group'>
                        <textarea className="textarea textarea-bordered w-full" defaultValue={description} placeholder='short description' name="description"></textarea>
                    </label>
                </div>

                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Price</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" defaultValue={price} placeholder='price' name="price" className='input input-bordered w-full' />
                    </label>
                </div>

                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Customization</span>
                    </label>
                    <label className='input-group'>
                        <select className="select select-bordered" name="customization">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </label>
                </div>

                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Stock Status</span>
                    </label>
                    <label className='input-group'>
                        <select className="select select-bordered w-full max-w-xs" name="stock">
                            <option>In Stock</option>
                            <option>Made to Order</option>
                        </select>
                    </label>
                </div>

                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Processing_Time</span>
                    </label>
                    <label className='input-group'>
                        <input type="time" defaultValue={time} placeholder='processing_time' name="time" className='input input-bordered w-full' />
                    </label>
                </div>

                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Rating</span>
                    </label>
                    <label className='input-group'>
                        <select className="select select-bordered w-full max-w-xs" name='rating'>
                            <option disabled selected>Rate This Item</option>
                            <option>1.0</option>
                            <option>2.0</option>
                            <option>3.0</option>
                            <option>4.0</option>
                            <option>5.0</option>
                        </select>
                    </label>
                </div>


                <input type="submit" value="Update" className="btn btn-block mt-8" />
            </form>
        </div>
    );
};

export default UpdateDetails;