import OpenAI from "openai";
import { type Message,type chatSession } from "@/stores/chat/chatTypes";
import { type apiInitOptionalElement } from "@/stores/config/configTypes";


function getClient(apiConfig: apiInitOptionalElement) {
    return new OpenAI({
        apiKey: apiConfig.apiKey,
        baseURL: apiConfig.baseURL,
        dangerouslyAllowBrowser: true,
    });
}


export async function chatgptRequest(userContent:chatSession,apiConfig:apiInitOptionalElement,optionalConfig?:optionalConfig)
{
    console.log("开始请求",optionalConfig?.abortController?.signal)
    const conversationTailIndex = optionalConfig?.resendMessageIndex ?? userContent.conversation.length;
    const conversationHistory:Pick<Message,'role'|'content'>[] = userContent.conversation.slice(0,conversationTailIndex).map(({role, content}) => ({role, content}));
    const chatCompletions = await getClient(apiConfig).chat.completions.create({
        messages:conversationHistory,
        model:apiConfig.model,
        stream: apiConfig.stream || false,
    },{
        signal: optionalConfig?.abortController?.signal,
    });
    return chatCompletions;
}

export interface optionalConfig{
    resendMessageIndex?:number,
    abortController?:AbortController
}
