import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

const PostInfo = () => {
    const { id } = useParams();
    const [info, setInfo] = useState([]);
    const [vote, setVote] = useState(0);
    const [comment, setComment] = useState("");
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from('Posts')
                .select()
                .eq('id', id)
                .single();
            setInfo(data);
            setVote(data.upvotes || 0);
        };
        fetchData().catch(console.error);

        // Fetch comment for the post
        const fetchComments = async () => {
            const { data } = await supabase
                .from('Comments')
                .select()
                .eq('post_id', id);
            setAllComments(data)
        };
        fetchComments().catch(console.error);
    }, [id]);

    const Vote = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .update({ upvotes: vote + 1 })
            .eq('id', id);
        setVote((prevVote) => prevVote + 1);
    };

    const deletePost = async (event) => {
        event.preventDefault();
        // Delete the post
        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        // Delete the comments
        await supabase
            .from('Comments')
            .delete()
            .eq('post_id', id);

        window.location = "/football";
    };

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

    const HandleChange = (event) => {
        const { value } = event.target;
        setComment(value);
    };
    

    const postComment = async (event) => {
        event.preventDefault();
        await supabase
            .from('Comments')
            .insert([{post_id:id,post_comment:comment}]);
        setComment("");
        const {data} = await supabase
            .from('Comments')
            .select()
            .eq('post_id', id);
        setAllComments(data);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col border p-4'>
                <p className='text-sm text-gray-700'>{calculateElapsedTime(info.created_at)}</p>
                <p className='font-extrabold text-2xl'>{info.title}</p>
                <p>{info.description}</p>
                <div className='pb-2 pt-2'>
                    <img src={info.image} alt="post Image" width={'300px'} />
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <img
                            src="https://www.pngitem.com/pimgs/m/467-4673347_transparent-thumbs-up-clipart-png-logo-like-youtube.png"
                            width={'20px'}
                            onClick={Vote}
                        />
                        <p>{vote} upvotes</p>
                    </div>
                    <div className='flex flex-row'>
                        <Link to={`/edit/${info.id}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwWoW8HjHDBuN8IJC8N9W8oSKMafjZqoPi5PCkSN3Vf6xg7muz7Mhh1Hl4fmYE6HPCJw&usqp=CAU" width={'20px'} />
                        </Link>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpERQXFZgj_diH_JgU7y_1ursxZ3Trc5DIQA&usqp=CAU"
                            width={'20px'}
                            onClick={deletePost}
                        />
                    </div>
                </div>
                <div className='bg-gray-200 my-2'>
                    <div className=''>
                        <h2 className='font-bold text-lg'>Comments</h2>                     
                        {allComments && allComments.length > 0 ? (
                            allComments.map((comment, index) => (
                                <p key={index}>-{comment.post_comment}</p>
                        ))
                        ) : (
                            <div>
                                <p>No Comments to be shown</p>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-row'>
                    <input
                        name="comment"
                        type="text"
                        placeholder="Write your comment here....."
                        onChange={HandleChange}
                        size={'55'}
                        className='border border-gray-500 px-0'
                    />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded' onClick={postComment}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostInfo;
