import Image from "next/image";



export function Avatar () {

  return(
    <div className=" p-1 flex items-center justify-center rounded-full bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200
    dark:from-purple-800 dark:via-Fuchsia-800 dark:to-pink-700 " >
      <Image width={176} height={176} className='w-44 h-44 rounded-full '
      alt="" src={"https://github.com/luiszkm.png"} />
    </div>
  )
}