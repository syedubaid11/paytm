import Heading from "../components/heading";
import inputBox1 from "../components/input1";
import Subheading from "../components/subheading";

export default function Signup(){
    return(
        <>
        <div >
            <Heading label={"Sign Up"}/>
            <Subheading label={"Enter your information to create an Account"}/>
        </div>
        <h1 className="text-20xl font-bold underline">
            Hello
        </h1>
        </>
    )
}