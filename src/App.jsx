import { GeneratePasswordForm } from './components/GeneratePasswordForm'

function App() {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-white font-bold mb-6">Password Generator</h1>
      <GeneratePasswordForm />
    </div>
  )
}

export default App
