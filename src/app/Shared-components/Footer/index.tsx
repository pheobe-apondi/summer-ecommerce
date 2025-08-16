import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter ,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
 

function Footer() {

    return (
        <div className="bg-black w-screen   ">

            <div className="flex   justify-between px-40 leading-10  mb-10 pt-10">

                <div>
                    <h2 className="text-2xl text-white font-medium mb-5">Exclusive</h2>
                    <h4>Subscribe</h4>
                    <h4>Get 10% off your first order</h4>
                    <div className=" border border-white text-white placeholder-wheat flex  px-2 rounded-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent flex-grow placeholder-wheat text-white py-2 outline-none ml-3"
                        />
                        <button type="submit" className=" focus:outline-none">
                            <FontAwesomeIcon icon={faPaperPlane} color="white" width="20px" />
                        </button>
                    </div>
                </div>



                <div>
                    <h2 className="text-2xl text-white font-medium mb-5">Support</h2>
                    <p>111 Bijoy Sarani, Dhaka, <br/>DH 1515, Bangladesh</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-8888-9999</p>

                </div>


                <div>
                    <h2 className="text-2xl text-white font-meidum mb-5" >Account</h2>
                    <p>My Account</p>
                    <p>Login/Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>



                <div>
                    <h2 className="text-2xl text-white font-meidum mb-5">Quick Link</h2>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>



                <div>
                    <h2 className="text-2xl text-white font-medium mb-5">Download App</h2>
                    <p className='text-2xl mb-1 text-gray-500'>Save $3 with App New User Only</p>

                    <div className="flex   items-center justify-between space-x-4">
                            <Image src="/qrCode.png"
                                 alt='qr code'
                                 width={200}
                                 height={200}/>

                             <div>
                                 <div className='flex border  border-white px-2 rounded-md w-50 '>
                                     

                                     <div className='leading-5 py-2'>
                                             <p className=' text-2xs'>GET IT ON</p>
                                          <p className="">Google Play</p>
                                     </div>
                                  </div>

                                  <div  className='flex border  border-white px-2 rounded-md mt-3.5'>
                                     

                                       <div className='leading-5 py-2'>
                                            <p className=''>Download on the </p>
                                          <p className="">App Store</p>
                                       </div>
                                    </div>

                            
                             </div>
                     </div>

                     <div className='flex  gap-10 mt-3 ml-5 '>
                        <FontAwesomeIcon icon={faFacebook} width={30}/>
                        <FontAwesomeIcon icon={faTwitter} width={30}/>
                        <FontAwesomeIcon icon={faInstagram} width={30}/>
                        <FontAwesomeIcon icon={faLinkedin}width={30}/>



                     </div>
                </div>





            </div>

           <div className='mb-4'>
             <hr className=''></hr>
            <p className='text-center  text-gray-500 mb-'>© Copyright Rimel 2022. All rights reserved</p>

           </div>
           

        </div>


    )




}

export default Footer;