import React from "react";
import { useState } from "react";
import { supabase } from "../client";

const Create = () => {
    const [post, setPost] = useState({title: "", image: "", description: "", sport:""})

    const HandleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
     
    const CreatePost = async(event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .insert([{title:post.title,description:post.description, image:post.image, sport:post.sport}])
            .select();

        window.location = "/football";
    }
    

    return (
        <div className='flex flex-col items-center'>
            <div className='mb-2'>
                <img src="src/assets/top2.png" width={'450px'}/>
            </div>
            <div className='w-1/2'>
                <div className='px-4 flex justify-center items-center'>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        onChange={HandleChange}
                        size={'44'}
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
                        className='border border-gray-500'
                    />
                </div>
                <div className='px-4 pt-2 flex justify-center items-center'>
                    <select className='border border-gray-500 w-96' name="sport" onChange={HandleChange}>
                        <option value="">Select the sport</option>
                        <option value="football">Football</option>
                        <option value="basketball">Basketball</option>
                        <option value="rugby">Rugby</option>
                        <option value="afootball">American Football</option>
                        <option value="tennis">Tennis</option>
                        <option value="cricket">Cricket</option>
                    </select>
                </div>
                <div className='flex justify-center items-center pt-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' onClick={CreatePost}>Create Post</button>
                </div>
            </div>
        </div>
    )
    
};

export default Create;