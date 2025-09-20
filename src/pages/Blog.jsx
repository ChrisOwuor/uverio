import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

 const [posts, setPosts] = useState([]);

 useEffect(() => {
   fetch("http://localhost:5000/blogs")
     .then((res) => res.json())
     .then((data) => setPosts(data));
 }, []);

 

  const categories = [
    "All",
    "IoT",
    "Web Development",
    "Hardware",
    "Security",
    "AI/ML",
    "Design",
  ];

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Blog | EBA Dynamics</title>
        <meta
          name="description"
          content="Read the latest insights, trends, and best practices in hardware and software development from the EBA Dynamics team. Stay updated with our expert articles on IoT, web, AI, and more."
        />
        <meta
          name="keywords"
          content="EBA Dynamics blog, tech blog, IoT, web development, hardware, software, AI, ML, security, design, tutorials, insights"
        />
        <meta property="og:title" content="Blog | EBA Dynamics" />
        <meta
          property="og:description"
          content="Explore expert articles and insights on hardware, software, IoT, AI, and more from EBA Dynamics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ebadynamics.co.ke/blog" />
        <meta
          property="og:image"
          content="https://ebadynamics.co.ke/favicon-32x32.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | EBA Dynamics" />
        <meta
          name="twitter:description"
          content="Read the latest insights, trends, and best practices in hardware and software development from the EBA Dynamics team."
        />
        <meta
          name="twitter:image"
          content="https://ebadynamics.co.ke/favicon-32x32.png"
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
            Tech{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the latest trends, insights, and best practices in hardware
            and software development from our team of experts.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>
      {/* Featured Post */}
      {/* Categories Filter */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  category === activeCategory
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900"
                }`}
              >
                <Tag className="w-4 h-4" />
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 hover:scale-105 transform h-[560px] flex flex-col"
              >
                {/* Image Section - Fixed Height */}
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f3f4f6'/%3e%3ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3eBlog Post%3c/text%3e%3c/svg%3e";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content Section - Flexible Height */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Metadata Section - Fixed Height */}
                  <div className="flex items-center text-gray-500 text-sm mb-4 gap-4 h-6">
                    <div className="flex items-center min-w-0">
                      <User className="w-3 h-3 mr-1 text-blue-600 flex-shrink-0" />
                      <span className="font-medium truncate">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center flex-shrink-0">
                      <Calendar className="w-3 h-3 mr-1 text-blue-600" />
                      <span className="whitespace-nowrap">{post.date}</span>
                    </div>
                    <div className="flex items-center flex-shrink-0">
                      <Clock className="w-3 h-3 mr-1 text-blue-600" />
                      <span className="whitespace-nowrap">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title Section - Fixed Height */}
                  <div className="h-14 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                  </div>

                  {/* Excerpt Section - Fixed Height */}
                  <div className="h-12 mb-4">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Tags Section - Fixed Height */}
                  <div className="h-8 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1"></div>

                  {/* Button Section - Fixed at Bottom */}
                  <div className="mt-auto">
                    <Link to={`/blog/${post.slug}`}>
                      <button className="group w-full inline-flex items-center justify-center px-4 py-2 rounded-lg border-2 border-gray-300 text-sm font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Stay{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Updated
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the latest insights, tutorials, and industry trends delivered
            straight to your inbox. Join our community of tech enthusiasts and
            innovators.
          </p>

          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
