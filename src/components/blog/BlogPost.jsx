import React from "react";
import bloglist from "../../editable-stuff/blog";
import {useParams} from "react-router";
const BlogPost = () => {
  const { id } = useParams();
  const post = bloglist[id];
  let styles = {
    main: {
      minHeight: 'calc(100vh - 5.5em) !important'
    }
  }
  return (
    <div style={styles.main} className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          <img className="img-fluid mb-2" src={post.image} alt={post.title} />
          {post.getBlog()}
        </div>
      )}
      {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
    </div>
  );
};

export default BlogPost;
