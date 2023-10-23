import {useEffect} from 'react'

interface PreviewProps {
    markdown: string;
}
export const Preview = ({markdown}: PreviewProps) => {
    useEffect(() => {
    
    }, [markdown])
  return (
    <div>Preview</div>
  )
}
