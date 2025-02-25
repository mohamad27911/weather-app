

function Form(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <form onSubmit={props.getWeather}>
        <input className="city" type="text" name="city" placeholder="City..." />
        <input className="country" type="text" name="country" placeholder="Country..." />
        <button id="search">Search</button>
    </form>
  )
}

export default Form