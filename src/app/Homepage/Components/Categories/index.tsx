import Button from "@/app/Shared-components/Button";
import Image from "next/image";
import Link from "next/link";

export default function ProductCategory() {
    return (
        <div className=" bg-black  h-110 ">
            <Image src="/categories.png" alt="speakers" width={1000} height={300} className="rounded-md ml-50 " />
            <div className="relative bottom-80 ml-10 " >
                <p className="text-green-600 font-bold">Categories</p><br />
                <h2 className="text-white font-bold text-5xl  ">Enhance Your <br /> Music Experience</h2> <br />
                <Link href="/signup">
                    <Button buttonText="Buy Now" variant="" />

                </Link>
            </div>
        </div>
    )



}