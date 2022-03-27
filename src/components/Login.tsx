
import { useEffect, useReducer } from 'react'
import { act } from 'react-dom/test-utils';

interface AuthState{
    validando:boolean,
    token:string|null,
    userName:string,
    nombre:string;
}

const intialState:AuthState = {
    validando: true,
    token: null,
    userName: '',
    nombre: ''
}

type LoginActionPayload={
    userName:string,
    nombre:string;
}

type AuthAction = 
|{type:'logout'}
|{type:'login', payload:LoginActionPayload};

const authReducer = (state:AuthState, action:AuthAction):AuthState =>{
    switch (action.type) {
        
        case 'logout':
            return{
                validando:false,
                token: null,
                nombre:'',
                userName:''
            }
        case'login':
        const {userName, nombre} = action.payload;
            return{
                validando:false,
                token:'abc123',
                nombre: nombre,
                userName: userName
            }
    }
}



export default function Login() {
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, intialState);

    useEffect(() => {
        setTimeout(()=>{
            dispatch({
                type:'logout'
            })
        },1500)
    }, []);

    const login = ()=>{
        dispatch(
            {
                type:'login'
                ,payload:{
                    nombre:'alan',
                    userName:'albq'
                }
            });
    }

    const logout = () =>{
        dispatch({type:'logout'});
    }
    
if (validando) {
    return(
        <>
        <h3>Login</h3>

        <div className='alert alert-info'>
            validando...
        </div>
        </>
    )
}

  return (
    <>
        <h3>Login</h3>

        {
            (token)
            ?<div className='alert alert-success'>Autenticado como:{nombre}</div>
            :<div className='alert alert-danger'>No autenticado</div>

            
        }
        {
            (token)
            ?(
                <button 
                className='btn btn-danger'
                onClick={()=>logout()}
                >LogOut</button>
            )
            :(
                <button 
                className='btn btn-primary'
                onClick={login}
                >LogIn</button>
            )
        }

        
        
        
    </>
  )
}
