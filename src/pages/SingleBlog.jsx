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

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      {post && (
        <Helmet>
          <title>{post.title} - Uverio Studio</title>
          <meta name="description" content={post.excerpt} />
        </Helmet>
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>

      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default SingleBlog;
