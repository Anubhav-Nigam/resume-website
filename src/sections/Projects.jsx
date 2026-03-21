import SectionWrapper from "../components/SectionWrapper"
import ProjectCaseStudy from "../components/ProjectCaseStudy"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <SectionWrapper id="projects">

      <h2 className="text-3xl font-semibold mb-10">
        Projects
      </h2>

      <p className="text-[var(--color-muted)] max-w-2xl mb-10">
        Selected work showcasing my experience in building scalable frontend
        systems and improving application performance.
      </p>
      
      <div>
        {projects.map((project, index) => (
          <ProjectCaseStudy key={index} project={project} />
        ))}
      </div>

    </SectionWrapper>
  )
}