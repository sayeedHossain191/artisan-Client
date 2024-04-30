import { GiPencilBrush } from "react-icons/gi";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
//import img from '../assets/mosaic-marble-tiles-background.jpg'
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const MyArtAndCraft = () => {

    const loadedMyArt = useLoaderData()
    const { _id } = loadedMyArt

    const handleDelete = (_id) => {
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

                fetch(`http://localhost:5000/artCraft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>

            <div className="my-20">
                <h2 className="font-garamond text-center text-5xl font-bold">My Collection</h2>
                <h3 className='font-josefin text-center'>ART / CRAFT</h3>
            </div>

            <div className="grid grid-cols-3 gap-40 place-items-center mx-32">
                {
                    loadedMyArt.map(art => <div key={art._id}>

                        <div className="w-96 h-96 bg-base-100 border-none">
                            <figure><img src={art.image} alt="Shoes" /></figure>
                            <div className="mt-5">
                                <h2 className="card-title font-josefin text-2xl">
                                    {art.item}
                                    <div className="badge bg-[#2B4248] h-10 w-10"><GiPencilBrush className="text-xl" /></div>
                                </h2>
                                <p className='font-josefin mt-3'>{art.description}</p>

                                <div className="flex justify-between">
                                    <h3 className="mt-2 font-josefin font-semibold text-lg">Customization: {art.customization}</h3>
                                    <div className='flex gap-2 font-josefin mt-2'>
                                        <MdStar className='text-xl' />
                                        <h3>5.0</h3>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <h3 className='text-3xl font-garamond font-semibold'>$ {art.price}</h3>
                                    <h3 className="text-xl font-garamond">{art.stock}
                                    </h3>
                                </div>
                                <div className="card-actions">
                                    <Link to={`/update/${_id}`}>
                                        <button className="btn bg-[#D1D5DB] text-black rounded-none mt-4">Update</button>
                                    </Link>

                                    <button onClick={() => handleDelete(_id)} className="btn bg-[#D1D5DB] text-black rounded-none mt-4">Delete</button>
                                </div>


                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default MyArtAndCraft;