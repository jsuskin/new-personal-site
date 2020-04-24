import React from "react";
import ReactPlayer from "react-player";

const Demo = ({ url, hidden }) => (
  <div className={`player-wrapper${hidden ? ' hidden' : ''}`}>
    <ReactPlayer
      className='react-player'
      url={url}
      width='100%'
      height='100%'
      playing={false}
      controls
    />
  </div>
);

export default function ProjectDemo({ url, demoOpen, setDemoOpen }) {
  return (
    <>
      <Demo url={url} hidden={!demoOpen} />
      <button
        className={`toggle-demo${demoOpen ? " open" : ""}`}
        onClick={() => setDemoOpen(!demoOpen)}
      >
        <span>{demoOpen ? 'CLOSE' : 'SHOW'}</span>
        <span>DEMO</span>
      </button>
    </>
  );
}
