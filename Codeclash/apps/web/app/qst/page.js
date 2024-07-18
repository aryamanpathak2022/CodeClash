"use client"
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from "@monaco-editor/react";

const Home = () => {
  const [markdownText, setMarkdownText] = useState('# Hello, Markdown!');
  const [code, setCode] = useState("console.log('Code Mirror!');");
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="container flex">
      <div className="panel markdown-panel w-full md:w-1/2">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
      <div className="panel code-panel w-full md:w-1/2">
        <div className="flex justify-between items-center">
          <select
            className="px-2 py-1 border border-gray-300 rounded"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
         
        </div>
        <Editor
          height="70vh"
          defaultLanguage={selectedLanguage}
          defaultValue={code}
          onChange={handleCodeChange}
          theme="vs-dark"
        />
         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </div>
    </div>
  );
};

export default Home;
