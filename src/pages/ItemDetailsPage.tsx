import {useLocation, useNavigate} from "react-router-dom";
import "../index.css";
import { Item } from "../hooks/intefaces";


interface ItemDetailsPageProps {
    item: Item | null;
}

const ItemDetailsPage = ({ item }: ItemDetailsPageProps) => {
    const location = useLocation();
    const previousUrl: string = location.state.previousUrl;
    const navigate = useNavigate();

    const onClick = () => {
        navigate(previousUrl);
    }

    return (
        <div className="item-details-page">
            <button type="button" className="btn btn-outline-secondary" onClick={onClick}>Back</button>
            {item &&
                <div className="item-details-page-details">
                    <img src={item.thumbnail}/>
                    <h3>{item.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: item.description}}/>
                </div>}
        </div>
    )
}

export default ItemDetailsPage;