import marked from 'mark'
interface PreviewProps {
    markdown: string;
}
export const Preview = ({markdown}: PreviewProps) => {
    const parsed = marked.parse(markdown)
  return (
    <div>Preview</div>
  )
}
