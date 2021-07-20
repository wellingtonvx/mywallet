import { createContext, ReactNode, useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';


interface Transaction {
  authorID: string | undefined
  transactioID?: string
  title: string
  amount:number 
  category:string
  type:string
  createdAt: string
}

type TransactionInput = Transaction


type FirebaseTransactions = Record<string,{
  amount:number
  authorID:string
  category:string
  title:string
  type:string
  createdAt: string
}>

interface TransactionProviderProps {
  children : ReactNode
}

interface TransactionContextData {
  transactions : Transaction[];
  createTransaction: (transaction:TransactionInput) => Promise<void>; 
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({children} :TransactionProviderProps){

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const {user} = useAuth();

  useEffect( () => {

    const transactionRef = database.ref(`transactions/${user?.name}`)
   
    transactionRef.on('value', transaction => {

      const databaseTransaction = transaction.val();

      const FirebaseTransactions:FirebaseTransactions = databaseTransaction ?? {};


      const parseTransactionsToArray  = Object.entries(FirebaseTransactions)
      .map((key, value) => {

        const data = {
          authorID: key[1].authorID,
          transactioID: key[0],
          title: key[1].title,
          amount:key[1].amount,
          category:key[1].category,
          type:key[1].type,
          createdAt:key[1].createdAt
        }

        return data;
        }
      )

      
      setTransactions(parseTransactionsToArray)
    })
  }, [user?.name])

  async function createTransaction(transactionInput:TransactionInput) {

    const transactionRef = database.ref(`transactions/${user?.name}`)

    await transactionRef.push(transactionInput)
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
        {children}
    </TransactionContext.Provider>
  )
}