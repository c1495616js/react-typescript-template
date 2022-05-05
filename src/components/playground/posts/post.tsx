/* eslint-disable compat/compat */
/* eslint-disable promise/catch-or-return */
import React from 'react';

const Post = (): React.ReactElement => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post: any) => (
        <div className="flex flex-col gap-2" key={post.id}>
          <h1 className="font-bold">Title: {post.title}</h1>
          <p>Body: {post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Post;
