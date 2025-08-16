
import Image from "next/image";
import NavBar from "../Shared-components/Navigation";
import Button from "../Shared-components/Button";

export default function SignUp() {
    return (
        <div >
            <NavBar/>
            <div className="flex gap-20 text-black  mt-5">
                <div className="bg-blue-100 h-195 w-230">
                    <Image src="/signupSIdeImage.png" alt="product" width={600} height={500} className="ml-30" />
                </div>
                <div className="mt-30">
                    <h3 className="text-4xl">Create an account</h3>
                    <p>Enter your details below</p>
                    <input placeholder="Name" className="mt-10" /><br/>
                    <input placeholder="Email Address" className="mt-4" /><br/>
                    <input placeholder="Password"   className="mt-4 mb-4"/> <br/>
                    <Button buttonText="Create Account" variant="" /><br/><br/>
                    <Button buttonText="Sign Up with Google" variant="bordered"/>


                </div>
            </div>
        </div>
    )
}