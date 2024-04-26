import React from "react";
import PostCard from "../../components/PostCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../client";

const Football = () => {
    const [postl, setPost] = useState([])
    const [searched, setSearched] = useState([])
    const [input, setInputs] = useState("")

    useEffect(() => {
        const fetchPost = async() => {
            const {data} = await supabase
                .from('Posts')
                .select()
                .order('created_at', {ascending:true})
            setPost(data);
            }
        fetchPost().catch(console.error)
    }, []);

    const Newest = () => {
        const timeSorted = [...postl].sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return dateB - dateA;
        });
        setPost(timeSorted);
    };

    const Popular = () => {
        const popSorted = [...postl].sort((a, b) => b.upvotes - a.upvotes);
        setPost(popSorted);
    };

    const HandleChange = (e) => {
        const searchValue = e.target.value;
        setInputs(searchValue);
        if (searchValue !== "") {
        const filteredData = postl.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        setSearched(filteredData);
        } else {
        setSearched(postl);
        }
    };

    return(
        <div className='px-20'>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <p className='mr-2'>Order by: </p>
                        <button onClick={Newest} className='bg-blue-500 hover:bg-blue-700 text-white mr-2 px-2 rounded'>Newest</button>
                        <button onClick={Popular} className='bg-blue-500 hover:bg-blue-700 text-white py-0 px-2 rounded'>Most Popular</button>
                    </div>
                    <div>
                        <input
                            name="title"
                            type="text"
                            placeholder="Search any title.."
                            onChange={HandleChange}
                            size={'20'}
                            className='border border-gray-500 px-0'
                            />
                    </div>
                </div>
                <div>
                    {input.length > 0
                        ? searched.map((post, index) => (
                        <Link to={`/football/${post.id}`}><PostCard key={index} votes={post.upvotes} post={post.title} time={post.created_at} /> </Link>
                    ))
                    :
                    postl && postl.map((post, index)=> (
                        <Link to={`/football/${post.id}`}><PostCard key={index} votes={post.upvotes} post={post.title} time={post.created_at} /> </Link>
                    ))}
{/* 
                    {postl && postl.length > 0 ? (
                        postl.map((post, index) => (
                            <Link to={`/football/${post.id}`}><PostCard key={index} votes={post.upvotes} post={post.title} time={post.time} /> </Link>
                    ))
                    ) : (
                        <div>
                            <p>No posts to be shown</p>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    )
};

export default Football;
