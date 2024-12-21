import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Pagination = ({ limit = 10 }) => {
  const [posts, setPosts] = useState([]);
  const [currPosts, setCurrPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.length);
        setPosts(res);
        setCurrPosts(res.slice(0, 10));
      });
  }, []);

  const handleNextClick = () => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * limit;
    const end = start + limit;
    console.log(start, end, posts.slice(start, end));
    setCurrPosts(posts.slice(start, end));
    setPage(nextPage);
  };

  const handlePrevClick = () => {
    const prevPage = page - 1;
    const start = (prevPage - 1) * limit;
    const end = start + limit;
    console.log(start, end, posts.slice(start, end));
    setCurrPosts(posts.slice(start, end));
    setPage(prevPage);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      {currPosts.map((post) => (
        <p style={{ width: "500px", textAlign: "start" }} key={post.id}>
          {post.title}
        </p>
      ))}
      <button onClick={handleNextClick}>Next Page</button>
      <button onClick={handlePrevClick}>Previous Page</button>
    </div>
  );
};

export default Pagination;
