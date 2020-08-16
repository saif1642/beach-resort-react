import React, { useContext } from 'react';
import { RoomContext } from '../context';
import { Title } from './Title';

export const RoomFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize} = context;

    const getUnique = (items,value) => {
        return [...new Set(items.map(item => item[value]))];
    }

    let types = getUnique(rooms,'type');
    types = ['all',...types];
    
    let people = getUnique(rooms,'capacity');
    return (
        <div className="filter-container">
            <Title title="room search" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {
                            types.map((item,index) => {
                                return <option value={item} key={index}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                        name="capacity" 
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {
                            people.map((item,index) => {
                                return <option value={item} key={index}>{item}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">
                        room price is ${price}
                    </label>
                    <input 
                        type="range" 
                        name="price"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                    />
                    
                </div>
            </form>
        </div>
    )
}
