import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletepost } from '../Redux/Action';
import PostItem from './postitem';

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

 

  const handleDelete = (postId) => {
    dispatch(deletepost(postId));
  };

  // Check if posts is an array before mapping over it
  if (!Array.isArray(posts)) {
    console.error('Posts is not an array:', posts);
    return <div>No posts available.</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Post;
