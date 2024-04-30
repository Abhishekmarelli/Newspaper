import { useState } from 'react';
import React from 'react'
import './Nav.css';
import { FaHome ,FaSearch} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [cat,setcat ] = useState();
  const handlechange = (e)=>{
    setcat(e.target.value)
    navigate('/', {state:cat})
  }
  const navigate = useNavigate()
  const handlesearch = (e)=>{
    e.preventDefault();
    const data =e.target.Search.value;
    navigate('/', {state:data})
  }

  return (
    <nav>
        <Link to={'/'} id='logo'>NewsPaper</Link>
       <span className='search'>
        <form onSubmit={handlesearch}>
        <input type='text' placeholder='Search....' name="Search" autoComplete='false'/>
        <button id='searchbtn'><FaSearch/></button>
        </form>
        </span>
        <ul>
              <li><Link to={'/'}><FaHome /></Link></li>
              <li><select name='Category'onChange={handlechange} >
                  <option value="politics" >Categories</option>
                  <option value="business">Business</option>
                  <option value="sports">Sports</option>
                  <option value="politics">Politics</option>
              </select></li>
        </ul>
    </nav>
  )
}

export default Navbar