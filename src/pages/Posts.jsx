import { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // FETCH POSTS
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  // ADD OR UPDATE
  const handleSubmit = () => {
    if (!title || !body) return;

    if (editId) {
      // UPDATE
      const updatedPost = { id: editId, title, body };
      setPosts(posts.map(p => (p.id === editId ? updatedPost : p)));
    } else {
      // ADD
      const newPost = {
        id: Date.now(),
        title,
        body
      };
      setPosts([newPost, ...posts]);
    }

    // RESET
    setTitle("");
    setBody("");
    setEditId(null);
    setShowModal(false);
  };

  // OPEN EDIT MODAL
  const openEdit = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEditId(post.id);
    setShowModal(true);
  };

  // DELETE POST
  const confirmDelete = () => {
    setPosts(posts.filter(p => p.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="posts-container">

      {/* HEADER */}
      <div className="posts-header">
        <div>
          <h1>Posts Management</h1>
          <p>Manage your content easily</p>
        </div>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Post
        </button>
      </div>

      {/* POSTS LIST */}
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <div className="card-header">
            <h3>{post.title}</h3>

            <div className="icon-group">
              <FiEdit
                className="edit-icon"
                onClick={() => openEdit(post)}
              />

              <FiTrash2
                className="delete-icon"
                onClick={() => setDeleteId(post.id)}
              />
            </div>
          </div>

          <p className="post-body">{post.body}</p>
        </div>
      ))}

      {/* ADD / EDIT MODAL */}
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <h2>{editId ? "Edit Post" : "Add Post"}</h2>

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <div className="button-row">
              <button
                className="cancel-btn"
                onClick={() => {
                  setShowModal(false);
                  setEditId(null);
                }}
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={handleSubmit}
              >
                {editId ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM MODAL */}
      {deleteId && (
        <div className="overlay">
          <div className="modal">
            <h3>Are you sure you want to delete?</h3>

            <div className="button-row">
              <button
                className="cancel-btn"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>

              <button
                className="delete-btn"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Posts;