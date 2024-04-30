import axios from 'axios';
import {useEffect,useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import newsimg from '../Assets/newsimg.jpg'

const Topnews = () => {

const [news,setnews] = useState([]);

const key = process.env.REACT_APP_SECRET_API;


  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
  useEffect(()=>{
    const fetchnews=async()=>{
      const respones = await axios.get(url)
      setnews(respones.data.articles)
    }
    fetchnews();
  },[url])

  return (
    <Carousel fade>
      {news.map((item)=>(item.title !== '[Removed]' ? 
      <Carousel.Item key={item.publishedAt}>
    <img
      className="img-fluid w-100 d-block"
      src={item.urlToImage!==null?item.urlToImage:newsimg}
      alt="Img Not Found"
    />
    <Carousel.Caption>
      <h3>{item.title}</h3>
    </Carousel.Caption>
      </Carousel.Item>:""))}
      </Carousel>)

}

export default Topnews

