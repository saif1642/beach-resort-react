import React, { Component } from 'react';
import items from './data';
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }
    componentDidMount(){
       let rooms = this.formatData(items);
       let featuredRooms = rooms.filter((room) => room.featured === true);
       let maxPrice = Math.max(...rooms.map(item => item.price));
       let maxSize = Math.max(...rooms.map(item => item.size));
       this.setState({
           rooms,
           featuredRooms,
           sortedRooms:rooms,
           loading:false,
           maxPrice,
           maxSize
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

    handleChange = (event) => {
        const value = event.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        console.log(name,value);
        this.setState({
            [name]:value
        },this.filterRooms)
    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;
        let tempRooms = [...rooms];
        if(type !== 'all'){
            tempRooms = tempRooms.filter((item) => item.type === type)
        }

        if(parseInt(capacity) !== 1){
            tempRooms = tempRooms.filter((item) => item.capacity === parseInt(capacity))
        }

        this.setState({
            sortedRooms:tempRooms
        });
    }

    render(){
        return (
            <RoomContext.Provider 
            value={
                {
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }
            }>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function componentWrapper(props){
        return <RoomConsumer>
            {
                (value) => {
                    return <Component {...props} context={value}/>
                }
            }
        </RoomConsumer>
    }
}

export { RoomProvider ,RoomConsumer, RoomContext};

