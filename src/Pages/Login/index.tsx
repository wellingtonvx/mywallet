import {useHistory} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

import LogoImg from '../../assets/Logo.svg';
import LogoHomeImg from '../../assets/logo_home.svg';
import GoogleImg from '../../assets/google.svg'

import { Contaienr} from './styles'

export function Login(){


  const history = useHistory();
  const {user, singInWithGoogle} = useAuth();

  async function handleLogin(){
    if(!user){
      await singInWithGoogle();
    }
    history.push('/home');

  }

  return (
    <Contaienr>
      <section className="section-left">
        <h1>Sua carteira digital, como você nunca viu</h1>
        <img src={LogoHomeImg} alt="Logo Home" />
      </section>

      <section className="section-right">
        <form >
          <img src={LogoImg} alt="logo" />

          <input 
            type="email"
            placeholder="e-mail" 
          />
          <input type="password" placeholder="senha" />
          <button>Entrar</button>
        </form>
        <div className="button-social-container" >
            <button onClick={handleLogin}>
              <img src={GoogleImg} alt="Google Login" />
              Login com google
            </button>
        </div>
      </section>
    </Contaienr>
  )
}