import React from 'react';
import BlogList from './BlogList';
import Loader from './Loader';
import useFetch from './useFetch';

const Home = () => {
    const {data, loading, error} = useFetch("http://localhost:8000/blogs");  

    return <div className='home'>
        {error && <div>{error}</div>}
        {loading && <Loader />}
        {data && <BlogList blogs={data} title={"All Blogs!"} />}

    </div>;
};

export default Home;
