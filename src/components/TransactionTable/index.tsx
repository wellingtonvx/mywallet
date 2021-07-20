import toast, {Toaster} from 'react-hot-toast'

import { useTransactions } from "../../hooks/useTransactions";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

import TrashImg from '../../assets/trash.svg'

import { Container } from "./styles";



export function TransactionTable(){

 const {transactions} = useTransactions();
 const {user} = useAuth();


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Ação</th>
          </tr>
        </thead>
        
        <tbody>

    
          {transactions.map( transaction => {
            
            return (
              <tr key={transaction.transactioID}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style:"currency",
                      currency:"BRL"
                    }).format(transaction.amount)
                  }
                </td>
                <td> {transaction.category}</td>
                <td> 
                {
                    new Intl.DateTimeFormat('pt-BR').format(
                      new Date(transaction.createdAt)
                    )
              
                  }
                </td>
                <td>
                  <button 
                    onClick={ () => {
                      database.ref(`transactions/${user?.name}/${transaction.transactioID}`).remove();
                      toast.success('Sucesso ao excluir a transação');
                    }}
                  >
                    <img src={TrashImg} alt="Deletar" />
                  </button>
                  <Toaster 
                    position="top-right"
                  />
                </td>
              </tr>

            )
          })}

          
        </tbody>
      </table>
    </Container>
  )
}


