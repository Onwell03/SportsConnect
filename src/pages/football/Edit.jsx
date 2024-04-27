import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";

const Edit = () => { 
    const {id} = useParams()
    const [post, setPost] = useState({title: "", image: "", description: "", sport:""})

    useEffect(() => {
        const fetchData = async() => {
            const {data} = await supabase
                .from('Posts')
                .select()
                .eq('id', id)
                .single()
            setPost(data);
            }
        fetchData().catch(console.error)
    }, []);

    const HandleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const UpdatePost = async(event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .update({name:post.name,subject:post.subject, description:post.description, total:post.total})
            .eq('id', id);

        window.location = "/football";
    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/2'>
                <div className='px-4 flex justify-center items-center'>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        onChange={HandleChange}
                        size={'44'}
                        value={post.title}
                        className='border border-gray-500 px-0'
                    />
                </div>
                <div className='px-4 pt-2 flex justify-center items-center'>
                    <textarea
                        className='border border-gray-500'
                        rows="5"
                        cols="43"
                        id="description"
                        name='description'
                        placeholder="Content"
                        value={post.description}
                        onChange={HandleChange}
                    />
                </div>
                <div className='px-4 pt-2 flex justify-center items-center'>
                    <input
                        name="image"
                        type="text"
                        placeholder="Image URL (Optional)"
                        onChange={HandleChange}
                        size={'44'}
                        value={post.image}
                        className='border border-gray-500'
                    />
                </div>
                <div className='px-4 pt-2 flex justify-center items-center'>
                    <select className='border border-gray-500 w-96' name="sport" onChange={HandleChange} value={post.sport}>
                        <option value="">Select the sport</option>
                        <option value="football">Football</option>
                        <option value="basketball">Basketball</option>
                        <option value="rugby">Rugby</option>
                        <option value="afootball">American Football</option>
                    </select>
                </div>
                <div className='flex justify-center items-center pt-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' onClick={UpdatePost}>Update Post</button>
                </div>
            </div>
        </div>
    )
    
};

export default Edit;
