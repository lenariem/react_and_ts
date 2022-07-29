import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct;
}

export default function Product({
    product: { title, image, price, description, rating },
}: ProductProps) {
    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";
    const btnClasses = ["py-2 px-4 border", btnBgClassName];

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={image} className="w-1/6" alt={title} />
            <p>{title}</p>
            <p className="font-bold">{price}</p>
            <button
                className={btnClasses.join(" ")}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? "Hide Details" : "Show Details"}
            </button>

            {details && (
                <div>
                    <p>{description}</p>
                    <p>
                        Rate:{" "}
                        <span style={{ fontWeight: "bold" }}>
                            {rating.rate}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}
