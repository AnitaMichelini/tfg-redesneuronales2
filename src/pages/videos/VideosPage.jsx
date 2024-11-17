import React from "react";
import './VideosPage.css';
import VideoCard from "../../components/VideoCard";

const VideosPage = () => {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Introducción a Redes Neuronales" },
    { id: "3fumBcKC6RE", title: "Funcionamiento de Sinapsis" },
    { id: "2Vv-BfVoq4g", title: "Aprendizaje Supervisado vs No Supervisado" },
    { id: "kJQP7kiw5Fk", title: "Historia de las Redes Neuronales" },
  ];

  return (

    // <div className="videos-page">

    //   <h1>Videos sobre Redes Neuronales</h1>
    //   <div className="video-grid">
    //     {videos.map((video) => (
    //       <VideoCard key={video.id} videoId={video.id} title={video.title} />
    //     ))}
    //   </div>
    // </div>
    <>
      <h1>Sección Videos </h1>
    </>

  );
};

export default VideosPage;
