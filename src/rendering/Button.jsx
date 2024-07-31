function Button({type, label}) {
    return (
      <button className={type === "primary" ? "waves-effect waves-light btn-small #039be5 light-blue darken-1" : "waves-effect waves-light btn-small #039be5 light-red darken-1"}>{label}</button>
    )
  }
  
  export default Button