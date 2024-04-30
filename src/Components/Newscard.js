import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import newsimg from '../Assets/newsimg.jpg'
import './Newcard.css'

const Newscard = ({news}) => {
  const {title,description,urlToImage} = news;
  const navigate = useNavigate()
 const handledetailes =()=> {
  console.log('hello')
  navigate('/detailes')
  }
  return(
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={urlToImage!==null?urlToImage:newsimg}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text className='modernWay'>
      {description}
    </Card.Text>
    <Button variant="primary" onClick={()=>handledetailes()}>More Detailes</Button>
  </Card.Body>
</Card>
   ) }

export default Newscard
