import { CardProject } from '@/components/CardProject'
import profile from '../../../profile.json'
import { MainProjects } from '@/components/MainProjects'

export default function Projects() {
  return (
    <div className="min-h-full">
      <div className="flex gap-5 max-xl:flex-col">
        {profile.projects.map(project => (
          <MainProjects
            key={project.name}
            description={project.description}
            name={project.name}
            frontend={project.frontend}
            urlDemo={project.urlDemo}
            urlGithub={project.urlGithub}
            urlImage={project.urlImage}
          />
        ))}
        <CardProject
          title={''}
          description={''}
          stacks={[]}
          image={''}
          link={''}
        />
      </div>
    </div>
  )
}
