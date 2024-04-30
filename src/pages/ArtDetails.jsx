import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ArtDetails = () => {

    const arts = useLoaderData()
    const { _id } = useParams();
    const idInt = parseInt(_id)
    const details = arts.find(art => art._id === idInt);
    console.log(details)


    return (
        <div>

        </div>
    );
};

export default ArtDetails;