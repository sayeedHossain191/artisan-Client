import { GiStoneCrafting } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CraftItems = ({ art }) => {

    const { image, _id } = art;

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
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="mt-6">
                    <h2 className="card-title font-josefin text-3xl">
                        Architecture Design
                        <div className="badge bg-[#2B4248] h-10 w-10"><GiStoneCrafting className="text-xl" /></div>
                    </h2>
                    <p className='font-josefin mt-4'>Architectural Design , 3D Modeling & Animation. Structural Design, Plumbing & Electrical Design & Drawing.</p>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`}>
                            <button className="btn bg-[#D1D5DB] text-black w-full rounded-none mt-4">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItems;