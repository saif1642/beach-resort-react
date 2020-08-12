import React from 'react'
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <Hero>
            <Banner title="luxurious rooms" subtitle="delux room starting at $200">
                <Link to="/rooms">
                    <button type="button" className="btn-primary">Our Rooms</button>
                </Link>
            </Banner>
        </Hero>
    )
}
