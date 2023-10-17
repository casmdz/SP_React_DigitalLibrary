// https://thecodingcowboy.notion.site/Interfaces-Home-Component-2dcc8d46769e49299307473cfad0ee7b

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button ( props: ButtonProps ) {
    return (
        <button onClick={ props.onClick } className={ props.className }>
            { props.children }
        </button>
    )
}