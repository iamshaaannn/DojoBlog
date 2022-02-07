import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Shaurya Bhardwaj');
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  const handleSubmit = (event) =>{
    event.preventDefault(); //prevents the default refresh. 
    const blog = { title, body, author};

    setLoading(true);

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify(blog)
    })
    .then(()=>{
      console.log('New Blog Added.');
      setLoading(false);
      history.push('/');
    })
    .catch((error)=>{
      console.log(error.message);
    })
    }, 1000);

    
  }

  return <div className='create'>
      <h2>Creating a new blog? </h2>
      <form onSubmit={handleSubmit}>
        <label > Blog Title: </label>
        <input
         type="text"
          required
          value={title}
          onChange= {(e)=> setTitle(e.target.value)}
        />
        <label > What's in your mind?  </label>
        <textarea 
        required
        value={body}
        onChange={(e) =>setBody(e.target.value)}
        ></textarea>
        <label > Blog Author: </label>
        <select 
          value={author}
          onChange= {(e) => setAuthor(e.target.value)}
        >
          <option value="Marry Jane" >Marry Jane</option>
          <option value="Shaurya Bhardwaj">Shaurya Bhardwaj</option>
          <option value="Shreya Shrivastava">Shreya Shrivastava</option>

        </select>
        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Adding Blog...</button>}
      </form>
  </div>;
};

export default CreateBlog;
