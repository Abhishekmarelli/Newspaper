import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Topnews from '../Components/Topnews'
import Newscard from '../Components/Newscard'
import './home.css'
import axios from 'axios'
import Spinner from '../Components/Spinner'

const key = process.env.REACT_APP_SECRET_API;

const Home = () => {
  const {state} = useLocation()
  const [news,setnews] = useState([]);
  const [loading,setloading] = useState(true);
  useEffect(()=>{
    const getnews = async()=>{
      const respons =await axios.get(`https://newsapi.org/v2/everything?q=${state}&apiKey=${key}`)
      setnews(respons.data.articles)
      news?setloading(false):setloading(true);
  }
  getnews()
  }
  ,[state])
  return (
    <div className='home'>
        <div className='topnews'>
        <Topnews/>
        </div>
        <div className='news'>
        {loading?<Spinner/>:news.map((item)=>(item.title !== "[Removed]" ?(<Newscard news={item} key={item.publishedAt}/>):""))}
       
        </div>
    </div>
  )
}

export default Home