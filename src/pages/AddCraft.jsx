import Swal from 'sweetalert2'

const AddCraft = () => {

    const handleAddArt = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const item = form.item.value;
        const category = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const time = form.time.value;
        const rating = form.rating.value;

        const newArt = { name, email, image, item, category, description, price, customization, stock, time, rating }

        console.log(newArt);

        //send data to the server
        fetch(' https://b9a10-art-and-craft-server.vercel.app/artCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#E5E5E5] p-24">

            <form onSubmit={handleAddArt}>
                <div className="md:flex gap-4">

                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>User Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Name' name="name" className='input input-bordered w-full' />
                        </label>
                    </div>

                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>User Email</span>
                        </label>
                        <label className='input-group'>
                            <input type="email" placeholder='Email' name="email" className='input input-bordered w-full' />
                        </label>
                    </div>

                </div>

                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text'>Image</span>
                    </label>
                    <label className='input-group'>
                        <input type="url" placeholder='image_url' name="image" className='input input-bordered w-full' />
                    </label>
                </div>

                <div className='md:flex gap-4'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Item_Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='item_name' name="item" className='input input-bordered w-full' />
                        </label>
                    </div>

                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Subcategory_Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='sub_name' name="subcategory" className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text'>Short Description</span>
                    </label>
                    <label className='input-group'>
                        <textarea className="textarea textarea-bordered w-full" placeholder='short description' name="description"></textarea>
                    </label>
                </div>

                <div className='md:flex gap-4'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>
                        <label className='input-group'>
                            <input type="number" placeholder='price' name="price" className='input input-bordered w-full' />
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
                </div>

                <div className='md:flex gap-4'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Processing_Time</span>
                        </label>
                        <label className='input-group'>
                            <input type="time" placeholder='processing_time' name="time" className='input input-bordered w-full' />
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
                </div>

                <input type="submit" value="Add" className="btn btn-block mt-8" />
            </form>


        </div>
    );
};

export default AddCraft;