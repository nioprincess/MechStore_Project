import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProductPage from './pages/ProductPage';
import ProductT from './components/ProductT';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Products from './components/Products';
import DashboardView from './components/DashboardView';
import Messages from "./components/Messages";
import { ErrorContextProvider } from './contexts/ErrorContext';
import { ToastProvider } from './Contexts/ToastContext';
import MyToast from './components/Toast';

const App = () => {
  return (
  <BrowserRouter>
    <ErrorContextProvider>
        <ToastProvider>
              <MyToast />
              <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/product' element={<ProductPage />} />
                <Route path='/product1' element={<ProductT />} />
                <Route path='/view-product/:id' element={<ProductPage />} />
                <Route path='/*' element={<NotFoundPage />} />

                <Route
                    path="/admin"
                    element={<DashboardPage />}
                >
                    <Route index element={<DashboardView />} />
                    <Route path='dashboard' element={<DashboardView />} />
                    <Route path='messages' element={<Messages />} />
                    <Route path='product' element={<Products />} />
                    
                  </Route>
            </Routes>
        </ToastProvider>
    </ErrorContextProvider>
  </BrowserRouter>
    
  )
}

export default App