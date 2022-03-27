import { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { reqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        
        cargarUsuarios();
        
    }, [])
    

    const cargarUsuarios = async()=>{
        const respuesta = await reqResApi.get<reqResListado>('/users',{
            params:{
                page: paginaRef.current
            }
        })

        if(respuesta.data.data.length > 0){
            setUsuarios(respuesta.data.data);
            // paginaRef.current++;

        }else{
            paginaRef.current--;
            alert('no hay mas registros')
        }   

    }

    const paginaSiguiente = async () =>{
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = ()=>{
        paginaRef.current--;
        if(paginaRef.current > 0){
            cargarUsuarios();
        }
    }


    return{
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
