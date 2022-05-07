import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "./style.css";
//import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class ReactDraftW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: undefined
    };
    this.test = this.test.bind(this);
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };
  test() {
    try {
      let m = document.querySelector(".group-modal .rdw-link-modal");
      //console.log(m.getAttribute("className"));
      console.log(m);
      m.setAttribute("id", "rdw-link-modal");
      const input = `<input type='text' />`;
      m.insertBefore(input, m.children[0]);
      // m.innerHTML += `<input type='text' />`;
    } catch (e) {
    } finally {
    }
  }
  render() {
    const { editorState } = this.state;

    return (
      <div className="group-modal" onClick={() => test()}>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: ["link"]
          }}
        />
      </div>
    );
  }
}

export default ReactDraftW;
