interface EditorProps {
    markdown: string;
}
export const Editor = ({markdown}: EditorProps) => {
  return (<div>
    <div className="w-full bg-gray-900 p-3">Editor</div>
    </div>
  )
}
