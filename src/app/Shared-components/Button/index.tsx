interface ButtonProps{
    buttonText:string,
     variant: string,

}


const Button = (
    {buttonText, variant}: ButtonProps) => {
        const variantSwitch = (variant:string) =>{
            switch(variant){
                case "primary":
                    return "bg-green-700  text-white"
                case "bordered":
                    return " text-black border border-black text-black"
                default:
                    return "bg-red-500 text-white"


            }
        };
const variantClass = variantSwitch(variant);
    return ( 
        <button className={`${variantClass} px-[16px] py-[12px]  rounded-sm cursor-pointer w-50`}

        >
            {buttonText}
        </button>
    );
};
export default Button;






