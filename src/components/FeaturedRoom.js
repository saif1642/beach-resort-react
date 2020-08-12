import React, { Component } from 'react';
import { RoomContext } from '../context';

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        let { featuredRooms : rooms } = this.context;
        console.log(rooms);
        return (
            <div>
                <h1>Hello from FeaturedRoom </h1>
            </div>
        )
    }
}
