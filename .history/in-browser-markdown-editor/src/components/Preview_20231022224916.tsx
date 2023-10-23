
interface PreviewProps {
    markdown: string;
}
export const Preview = ({markdown}: PreviewProps) => {
    const parsed = marked.parse
  return (
    <div>Preview</div>
  )
}
