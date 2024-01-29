import { useEffect, useState } from "react"


type techDetails = {
  tachName: string
  affinity: number
}
interface ProgressStatusProps {

  frontend?: techDetails[],
  backend?: techDetails[],

}

export function ProgressStatus({ frontend, backend }: ProgressStatusProps) {
  const [progress, setProgress] = useState(25)
  const [techSelected, setTechSelected] = useState(true)
  if (progress === 70) {
    setProgress(70)
  }

  let initialProgress = 1000
  const setInitialProgress = initialProgress - (progress * 10) / 1000 * 630



  function handleSetTech(value: number) {
    value === 1 ?
      setTechSelected(false) :
      setTechSelected(true)
  }


  return (
    <section className=" w-full flex flex-col  md:flex-row lg:px-6 items-center gap-2 justify-between">
      <div className="flex w-full h-[400px] flex-col gap-4 items-center">
        <div className="w-full">

          <div className="flex items-center gap-1 w-full  ">

            <button
              className={techSelected ?
                `w-full p-3 font-bold  rounded-md text-white  bg-blue-700 disabled:text-white  shadow-2xl hover:bg-blue-800 border-4 border-blue-700`
                :
                `w-full p-3 font-bold  rounded-md text-cyan-700 bg-transparent border-4
               border-cyan-700 shadow-2xl hover:border-cyan-900 dark:border-blue-800
                dark:text-white dark:hover:bg-blue-800 transition-colors`}

              onClick={() => handleSetTech(0)}>Front-end</button>
            <button
              className={!techSelected ?
                `w-full p-3 font-bold  rounded-md text-white  bg-blue-700 disabled:text-white  shadow-2xl hover:bg-blue-800 border-4 border-blue-700 `
                :
                `w-full p-3 font-bold  rounded-md text-cyan-700 bg-transparent border-4
               border-cyan-700 shadow-2xl hover:border-cyan-900 dark:border-blue-800
                dark:text-white dark:hover:bg-blue-800 transition-colors`}

              onClick={() => handleSetTech(1)}>Back-end</button>

          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {
            techSelected && frontend ?
              frontend?.map((tech) => (
                <button className="w-full bg-blue-700 p-3 rounded-md font-bold text-white focus-within:bg-blue-800 focus-within:text-gray-900"
                  key={tech.tachName}
                  onClick={() => setProgress(tech.affinity)}
                >{tech.tachName}</button>
              ))
              : backend?.map((tech) => (
                <button className="w-full bg-blue-700 p-3 rounded-md font-bold text-white focus-within:bg-blue-800 focus-within:text-gray-900"
                  key={tech.tachName}
                  onClick={() => setProgress(tech.affinity)}
                >{tech.tachName}</button>
              ))
          }
        </div>
      </div>

      <div className=" flex w-full items-center justify-center ">
        <svg className="transform -rotate-90 w-72 h-72 ">
          <circle
            cx={145}
            cy={145}
            r={100}
            stroke="currentColor"
            strokeWidth={30}
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            cx={145}
            cy={145}
            r={100}
            stroke="currentColor"
            strokeWidth={30}
            fill="transparent"
            strokeDasharray={initialProgress}
            strokeDashoffset={setInitialProgress}
            className="text-blue-700 transition"
          />
        </svg>
        <span className="absolute text-5xl">{progress}%</span>


      </div>
    </section>
  )
}