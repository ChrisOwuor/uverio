import { ExternalLink, Github, Calendar, Tag, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Smart Learning Management System",
      description:
        "A comprehensive online learning platform with real-time collaboration tools, video conferencing, and AI-powered content recommendations.",
      image:
        "https://www.researchgate.net/profile/Hafiz-Iqbal/publication/343974686/figure/fig3/AS:922259945268736@1596644360873/A-schematic-illustration-of-the-smart-learning-management-system-framework.png",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "TensorFlow"],
      category: "Web Application",
      date: "2024",
      features: [
        "Real-time video conferencing",
        "AI-powered content suggestions",
        "Interactive whiteboard",
        "Progress analytics dashboard",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "IoT Environmental Monitoring",
      description:
        "Complete IoT solution for monitoring air quality, temperature, and humidity with real-time alerts and data visualization.",
      image:
        "https://images.pexels.com/photos/15470542/pexels-photo-15470542.jpeg",
      technologies: ["Arduino", "React", "InfluxDB", "MQTT", "AWS IoT"],
      category: "IoT Hardware",
      date: "2024",
      features: [
        "Real-time sensor data collection",
        "Cloud-based data storage",
        "Mobile app for monitoring",
        "Automated alert system",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "Healthcare Management Dashboard",
      description:
        "HIPAA-compliant healthcare dashboard for patient management, appointment scheduling, and medical record management.",
      image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "AWS"],
      category: "Enterprise Software",
      date: "2023",
      features: [
        "HIPAA-compliant architecture",
        "Appointment scheduling system",
        "Electronic health records",
        "Insurance integration",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "Smart Home Automation Hub",
      description:
        "Central hub for controlling smart home devices with voice commands, automation rules, and energy monitoring.",
      image:
        "https://images.pexels.com/photos/30170004/pexels-photo-30170004.jpeg",
      technologies: [
        "Raspberry Pi",
        "Python",
        "React Native",
        "MQTT",
        "TensorFlow",
      ],
      category: "IoT Hardware",
      date: "2023",
      features: [
        "Voice control integration",
        "Custom automation rules",
        "Energy usage monitoring",
        "Cross-platform mobile app",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "E-commerce Analytics Platform",
      description:
        "Advanced analytics platform for e-commerce businesses with predictive insights and automated reporting.",
      image:
        "https://images.pexels.com/photos/7414211/pexels-photo-7414211.jpeg",
      technologies: ["React", "Python", "Apache Kafka", "Redis", "PostgreSQL"],
      category: "Data Platform",
      date: "2023",
      features: [
        "Real-time sales analytics",
        "Predictive inventory management",
        "Customer behavior analysis",
        "Automated report generation",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "Blockchain Supply Chain Tracker",
      description:
        "Blockchain-based solution for tracking products through the supply chain with transparency and authenticity verification.",
      image:
        "https://images.pexels.com/photos/14911431/pexels-photo-14911431.jpeg",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      category: "Blockchain",
      date: "2022",
      features: [
        "Product authenticity verification",
        "Supply chain transparency",
        "Smart contract automation",
        "Decentralized storage",
      ],
      links: {
        live: "#",
        github: "#",
      },
    },
  ];

  const categories = [
    "All",
    "Web Application",
    "IoT Hardware",
    "Enterprise Software",
    "Data Platform",
    "Blockchain",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Projects | EBA Dynamics</title>
        <meta
          name="description"
          content="Explore EBA Dynamics' portfolio of innovative solutions spanning web applications, IoT hardware, and enterprise software systems."
        />
        <meta property="og:title" content="Projects | EBA Dynamics" />
        <meta
          property="og:description"
          content="Explore EBA Dynamics' portfolio of innovative solutions spanning web applications, IoT hardware, and enterprise software systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ebadynamics.co.ke/projects" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/7414211/pexels-photo-7414211.jpeg"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3e%3cpath d='M 50 0 L 0 0 0 50' fill='none' stroke='%234F46E5' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
              backgroundSize: "50px 50px",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/90 to-indigo-50/95"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative solutions spanning web
            applications, IoT hardware, and enterprise software systems.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  category === activeCategory
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 hover:scale-105 transform h-[520px] flex flex-col"
              >
                {/* Image Section - Fixed Height */}
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f3f4f6'/%3e%3ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3eImage not available%3c/text%3e%3c/svg%3e";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content Section - Flexible Height */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Header Section - Fixed Height */}
                  <div className="flex items-start justify-between mb-3 h-16">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 pr-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm ml-2 flex-shrink-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  {/* Description - Fixed Height with Overflow Hidden */}
                  <div className="h-12 mb-4">
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features Section - Fixed Height */}
                  <div className="mb-4 h-20">
                    <h4 className="text-sm font-medium mb-2 flex items-center text-gray-800">
                      <Tag className="w-4 h-4 mr-2 text-blue-600" />
                      Key Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed text-xs line-clamp-1">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Section - Fixed Height */}
                  <div className="mb-6 h-16">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Spacer to push buttons to bottom */}
                  <div className="flex-1"></div>

                  {/* Buttons Section - Fixed at Bottom */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Live
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group">
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Have a Project in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mind?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your requirements and see how we can bring your vision
            to life with our proven expertise and innovative approach.
          </p>

          <button className="group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
