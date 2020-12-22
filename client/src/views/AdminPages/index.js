import React from 'react';

import './AdminPages.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import RouterView from '../../components/RouterView';

const Index = (props) => {
   return (
    <>
    	<Header/>
    	<main className="Admin__Main">
    		<Navbar/>
    		<RouterView/>
    	</main>
    </>
  )
}

export default Index;