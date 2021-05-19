import React from 'react';
import './App.css';
import Footer from './components/Footer'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/context'
import Details from './components/Details';

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className='app'>
          <Router>
           <Header />
           <Section>
             <Details></Details>
           </Section>
           <Footer />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
