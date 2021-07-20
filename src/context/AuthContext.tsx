import { createContext, useState, useEffect, ReactNode, SetStateAction, Dispatch} from 'react';
import { auth, firebase } from '../services/firebase';

interface User {
  id : string,
  name: string;
  avatar : string,
  email: string|null
}

interface InfoTransactionRow {
  amount: number
  authorID: string
  transactioID?: string
  category: string
  createdAt: string
  title: string
  type: string
  }

type AuthContextType = {
  user : User | undefined
  singInWithGoogle : () => Promise<void>
  infoRowTransaction: InfoTransactionRow | undefined
  setInfoRowTransaction: Dispatch<SetStateAction<InfoTransactionRow | undefined>>
  transactionId:string
  setTransactionId: Dispatch<SetStateAction<string>>
}

interface AuthContextProviderProps {
  children : ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props:AuthContextProviderProps){
  
  const [user, setUser] = useState<User>();
  const [infoRowTransaction, setInfoRowTransaction] = useState<InfoTransactionRow>();
  const [transactionId, setTransactionId] = useState('');
  
  useEffect( () => {

    const unsubscrible = auth.onAuthStateChanged( user => {
      if(user){
    
        const { displayName, photoURL, uid, email} = user;

        if (!displayName || !photoURL){
          throw new Error('Sem informações da conta google')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email,
        })
      }
     
    })

    return () => {
      unsubscrible();
    }
  }, [])


  async function singInWithGoogle(){

    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if(result.user){
      const { displayName, photoURL, uid, email} = result.user;

      if (!displayName || !photoURL){
        throw new Error('Sem informações da conta google')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email
      })
    }
  }

  return (
    <AuthContext.Provider value={{user, singInWithGoogle, infoRowTransaction, setInfoRowTransaction, setTransactionId, transactionId}}>
      {props.children}
    </AuthContext.Provider>
  )
}