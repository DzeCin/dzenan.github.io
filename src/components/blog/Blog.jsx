import React, {useEffect, useState} from "react";
import {ApiClient, PostsApi} from "js-api-blog-client";
import {PostClass} from "./PostClass";
import {NavLink} from "react-router-dom";
import {Button, Card, Form, Toast, ToastContainer} from "react-bootstrap";
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
        } else if (data.length === 0) {
            setLoading(false)
        } else {
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
            <Form.Group style={{margin: "2%"}}>
                <Form.Control type="search" id="form1" placeholder={"Search a post by tags."}/>

            </Form.Group>

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
                                dateCreated={value.dateCreated}
                                dateUpdated={value.dateUpdated}
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
            id, tags, dateCreated, dateUpdated, title, header, author
        }
    ) => {

        function getCurrentHour() {
            const date = new Date();
            const seconds = date.getSeconds();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            return ('0' + hours).slice(-2) + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2)
        }

        const [notification, setNotification] = useState({show: false, variant: "", msg: "", hour: ""});

        const closeNotification = () => setNotification({show: false, variant: "", msg: "", hour: ""})

        let cal = function (error, data, response) {
            if (response.status === 401) {
                setNotification({
                    show: true,
                    variant: "Danger",
                    msg: "You are not authorized to do this !",
                    hour: getCurrentHour()
                })
            } else if (response.status === 404) {
                setNotification({
                    show: true,
                    variant: "Warning",
                    msg: "The post you are trying to delete do not exist.",
                    hour: getCurrentHour()
                })
            } else if (response.status === 200) {
                setNotification({show: true, variant: "Success", msg: "Post successfully deleted", hour: getCurrentHour()})

            } else {
                setNotification({
                    show: true,
                    variant: "Danger",
                    msg: "An unexpected error happened.",
                    hour: getCurrentHour()
                })

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
            <>
                <ToastContainer position={"top-end"} className={"position-fixed"}>
                    <Toast show={notification.show} onClose={closeNotification} delay={5000} autohide
                           bg={notification.variant.toLowerCase()}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Notification</strong>
                            <small>{notification.hour}</small>
                        </Toast.Header>
                        <Toast.Body>{notification.msg}</Toast.Body>
                    </Toast>
                </ToastContainer>
                <Col md={6} className={"p-3"}>

                    <Card style={{animation: "fadeIn 1.5s"}}>
                        <Card.Body>
                            <NavLink to={id} style={{color: "inherit", textDecoration: "inherit"}}>
                                <Card.Title>
                                    <h4>{title}</h4>
                                </Card.Title>
                                <Card.Subtitle style={{margin: "1%"}}>
                                    <i style={{color: "#999"}}>by {author} on {dateCreated.toLocaleDateString("en-US").toString()} (updated on {dateUpdated.toLocaleDateString("en-US").toString()})</i>
                                </Card.Subtitle>
                                <Card.Text style={{marginBottom: "2%"}}>
                                    <i className={"lead"}>{header}</i>
                                </Card.Text>
                            </NavLink>
                            <Card.Footer>
                                <small className={"text-muted sm"}> {tags.toString()}</small>
                                <div style={{textAlign: "right"}}>
                                    <Button style={{marginRight: "4px"}} onClick={deletePost}
                                            className={"btn-danger"}>Delete</Button>
                                    <Button className={"btn-secondary"}>Edit</Button>
                                </div>
                            </Card.Footer>

                        </Card.Body>

                    </Card>

                </Col>
            </>
        );
    }
;

export
{
    Blog
}
    ;
