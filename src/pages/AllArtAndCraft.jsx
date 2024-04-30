
import { useLoaderData } from 'react-router-dom';

const AllArtAndCraft = () => {

    const loadedUsers = useLoaderData();
    return (
        <div>
            <h1 className='font-garamond mx-32 my-20 text-center text-3xl font-semibold'>All Users: {loadedUsers.length}</h1>


            <div className="overflow-x-auto mx-32 mb-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Favorite Color</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedUsers.map(user => <tr key={user._id}>
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                    {/* <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                {/* <td>Purple</td> */}
                                <th>
                                    <button className="btn btn-ghost btn-xs">View Details</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllArtAndCraft;