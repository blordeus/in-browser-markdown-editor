interface EditorProps {
    markdown: string;
}
export const Editor = ({markdown}: EditorProps) => {
  return (<div>
    <div className="w-full bg-gray-900 p-3 uppercase text-gray-400 tracking-wider">Editor</div>
    <textarea className="w-full h-full bg-gray-800 outline">{markdown}</textarea>
    </div>
  )
}
