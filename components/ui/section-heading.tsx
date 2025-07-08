interface SectionHeadingProps {
    title: string
    subtitle?: string
  }
  
  export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          {title}
        </h2>
        {subtitle && <p className="text-white max-w-2xl mx-auto">{subtitle}</p>}
        <div className="w-35 h-1 bg-primary mx-auto mt-4 rounded-full"/>
      </div>
    )
  }
  