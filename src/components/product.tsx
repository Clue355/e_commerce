import Image from "next/image";

interface Props {
    id: string;
    title: string;
    desc: string;
    price: number;
    image: string;
}

export default function Product({ id, title, desc, price, image }: Props) {
    return (
        <div key={id} className="mr-20">
            <Image src={image} width={300} height={300} alt="clothing" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>{price}</p>
        </div>
    );
}
