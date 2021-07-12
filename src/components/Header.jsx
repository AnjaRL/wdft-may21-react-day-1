import React from 'react'
import './Header.css'

//  When you pass some input to this component
function Header( props ){

    //console.log('See my props ', props)
    // Your props will look like this
    /*
     {
         name: 'Manish',
         age: 20,
         bootcamp: true,
         children: 'Hello buddy'
     }

    */

    return <h3 className="myHeader" >My {props.name}</h3>
}

export default Header;

