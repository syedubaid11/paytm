import Heading from "../components/heading";
import InputBox from "../components/input";
import Subheading from "../components/subheading";

export default function Signup(){
    return(
        <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-80 ">
            <Heading label={"Sign Up"}/>
            <Subheading label={"Enter your information to create an Account"}/>
            
            <InputBox label={"Enter your First Name"}placeholder={"First Name"} />
            <InputBox label={"Enter your Last Name"}placeholder={"Last Name "} />
            <InputBox label={"Enter your Email"}placeholder={"Email"} />
            <InputBox label={"Enter your Password"}placeholder={"Password"} />
        
            <button type="button" className="m-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
        </div>
        
        </div>
    )
} 