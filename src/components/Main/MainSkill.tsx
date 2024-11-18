import IconStackMain from '../ImageStack/IconStackMain'

const MainSkill = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center mt-[1rem]">
                    <h1 className="text-1xl ml-[1rem] md:text-4xl lg:text-5xl text-white text-center font-bold text-balance md:mt-[1rem] lg:mt-[1rem]">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-indigo-600">Skills</span>
                    </h1>
                    <IconStackMain/>
        </div>
    </>
  )
}

export default MainSkill