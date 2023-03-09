import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comment from './comment';

function Post() {
    const {postID} = useParams()
    const [post, setPost] = useState()
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/view-post/${postID}/`)
      .then(res => {return res.json()}) 
      .then(data => {setPost(data)})
      .catch((err)=>{console.log(err.message)})
      }
  ,[])
    
  const getComment = () => {// filter comments

  }
      
  return (
    <div className='Post'>
   
     {post && <h2>Title: {post.title}</h2>}
     {post && <p>Content: {post.content}</p>}
     <hr />
     {<Comment />}
     
     <hr />
     <Link to={`/posts/${postID}/addnewcomment`}>Your Thought?</Link>
    </div>
  )
}

export default Post;