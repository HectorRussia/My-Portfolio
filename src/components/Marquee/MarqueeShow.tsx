import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandTypescript } from "@tabler/icons-react";
import Marquee from "react-fast-marquee";
const MarqueeShow = () => {
    const sizImages = 'w-[50px] h-[50px] md:h-[80px] md:w-[80px] lg:w-[100px] lg:h-[100px]';
  return (
   <>
        <Marquee>
            <div className="flex gap-[2rem] mt-[2rem]">
                <IconBrandHtml5         className={`${sizImages} rounded-lg   bg-[#f27f05] text-white`}/>
                <IconBrandCss3          className={`${sizImages} rounded-lg   bg-[#0574f2] text-white`}/>
                <IconBrandJavascript    className={`${sizImages} rounded-lg   bg-[#dcde15] text-white`}/>
                <IconBrandTypescript    className={`${sizImages} rounded-lg   bg-[#0571fa] text-white`}/>
            </div>
        </Marquee>
   </>
  )
}

export default MarqueeShow