import React from 'react'
import ReactDOM from 'react-dom/client'
import  AuthProvider  from "./Providers/AuthProvider";
import './index.css'
import router from './Routes/index';
import  { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  <Toaster />
  </React.StrictMode>,
)
