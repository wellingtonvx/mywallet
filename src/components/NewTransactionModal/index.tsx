import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import toast, {Toaster} from 'react-hot-toast';

import CloseImg from '../../assets/Close.svg'
import EntradaImg from '../../assets/Entradas.svg'
import SaidaImg from '../../assets/Saidas.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';
import { useAuth } from '../../hooks/useAuth';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){

  const {createTransaction} = useTransactions();
  const {user } = useAuth();

  const [title, setTitle] =useState('');
  const [amount, setAmount] =useState(0);
  const [category, setCategory] =useState('');

  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();

    if(title.trim() === "" || amount === 0 || category.trim() === ""){
      toast.error('os campos não podem estar vazios');
      return;
    }

   await createTransaction({
      authorID: user?.id,
      title,
      amount,
      category,
      type,
      createdAt: String(new Date())
    })

    toast.success('Adicionado com sucesso')

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
    
  }

  return (
  <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar Transações</h2>

        <input
          placeholder= "Título" 
          value={title}
          onChange={ event => setTitle(event.target.value)}
       />

        <input
          type="number"
          placeholder= "Valor"
          onChange={ event => setAmount(Number(event.target.value))}
       />
       <Toaster 
          position="top-right"
       />

       <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={EntradaImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={SaidaImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
       </TransactionTypeContainer>

        <input
          placeholder= "Categoria"
          value={category}
          onChange={ event => setCategory(event.target.value)}
       />

       <button type="submit">
         Cadastrar
       </button>

      </Container>

  </Modal>
  )
}