/// <reference types="vite/client" />
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }

declare module "markdown-it-emoji"
declare module "markdown-it-deflist"
declare module "markdown-it-abbr"
declare module "markdown-it-ins"
declare module "markdown-it-mark"
declare module "markdown-it-task-lists"
declare module "@DatatracCorporation/markdown-it-mermaid"
declare module 'v-clipboard'