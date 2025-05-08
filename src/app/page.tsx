import Link from "next/link"
import Image from "next/image"
import { Activity, Clock, MapPin, Phone, Users, ArrowRight, Calendar, Award, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container px-10 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">PhysioClinic</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-teal-600 transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Contact
            </a>
          </nav>
          <Link href="/auth/login">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Patient Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container px-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Your Journey to Recovery Starts Here
            </h1>
            <p className="text-lg text-gray-600">
              PhysioClinic provides expert physiotherapy services to help you recover, strengthen, and prevent injuries.
              Our team of certified professionals is dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/login">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Access Your Account
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Book Appointment
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Physiotherapist helping a patient"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of physiotherapy treatments tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sports Rehabilitation",
                description: "Specialized treatment for sports-related injuries to get you back in the game.",
                icon: <Activity className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Manual Therapy",
                description: "Hands-on techniques to reduce pain, improve movement and promote healing.",
                icon: <Users className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Chronic Pain Management",
                description: "Effective strategies to manage and reduce persistent pain conditions.",
                icon: <MessageSquare className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Post-Surgery Rehabilitation",
                description: "Guided recovery programs after surgical procedures for optimal healing.",
                icon: <Award className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Geriatric Physiotherapy",
                description: "Specialized care for older adults to improve mobility and quality of life.",
                icon: <Calendar className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Preventive Care",
                description: "Proactive approaches to prevent injuries and maintain physical wellbeing.",
                icon: <Clock className="h-10 w-10 text-teal-600" />,
              },
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our clinic team" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About PhysioClinic</h2>
              <p className="text-gray-600">
                Founded in 2010, PhysioClinic has been a trusted provider of physiotherapy services for over a decade.
                Our mission is to deliver personalized care that addresses the root cause of your condition, not just
                the symptoms.
              </p>
              <p className="text-gray-600">
                Our team consists of highly qualified physiotherapists with specialized training in various areas of
                physical therapy. We continuously update our knowledge and techniques to provide you with the most
                effective treatments available.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span className="font-medium">Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-teal-600" />
                  <span className="font-medium">Certified Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <span className="font-medium">Flexible Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-teal-600" />
                  <span className="font-medium">Personalized Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dont just take our word for it. Heres what our patients have to say about their experience at
              PhysioClinic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "After my knee surgery, I was worried about recovery. The team at PhysioClinic guided me through every step, and now I'm back to my active lifestyle.",
                name: "Sarah Johnson",
                title: "Sports Injury Patient",
              },
              {
                quote:
                  "I've struggled with chronic back pain for years. The personalized treatment plan I received has made a tremendous difference in my daily life.",
                name: "Michael Chen",
                title: "Chronic Pain Patient",
              },
              {
                quote:
                  "The preventive care program helped me improve my posture and strengthen my core. I haven't had any back issues since!",
                name: "Emma Rodriguez",
                title: "Preventive Care Patient",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <p className="italic text-gray-600 mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to schedule an appointment? Reach out to us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-gray-600">123 Healing Street, Wellness City, WC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8am - 7pm</p>
                  <p className="text-gray-600">Saturday: 9am - 2pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Map location of our clinic"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/login">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Access Patient Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold">PhysioClinic</span>
              </div>
              <p className="text-gray-400">Providing expert physiotherapy care since 2010.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sports Rehabilitation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Manual Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Chronic Pain Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Post-Surgery Rehabilitation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Patient Portal</h3>
              <p className="text-gray-400 mb-4">
                Access your treatment plans, appointments, and more through our secure patient portal.
              </p>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} PhysioClinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
