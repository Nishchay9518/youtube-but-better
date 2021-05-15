import React, { useState } from 'react'
import './header.scss';

import { FaBars } from 'react-icons/fa';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = ({handleToggleSidebar}) => {
    const [input, setInput] = useState('')

   const history = useHistory()

   const handleSubmit = e => {
      e.preventDefault()

      history.push(`/search/${input}`)
   }
   const user = useSelector(state => state.auth?.user)

    return (
        <div className=" header">
            <FaBars
            className="header__menu" size={26} 
            onClick={() => handleToggleSidebar()}
            />
        <div className="header__logo_item">

            <img src="/stems/logo.png" alt="youtube logo " 
            className="header__logo"
            />
        </div>
        
         <form 
         onSubmit={handleSubmit}
         >
             <input type="text" placeholder="Search"
              value={input}
              onChange={e => setInput(e.target.value)}
              />
             <button type="submit">
                <div className="search-icons">
                    
                     <img src="/stems/Search.png" alt=""/>
                
                    </div>
             </button>
             </form>  

             <div className="header__icons">
                 <img src="/stems/bell.png" alt="" style={{width:'20px'}}/>
                 <img src="/stems/category.png" alt="" style={{width:'22px'}}/>
                 
                 <img className="header__icons_avatar" src={user?.photoURL}  alt="avatar"/>
                 </div> 
        </div>
    )
}

export default Header

