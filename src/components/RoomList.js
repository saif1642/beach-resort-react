import React from 'react'
import { Room } from './Room'

export const RoomList = ({rooms}) => {
    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>No room matched your search parameter</h3>
            </div>
        )
    }
    return (
        <div className="roomslist">
            <div className="roomslist-center">
               {
                    rooms = rooms.map((room) => {
                        return <Room key={room.id} room={room} />
                    })
               }

            </div>
        </div>
    )
}
