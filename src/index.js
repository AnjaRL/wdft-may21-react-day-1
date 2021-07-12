console.log('Hey, Italy won the Euros. Yayyyyyy')

/*
import something  from './data.js'

import { age, country } from './data.js'


console.log('Default import ', something)
console.log('Named import ', age)
console.log('Named import again', country)
*/

import ReactDOM from 'react-dom'
// since we use webpack, it does not know to treat functional components as React functional components. 
// hence we need to import the library 'react' wherever we create functional components
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bulma/css/bulma.css'
import CoolThing from './components/CoolThing'
import MyMessage from './components/Message'


function App() {

    let myName = 'Manish'

    return (<div>
        <h5 >Manish</h5>
        {/* <Header 
            // simple props
            myName={myName}
            age={20}
            // Boolean props
            bootcamp
        > */}
        <CoolThing />
        {/* Invoking a compoentn and pass a children prop */}
        <Header>
            Hey conchita   
        </Header>
        {/* here `className` is a prop to Footer component */}
        <Footer 
            className="something"
            name={myName}
        />
        <Footer />
        {/* Invoking component and passing different proprs */}
        <MyMessage msgType={'is-info'} />
        <MyMessage msgType={'is-link'} />
    </div>)
}

// Done just once in a React app
// Starts rendering the `<App>` component in our div tag
ReactDOM.render(<App />, document.querySelector('#root'))