import React from 'react';
import backgroundImage from './THRFT.jpg';
import './App.css';
import LoginPage from './LogIn.js'
import { createBrowseRouter, RouterProvider, Link, usenavigate} from 'react-route-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!<button onClick={() => {
       // Redirect to the dashboard after login
    }}>Hello</button></div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

