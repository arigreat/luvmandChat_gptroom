import OpenAI from "openai";

const clientDefault = new OpenAI({
    apiKey:"sk-F7io4OSemtHxyIA179F7F2E0CdC64dF1A6De1eD3DaF7Dc24",
    baseURL:"https://free.gpt.ge/v1",
    dangerouslyAllowBrowser: true,
});


interface Message {
    role: 'user' | 'assistant';
    content: string;
}
export interface gptMessage{
    massages:Message,
    time:number,
}

export interface chatElement{
    id:number,
    title:string,
    conversation:gptMessage[]
}


export interface apiInitOptionalElement{
    apiKey?:string,
    baseURL?:string,
    model?:'gpt-3.5-turbo'|'gpt-4',
    useDefault:boolean
}


export async function chatgptRequest(userContent:chatElement)
{
    let conversationHistory:Message[] = userContent.conversation.map(item => item.massages)
    const chatCompletions = await clientDefault.chat.completions.create({
        messages:conversationHistory,
        model:'gpt-3.5-turbo',
    });
    conversationHistory.push({role:'assistant',content:chatCompletions.choices[0]?.message?.content||''})
    return chatCompletions;
}

export async function chatgptRequestWithAPI(userContent:chatElement,localAPI:apiInitOptionalElement)
{
    let conversationHistory:Message[] = userContent.conversation.map(item => item.massages)
    if(localAPI.useDefault)
    {
        console.log("default api")
        const chatCompletions = await clientDefault.chat.completions.create({
            messages:conversationHistory,
            model:'gpt-3.5-turbo'
        });
        conversationHistory.push({role:'assistant',content:chatCompletions.choices[0]?.message?.content||''})
        return chatCompletions;
    }
    else{
        console.log("local api")
        const clientUser = new OpenAI({
            apiKey:localAPI.apiKey,
            baseURL:localAPI.baseURL,
            dangerouslyAllowBrowser:true
        })
        const chatCompletions = await clientUser.chat.completions.create({
            messages:conversationHistory,
            model:localAPI.model||'gpt-3.5-turbo'
        });
        conversationHistory.push({role:'assistant',content:chatCompletions.choices[0]?.message?.content||''})
        return chatCompletions;
    }

}

export async function chatgptRequestStreammode(userContent:chatElement,localAPI:apiInitOptionalElement)
{
    let conversationHistory:Message[] = userContent.conversation.map(item => item.massages)
    if(localAPI.useDefault)
    {
        console.log("default api")
        return clientDefault.chat.completions.create({
            messages:conversationHistory,
            model:'gpt-3.5-turbo',
            stream:true
        });
    }
    else{
        console.log("local api")
        const clientUser = new OpenAI({
            apiKey:localAPI.apiKey,
            baseURL:localAPI.baseURL,
            dangerouslyAllowBrowser:true
        })
        return clientUser.chat.completions.create({
            messages:conversationHistory,
            model:localAPI.model||'gpt-3.5-turbo',
            stream:true
        });
    }

}

const gpt = {
    chatgptRequest,
    chatgptRequestWithAPI,
    chatgptRequestStreammode
}

export default gpt