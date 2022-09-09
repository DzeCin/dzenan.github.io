import React, {useEffect, useState} from "react";
import {ApiClient, PostsApi} from "js-api-blog-client";
import {PostClass} from "./PostClass";
import {NavLink} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {useOidcIdToken} from "@axa-fr/react-oidc";
import {roles} from "../../auth/config";


const Blog = (props) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idToken, idTokenPayload} = useOidcIdToken();
    let isAdmin = false;

    if (idToken) {
        isAdmin = idTokenPayload.roles.includes(roles.admin)
    }

    let callbackGetPosts = function (error, data, response) {
        if (error) {
            console.error(error);
        } else if (data.length === 0){
            setLoading(false)
        }
        else {
            let postsArray = []
            for (const elmt of data) {
                let post = new PostClass(elmt.id, elmt.header, elmt.title, elmt.author, elmt.content, elmt.tags, elmt.dateCreated, elmt.dateUpdated)
                postsArray.push(post)
            }
            setLoading(false)
            setPosts(postsArray)
        }
    };

    useEffect(() => {
            let apiClient = new ApiClient()
            apiClient.basePath = process.env.REACT_APP_BLOG_API_URL
            let api = new PostsApi(apiClient)
            api.getPosts(callbackGetPosts);
        }
        , [])


    return (
        <div style={{minHeight: 'calc(100vh - 11em)'}} className="container-lg mt-5 bg-blue">
            <p className="h1 text-center">Blog</p>
            {isAdmin && <Button>New Post</Button>}
            <Row>
                {loading && <Skeleton animation={"wave"} count={5}/>
                }

                {!loading && (posts.length !== 0 ?
                    posts.map((value, index) => {
                        return (
                            <BlogCard
                                key={value.id}
                                id={value.id}
                                title={value.title}
                                dateCreated={value.dateUpdated}
                                tags={value.tags}
                                author={value.author}
                                header={value.header}
                            />
                        );
                    })
                    :
                    <h3 className="text-center">No posts yet</h3>)}

            </Row>

        </div>
    );
};

const BlogCard = (
        {
            id, tags, dateCreated, title, header, author
        }
    ) => {
        let cal = function (error, data, response) {
            if (error) {
                console.error(error);
            } else {
                console.log("POST   -" + title + "-   DELETED")
            }
        };


        function deletePost() {
            let apiClient = new ApiClient()
            apiClient.basePath = process.env.REACT_APP_BLOG_API_URL
            let oAuth = apiClient.authentications['oAuth'];
            oAuth.accessToken = '';
            let api = new PostsApi(apiClient)
            api.deletePost(id, cal);
        }

        return (
            <Col md={6} className={"p-3"}>

                <Card style={{animation: "fadeIn 1.5s"}}>
                    <Button onClick={deletePost}> dekete</Button>
                    <NavLink to={id} style={{color: "inherit", textDecoration: "inherit"}}>
                        <Card.Body>
                            <Card.Title>
                                <h4>{title}</h4>
                            </Card.Title>
                            <Card.Subtitle>
                                <i style={{color: "#999"}}>by {author} on 24/04/2022</i>
                            </Card.Subtitle>
                            <Card.Text>
                                <i className={"lead"}>{header}</i>
                            </Card.Text>
                            <Card.Footer>
                                <small className={"text-muted sm"}> {tags.toString()}</small>
                                <div style={{textAlign: "right"}}>
                                    <Button style={{marginRight: "4px"}} className={"btn-danger"}
                                            >Delete</Button>
                                    <Button className={"btn-secondary"}>Edit</Button>
                                </div>
                            </Card.Footer>

                        </Card.Body>
                    </NavLink>
                </Card>

            </Col>
        );
    }
;

export
{
    Blog
}
    ;
