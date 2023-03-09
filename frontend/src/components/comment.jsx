import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function Comment() {
  const [comments, setComments] = useState()
  const {postID} = useParams()

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/view-comments/')
      .then(res => {return res.json()}) 
      .then(data => {setComments(data)})
      .catch((err)=>{console.log(err.message)})
      }
  ,[])
      // console.log(comments)
    // const filteredList = () => comments.filter(comment => comment.post == postID)
  
 
  return (
    <div className="Comments">
      {comments && comments.filter(comment => comment.post == postID).map(item => <li key = {item.id}>{item.postComment}</li>)}
      
    </div>
  )
}

export default Comment;