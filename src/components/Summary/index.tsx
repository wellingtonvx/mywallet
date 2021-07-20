import { useTransactions } from '../../hooks/useTransactions'

import EntradaImg from '../../assets/Entradas.svg'
import SaidaImg from '../../assets/Saidas.svg'
import TotalImg from '../../assets/Total.svg'

import { Container } from './styles'



export function Summary(){

 const {transactions} = useTransactions();

 const summary = transactions.reduce( (acc, transaction) => {

  if(transaction.type === 'deposit'){
    acc.deposit += transaction.amount;
    acc.total += transaction.amount;
  }else {
    acc.withdraw += transaction.amount;
    acc.total -= transaction.amount
  }

  return acc;

 }, {
   deposit: 0,
   withdraw: 0,
   total: 0
 })

 


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={EntradaImg} alt="Entradas" />
        </header>
          <strong>
          {
            new Intl.NumberFormat('pt-BR', {
            style:"currency",
            currency:"BRL"
            }).format(summary.deposit)
          }
          </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={SaidaImg} alt="Saidas" />
        </header>
          <strong>- 
          {
            new Intl.NumberFormat('pt-BR', {
            style:"currency",
            currency:"BRL"
            }).format(summary.withdraw)
          }
          </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Entradas" />
        </header>
          <strong>
          {
            new Intl.NumberFormat('pt-BR', {
            style:"currency",
            currency:"BRL"
            }).format(summary.total)
          }
          </strong>
      </div>
    </Container>
  )
}