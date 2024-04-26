import React from "react";

const PostCard = ({votes, post, time}) => {
    const calculateElapsedTime = (timestamp) => {
        const postTime = new Date(timestamp);
        const currentTime = new Date();
        const elapsedTime = Math.floor((currentTime - postTime) / (1000 * 60 * 60)); // Convert milliseconds to hours

        if (elapsedTime < 24){
            return `Posted ${elapsedTime} hour${elapsedTime === 1 ? '' : 's'} ago`;
        }else{
            const days = Math.floor(elapsedTime / 24);
            return`Posted ${days} day${days === 1 ? '' : 's'} ago`;
        }
        
    };

    return(
        <div className='border border-gray-400 p-5 my-2'>
            <p className='text-left text-sm'>{calculateElapsedTime(time)}</p>
            <p className='text-left text-xl'>{post}</p>
            <p className='text-left text-sm'>{votes} upvotes</p>
        </div>
    )
};

export default PostCard;
