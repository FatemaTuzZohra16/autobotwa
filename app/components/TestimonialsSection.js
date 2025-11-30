import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "This digital marketing platform has transformed how we approach our campaigns. The insights are invaluable.",
      name: "Sarah Anderson",
      role: "Marketing Director",
      avatar: "SA",
      color: "bg-blue-500",
    },
    {
      id: 2,
      quote: "We've seen a 250% increase in conversion rates since implementing their strategies. Highly recommend!",
      name: "Michael Chen",
      role: "E-commerce Manager",
      avatar: "MC",
      color: "bg-purple-500",
    },
    {
      id: 3,
      quote: "The customer support and resources provided are top-notch. They truly care about your success.",
      name: "Jessica Taylor",
      role: "Brand Strategist",
      avatar: "JT",
      color: "bg-blue-600",
    },
  ]

  return (
    <section className="py-16 px-4 md:py-24 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance inter">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-para max-w-2xl mx-auto">
            See what our clients say about their experience with our digital marketing solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-600 text-yellow-600" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-para mb-6 leading-relaxed text-sm md:text-base">"{testimonial.quote}"</p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className={`${testimonial.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm`}
                >
                  {testimonial.avatar}
                </div>

                {/* Name and Role */}
                <div>
                  <p className="font-semibold text-card-foreground text-sm md:text-base inter">{testimonial.name}</p>
                  <p className="text-para text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
