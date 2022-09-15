import React, {useState} from "react";
import MDEditor from "@uiw/react-md-editor";

import {Button, Col, Container, Form, InputGroup, Toast, ToastContainer} from "react-bootstrap";
import {useOidcIdToken} from "@axa-fr/react-oidc";
import {roles} from "../../auth/config";


const MarkdownEditor = () => {
    const {idToken, idTokenPayload} = useOidcIdToken();

    let isAdmin = false;

    if (idToken) {
        isAdmin = idTokenPayload.roles.includes(roles.admin)
    }

    return (
        <>
            {isAdmin ? <Editor/> : <h1>Not allowed</h1>   }
        </>
    )

}


const Editor = () => {



    const mdMermaid = `The following are some examples of the diagrams, charts and graphs that can be made using Mermaid and the Markdown-inspired text specific to it. 

\`\`\`mermaid
graph TD
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
\`\`\`

\`\`\`mermaid
sequenceDiagram
Alice->>John: Hello John, how are you?
loop Healthcheck
    John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
\`\`\`
`;

    function getCurrentHour() {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        return ('0' + hours).slice(-2) + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2)
    }

    const addPost = () => {
        validateSummary()
        validateTags()
        validateTitle()
        if (!titleValid || !tagsValid || !summaryValid) {
            setNotification({
                show: true,
                variant: "Danger",
                msg: "One or more inputs are invalid, please fix it.",
                hour: getCurrentHour()
            })
        }
    }

    const [value, setValue] = useState(mdMermaid)
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [tags, setTags] = useState([])

    const [titleValid, setTitleValid] = useState(true)
    const [tagsValid, setTagsValid] = useState(true)
    const [summaryValid, setSummaryValid] = useState(true)

    const [notification, setNotification] = useState({show: false, variant: "", msg: "", hour: ""});
    const closeNotification = () => setNotification({show: false, variant: "", msg: "", hour: ""})

    function validateTitle() {
        if (2 <= title.length && title.length <= 35) {
            setTitleValid(true)
        } else {
            setTitleValid(false)
        }
    }


    function validateTags() {
        if (1 <= tags.length && tags.length <= 3) {
            setTagsValid(true)
        } else {
            setTagsValid(false)
        }
    }


    function validateSummary() {
        if (15 <= summary.length && summary.length <= 150) {
            setSummaryValid(true)
        } else {
            setSummaryValid(false)
        }
    }

    return (
        <div style={{minHeight: 'calc(100vh - 11em)'}} className="container-lg mt-5 bg-blue">
            <ToastContainer className={"position-fixed bottom-0 end-0 p-3"} style={{zIndex: 1000}}>
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
            <div style={{textAlign: "center"}}>
                <h3>New post</h3>
            </div>
            <Container fluid>
                <div>
                    <InputGroup>
                        <Col className={"col-3"} style={{marginRight: "1%"}}>
                            <Form.Control isInvalid={!titleValid} value={title} type="text" id="title"
                                          onChange={(newTitle) => {
                                              setTitle(newTitle.currentTarget.value);
                                              validateTitle()
                                          }}
                                          placeholder={"Title of your post"}/>
                        </Col>
                        <Col className={"col-6"} style={{marginRight: "1%"}}>
                            <Form.Control isInvalid={!summaryValid} value={summary}
                                          onChange={(newSummary) => {
                                              setSummary(newSummary.currentTarget.value);
                                              validateSummary()
                                          }}
                                          type="input" id="summary" placeholder={"Short summary"}/>
                        </Col>
                        <Col className={"col-2"}>
                            <Form.Control isInvalid={!tagsValid} value={tags.toString()} type="input" id="tags"
                                          placeholder={"Comma separated tags"}
                                          onChange={(newTags) => {
                                              setTags(newTags.currentTarget.value.split(","));
                                              validateTags()
                                          }}/>
                        </Col>
                    </InputGroup>
                </div>
            </Container>
            <Container fluid data-color-mode="light" style={{marginTop: "1%", marginBottom: "2%"}}>
                <MDEditor
                    onChange={(newValue) => setValue(newValue)}
                    textareaProps={{
                        placeholder: 'Please enter Markdown text',
                    }}
                    height={"85vh"}
                    value={value}
                />
            </Container>
            <div style={{textAlign: "right", marginBottom: "1%"}}>
                <Button onClick={addPost} className={"btn"}>Create post</Button>
            </div>
        </div>
    )

}


export default MarkdownEditor;
