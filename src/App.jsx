
import './App.css'
import AdviceGenerator from './components/AdviceGenerator'

function App() {
  return (
    <>
    <div className='bg-primary min-h-screen flex flex-col justify-center items-center relative'>
        <AdviceGenerator/>
        <div className="text-xs absolute bottom-0 p-4 text-contrast tracking-wide">
          Challenge by <a className="text-accent" href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
          Coded by <a className="text-accent" href="https://github.com/intanaarabi#" rel="noreferrer" target="_blank">intan</a>.
        </div>
    </div>
    </>
  )
}

export default App
