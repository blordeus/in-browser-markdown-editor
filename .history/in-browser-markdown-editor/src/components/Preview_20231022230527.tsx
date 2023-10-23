import {marked} from 'marked';
import dompurify from "dompurify";
interface PreviewProps {
    markdown: string;
}
export const Preview = ({markdown}: PreviewProps) => {
    const parsed = dompurify.sanitize(marked.parse(markdown));
  return (
    <div>
        <div className="w-full bg-gray-900 p-3 uppercase text-gray-300 tracking-wider ">Preview</div>
        <div dangerouslySetInnerHTML={{ __html}}></div>
        <div>{parsed}</div>
    </div>
  )
}
