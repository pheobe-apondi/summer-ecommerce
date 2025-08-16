import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast ,faHeadphones, faShield } from '@fortawesome/free-solid-svg-icons';


function Benefits(){
    return(
        <div className='flex justify-between text-black  '>
            <div className='p-10'> 
                    <FontAwesomeIcon icon={faTruckFast} width={400} color="white" className='border-10 border-gray-400 rounded-full bg-black p-1 ml-20'/>
                <h2 className='font-bold'>FREE AND FAST DELIVERY</h2>
                <p>Free delivery for all orders over $140</p>

            </div>
            <div className='p-10'>
                 <FontAwesomeIcon icon={faHeadphones}width={60} color="white" className='justify-center border-10 border-gray-400 rounded-full bg-black p-1 ml-20'/>
                  <h2 className='font-bold'>24/7 CUSTOMER CARE</h2>
                <p className='text-black'>Friendly 24/7 customer support</p>


            </div>
            <div className='p-10' >
                <FontAwesomeIcon icon={faShield} width={60} color="white" className='border-10 border-gray-400 rounded-full bg-black p-1 ml-20'/>
                 <h2 className='text-black font-black'>MONEY BACK GUARANTEE</h2>
                <p className='text-black'>We rearn money within 30 days</p>


            </div>
        </div>
    )
}

export default Benefits;