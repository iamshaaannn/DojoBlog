import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Loader from "./Loader";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch("http://localhost:8000/blogs/"+ id);
  const history = useHistory();

  const handleDelete = () =>{
    fetch('http://localhost:8000/blogs/'+id, {
      method: 'DELETE', 
    })
    .then(()=>{
      history.push('/');
    })
    .catch((error) =>{
      console.log(error.message);
    })
  }

  return (
    <div className="blog-details">
      {loading && <Loader/>}
      {error && <div> {error.message}</div>}
      { blog && (
          <article>
              <h2>{blog.title}</h2>
              <p>{blog.author}</p>
              <div>{blog.body}</div>
              <button onClick={handleDelete}>Delete</button>
          </article>
      )}
    </div>
  );
};

export default BlogDetails;
