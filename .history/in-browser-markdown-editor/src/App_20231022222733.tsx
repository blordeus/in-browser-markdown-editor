import { Editor } from "./components/Editor"
import { Preview } from "./components/Preview"

function App() {
  const [markdown, setmarkdown] = useState(initialState)

  return (
    <>
      <main className='w-full h-screen grid grid-cols-1 sm:grid-cols-2 bg-gray-800'>
        <Editor/>
        <Preview/>
      </main>
    </>
  )
}

export default App