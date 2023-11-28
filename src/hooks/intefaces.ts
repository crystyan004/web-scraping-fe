export interface Item {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
    publishDate: string;
    type: string;
}

export interface FetchResponse<T> {
    items: T[];
    first: boolean;
    last: boolean;
    totalPages: number;
}

export interface ItemQuery {
    page: number;
    pageSize: number;
}
