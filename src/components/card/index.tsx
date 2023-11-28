import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { Item } from "../../hooks/intefaces";


interface CardProps {
    key: number;
    item: Item;
    onSelectItem: (item: Item) => void
}

const Card = ({ item, onSelectItem }: CardProps) => {
    const location = useLocation();
    const navigate= useNavigate();

    const onClick = () => {
        onSelectItem(item);
        navigate("/item-details", {state: { previousUrl: location.pathname }});
    }

    return (
        <div className="card" onClick={onClick}>
            <img src={item.thumbnail}/>
            <h5>{item.title}</h5>
            {item.description &&
                <div dangerouslySetInnerHTML={{__html: item.description.slice(0, 200)}}/>
            }
        </div>
    )
}

export default Card;