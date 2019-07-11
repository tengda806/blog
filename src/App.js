import React, { Component } from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import GoTop from "./components/goTop/goTop";
import { inject , observer } from "mobx-react"
import "./App.less"
import Route from "./router"
import {  ToastContainer} from "react-toastify" 
import 'react-toastify/dist/ReactToastify.css'

@inject( 'homeStore' )
@observer
class App extends Component {
  render() {
    return (
         <div className="App">
            <Header />
            <Route />
            <ToastContainer />
            <Footer />
            <GoTop />
        </div>
    );
  }
}

export default App;
