import { useState } from 'react'

export default function useCounter(inicial:number=0) {
    const [valor, setValor] = useState<number>(inicial);

    const acumular = (numero:number):void =>{
        setValor(valor + numero);
    }

    return {
        valor,
        acumular
    }

}
