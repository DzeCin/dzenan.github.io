import React from "react";
import {useEffect, useState} from "react"
import {PostClass} from "./PostClass";
import {ApiClient, PostsApi} from "js-api-blog-client";
import {Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import 'react-loading-skeleton/dist/skeleton.css'

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
        const [loading, setLoading] = useState(true)

        let callback = function (error, data, response) {
            if (response.status === 404) {
                setPost(null)

            } else if (error){
                console.error(error)
            }
            else {
                let postResp = new PostClass(data.id, data.header, data.title, data.author, data.content, data.tags, data.dateCreated, data.dateUpdated)
                setLoading(false)
                setPost(postResp)
            }

        };

        useEffect(() => {
                const location = window.location.pathname.split('/')
                const id = location.reverse()[0]
                let apiClient = new ApiClient()
                apiClient.basePath = process.env.REACT_APP_BLOG_API_URL
                let api = new PostsApi(apiClient)
                api.getPost(id, callback);
            }
            , [])


        return (
            <Container>
                <div style={{minHeight: 'calc(100vh - 11em)'}} className="container-lg mt-5">

                    {(post && !loading && (
                        <div>
                            <h1 className="display-2 text-center">{post.title}</h1>
                            <i style={styles.postMetada}> {String(post.dateCreated)} by {post.author}</i>
                            <ReactMarkdown children={post.content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}/>
                        </div>
                    )) || <Skeleton enableAnimation={true} animation={"wave"} count={6} height={35}/>}
                    {(!post && !loading && <h1 className="display-1 text-center">404 - Page not found</h1>)}
                </div>
            </Container>
        );
    }
;

export default BlogPost;
