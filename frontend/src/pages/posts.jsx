import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comment from '../components/comment';
import NewPost from '../components/addnewpost';
function Posts() {
    // const {postID} = useParams()
    // console.log(postID)
    const [posts, setPosts] = useState()
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/view-posts/')
      .then(res => {return res.json()}) 
      .then(data => {setPosts(data)})
      .catch((err)=>{console.log(err.message)})
      }
  ,[])

  return (
    <div className='Post'>
      <h2>Community Posts</h2>
     {posts && posts.map(post =><li key = {post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>)}
      <hr />
      <Link to='/addnewpost'>Make a Post!</Link>
    </div>
  )
}

export default Posts;