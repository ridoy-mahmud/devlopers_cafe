import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SelectedBlogs from "../SelectedBlogs/SelectedBlogs";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("api.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className="w-10/12 flex mx-auto">
            <div className="w-8/12 gap-5" >
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            {
                <SelectedBlogs></SelectedBlogs>
            }
        </div>

    );
};
export default Blogs;