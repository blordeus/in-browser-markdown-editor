import {useEffect} from 'react'

interface PreviewProps {
    markdown: string;
}
export const Preview = ({markdown}: PreviewProps) => {
    useEffect(() => {
        marked.parse
    }, [markdown])
  return (
    <div>Preview</div>
  )
}
