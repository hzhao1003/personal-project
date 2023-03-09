import { useState, useEffect } from 'react'


function NewPost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmit = (e) =>{
        const newPost = {title,content} //how to add post id? why the post call is successful but not showing anything
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/create-post/',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newPost)
        } ).then(() =>{
            console.log('new post added')
        })
    }   
  return (
   
        <div className='inputContainer'>
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type='text'
                required
                value = {title}
                onChange = {(e) =>setTitle(e.target.value)}
                />
                <label> Content</label>
                <input type='text'
                required
                value = {content}
                onChange = {(e) =>setContent(e.target.value)}
                />
                <button> Save </button>
            </form>
        </div>

  )
}

export default NewPost;