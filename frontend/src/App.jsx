import './App.css'
import Community from './pages/community'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Posts from './pages/posts';
import Post from './components/post';
import NewComment from './components/newcomment';
import NewPost from './components/addnewpost';
import JobPost from './pages/jobpost';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
function App() {
  return (
    <>
    <Nav
      // activeKey="/home"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/jobsearch'>Job Post</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/posts">Community Posts</Nav.Link>
      </Nav.Item>
    </Nav>
    <Router>
      <Routes>
          <Route path='/home' element = {<Community />} />
          <Route path='/post'>
            <Route path=':postID' element = {<Post />} />
          </Route>
          <Route path='/posts' element = {<Posts />} />
          <Route path='/posts/:postID/addnewcomment' element = {<NewComment />} />
          <Route path='/addnewpost' element = {<NewPost />} />
          <Route path='/jobsearch' element = {<JobPost />} />
          
      </Routes>
    </Router>
    </>
  )
}

export default App;
