import { SwapWidget } from "@toob-finance/widget"
import "@toob-finance/widget/dist/style.css"

function App() {
  return (
    <div>
      <SwapWidget amount="1" inputToken="ETH" outputToken="TOOB" />
    </div>
  )
}

export default App
