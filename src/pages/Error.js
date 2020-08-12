import React from 'react'
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <Hero>
        <Banner title="404" subtitle="page not found">
            <Link to="/">
                <button type="button" className="btn-primary">Back to home</button>
            </Link>
        </Banner>
    </Hero>
    )
}
