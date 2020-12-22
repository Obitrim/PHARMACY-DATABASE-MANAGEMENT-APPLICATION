import React from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';
import AdminPages from '../AdminPages';
import RouterView from '../../components/RouterView';

const Index = (props) => {
	const location = useLocation();

	if (location.pathname.startsWith("/admin")) {
		return <AdminPages/>
	}
	// if user isn't logged in redirect to login
  return <RouterView/>
}

export default Index;