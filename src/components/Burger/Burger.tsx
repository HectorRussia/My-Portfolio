import { useState } from 'react'
import { MenuToggle } from './MenuToggle';
import { useMenuAnimation } from '../../Hooks/useMenuAnimation';
import "./styles.css";

const BurgerFramer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    return (
        <div ref={scope} >
            <nav className="menu w-screen text-[1.3rem] md:text-3xl bg-gray-800 h-[30rem] md:h-[45rem] rounded-r-lg ">
                <ul  className='md:ml-[1rem]'>
                    <li className='py-[0.7rem] md:py-[2rem]'>Home</li>
                    <li className='py-[0.7rem] md:py-[2rem]'>About Me</li>
                    <li className='py-[0.7rem] md:py-[2rem]'>Skill</li>
                    <li className='py-[0.7rem] md:py-[2rem]'>Projects</li>
                    <li className="py-[0.7rem] md:py-[2rem]">Resume</li>
                    <li className='py-[0.7rem] md:py-[2rem]'>Contact</li>
                </ul>
            </nav>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
  )
}

export default BurgerFramer