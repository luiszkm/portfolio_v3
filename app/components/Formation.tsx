
import { AiOutlineCheck} from 'react-icons/ai'

interface FormationProps {
  date: string
  url: string
  name: string
  institution: string
}

export function Formation ({date, url, name, institution}: FormationProps) {

  return(
    <div className="flex flex-col items-center w-full">
      <strong className='flex items-center gap-1'> <AiOutlineCheck />{institution}</strong>
      <span>{date}</span>
      <a href={url} 
      target='_blank' rel="noreferrer">
        {name}
      </a>
    </div>
  )
}