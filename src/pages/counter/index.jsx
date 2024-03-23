import "./style.css"
import { useEffect, useState } from "react";


const Counter = (depth = 0) => {
  const [ children, setChildren ] = useState([])

  const addChild = () => {
    const newChild = {
      id: Date.now(),
      depth: depth + 1,
    }
    setChildren([...children, newChild])
    console.log(children)
  } 
  
  return (
    <div className="counter-wrapper">
      <span>- 1</span>
      <button className="button" onClick={addChild}>+</button>
      <button className="button">-</button>
      {children.map((child) => (
          <Counter
          key = {child.id}
          depth = {child.depth}
          />
      ))}
    </div>
  )
  
}

export default Counter