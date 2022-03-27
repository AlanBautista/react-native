interface Persona{
    nombreCompleto:string;
    edad:number;
    direccion:Direccion;
}

interface Direccion{
    pais:string;
    casaNo:number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Alan',
        edad: 22,
        direccion:{
            pais: 'Mexico',
            casaNo:  20
        }
    }


    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                {JSON.stringify(persona,null,2)}
                </pre>
            </code>
            
        </>
    )
}
