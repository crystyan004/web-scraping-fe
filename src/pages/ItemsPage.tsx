import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import useItems from "../hooks/useItems";
import Carousel from "../components/carusel";
import { Item } from "../hooks/intefaces";

interface ItemsPageProps {
    type: string;
    onSelectItem: (item: Item) => void;
}

const ItemsPage = ({ type, onSelectItem }: ItemsPageProps) => {
    const pageSize = 10;
    const [page, setPage] = useState(0);

    const {data, error, isLoading } = useItems(type, {page, pageSize});

    const handlePaginationClick = (selectedPage: { selected: number }) => {
        setPage(selectedPage.selected);
    }

    if(isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <div style={{padding: "20px"}}>
            <h1 className="text-center">Latest <span className="badge bg-info">{type}</span></h1>
            {data && <div>
                <Carousel items={data?.items}
                          onSelectItem={(item) => onSelectItem(item)}
                />

                <div style={{padding: "40px"}}>
                    <ReactPaginate
                        pageCount={data.totalPages}
                        containerClassName={"pagination justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active"}
                        onPageChange={handlePaginationClick}
                    />
                </div>
            </div>
            }
        </div>
    )
};

export default ItemsPage;