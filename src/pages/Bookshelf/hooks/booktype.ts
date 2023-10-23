export interface Book { 
    id: string;
    linkUrl?: string | undefined;
    imageSrc?: string;
    title: string;
    author: string;
    publishing?: string;
    format?: string;
    isbn?: string;
    genre?: string[];
}