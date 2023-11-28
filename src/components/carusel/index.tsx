import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import Card from "../card";
import { Item } from "../../hooks/intefaces";

interface CarouselProps {
    items: Item[];
    onSelectItem: (item: Item) => void;
}
const Carousel = ({ items, onSelectItem }: CarouselProps) => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <Slider {...settings} >
                {
                    items.map((item, index) =>
                        <Card key ={index} item={item}
                              onSelectItem={(item) => onSelectItem(item)}
                        />
                    )
                }
            </Slider>
        </div>
    )

};

export default Carousel;