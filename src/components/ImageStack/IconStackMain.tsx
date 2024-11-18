
import { 
  IconBrandCss3, 
  IconBrandHtml5,
  IconBrandJavascript, 
  IconBrandNodejs, 
  IconBrandPrisma, 
  IconBrandReact, 
  IconBrandTypescript, 
  IconBrandTailwind} from "@tabler/icons-react"
import { BiLogoPostgresql } from "react-icons/bi"
import { DiMongodb } from "react-icons/di"
import { SiChakraui, SiExpress, SiMantine , SiNestjs } from "react-icons/si"
import { Image } from '@chakra-ui/react'
import { FaGolang, FaRust } from "react-icons/fa6"
import Marquee from "react-fast-marquee"

const IconStackMain = () => {
  const sizImages = 'w-[50px] h-[50px] md:h-[80px] md:w-[80px] lg:w-[100px] lg:h-[100px] mt-[2rem]';
  return (
    <>
    <Marquee  >
      <div className="flex gap-7 ">
          <IconBrandHtml5         className={`${sizImages} rounded-lg   bg-[#f27f05] text-white`}/>
          <IconBrandCss3          className={`${sizImages} rounded-lg   bg-[#0574f2] text-white`}/>
          <IconBrandJavascript    className={`${sizImages} rounded-lg   bg-[#dcde15] text-white`}/>
          <IconBrandTypescript    className={`${sizImages} rounded-lg   bg-[#0571fa] text-white`}/>
          <FaGolang               className={`${sizImages}   text-[#0bb3ed]`}/>
          <FaRust                 className={`${sizImages}  text-orange-400`}/>
      
          <IconBrandReact         className={`${sizImages}   text-[#04f4fb]`}/>
          <Image                  className={`${sizImages} `} src='src/assets/imagestack/logo-nextjs.png'/>
          <IconBrandNodejs        className={`${sizImages}  text-[#0bde41]`}  />
          <SiExpress              className={`${sizImages}  text-white`}/>
          <SiNestjs               className={`${sizImages}  text-[#f51e66]`}/>
          <IconBrandTailwind      className={`${sizImages}  text-[#04f4fb]`}/>
          <SiChakraui             className={`${sizImages} rounded-full bg-white text-[#19f0b1]`} />
          <SiMantine              className={`${sizImages} rounded-full bg-white text-[#04f4fb]`}/>
      
          <IconBrandPrisma        className={`${sizImages} rounded-full text-[#047989]`} />
          <Image                  className={`${sizImages} rounded-full `} src='src/assets/imagestack/mysql.jpg'/>
          <Image                  className={`${sizImages} rounded-full`} src='https://elysiajs.com/assets/elysia.svg'/>
          <BiLogoPostgresql       className={`${sizImages} rounded-lg bg-white text-[#3267da]`}/>
          <DiMongodb              className={`${sizImages} rounded-full bg-white text-[#01a936] `} />
          <div className="w-2"></div>
       </div>
    </Marquee>
    </>
  )
}

export default IconStackMain