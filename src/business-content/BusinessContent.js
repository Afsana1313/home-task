import React from "react";
import "./style.css";

function GetSelectedText() {
  if (document.getSelection) {
    // all browsers, except IE before version 9
    var sel = document.getSelection();
    // sel is a string in Firefox and Opera,
    // and a selectionRange object in Google Chrome, Safari and IE from version 9
    // the alert method displays the result of the toString method of the passed object
    alert(sel);
    return sel;
  } else {
    if (document.selection) {
      // Internet Explorer before version 9
      var textRange = document.getElementById("__rte_textarea").createRange();
      return textRange.text;
    }
  }
}
class Buttons extends React.Component {
  handleClick(e, openTag, closeTag, selectedText) {
    const el = document.getElementById("__rte_textarea");
    const startIdx = el.selectionStart;
    const endIdx = el.selectionEnd;
    alert(selectedText);
    if (startIdx === endIdx) return;
    else {
      const origText = this.props.text;
      const newText =
        origText.slice(0, startIdx) +
        openTag +
        origText.slice(startIdx, endIdx) +
        closeTag +
        origText.slice(endIdx);
      alert(newText);
      this.props.updateText(newText);
    }
  }
  render() {
    return (
      <div>
        <div
          className="rte_button"
          onClick={(e) => {
            var selectedText = GetSelectedText();
            console.log(selectedText.value);
            this.handleClick(e, "<b>", "</b>", selectedText);
          }}
        >
          <strong>B</strong>
        </div>
        <div
          className="rte_button"
          onClick={(e) => this.handleClick(e, "<i>", "</i>", GetSelectedText())}
        >
          <i>i</i>
        </div>
        <div
          className="rte_button"
          onClick={(e) =>
            this.handleClick(
              e,
              "<span style='text-decoration: underline;'>",
              "</span>"
            )
          }
          style={{ textDecoration: "underline" }}
        >
          U
        </div>
        <div
          className="rte_button"
          onClick={(e) =>
            this.handleClick(
              e,
              "<a href='https://github.io' style='text-decoration: underline; color: #0076ce;'> ",
              "</a>"
            )
          }
          style={{ textDecoration: "underline" }}
        >
          link
        </div>
      </div>
    );
  }
}

const Textarea = (props) => (
  <div>
    <div
      id="__rte_textarea"
      contentEditable="true"
      className="rte_textarea"
      dangerouslySetInnerHTML={{ __html: props.text }}
      onInput={(e) => props.onChange(e)}
    ></div>
  </div>
);

const Preview = (props) => (
  <div>
    <h6>PREVIEW</h6>
    <div
      className="rte_preview"
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  </div>
);

class BusinessContent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div className="card">
        <h6>REACT TEXT EDITOR</h6>
        <Buttons
          text={this.state.text}
          updateText={(text) => this.setState({ text })}
        />
        <Textarea
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.currentTarget.textContent })}
        />
        <Preview text={this.state.text} />
      </div>
    );
  }
}

export default BusinessContent;
