import { CardProject } from "@/app/components/cardProject";
import profile from '../../../profile.json'
import { MainProjects } from "@/app/components/MainProjects";

export default function Projects () {
  
  
  return (
    <div className="min-h-full">
      <div className="flex gap-5 flex-col" >
        <h1 className="text-4xl font-bold text-center">Project Name</h1>
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
        <CardProject title={""} description={""} stacks={[]} image={""} link={""} />
      </div>
    </div>
  )
}