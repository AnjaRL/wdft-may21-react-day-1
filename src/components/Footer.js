import React from 'react'

// You can also do this
/*
import {Component} from 'react'
class MyFooter extends Component
*/

class MyFooter extends React.Component {

    render(){
        // In class components you will always access the props in `this.props`
        
        console.log('Class props', this.props )

        const {name = 'Ironhack'} = this.props

        return <footer>Made by {name}</footer>
    }


}


export default MyFooter