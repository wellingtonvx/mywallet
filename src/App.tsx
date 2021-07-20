import Modal from 'react-modal'
import { TransactionProvider } from './context/TransactionContext';
import { Routes } from './routes';
import { AuthContextProvider } from './context/AuthContext';


import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {


  return (
    <AuthContextProvider>
      <TransactionProvider>

        <Routes />  
          
        <GlobalStyle />

      </TransactionProvider>
    </AuthContextProvider>
  );
}

