import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import slider from './helper/slider.json';

function Caro() {
    return (
        <Carousel 
        duration={1000} 
        animation='slide'
        sx={{ width: '800px', position: 'sticky'}} // sticky !
        >
            {
                slider.map(item => <Item key={item.id} item={item} />)
            }
        </Carousel>
    )
}
export default Caro