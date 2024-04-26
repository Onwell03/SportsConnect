import React from "react";
import SportCard from "../components/SportCard";

const Home = () => { 
    return (
        <div className="home">
            <div className='mb-2'>
                <h2 className='text-center font-bold text-4xl'>Get Connected with Sports Lovers</h2>
                <h2 className='text-center font-bold text-4xl'>around the world</h2>
            </div>
            <div className='grid grid-cols-3 gap-x-0 place-items-center'>
                <SportCard name="Football" image="src/assets/football.jpeg"/>
                <SportCard name="BasketBall" image="src/assets/basketball.jpeg"/>
                <SportCard name="American Football" image="src/assets/afootball.jpeg"/>
                <SportCard name="Rugby" image="src/assets/rugby.jpeg"/>
                <SportCard name="Tennis" image="src/assets/tennis.jpeg"/>
                <SportCard name="Cricket" image="src/assets/cricket.jpeg"/>
            </div>
        </div>
    )
}

export default Home;
