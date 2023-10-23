interface EditorProps {
    markdown: string;
}
export const Editor = ({markdown}: EditorProps) => {
  return (<div>
    <div className="w-full bg-gray-900 p-3 text-lg uppercase text-gray-200 tracking-wider">Editor</div>
    </div>
  )
}
