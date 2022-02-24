import BuyStock from './sections/BuyStock'
import Assets from './sections/Assets'
import Trade from './sections/Trade'
import Ready from './sections/Ready'
import Assured from './sections/Assured'
import Conection from './sections/Conection'

export default function Home() {
    return (
      <main>
        <BuyStock />
        <Assets />
        <Trade />
        <Ready />
        <Assured />
        <Conection />
      </main>
    )
}