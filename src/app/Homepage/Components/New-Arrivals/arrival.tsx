import Image from 'next/image';
import Link from 'next/link';




function NewArrivals() {
    return (
        <div>
            <div className="flex font-bold  p-2 text-2xl gap-3">
                <div className="border border-red-700 rounded-md w-4 bg-red-700"></div>
                <p className="text-red-700">Featured</p>
            </div>
            <h2 className='text-black text-4xl  font-bold  mb-6'>New Arrival</h2>
            <div className='flex   gap-10 justify-center '>
                <div>
                    <Image src="/playstation.png" alt='playstation' width={700} height={300} />
                    <div className='text-white relative  bottom-40 pl-10'>
                        <h3 className='font-black text-3xl'>Playstation 5</h3>
                        <p className='text-1xl'>Black and white version of the PS5 coming out on sale</p><br />
                        <Link href="/" className='underline'>Shop Now</Link>
                    </div>

                </div>
                <div className=''>
                    <div className=' '>
                        <Image src="/womenscollection.png" alt='collection' width={650} height={600} className='' />

                        <div className='text-white relative bottom-30  pl-10'>
                            <h3 className='font-black'>Women's Collection</h3>
                            <p>Featured woman collections that <br />give you another vibe</p>
                            <Link href="/" className='underline'>Shop Now</Link>
                        </div>
                    </div>
                    <div className='flex  gap-10  '>
                        <div>
                            <Image src="/speakers.png" alt='collection' width={300} height={200} />
                            <div className='text-white relative bottom-25 pl-10' >
                                <h3 className='font-black'>Speakers</h3>
                                <p>Amazon wireless speakers</p>
                                <Link href="/" className='underline'>Shop Now</Link>

                            </div>




                        </div>
                        <div>
                            <Image src="/perfurme.png" alt='collection' width={300} height={200} />
                            <div className='text-white relative bottom-25  pl-10' >
                                <h3 className='font-black'>Perfurmes</h3>
                                <p>GUCCI INTENSE OUD EDP</p>
                                <Link href="/" className='underline'>Shop Now</Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewArrivals;