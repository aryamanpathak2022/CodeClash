
"use client"
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const Home = () => {
  const [markdownText, setMarkdownText] = useState('# Hello, Markdown!');
 const code = "console.log('Code Mirror!');"
  const handleCodeChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="container flex ">
      <div className="panel markdown-panel w-1/2">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
      <div className="panel code-panel w-1/2">
      <CodeMirror
      value={code}
      height="100vh"

      theme={vscodeDark}
    />
    </div>
    </div>
  );
};

export default Home;
