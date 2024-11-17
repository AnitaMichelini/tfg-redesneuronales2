import React, { useState } from "react";
import "./Forum.css";

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  // Manejar la publicación de un nuevo mensaje
  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (newPost.trim() === "") return;

    setPosts((prevPosts) => [
      ...prevPosts,
      { id: Date.now(), content: newPost },
    ]);

    setNewPost("");
  };

  return (
    <div className="forum-page">
      <h1 className="forum-title">Foro de Redes Neuronales</h1>
      <p className="forum-description">
        Un espacio para aprender, discutir y compartir conocimientos sobre redes neuronales.
      </p>

      {/* Formulario para agregar publicaciones */}
      <form className="forum-form" onSubmit={handlePostSubmit}>
        <textarea
          className="forum-textarea"
          placeholder="Escribe tu pregunta o comentario..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button className="forum-submit" type="submit">
          Publicar
        </button>
      </form>

      {/* Lista de publicaciones */}
      <div className="forum-posts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="forum-post">
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p className="forum-empty">Aún no hay publicaciones. ¡Sé el primero en participar!</p>
        )}
      </div>
    </div>
  );
};

export default ForumPage;
