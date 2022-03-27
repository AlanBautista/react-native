

export const TiposBasicos = () => {

    const nombre:string = 'Alan';
    
    const edad:number= 22;

    const isActive:boolean = true;

    const poderes: string[] = ['velocidad','volar','respirar en el agua'];

  return (
    <>
        <h3>Tipos basicos</h3>
        {nombre}, {edad},{isActive?'activo':'no activo'}
        <br/>
        {poderes.join(', ')}
    </>
  )
}
