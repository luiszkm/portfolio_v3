import { Progress } from '@/components/ui/progress'
import { motion } from 'framer-motion'
export function Skills() {

  

  return (
    <div
      className="md:h-[424px]  w-full flex items-center justify-center rounded-2xl p-2 md:mt-14 bg-gradient-to-br 
    from-purple-800 via-Fuchsia-800 to-pink-700"
    >
      <section
        className=" h-full w-full rounded-2xl p-4 bg-white flex 
        items-center flex-row gap-5
      dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:via-gray-800"
      >
        <div className="w-full h-full flex flex-col gap-3">
          <motion.strong
            animate={{ x: 0 , opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ duration: 1, type: 'tween', stiffness: 50 }}
          >
            Back-End
          </motion.strong>
          <div className="flex gap-2 items-center ">
            <span>C#</span>
            <Progress value={100} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="">.NET </span>
            <Progress value={85} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">ASP.NET Core</span>
            <Progress value={75} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">EF Core</span>
            <Progress value={70} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">TDD</span>
            <Progress value={95} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">DDD</span>
            <Progress value={80} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">Clean Architecture</span>
            <Progress value={76} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">Microservices</span>
            <Progress value={60} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">Go lang</span>
            <Progress value={40} />
          </div>
        </div>
        <div className="w-full h-full  flex flex-col gap-3">
          <motion.strong
               animate={{ x: 0 , opacity: 1 }}
               initial={{ x: -40, opacity: 0 }}
            transition={{ duration: 1, type: 'tween', stiffness: 50 }}
          >
            Front-End
          </motion.strong>
          <div className="flex gap-2 items-center ">
            <span>Typescript</span>
            <Progress value={90} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="">React </span>
            <Progress value={85} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">Next</span>
            <Progress value={76} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">Tailwind</span>
            <Progress value={88} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">UI/UX</span>
            <Progress value={60} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">SEO</span>
            <Progress value={50} />
          </div>
          <motion.strong
                animate={{ x: 0 , opacity: 1 }}
                initial={{ x: -40, opacity: 0 }}
            transition={{ duration: 1, type: 'tween', stiffness: 50 }}
          >
            Devops
          </motion.strong>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">Docker</span>
            <Progress value={70} />
          </div>
          <div className="flex gap-2 items-center">
            <span className="min-w-fit">Kubernetes</span>
            <Progress value={55} />
          </div>
        </div>
      </section>
    </div>
  )
}
