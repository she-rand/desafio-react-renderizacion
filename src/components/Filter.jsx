const Filter = ({onChange:onChange} ) => {
return(
        <div className="filterStyle">
            <h2 className="m-2">Buscador de Colaboradores</h2>
            <input className="m-2" name="filtrar" placeholder="Busca un colaborador" onChange={onChange}></input>
        </div>
)
}
export default Filter;