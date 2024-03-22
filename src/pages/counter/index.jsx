import "./style.css"

const Counter = () => {
  return (
    <div className="counter-wrapper">
      <p>- <span>1</span></p>
      <button className="button">+</button>
      <button className="button">-</button>
    </div>
  )
}

export default Counter