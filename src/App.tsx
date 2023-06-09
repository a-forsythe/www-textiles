import { useState, useEffect } from "react"

import { type Fiber } from "@a-forsythe/spinner"
import { fulfill, type WeaveFulfillment } from "@a-forsythe/weaver"

import { GroupBox } from "./components/GroupBox"

export function App() {
  const [fiber, setFiber] = useState('')
  const [quantity, setQuantity] = useState(0);

  const [fulfillment, setFulfillment] = useState(null as WeaveFulfillment | null)
  useEffect(() => {
    if (fiber === 'flax' || fiber === 'wool') {
      const order = { fiber: fiber as Fiber, quantity }
      setFulfillment(fulfill(order))
    } else {
      setFulfillment(null)
    }
  }, [fiber, quantity])

  return (
    <div>
      <GroupBox label="Weave Order">
        <select value={fiber} onChange={(e) => {
          setFiber(e.target.value)
        }}>
          <option value={""}>n/a</option>
          <option value={"flax"}>Flax</option>
          <option value={"wool"}>Wool</option>
        </select>
        <input type="number" min={0} step={1} value={quantity} onChange={(e) => {
          const value = parseInt(e.target.value)
          if (!isNaN(value)) {
            setQuantity(value)
          }
        }} />
      </GroupBox>
      {fulfillment && (
        <GroupBox label="Order Fulfillment">
          <ul>
            <li><b>Fabric:</b> {fulfillment.fabric}</li>
            <li><b>Quantity:</b> {fulfillment.quantity}</li>
          </ul>
        </GroupBox>
      )}
    </div>
  )
}
