import React, {useState} from 'react';
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import SearchPage from "./pages/SearchPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import { Item } from "./hooks/intefaces";

function App() {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/"
                       element={<ItemsPage type="news"
                                           onSelectItem={(item) => setSelectedItem(item)}
                       />
                       }
                />
                <Route path="/news"
                       element={<ItemsPage type="news"
                                           onSelectItem={(item) => setSelectedItem(item)}
                       />}
                />
                <Route path="/videos"
                       element={<ItemsPage type="videos"
                                           onSelectItem={(item) => setSelectedItem(item)}
                       />}
                />
                <Route path="/item-details"
                       element={<ItemDetailsPage item={selectedItem}/>}/>
                <Route path="/search"
                       element={<SearchPage/>}
                />
            </Routes>
        </div>
    );
}

export default App;
