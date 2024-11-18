import  Lottie  from 'lottie-react';
import MainIntro1 from "./MainIntro1";
import MainIntro2 from "./MainIntro2";
import MainExp from "./MainExp";
import MainSkill from "./MainSkill";
import education  from '../../json/education.json';
import MainProject from './MainProject';
const Main = () => {
  
  return (
    <>
      <div className="relative h-screen mt-[6rem] lg:mt-[0rem] ">
          <div className="absolute inset-0 h-screen">
                <MainIntro1/>
                <MainIntro2/>
                <MainExp/>
                <MainSkill/>
                <MainProject/>
                 {/*  Education */}
                 <div className="relative flex flex-col justify-center items-center mt-[3rem]"> 
                  <h1 className="text-1xl ml-[1rem] md:text-4xl lg:text-5xl text-white font-bold text-balance md:mt-[1rem] lg:mt-[1rem] ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-indigo-600">Education</span> 
                  </h1>
                  <Lottie animationData={education} loop={true} className="h-[15rem] md:h-[25rem] lg:h-[25rem] mt-[1rem] "></Lottie>
                </div>
                 {/*Contact with me*/}
          </div>
      </div>
    </>
   
  )
}

export default Main