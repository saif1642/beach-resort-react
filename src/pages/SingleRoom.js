import React, { Component } from 'react'
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
    }
    state = {
        slug: this.props.match.params.slug
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (
                <div className="error">
                    <h3>No such room could be found</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            )
        }
        return (
            <Hero className="roomsHero">
                <Banner title={`${room.name} room`}>
                    <Link to="/rooms" className="btn-primary">Back to room</Link>
                </Banner>
            </Hero>
        )
    }
}

