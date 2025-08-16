"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

import { width } from '@fortawesome/free-brands-svg-icons/fa11ty';
import Image from 'next/image';



interface ProductProps {
    productImage: string,
    productTitle: string,
    price: string,
    reviews: String,
    rating: number;



}


function ProductCard(
    { productImage,
        productTitle,
        price, reviews,
        rating }: ProductProps
) {
    const defaultRating = Number(rating) || 0;
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };


    return (

        <div className='bg-gray-100 w-70  gid place-items-center pt-4 rounded-md p-2 shrink-0'>
            <div className=' '>
                <div className='flex gap-10'>


                <Image src={`${productImage}`} alt='product Image' width={150} height={150} className='ml-10'/>
                <div className=' '>
                    <div>
                       
                        <button
                            onClick={toggleFavorite}
                            className={`w-8 h-8 flex items-center justify-center    transition-colors
            ${isFavorite ? "text-red-500" : "text-gray-500"}`}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>

                        <button
                            onClick={() => alert(`Viewing ${productTitle}`)}
                            className="w-8 h-8 flex items-center justify-center r text-gray-400"
                        >
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                    </div>

                                    </div>





                </div>

                <h3 className='text-black mt-3'>{productTitle}</h3>
                <div className='flex gap-4 mb-3'>
                    <p className='text-red-700 font-black'>${price}</p>
                    <div className='ml-2 mr-3'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                width={40}
                                color={index < defaultRating ? "#ffd700" : "#ccc"}
                                style={{ marginRight: "4px" }}
                            />
                        ))}
                    </div>
                    <p className='text-black'>({reviews})</p>
                </div>

            </div>
        </div>

    )
}


export default ProductCard;