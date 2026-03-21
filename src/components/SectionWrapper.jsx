export default function SectionWrapper({ children, id }) {
    return (
        <section
            id={id}
            className="max-w-6xl mx-auto px-6 md:px-12 py-20"
        >
            {children}
        </section>
    )
}