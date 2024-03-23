import "./style.css"
import { useState } from "react";


const Counter = ({ depth = 0, onRemove, count = 1 }) => {
  const [ children, setChildren ] = useState([])
  const [childCounter, setChildCounter] = useState(1)

  const addChild = () => {
    const newChild = {
      id: `child-${depth}-${childCounter}`,
      depth: depth + 1,
      count: childCounter
    }
    setChildren([...children, newChild])
    setChildCounter(childCounter + 1)
  } 
  
  const removeChild = (id, depth) => {
    if(depth > 0){
      setChildren(children.filter(child => child.id !== id))
    }
  }


  return (
    <div className="counter-wrapper">
      <span>{`- ${count}`}</span>
      <button className="button" onClick={addChild}>+</button>
      <button className="button" onClick={onRemove}>-</button>
      {children.map((child) => (
          <Counter
          key = {child.id}
          depth = {child.depth}
          onRemove = {()=>removeChild(child.id, child.depth)}
          count = {child.count}
          />
      ))}
    </div>
  )
  
}

export default Counter