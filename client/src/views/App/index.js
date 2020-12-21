import React from 'react';
import './App.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import RouterView from '../../components/RouterView';

const Index = (props) => {
	// if user isn't logged in redirect to login
  return (
  	<div className="App">
  		<Header/>
	  	<main className="App__Main">
	  		<Navbar/>
	  		<RouterView/>
	  	</main>
  	</div>
  )
}

export default Index;