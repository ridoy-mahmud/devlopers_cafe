
import React from "react";
import boy1 from '../../images/boy1.png';

const Blog = ({ blog }) => {

    const { cover, hashtags, author, posted, reading_time } = blog;
    console.log(blog);
    return (
        <div className="blog-container mb-8">
            <div className="card bg-white w-[745px] h-[750px] shadow-2xl ">
                <figure >
                    <img className="h-[450px] w-[745px]"
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="card-title flex justify-between">
                        <div className="flex gap-5">
                            <img className="w-10 h-10" src={boy1} alt="" />
                            <div>
                                <p>{author}</p>
                                <small>{posted}</small>
                            </div>
                        </div>
                        <div>
                            <p>{reading_time} read</p>
                        </div>
                    </div><br />
                    <h1 className="font-bold text-2xl">How to get your first job as a self-taught programmer?</h1>
                    <br />
                    <div className="flex w-7/12 justify-self-start text-gray-500">
                        <p>#{hashtags[0]}</p> <p>#{hashtags[1]}</p><p>#{hashtags[2]}</p>
                    </div>
                    <div className="mt-2">
                        <h4 className="underline text-blue-500">Mark as read </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;