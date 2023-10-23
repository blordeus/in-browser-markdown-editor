interface EditorProps {
    markdown: string;
    setMarkdown: (markdown: string) => void;
}
export const Editor = ({markdown, setMarkdown}: EditorProps) => {
  return (<div>
    <div className="w-full bg-gray-900 p-3 uppercase text-gray-300 tracking-wider">Editor</div>
    <textarea className="w-full h-full bg-gray-800 outline-none p-6" onChange={(setMarkdown}>{markdown}</textarea>
    </div>
  )
}
