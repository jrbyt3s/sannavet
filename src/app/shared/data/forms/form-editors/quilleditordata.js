
import dynamic from "next/dynamic";
import { Component } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const defaultContent = `
  <h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
  <p><br/></p>
  <ol>
      <li class="ql-size-normal">Write text, select, and edit with multiple options.</li>
      <li class="">This is quill snow editor.</li>
      <li class="">Easy to customize and flexible.</li>
  </ol>
  <p><br/></p>
  <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;

class Editor extends Component {
  static modules = {
    toolbar: [
      [{ "header": "1" }, { "header": "2" }, { "font": [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ "list": "ordered" }, { "list": "bullet" },
      { "indent": "-1" }, { "indent": "+1" }],
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  };

  static formats = [
    "header", "font", "size",
    "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent",
    "link", "image", "video"
  ];

  constructor(props) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme) {
    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Editor;

// import React from 'react'

// const quilleditordata = () => {
//   return (
//     <div>quilleditordata</div>
//   )
// }

// export default quilleditordata