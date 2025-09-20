import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

import footnote from "markdown-it-footnote";
import container from "markdown-it-container";
import toc from "markdown-it-toc-done-right";
import emoji from "markdown-it-emoji";
import deflist from "markdown-it-deflist";
import abbr from "markdown-it-abbr";
import ins from "markdown-it-ins";
import mark from "markdown-it-mark";
import taskLists from "markdown-it-task-lists";
// import mermaid from "@DatatracCorporation/markdown-it-mermaid";

const config = {
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: "lang-",
    typographer: true,
    quotes: "“”‘’",
    linkify: true,
    highlight:(str:string, lang:string): string => {
        if (lang && hljs.getLanguage(lang)) {
        try {
            return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`;
        } catch (__) {}
        }
        return `<pre class="hljs"><code>${markdownIt.utils.escapeHtml(str)}</code></pre>`;
    }
};
export const markdownIt = new MarkdownIt(config);

markdownIt
    .use(footnote)
    .use(container)
    .use(container, "hljs-left")
    .use(container, "hljs-center")
    .use(container, "hljs-right")
    .use(toc)
    .use(emoji)
    .use(deflist)
    .use(abbr)
    .use(ins)
    .use(mark)
    .use(taskLists)
    // .use(mermaid);


export default markdownIt;