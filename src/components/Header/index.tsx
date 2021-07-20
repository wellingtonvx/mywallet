import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { auth } from '../../services/firebase'
import { Container, Content } from './style'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps){

  const { user } = useAuth();

  const history = useHistory()

  function handleLogout(){
    auth.signOut()

    history.push('/')
  }

  return (
    <Container>
      <Content>
        <div className="logo-and-avatar">
          <div>
            <img src={user?.avatar} alt="avatar" />
            <h2>
              {user?.name}
            </h2>
          </div>
        </div>

        <div>
        <button onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>

        
          <button onClick={handleLogout}>
            Sair
          </button>
       
        </div>
  
     </Content>
    </Container>
  )
}