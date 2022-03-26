import React from 'react'
import './style.css'

const Header = () => {
  return (
   <>
       <div className='ui fixed menu dark' style={{backgroundColor:'#F8F8F8 ', color:'black'}}>
        <div className = 'ui container center'>
            <h2 className='header'>Weather Application</h2>

        </div>
        </div>
   </>
  )
}

export default Header