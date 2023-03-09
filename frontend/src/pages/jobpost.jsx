import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';


function JobPost() {
  //useState for job search params
  const [keyword, setKeyword] = useState('')
  const[dataset, setDataset] = useState()
  // make api call from usajobs, return search data
     const host = 'data.usajobs.gov';  
     const userAgent = 'huizhao1003@gmail.com';  
     const authKey = 'qz7OI0VncpLGccof3OyZzRI8cswx+jBn5S8r0jx+g9o=';    
    
const handleSubmit = (e) =>{
  e.preventDefault();
  fetch(`https://data.usajobs.gov/api/search?Keyword=${keyword}`,    
    {method: 'GET',      
    headers: {          
        "Host": host,          
        "User-Agent": userAgent,          
        "Authorization-Key": authKey      
    }  
    }).then(res => {return res.json()}) 
      .then(data => setDataset(data))
      .catch((err)=>{console.log(err.message)}) 
  }
console.log(keyword)
console.log(dataset)
//form to search jobs
  return (
    <div className='Post'>
     <h2>Find a Job Post</h2>
     <form onSubmit={handleSubmit}>
                <label>Keyword</label>
                <input type='text'
                required
                value = {keyword}
                onChange = {(e) =>setKeyword(e.target.value)}
                />
                <button> Go </button>
     </form>
    {dataset && dataset.SearchResult.SearchResultItems.map(item => <li><a href ={item.MatchedObjectDescriptor.PositionURI}>{item.MatchedObjectDescriptor.PositionTitle}</a></li>)}
    </div>
  )
}

export default JobPost;

// useEffect(() => {
  //   fetch(`https://data.usajobs.gov/api/Search?Keyword=${keyword}`,    
  //   {method: 'GET',      
  //   headers: {          
  //       "Host": host,          
  //       "User-Agent": userAgent,          
  //       "Authorization-Key": authKey      
  //   }  
  //   })
  //     .then(res => {return res.json()}) 
  //     .then(data => setDataset(data))
  //     .catch((err)=>{console.log(err.message)}) 
  //     }
  // ,[])