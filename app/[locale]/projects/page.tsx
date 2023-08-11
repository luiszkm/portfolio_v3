'use client'
import { useParams, usePathname } from "next/navigation"

interface IProjects {
  params: {
    slug: string
  }
}


export default function Projects () {
  const p =usePathname()
  console.log(p);
  
  return (
    <div className="flex items-center gap-4 p-3 w-full">
      aaaa
    </div>
  )
}