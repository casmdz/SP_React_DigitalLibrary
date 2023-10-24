export interface Book {
    bookworm?: string | undefined; 
    id: number;
    imageSrc?: string;
    title: string;
    author: string;
    publishing?: string;
    format?: string;
    isbn?: string;
    genre?: string[];
}