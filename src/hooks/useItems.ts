import { useQuery } from "@tanstack/react-query";
import apiClient from "../clients/apiClient";
import { FetchResponse, Item, ItemQuery } from "./intefaces";

const useItems = (type: string, query: ItemQuery) => useQuery<FetchResponse<Item>, Error>({
    queryKey: [type, query],
    queryFn: () => apiClient
        .get<FetchResponse<Item>>(`/v1/items/type`, {
            params: {
                type: type,
                pageNumber: query.page,
                pageSize: query.pageSize
            }
        })
        .then(res => res.data),
    staleTime: 60 * 1000
});


export default useItems;