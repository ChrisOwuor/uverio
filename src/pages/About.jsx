import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We believe in pushing boundaries and exploring new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client-Focused",
      description:
        "Every project starts with understanding your unique challenges and building solutions that fit perfectly.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Driven",
      description:
        "We maintain the highest standards in both our code and hardware designs, ensuring reliability at scale.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative",
      description:
        "We work closely with your team, maintaining transparent communication throughout the entire process.",
    },
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Chief Technology Officer",
      bio: "15+ years in tech leadership, specializing in IoT and embedded systems. Published researcher in AI/ML with a passion for bridging hardware and software.",
    },
    {
      name: "Sarah Chen",
      role: "Lead Software Engineer",
      bio: "Full-stack engineer with expertise in React, Node.js, and cloud architecture. Previously at Google and Microsoft.",
    },
    {
      name: "Marcus Johnson",
      role: "Hardware Engineering Lead",
      bio: "Electronics engineer with deep experience in PCB design, microcontrollers, and IoT device development.",
    },
  ];

  return (
    <div className="bg-gray-50">
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

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Uverio Studio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We are a small, innovative team passionate about creating
              technology solutions that work. From custom hardware to software
              platforms, our goal is to make technology simple, powerful, and
              accessible.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To bridge the gap between hardware and software, creating
                integrated solutions that solve real-world problems. We believe
                that the best technology is invisible – it just works,
                seamlessly and reliably.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2019, Uverio Studio has grown from a passion project
                to a trusted partner for companies looking to innovate with
                technology. We specialize in IoT solutions, custom software
                development, and hardware-software integration.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span className="leading-relaxed">
                    End-to-end expertise from hardware design to software
                    deployment
                  </span>
                </li>
                <li className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span className="leading-relaxed">
                    Agile development approach with rapid prototyping
                    capabilities
                  </span>
                </li>
                <li className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span className="leading-relaxed">
                    Deep experience in IoT, embedded systems, and cloud
                    platforms
                  </span>
                </li>
                <li className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span className="leading-relaxed">
                    Commitment to open-source technologies and best practices
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do, from the first
              consultation to the final deployment and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-200/50 hover:scale-105 transform"
              >
                <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse team brings together expertise from hardware
              engineering, software development, and product design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-200/50 hover:scale-105 transform"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='dots' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3ccircle cx='30' cy='30' r='2' fill='white'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23dots)'/%3e%3c/svg%3e")`,
              backgroundSize: "60px 60px",
            }}
            className="absolute inset-0"
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white max-w-4xl mx-auto">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-white/80 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-white/80 font-medium">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                99%
              </div>
              <div className="text-white/80 font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Together?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and see how we can help bring your ideas
            to life with innovative technology solutions.
          </p>
          <button className="group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
            Start Your Project Today
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
