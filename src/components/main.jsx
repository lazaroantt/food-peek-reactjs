import Hamburger from '../images/hamburger.png'

import './main.css'

export default function Main() {
  return (
    <div className="App">
      <section>
        <form>
          <h6>Welcome FooD PeeK</h6>
          <h1>Different spice for different tastes</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button>Order yours</button>
        </form>
      </section>
      <aside>
        <img src={Hamburger}/>
      </aside>
    </div>
  )
}