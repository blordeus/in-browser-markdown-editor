interface EditorProps {
    markdown: string;
}
export const Editor = ({markdown}: EditorProps) => {
  return (<>
    <div className="w-full bg-gray-50">Editor</div>
    </>
  )
}
