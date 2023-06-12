'use client'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material';

const Slider = () => {
    const items = [
        {
            name: 'Image 1',
            image: 'https://cdn.britannica.com/26/188726-131-EF0AAD25/Map-Netherlands.jpg',
        },
        {
            name: 'Image 2',
            image: 'https://i.insider.com/5e15f3543b57e846e47bf09f?width=1136&format=jpeg',
        },
        {
            name: 'Image 3',
            image: 'https://images.ctfassets.net/mivicpf5zews/3FPM38XhqUoqySGgAWGCCG/a8efa0e23a360741b11ae9a962dcfbe1/Holland_Hero_Kinderdijk_1200x600px.jpg',
        },
    ];

    return (
        <Carousel animation="slide">
            {items.map((item, index) => (
                <Item key={index} item={item}/>
            ))}
        </Carousel>
    );
};

const Item = ({item}) => (
    <Paper>
        <img src={item.image} style={{width: "100%", height: "50vh", objectFit: 'contain'}} alt={item.name}/>
        <Button>{item.name}</Button>
    </Paper>
);

export default Slider;
