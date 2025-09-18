import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the blog by slug from JSON Server
    fetch(`http://localhost:5000/blogs?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setPost(data[0] || null))
      .catch(() => setPost(null));
  }, [slug]);

  if (!post) return <p className="text-center py-20">Loading...</p>;

  // Fallbacks for meta tags
  const metaTitle = post.title || "Blog Post | EBA Dynamics";
  const metaDescription =
    post.description ||
    post.excerpt ||
    "Read this article from EBA Dynamics' blog on hardware, software, IoT, and innovation.";
  const metaImage = post.image || "https://ebadynamics.com/og-image.jpg";
  const metaUrl = `https://ebadynamics.com/blog/${slug}`;

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="EBA Dynamics, blog, article, hardware, software, IoT, technology, innovation"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:url" content={metaUrl} />
      </Helmet>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      {/* ...existing code... */}
    </div>
  );
};

export default SingleBlog;
