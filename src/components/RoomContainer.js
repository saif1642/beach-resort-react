import React from 'react';
import { RoomFilter } from './RoomFilter';
import { RoomList } from './RoomList';
import { RoomConsumer, withRoomConsumer } from '../context';
import { Loading } from './Loading';

function RoomContainer({context}){
    const {loading, rooms, sortedRooms} = context;
    if(loading){
        return <Loading />
    }
    return (
        <div>
            <h3>Hello From RoomContainer</h3>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomContainer);
