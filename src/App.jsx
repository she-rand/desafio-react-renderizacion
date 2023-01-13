import { useState } from 'react'


export const BaseColaboradores = [
  {
  id: "1",
  nombre: "Colaborador 1",
  correo: "colaborador1@colaborador1.com"
  },
  {
  id: "2",
  nombre: "Colaborador 2",
  correo: "colaborador2@colaborador2.com"
  },
  {
  id: "3",
  nombre: "Colaborador 3",
  correo: "colaborador3@colaborador3.com"
  },
  ]
  
  const App = ( ) => {
  const [lista, setLista]=useState(BaseColaboradores);
  const [nombre, setNombre]=useState("");
  const [correo, setCorreo]=useState("");

const handleSubmit=(e)=>{
  e.preventDefault();

  const nuevoColaborador={
    id:Date.now(),
    nombre:nombre,
    correo:correo
  };
  setLista([...lista,nuevoColaborador]);


}
const handleOnChangeNombre=(e)=>{
 setNombre(e.target.value);
 console.log(e.target.value)
};

const handleOnChangeCorreo=(e)=>{
  setCorreo(e.target.value);
  console.log(e.target.value)
 };

 const handleFilter=(e)=>{
  const filtered=lista.filter((elem)=>  elem.nombre.includes(e.target.value) )
  setLista(filtered)
  console.log(filtered)

 };

 const handleDelete=(id)=>{
  const filtered=lista.filter((elem)=>  elem.id!==id )
  setLista(filtered)
  console.log(filtered)
  console.log(id)
 };

 
    return(
      
      <div className="container" >
        <div>
            <input name="filtrar" onChange={handleFilter}></input>
        </div>
        <form onSubmit={handleSubmit}>
          <input name="nombre" onChange={handleOnChangeNombre}></input>
          <input name="correo" onChange={handleOnChangeCorreo}></input>
          <button>Agregar</button>
        </form>

        <ul>
        { lista.map(({id,nombre,correo})=> (<li key={id}>{nombre}<button onClick={()=>{handleDelete(id)}}>Eliminar</button></li>)
        )}
        </ul>
        
      </div>
    );
  
  };
  
export default App
