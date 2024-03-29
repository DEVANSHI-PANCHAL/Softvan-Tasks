import logo from "./logo.svg";
import "./App.css";
import PostCard from "./components/PostCard";
import { useGetPostsQuery, useAddPostMutation } from "./redux/api";
import { useState } from "react";

function App() {
  const {isLoading, isError, isSuccess, data, error} = useGetPostsQuery("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addPost] = useAddPostMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  async function handleAddPost() {
    await addPost({ title, body }).unwrap();
    setTitle("");
    setBody("");
  }

  if (isSuccess) {
    const posts = Object.values(data);
    const dataArray = posts.map((post) => ({
      id: post.id,
      ...post,
    }));
    console.log(typeof dataArray)
    return <>
    <h1>Posts app</h1>
    <form>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter body"
      />
      <button onClick={handleAddPost}>Add Post</button>
    </form>
    {dataArray.map(i => (
      <div key={i.id}>
        <p>{i.title}</p>
        <p>{i.body}</p>
      </div>
    ))}
    </>;
  }
}

export default App;