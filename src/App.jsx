import { useState } from 'react'
import {BaseColaboradores} from './components/Colaboradores';
import Filter from './components/Filter';
import Form from './components/Form';



  const App = ( ) => {
  const [lista, setLista]=useState(BaseColaboradores);
  const [nombre, setNombre]=useState("");
  const [correo, setCorreo]=useState("");
  const [buscar, setBuscar]=useState("");

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
  setBuscar(e.target.value)
  console.log(buscar)

 };

 const handleDelete=(id)=>{
  const filtered=lista.filter((elem)=>  elem.id!==id )
  setLista(filtered)
  console.log(filtered)
  console.log(id)
 };

 
    return(
      
      <>
        <Filter onChange={handleFilter}/>
        <Form onSubmit={handleSubmit} onChangeCorreo={handleOnChangeCorreo} onChangeNombre={handleOnChangeNombre}/>
        <h2>Lista de Colaboradores</h2>
        <ul>
        { lista.filter((elem)=>  elem.nombre.toLowerCase().includes(buscar.toString().toLowerCase())).map(({id,nombre,correo})=> (<li key={id}>{nombre} - {correo}<button className='btn btn-danger m-1' onClick={()=>{handleDelete(id)}}>Eliminar</button></li>)
        )}
        </ul>
        
      </>
    );
  
  };
  
export default App
