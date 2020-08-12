import React, { Component } from 'react';
import items from './data';
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    }
    componentDidMount(){
       let rooms = this.formatData(items);
       let featuredRooms = rooms.filter((room) => room.featured === true);
       this.setState({
           rooms,
           featuredRooms,
           sortedRooms:rooms,
           loading:false
       })
    }
    formatData(items){
      let formattedItems = items.map((item) => {
          let id = item.sys.id;
          let images = item.fields.images.map((img) => img.fields.file.url);
          let room = { ...item.fields, images, id};
          return room;
      });
      return formattedItems;
    }
    getRoom = (slug) => {
       let tempRooms = [...this.state.rooms];
       const room = tempRooms.find((room) => room.slug === slug);
       console.log(room);
       return room;
    }

    render(){
        return (
            <RoomContext.Provider 
            value={
                {
                    ...this.state,
                    getRoom:this.getRoom
                }
            }>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider ,RoomConsumer, RoomContext};

