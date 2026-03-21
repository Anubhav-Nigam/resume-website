import SectionWrapper from "../components/SectionWrapper"
import TimelineItem from "../components/TimelineItem"
import { experience } from "../data/experience"

export default function Experience() {
  return (
    <SectionWrapper id="experience">

      <h2 className="text-3xl font-semibold mb-4">
        Experience
      </h2>

      <p className="text-[var(--color-muted)] max-w-2xl mb-10">
        My professional journey over the years, focusing on building
        scalable applications and improving frontend architecture.
      </p>

      <div>
        {experience.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>

    </SectionWrapper>
  )
}