import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Newscard from '../Components/Newscard'
import { Container } from 'react-bootstrap'
import './search.css'

const Search = () => {
  const [news ,setnews] = useState([])
  const {state} = useLocation()

  const key = process.env.REACT_APP_SECRET_API;
  const url = `https://newsapi.org/v2/everything?q=${state}&apiKey=${key}`

  useEffect(() => {
  const fetchnews = async () =>
  {
    const respones = await axios.get(url);
    setnews(respones.data.articles)    
  }
  fetchnews()
  }, [url,state]);

  return (
    <div>
      <h1 className='sidehead'>News About:<span>{state}</span></h1>
      <Container >
      <div className='searchsection'>
      {news.map((item)=>(
        item.title !== "[Removed]" ?
      (<Newscard news={item} key={item.index}/>):""))}
      </div>
      </Container>
    </div>
  )
}

export default Search
