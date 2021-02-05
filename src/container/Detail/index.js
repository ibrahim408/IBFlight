import React from 'react';
import DetailView from '../../component/Detail'

const data = [
    {
        key: '1',
        airline: 'American Airlines',
        price: '851',
        going: {
            flyingFrom: 'LAX',
            flyingTo: 'JFK',
            departureTime: '7:00 am',
            arrivalTime: '3:23 pm',
            flightLength: '5h 23m', 
        },
        returning: {
            flyingFrom: 'JFK',
            flyingTo: 'LAX',
            departureTime: '6:00 am',
            arrivalTime: '9:21 pm',
            flightLength: '6h 21m', 
        }
    },
    {
        key: '2',
        airline: 'JetBlue Airlines',
        price: '721',
        going: {
            flyingFrom: 'LAX',
            flyingTo: 'JFK',
            departureTime: '7:35 am',
            arrivalTime: '3:57 pm',
            flightLength: '5h 22m', 
        },
        returning: {
            flyingFrom: 'JFK',
            flyingTo: 'LAX',
            departureTime: '6:30 am',
            arrivalTime: '9:25 pm',
            flightLength: '5h 55m', 
        }      
    }
]

const Detail = () => {
    return (
        <DetailView flights={data} />
    )
}

export default Detail;