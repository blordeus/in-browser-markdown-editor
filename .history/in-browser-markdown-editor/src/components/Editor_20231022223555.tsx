interface EditorProps {
    markdown: string;
}
export const Editor = ({markdown}: EditorProps) => {
  return (<div>
    <div className="w-full bg-gray-900 p-3 uppercase text-gray-400 tracking-wider">Editor</div>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  )
}
