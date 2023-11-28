import React, { useRef, useState } from "react";

const SearchPage = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div style={{padding: "20px"}}>
            <h1 className="text-center">Search</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) {
                    setSearchKeyword(ref.current.value);
                }
            }}>
                <input type="text" ref={ref}/>
                <button>Search</button>
            </form>
        </div>
    )
};

export default SearchPage;