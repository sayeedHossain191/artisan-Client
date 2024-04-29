import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllArtAndCraft = () => {

    const loadedUsers = useLoaderData();
    return (
        <div>
            <h1>All Users: {loadedUsers.length}</h1>
        </div>
    );
};

export default AllArtAndCraft;