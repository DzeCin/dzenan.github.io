import React from "react";
import {useEffect, useState} from "react"
import {PostClass} from "./PostClass";
import {ApiClient, PostsApi} from "js-api-blog-client";
import {Container} from "react-bootstrap";

const BlogPost = () => {


        let styles = {
            main: {
                minHeight: 'calc(100vh - 5.5em) !important'
            },

            postMetada: {
                marginBottom: "15px",
                color: "#999"
            }
        }

        const [post, setPost] = useState(new PostClass())

        let callback = function (error, data, response) {
            if (response.status === 404) {
                setPost(null)

            } else if (error){
                console.error(error)
            }
            else {
                let postResp = new PostClass(data.id, data.header, data.title, data.author, data.content, data.tags, data.dateCreated, data.dateUpdated)
                setPost(postResp)
            }

        };

        useEffect(() => {
                const location = window.location.pathname.split('/')
                const id = location.reverse()[0]
                let apiClient = new ApiClient()
                apiClient.basePath = "http://localhost:8080"
                let api = new PostsApi(apiClient)
                api.getPost(id, callback);
            }
            , [])


        return (
            <Container>
                <div className="container-lg mt-5">
                    {post && (
                        <div>
                            <h1 className="display-2 text-center">{post.title}</h1>
                            <i style={styles.postMetada}> {String(post.dateCreated)} by {post.author}</i>
                            <p> {post.content}</p>
                        </div>
                    )}
                    {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
                </div>
            </Container>
        );
    }
;

export default BlogPost;
