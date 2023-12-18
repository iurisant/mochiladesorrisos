import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Protected } from './context/Protected';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Public } from './context/Public';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <BrowserRouter>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Public>< Login /></Public>} />
        <Route path="admin" element={<Protected>< Dashboard /></Protected>} />
        <Route path="*" element={<h1 className=' text-4xl p-6 font-sans'>Erro 404 -  Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter >
  </AuthContext>
);

reportWebVitals();
