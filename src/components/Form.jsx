const Form = ({onSubmit:onSubmit,onChangeNombre:onChangeNombre,onChangeCorreo:onChangeCorreo} ) => {
    return(
        <form className="formStyle m-3" onSubmit={onSubmit}>
          <label for="nombreId">Nombre</label>
        <input id="nombreId"  name="nombre" onChange={onChangeNombre} placeholder="Ingresa el nombre del colaborador"></input>
        <label for="correoId">Correo</label>
        <input id="correoId"  name="correo" onChange={onChangeCorreo} placeholder="Ingresa el correo del colaborador"></input>
        <button className="btn btn-info m-1">Agregar Colaborador</button>
      </form>
    )
    }
    export default Form;