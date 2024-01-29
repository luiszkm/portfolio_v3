import Image from "next/image";



export function Avatar () {

  return(
    <div className=" p-1 flex items-center justify-center rounded-full bg-gradient-to-tl from-purple-800 via-Fuchsia-800 to-pink-700 " >
      <Image width={176} height={176} className='w-44 h-44 rounded-full '
      alt="" src={"https://github.com/luiszkm.png"} />
    </div>
  )
}