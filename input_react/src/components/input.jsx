function Input({titulo, subtitulo, info}) {
    return (
      <>
        <div className="card" style={{width: "25rem", height: "20rem"}}>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <br/>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Número 1</span>
        <input type="text" className="form-control" placeholder="" aria-label="numero1" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Número 2</span>
            <input type="text" className="form-control" placeholder="" aria-label="numero2" aria-describedby="basic-addon1"/>
            </div>
            <br/>
            <button type="button" class="btn btn-secondary">Calcular</button>
    </div>
  </div>
      </>
    )
  }
  
  export default Input