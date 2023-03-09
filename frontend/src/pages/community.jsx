import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import JobPost from './jobpost';
import Posts from './posts';

function Community() {
  return (
    <div className="d-flex justify-content-around p-3 mb-2 bg-light-subtle text-emphasis-light">
      <Card style={{ width: '30rem',backgroundColor: 'LemonChiffon', fontFamily:'fantasy'  }}>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text style={{fontStyle:'italic' }}>
              {<JobPost/>}
          </Card.Text>
        </Card.Body>
      </Card> 
      <Card style={{ width: '30rem', backgroundColor: 'LemonChiffon', fontFamily:'fantasy' }}>
        <Card.Body>
          
          <Card.Text>
             {<Posts />}
          </Card.Text>
        </Card.Body>
      </Card> 
    </div>
  );
}

export default Community;
  