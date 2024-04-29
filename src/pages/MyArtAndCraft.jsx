import { GiPencilBrush } from "react-icons/gi";
//import { Link } from "react-router-dom";
import img from '../assets/mosaic-marble-tiles-background.jpg'
import Swal from 'sweetalert2'

const MyArtAndCraft = () => {

    // const handleDelete = (_id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`http://localhost:5000/artCraft/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your item has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }

    return (
        <div>
            <div className="w-96 h-96 bg-base-100 border-none">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="mt-5">
                    <h2 className="card-title font-josefin text-2xl">
                        Porcelain Art Plate
                        <div className="badge bg-[#2B4248] h-10 w-10"><GiPencilBrush className="text-xl" /></div>
                    </h2>
                    <p className='font-josefin mt-3'>Porcelain is made out of four raw materials that provide it with high resistance and unique translucency. it becomes extremely hygienic and ideal for very frequent use.</p>

                    <h3 className="mt-2 font-josefin font-semibold text-lg">Customization: No</h3>

                    <div className="flex items-center justify-between mt-2">
                        <h3 className='text-3xl font-garamond font-semibold'>$ 278</h3>
                        <h3 className="text-xl font-garamond">In Stock
                        </h3>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#D1D5DB] text-black rounded-none mt-4 ">Update</button>
                        <button className="btn bg-[#D1D5DB] text-black rounded-none mt-4">Delete</button>
                    </div>
                    {/* <Link to={`/details/${_id}`}>
                        
                    </Link> */}

                </div>
            </div>
        </div>
    );
};

export default MyArtAndCraft;