import { Editor } from "./components/Editor"

function App() {

  return (
    <>
      <main className='w-full h-screen grid grid-cols-1 sm:grid-cols-2 bg-gray-800'>
        <Editor/>
        <div></div>
      </main>
    </>
  )
}

export default App
