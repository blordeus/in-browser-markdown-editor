import {marked} from 'marked';
import dompurify fromm "dompurify";
interface PreviewProps {
    markdown: string;
}
export const Preview = ({markdown}: PreviewProps) => {
    const parsed = dompurify.sani
  return (
    <div>{parsed}</div>
  )
}
