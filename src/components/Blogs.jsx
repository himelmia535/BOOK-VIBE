import { useEffect, useState } from "react";
import Blog from '../components/Blog';

const Blogs = () => {
	const[blogs, setBlogs] = useState([]);

	useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="">
            <div className="grid justify-center grid-cols-1 gap-6 lg:grid-cols-3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;