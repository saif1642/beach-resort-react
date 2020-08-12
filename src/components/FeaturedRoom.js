import React, { Component } from 'react';
import { RoomContext } from '../context';

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        let value = this.context;
        return (
            <div>
                <h1>Hello from FeaturedRoom {value}</h1>
            </div>
        )
    }
}
