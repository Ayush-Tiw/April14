//we will  mostly use App.js to write the code

//first thing will be importing of react
import React from "react";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
//class based vs functional based component

// const App=()=>{
//     //we need to export this component to index.js
// return<></>
// }

// export default App;//will throw error if not export

//with normal function

export default function App(){
    return
    <>
    <Navbar/>
    <Jumbotron/>
    <Discover/>
    <Allcards/>
    <Footer/>
    </>//whatever we write inside return will be displayed on the screen
}

//will need to import all the component to App.js