import Demo from "./components/Demo"
import Hero from "./components/Hero"
import './App.css'


export default function App() {
    return (
        <main>
        <div className='main'>
          <div className='gradient' />
        </div>
  
        <div className='app'>
          <Hero />
          <Demo />
        </div>
      </main>
  
    )
  }