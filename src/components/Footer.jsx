import React from "react";

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white'>
            <div className='flex flex-row p-5'>
                <div className='p-2 mr-10'>
                    <img src="src/assets/f_logo.png" width={'100px'}/>
                </div>
                <div className="flex flex-col items-center ml-10 mr-32">
                    <div className='pb-3'>
                        Find us on social media
                    </div>
                    <div className='flex'>
                        <div className='pr-2'>
                            <img src="src/assets/instagram.jpeg" width={'25px'}/>
                        </div>
                        <div className='pr-2'>
                            <img src="src/assets/twitter.avif" width={'25px'}/>
                        </div>
                        <div className='pr-2'>
                            <img src="src/assets/facebook.jpeg" width={'25px'}/>
                        </div>
                        <div className='pr-2'>
                            <img src="src/assets/linkedin.png" width={'25px'}/>
                        </div>
                    </div>
                </div>
                <div className='text-left mr-32'>
                    <p className='font-extrabold'>COMMUNITY</p>
                    <ul>
                        <li>Blog</li>
                        <li>Community</li>
                        <li>Ideas</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div className='text-left mr-32'>
                <p className='font-extrabold'>COMPANY</p>
                    <ul>
                        <li>About us</li>
                        <li>Affiliates</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-left'>
                <p className='font-extrabold'>USEFUL LINKS</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>FAQ</li>
                        <li>Terms of Service</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};


 export default Footer;
