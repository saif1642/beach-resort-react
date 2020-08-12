import React from 'react'
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Link } from 'react-router-dom';

export const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/">
                    <button type="button" className="btn-primary">return to home</button>
                </Link>
            </Banner>
        </Hero>
    )
}
