"use client"

import { useState } from "react"
import { Phone, Send } from "lucide-react"
import Container from "./layout/Container"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      })
      setTimeout(() => setSubmitStatus(""), 3000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-16 md:py-24 bg-background relative">
      {/* Decorative Circle */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#fff8ea] opacity-60 blur-3xl -z-10"></div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading & Phone */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Want to WOW Your Customers
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Call us for fast support to this number
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <a
                  href="tel:+880123456789"
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                >
                  +880 123 456 789
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1 inter">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border-b border-border py-3 px-0 bg-transparent text-para placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1 inter">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border-b border-border py-3 px-0 bg-transparent text-para placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1 inter">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full border-b border-border py-3 px-0 bg-transparent text-para placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1 inter">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full border-b border-border py-3 px-0 bg-transparent text-para placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1 inter">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="4"
                  className="w-full border-b border-border py-3 px-0 bg-transparent text-para placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center text-sm">Message sent successfully! We'll be in touch soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
