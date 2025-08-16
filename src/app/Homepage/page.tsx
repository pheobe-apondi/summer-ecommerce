import Button from "../Shared-components/Button";
import Footer from "../Shared-components/Footer";
import NavBar from "../Shared-components/Navigation";
import Benefits from "./Components/Benefits/page";
import ProductCategory from "./Components/Categories";
import CategoryCard from "./Components/CategoryCard";
import CountdownTimer from "./Components/FlashSales";
import HeroSection from "./Components/HeroSection";
import NewArrivals from "./Components/New-Arrivals/arrival";
import ProductCard from "./Components/ProductCard/productCard";
import { faMobileScreenButton, faCamera, faDesktop, faHeadphones, faGamepad, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";




function Homepage() {
    return (
        <div>
            <NavBar />

            <div className="ml-55 mb-40 w-350">
                <HeroSection />

                <CountdownTimer />
                <div className="mb-10">
                    <div className="flex font-bold  p-2 text-2xl gap-3 mb-3">
                        <div className="border border-red-700 rounded-md w-4 bg-red-700"></div>
                        <p className="text-red-700">Categories</p>
                    </div>
                    <h3 className=" text-black font-black text-3xl mb-5">Browse by Category</h3>

                    <div className="flex justify-between">
                        <CategoryCard icon={faMobileScreenButton} label="Phones" />
                        <CategoryCard icon={faDesktop} label="Computers" />
                        <CategoryCard icon={faClock} label="Smartwatch" />
                        <CategoryCard icon={faHeadphones} label="Headphones" />
                        <CategoryCard icon={faGamepad} label="Gaming" />




                    </div>

                </div>

                <div className="  mb-20" >
                    <div className="flex font-bold  p-2 text-2xl gap-3 mb-3">
                        <div className="border border-red-700 rounded-md w-4 bg-red-700"></div>
                        <p className="text-red-700">This Month</p>
                    </div>
                    <div className="flex justify-between mb-5 ">
                        <h3 className=" text-black font-black text-3xl">Best Selling Products</h3>
                        <Button buttonText="View All" variant="" />

                    </div>
                    <div className="grid grid-cols-4  gap-6">
                        <ProductCard productImage="/northcoat.png" productTitle="The north coat" price="260" rating={5} reviews={'65'} />
                        <ProductCard productImage="/dufflebag.png" productTitle="Gucci duffelbag" price="960" rating={4} reviews={'65'} />
                        <ProductCard productImage="/summerCooler.png" productTitle="RGB Liquid CPU Cooler" price="160" rating={4.5} reviews={'65'} />
                        <ProductCard productImage="/bookShelf.png" productTitle="Small Book Shelf" price="360" rating={5} reviews={'65'} />

                    </div>

                </div>


                <ProductCategory />

                <div className="grid grid-cols-4 w-350  mb-40 gap-6 mt-20">
                    <ProductCard productImage="/puppyFood.png" productTitle="Breed by Dog Food" price="100" rating={3} reviews={"35"} />
                    <ProductCard productImage="/camera.png" productTitle="CANON EOS DSLR Camera" price="360" rating={4} reviews={"95"} />
                    <ProductCard productImage="/laptop.png" productTitle="Gaming Laptop" price="700" rating={5} reviews={"325"} />
                    <ProductCard productImage="/curologyskincare.png" productTitle="Curology Product Set" price="500" rating={4} reviews={"145"} />
                    <ProductCard productImage="/electricCar.png" productTitle="Kids Electric Var" price="960" rating={5} reviews={"65"} />

                    <ProductCard productImage="/soccerCleats.png" productTitle="Jr.Zoom Soccer Cleats" price="1160" rating={5} reviews={"35"} />
                    <ProductCard productImage="/gamePad.png" productTitle="GP11 Shooter USB Gamepad" price="660" rating={4} reviews={"55"} />
                    <ProductCard productImage="/jacket.png" productTitle="Quilted Satin Jacket" price="660" rating={5} reviews={"55"} />

                </div>
                <NewArrivals />
                <Benefits />
            </div>

            <Footer />
        </div>
    )
}

export default Homepage;