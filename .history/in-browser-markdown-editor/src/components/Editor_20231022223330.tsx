interface EditorProps {
    markdown: string;
}
export const Editor = ({markdown}: EditorProps) => {
  return (<>
    <div className="w-full bg-gray">Editor</div>
    </>
  )
}
