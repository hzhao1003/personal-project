import { useState} from 'react';
import { Link, useParams } from 'react-router-dom';


function NewComment() {
    const {postID} = useParams()
    const post = parseInt(postID)
    const [postComment, setPostComment] = useState('')
    const handleSubmit = (e) =>{
        const newComment = {postComment, post} 
        e.preventDefault();
        fetch('http://54.185.207.225/api/create-comment/',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newComment)
        } ).then(() =>{
            console.log('new comment added')
        })
    }   


  return (
   
        <div className='inputContainer'>
            <h2>Add New Comment</h2>
            <form onSubmit={handleSubmit}>
                <label>Write your thought</label>
                <input type='text'
                required
                value = {postComment}
                onChange = {(e) =>setPostComment(e.target.value)}
                />
                <button> Save </button>
            </form>
            <Link to={`/post/${postID}`}>Back to the Post</Link>
        </div>

  )
}

export default NewComment;