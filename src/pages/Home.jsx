import { ArrowRight, CheckCircle, Users, Zap, Code, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software",
      description:
        "Tailored web and mobile applications built to solve your specific challenges.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hardware Integration",
      description:
        "Seamless IoT solutions connecting physical devices with intelligent software.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description:
        "Lightning-fast solutions optimized for scale and reliability.",
    },
  ];
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "CEO, TechCorp",
      feedback:
        "Working with this team was a game-changer. Their expertise in hardware and software integration helped us launch our product ahead of schedule.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Smith",
      role: "Product Manager, InnovateX",
      feedback:
        "The attention to detail and professionalism exceeded our expectations. Highly recommended for any tech project.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Sophia Lee",
      role: "CTO, FutureSoft",
      feedback:
        "Their innovative approach to solving complex problems made our project a huge success. The team is knowledgeable, responsive, and reliable.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="pt">
      <Helmet>
        <title>EBA Dynamics </title>
        <meta
          name="description"
          content="EBA Dynamics designs innovative solutions that bridge hardware and software to solve real-world problems with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="hardware, software, IoT, web development, mobile apps, integration, performance, optimization, Uverio"
        />
        <meta property="og:title" content="EBA Dynamics " />
        <meta
          property="og:description"
          content="Innovative hardware and software solutions for real-world challenges. Trusted by industry leaders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ebadynamics.co.ke/" />
        <meta
          property="og:image"
          content="https://ebadynamics.co.ke/favicon-32x32.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EBA Dynamics " />
        <meta
          name="twitter:description"
          content="Innovative hardware and software solutions for real-world challenges. Trusted by industry leaders."
        />
        <meta name="twitter:image" content="https://uverio.com/favicon-32x32.png" />
      </Helmet>
      {/* Hero Section */}
      <div className="min-h-screen bg-gray-50 ]">
        {/* Combined Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow  bg-cover bg-center">
          {/* Grid Background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="20" height="20" fill="%23e0e7ff"/><rect x="20" y="20" width="20" height="20" fill="%23e0e7ff"/></svg>')`,
                backgroundSize: "40px 40px",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
            {/* Hero Content */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
                Building Smart
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hardware & Software
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                At EBA Dynamics, we design innovative solutions that bridge
                hardware and software to solve real-world problems with
                cutting-edge technology.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              What We
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Deliver
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end solutions that
              combine innovative hardware with intelligent software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-indigo-500 text-4xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50/50">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Trusted by
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We've had the privilege of working with some amazing companies and
              startups across various industries.
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
            {[
              {
                src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
                alt: "Transistor",
              },
              {
                src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
                alt: "Reform",
              },
              {
                src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
                alt: "Tuple",
              },
              {
                src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
                alt: "SavvyCal",
              },
              {
                src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
                alt: "Statamic",
              },
            ].map((logo, index) => (
              <div key={index} className="group">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTO Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/30 to-purple-50/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                Meet Our
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CTO
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                With over a decade of experience in both hardware and software
                engineering, our CTO leads the technical vision that drives
                every project we deliver.
              </p>
              <div className="space-y-6">
                {[
                  "15+ years in tech leadership",
                  "Expert in IoT and embedded systems",
                  "Published researcher in AI/ML",
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <button className="group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Meet the Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src="https://images.pexels.com/photos/8102683/pexels-photo-8102683.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="CTO Portrait"
                  className="relative z-10 rounded-2xl w-96 h-96 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              What Our <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear from people who have experienced our work and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="relative z-10 w-14 h-14 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/40 to-purple-50/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
              Ready to Build Something
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amazing?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let's discuss your project and see how we can bring your vision to
              life with our expertise in hardware and software integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Primary Button */}
              <Link to="/contact">
                <button className="group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>

              {/* Outline Button */}
              <Link to="/projects">
                <button className="group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform">
                  View Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
