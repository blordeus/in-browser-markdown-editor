import {marked} from 'marked';
import dompurify fromm "dompurify";
interface PreviewProps {
    markdown: string;
}
export const Preview = ({markdown}: PreviewProps) => {
    const parsed = dompurify.sanitize(marked.parse(mark))
  return (
    <div>{parsed}</div>
  )
}
