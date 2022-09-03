import React, {useEffect, useState} from "react";
import {ApiClient, PostsApi} from "js-api-blog-client";
import {PostClass} from "./PostClass";
import {NavLink} from "react-router-dom";

const Blog = (props) => {

    const [posts, setPosts] = useState([])

    let callback = function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            let postsArray = []
            for (const elmt of data) {
                let post = new PostClass(elmt.id, elmt.header, elmt.title, elmt.author, elmt.content, elmt.tags, elmt.dateCreated, elmt.dateUpdated)
                postsArray.push(post)
            }
            setPosts(postsArray)
        }
    };

    useEffect(() => {
            let apiClient = new ApiClient()
            apiClient.basePath = "http://localhost:8080"
            let api = new PostsApi(apiClient)
            api.getPosts(callback);

        }
        , [])


    return (
        <div className="container-lg mt-5 bg-blue">
            <h1 className="text-center">Blogs</h1>

            {posts.length !== 0 ?
                posts.map((value, index) => {
                    return (
                        <BlogCard
                            key={value.id}
                            id={value.id}
                            title={value.title}
                            header={value.header}
                        />
                    );
                })
              :
                <h3 className="text-center">No posts yet</h3>
            }

        </div>
    );
};

const BlogCard = ({id, title, header}) => {
    return (
        <div className="m-5">
            <div className="">
                <div className="row">
                    <div className="col-4 col-lg-12">
                    </div>
                    <div className="col-8 col-lg-12">
                        <div className="">
                            <h1 className="">{title}</h1>
                            <p className="lead">{header}</p>
                            <NavLink to={id}>
                                Read more...
                            </NavLink>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export {Blog};
