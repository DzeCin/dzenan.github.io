import React, {useState} from "react";
import MDEditor from "@uiw/react-md-editor";

import {Button, Container} from "react-bootstrap";
const Editor = (props) => {
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
    const addPost= () => {

    }

    const [value, setValue] = useState(mdMermaid)

    return (
        <div style={{minHeight: 'calc(100vh - 11em)'}} className="container-lg mt-5 bg-blue">
            <div style={{textAlign: "center"}}>
                <h3>New post</h3>
            </div>
            <Container data-color-mode="light" style={{marginTop: "1%", marginBottom: "2%"}}>
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

};

export default Editor;
