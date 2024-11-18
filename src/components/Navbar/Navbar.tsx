import { IconBrandDiscord, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import BurgerFramer from "../Burger/Burger";

const Navbar = () => {
    return (
        <div className=" bg-gray-800 fixed lg:sticky top-0 left-0 right-0 z-50 border-3 ">
            <div className="flex justify-between items-center lg:justify-end gap-[2rem] text-white ">
                <div 
                    className= 'block lg:hidden py-[3rem] text-white cursor-pointer '>
                    <BurgerFramer/>
                </div>
                <div className="flex gap-[1rem] mr-[1rem] mb-[0.5rem]">
                    <div className=" block lg:hidden text-4xl "><IconBrandGithub stroke={2} /></div>
                    <div className=" block lg:hidden text-4xl "><IconBrandLinkedin stroke={2} /></div>
                    <div className=" block lg:hidden text-4xl "><IconBrandDiscord stroke={2} /></div>
                </div>
           
                <div className="m-[2rem] hidden lg:block  text-2xl">Home</div>
                <div className="m-[2rem] hidden lg:block  text-2xl">About Me</div>
                <div className="m-[2rem] hidden lg:block  text-2xl">Project</div>
                <div className="m-[2rem] hidden lg:block  text-2xl">Resume</div>
                <div className="m-[2rem] hidden lg:block  text-2xl">Contact</div>
            </div>
        </div>
    )
}

export default Navbar
