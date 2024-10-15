<template>
    <div class="w-full h-full bg-white dark:bg-[#212121] rounded-md md:rounded-r-md md:rounded-l-none border md:border-l-0 overflow-hidden dark:border-gray-950">
        <!-- 聊天内容 -->

        <div class="chatroom w-full h-full pt-3">
            <div class="chatroomHome flex items-center justify-center flex-col w-full h-full"
                v-if="userParams.msgStorage == ''||userParams.msgStorage?.conversation?.length == 0">
                <div class="flex flex-row justify-center items-center m-5 relative bottom-10">
                    <img src="@/assets/svg/chatlogo.svg" alt="" width="100" class=" hidden md:block">
                    <div class="h1 text-3xl md:text-6xl font-bold text-[rgb(38,83,107)] ml-4 dark:text-white">Luvmand Chat</div>
                </div>

                <div class="inputField w-full h-16 flex justify-center">
                    <div class=" flex justify-center items-center  border-blue-400 dark:border-white border-2 pr-1.5 pl-10 rounded-full">
                        <input name="" id="" v-model="inputNew" class="w-36 md:w-96 h-full bg-white dark:bg-transparent dark:text-white outline-none" type="text" placeholder="Start a new chat..." @keypress="(key)=>{if(key.key == 'Enter'){sendNewchat()}}"></input>
                        <div class="w-12 ml-10 h-12 p-2 flex justify-center items-center flex-col  bg-[#1296db] rounded-full">
                            <img src="@/assets/svg/send.svg" alt="" width="30" class="" @click="sendNewchat">
                        </div>
                    </div>
                </div>

            </div>

            <div class="w-full h-full" v-else="userParams.msgStorage.conversation.length == 0">
                <div class="chatroomMsg flex flex-col w-full h-[calc(100%-4rem)] overflow-y-scroll md:pl-16 md:pr-16 pl-2 pr-2 scroll-white dark:scroll-black" 
                    ref="chatScroll">
                    <div class="" v-for="chat in userParams.msgStorage.conversation">
                        <div class="w-full flex flex-row items-start justify-end" v-if="chat.massages.role == 'user'">
                            <div class="mr-1 flex flex-col max-w-64 md:max-w-[90%]">
                            <div class="relative text-xs mt-1 flex justify-end"><p class=" text-gray-400">({{ timeTransfer(chat.time) }})</p></div>
                            <div class=" text-sm relative m-1 p-2 pr-4 pl-4 bg-blue-200 w-auto rounded-lg whitespace-pre-wrap max-w-6xl">{{ chat.massages.content }}</div>
                            </div>
                            <img src="@/assets/svg/user.svg" alt="" width="40" class="relative top-3">
                        </div>

                        <div class="w-full flex flex-row items-start justify-start" v-else="chat.massages.role == 'user'">
                            <svg t="1727340660565" class="icon dark:text-white relative top-3" viewBox="0 0 1024 1024" style="width: 40; height: 40;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4369" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40">
                                <path d="M855.823059 439.235765c10.059294-27.587765 12.589176-55.175529 10.059294-82.82353-2.529882-27.587765-12.528941-55.175529-25.118118-80.293647a216.907294 216.907294 0 0 0-92.822588-85.353412 196.487529 196.487529 0 0 0-125.530353-12.528941 263.951059 263.951059 0 0 0-67.764706-50.176c-25.057882-12.589176-55.175529-17.588706-82.823529-17.588706-42.646588 0-85.293176 12.528941-120.470588 37.647059-35.117176 25.118118-60.235294 60.235294-72.764236 100.412236-30.117647 7.529412-55.235765 20.058353-80.293647 35.117176-22.588235 17.588706-40.176941 40.176941-55.235764 62.765176-22.588235 37.647059-30.117647 80.293647-25.118118 122.940236 5.059765 42.706824 22.588235 82.823529 50.236235 115.471059a188.536471 188.536471 0 0 0-10.059294 82.823529c2.529882 27.587765 12.528941 55.235765 25.118118 80.293647a216.967529 216.967529 0 0 0 92.822588 85.353412 196.427294 196.427294 0 0 0 125.530353 12.528941c20.058353 20.118588 42.646588 37.647059 67.764706 50.236235 25.057882 12.528941 55.175529 17.528471 82.823529 17.528471 42.646588 0 85.293176-12.528941 120.470588-37.647059 35.117176-25.057882 60.235294-60.235294 72.764236-100.352a182.512941 182.512941 0 0 0 77.824-35.177412c22.588235-17.528471 42.646588-37.647059 55.175529-62.704941 22.588235-37.647059 30.117647-80.353882 25.118118-123.00047-4.999529-42.646588-20.058353-82.823529-47.706353-115.471059z m-301.176471 421.647059a146.070588 146.070588 0 0 1-97.882353-35.117177s2.529882-2.529882 5.059765-2.529882l160.587294-92.822589a19.636706 19.636706 0 0 0 10.059294-10.059294c2.529882-4.999529 2.529882-7.529412 2.529883-12.528941V481.882353l67.764705 40.116706v185.765647a147.937882 147.937882 0 0 1-148.118588 153.057882z m-323.764706-137.999059c-17.528471-30.117647-25.057882-65.295059-17.52847-100.412236 0 0 2.469647 2.529882 4.999529 2.529883l160.64753 92.822588A22.588235 22.588235 0 0 0 391.529412 720.414118c4.999529 0 10.059294 0 12.528941-2.529883l195.764706-112.941176v77.824L436.705882 778.059294a148.961882 148.961882 0 0 1-112.941176 15.058824 146.733176 146.733176 0 0 1-92.882824-70.234353z m-42.646588-348.882824c17.588706-30.117647 45.176471-52.705882 77.824-65.234823V499.471059c0 5.059765 0 10.059294 2.469647 12.589176a19.576471 19.576471 0 0 0 10.059294 9.999059l195.764706 112.941177-67.764706 40.176941-160.647529-92.882824c-35.117176-20.058353-60.235294-52.705882-70.234353-90.352941-10.059294-37.647059-7.529412-82.823529 12.528941-117.940706z m554.646588 128l-195.764706-112.941176 67.764706-40.176941 160.64753 92.882823c25.118118 15.058824 45.176471 35.117176 57.705412 60.235294 12.589176 25.118118 20.118588 52.705882 17.588705 82.82353A150.588235 150.588235 0 0 1 752.941176 712.824471V522.059294c0-4.999529 0-9.999059-2.529882-12.528941 0 0-2.469647-4.999529-7.529412-7.529412z m67.764706-100.412235s-2.469647-2.469647-4.999529-2.469647l-160.64753-92.882824c-4.999529-2.529882-7.529412-2.529882-12.528941-2.529882-4.999529 0-10.059294 0-12.528941 2.529882l-195.764706 112.941177V341.353412L587.294118 246.000941c25.118118-15.058824 52.705882-20.058353 82.823529-20.058353 27.587765 0 55.235765 9.999059 80.293647 27.587765 22.588235 17.588706 42.706824 40.176941 52.705882 65.234823 10.059294 25.118118 12.589176 55.235765 7.529412 82.82353z m-421.647059 140.589176l-67.764705-40.176941V313.765647c0-27.587765 7.529412-57.705412 22.588235-80.293647 15.058824-25.118118 37.647059-42.706824 62.765176-55.235765 25.118118-12.528941 55.235765-17.588706 82.82353-12.528941 27.587765 2.469647 55.235765 15.058824 77.824 32.587294 0 0-2.529882 2.529882-5.059765 2.529883L401.588706 293.707294A19.576471 19.576471 0 0 0 391.529412 303.706353c-2.529882 5.059765-2.529882 7.529412-2.529883 12.589176V542.117647z m35.177412-80.353882L512 411.648l87.823059 50.176v100.412235L512 612.412235l-87.823059-50.176V461.824z" p-id="4370" fill="currentColor"></path></svg>
                            <div class="ml-1 flex flex-col max-w-64 md:max-w-[90%]">
                            <div class="relative text-xs mt-1 flex justify-start"><p class=" text-gray-400">({{ timeTransfer(chat.time) }})</p></div>
                                <div class=" text-sm relative m-1 p-2 pr-4 pl-4 bg-gray-100 dark:bg-[#757575] dark:text-white w-auto rounded-lg whitespace-pre-wrap max-w-5xl">
                                    <svg t="1727665297057" class="icon animate-spin w-6 h-6 dark:text-white" viewBox="0 0 1024 1024" style="width: 20; height: 20;" v-if=" chat.massages.content == ''" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4261" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M765.576 875.544c10.216 17.248 4.456 40.264-13.376 49.952a35.984 35.984 0 0 1-49.64-13.376c-10.72-17.232-4.472-39.728 12.784-49.936a36.984 36.984 0 0 1 50.232 13.36z m-215.72 77.968c0 19.904-16.472 36.576-37.16 36.576a36.672 36.672 0 0 1-36.576-36.576v-25.64a36.72 36.72 0 0 1 36.576-36.656c20.408 0 37.16 16.232 37.16 36.656v25.64z m-225.92-41.312a36.512 36.512 0 0 1-49.768 13.856l-0.48-0.264a36.328 36.328 0 0 1-13.576-50.248l27.232-47.64a37.648 37.648 0 0 1 50.736-13.584c17.248 10.208 23.568 32.992 13.072 50.24l-27.216 47.64zM148.672 764.168c-17.744 9.92-40.528 3.952-50.24-13.576-10.416-17.248-4.448-40.032 13.072-50.24l73.232-42.384c17.536-9.696 40.24-4.256 50.24 13.576 9.92 17.248 3.872 40.04-13.584 50.248l-72.72 42.376zM70.768 547.872a36.48 36.48 0 0 1-36.576-36.384v-0.192a36.56 36.56 0 0 1 36.256-36.864H184.8a36.48 36.48 0 0 1 36.576 36.384v0.192a36.552 36.552 0 0 1-36.224 36.864H70.768z m40.816-226.208c-17.824-9.92-23.568-32.416-13.072-49.952 9.696-17.744 32.416-23.792 50.24-13.584l123.888 71.936c17.536 9.984 23.28 32.4 13.584 49.728a36.96 36.96 0 0 1-50.16 13.584l-124.48-71.712z m148.528-175.2l86.304 149.824c10.496 17.536 32.992 23.776 50.448 13.36 17.536-9.92 23.28-32.688 13.072-50.224L323.344 109.888c-9.92-17.328-32.4-23.568-49.664-13.36a36.512 36.512 0 0 0-13.648 49.8l0.08 0.136z m216.016-77.392c0-19.904 16.736-36.864 36.576-36.864 20.408 0 37.16 16.528 37.16 36.864V241.68c0 20.4-16.472 36.864-37.16 37.152a36.752 36.752 0 0 1-36.576-36.928V69.072z m225.92 40.816a36.928 36.928 0 0 1 50.24-13.584 36.296 36.296 0 0 1 14.104 49.344l-0.512 0.896L679.36 296.368c-9.76 17.456-32.768 23.712-50.232 13.584-17.544-10.208-23.28-32.992-13.36-50.512l86.28-149.552z m175.784 148.24L727.696 344.656c-17.536 9.92-23.568 32.4-13.584 50.224a37.648 37.648 0 0 0 50.24 13.36l150.12-86.512a36.288 36.288 0 0 0 13.296-49.568l-0.232-0.384c-9.976-17.808-32.528-24.128-49.704-13.648z m77.096 216.304a36.208 36.208 0 0 1 36.568 36.864 36.344 36.344 0 0 1-36.128 36.576H782.112a36.96 36.96 0 0 1-36.656-36.864c0-20.112 16.752-36.576 36.656-36.576h172.816z" p-id="4262" fill="currentColor"></path></svg>
                                    <p v-else=" chat.massages.content == ''">{{ chat.massages.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <!-- 聊天框 -->
                <div class="inputField w-full h-16 flex justify-center">
                    <div class=" flex justify-center items-center  border-blue-400 dark:border-white border-2 pr-1.5 pl-1 md:pl-10 rounded-full overflow-hidden">
                        <svg t="1727347052169" class="icon dark:text-white relative right-2 hidden md:block" viewBox="0 0 1024 1024" style="width: 30; height: 30;" @click="clearData" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15657" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><path d="M505.17 128a73.54 73.54 0 0 1 73.05 66.34l0.34 7v308.92h58c31.41 0 61.18 22 71.07 52.18l1.81 6.59 59.76 296.31A25.6 25.6 0 0 1 744.11 896H266.24a25.6 25.6 0 0 1-25-31l64.53-296.38a74.41 74.41 0 0 1 72.78-58.28h53.22V201.47a73.53 73.53 0 0 1 73.4-73.47z m169.74 528.84l-2.48 0.23h-333.6L298 844.8h62.1v-70a25.6 25.6 0 0 1 50.78-4.6l0.42 4.6v70H599v-22.19a25.6 25.6 0 0 1 50.79-4.6l0.41 4.6v22.19h62.58z m-38.32-95.35h-258a23.18 23.18 0 0 0-22.77 18.08L350 605.85h314.62l-5.24-26.17c-1.59-7.15-8.12-13.81-15.41-16.69l-3.69-1.11z m-109.24-71.71H483v20.48h44.39zM505.17 179.2a22.35 22.35 0 0 0-21.82 18.23l-0.36 4v237.19h44.39V201.39a22.33 22.33 0 0 0-22.21-22.19z" fill="currentColor" p-id="15658"></path></svg>
                        <input name="" id="" v-model="input" class="sm:w-36 md:w-96 h-full bg-white outline-none dark:bg-transparent dark:text-white" @keypress="(key)=> {if(key.key=='Enter'){sendMsgStream()}}" type="text" placeholder="Ask anything..."></input>
                        <div class="w-12 ml-10 h-12 p-2 flex justify-center items-center flex-col  bg-[#1296db] rounded-full">
                            
                            <img src="@/assets/svg/send.svg" alt="" width="30" class="" @click="sendMsgStream">
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive,ref, watch,nextTick, onMounted } from 'vue';
import gpt,{type chatElement,type gptMessage, type apiInitOptionalElement} from "@/utils/gpt"
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute()
let chatListSets = JSON.parse(localStorage.getItem("chatListSets")||"")
const userParams = reactive({
    id:Number(route.params.id),
    autoChatContent:Number(route.query.startchat),
    msgStorage:chatListSets.find((chat:{id:number}) => chat.id === Number(route.params.id))||''
})
console.log(userParams.msgStorage)

// 自动下滑
const chatScroll = ref<HTMLElement|null>(null)
watch(()=>userParams?.msgStorage?.conversation,
async()=>{
    if(userParams.msgStorage.conversation){
        await nextTick()
        if(chatScroll.value)
        {
            chatScroll.value.scrollTop = chatScroll.value.scrollHeight
        }
    }
},{deep:true})

const input = ref("")

function updateData()
{
    chatListSets = JSON.parse(localStorage.getItem("chatListSets")||"")
    userParams.id=Number(route.params.id)
    userParams.autoChatContent=Number(route.query.startchat)
    userParams.msgStorage=chatListSets.find((chat:{id:number}) => chat.id === Number(route.params.id))||''
}

async function sendMsg(){
    const sendingTime:number = new Date().getTime()
    const sendingMsg:string = input.value
    input.value = ""
    const msgSend:gptMessage = {time:sendingTime,massages:{role:"user",content:sendingMsg}}
    
    userParams.msgStorage.conversation.push(msgSend)

    const msgReceiving:gptMessage = {time:sendingTime,massages:{role:"assistant",content:''}}
    userParams.msgStorage.conversation.push(msgReceiving)
    const chatCompletions = await gpt.chatgptRequestWithAPI(userParams.msgStorage,apiGet())
    // 接收gpt信息并存储
    const receivedTime:number = new Date().getTime()
    if(chatCompletions.choices[0]?.message?.content)
    {
        userParams.msgStorage.conversation.pop()
        const msgReceived:gptMessage = {time:receivedTime,massages:{role:"assistant",content:chatCompletions.choices[0]?.message?.content}}
        userParams.msgStorage.conversation.push(msgReceived)
    }
    localStorage.setItem("chatListSets",JSON.stringify(chatListSets))
}

async function sendMsgStream(){
    const sendingTime:number = new Date().getTime()
    const sendingMsg:string = input.value
    input.value = ""
    const msgSend:gptMessage = {time:sendingTime,massages:{role:"user",content:sendingMsg}}
    
    userParams.msgStorage.conversation.push(msgSend)

    const msgReceiving:gptMessage = {time:sendingTime,massages:{role:"assistant",content:''}}
    userParams.msgStorage.conversation.push(msgReceiving)
    try{
        // 接收gpt信息并存储
        const response = await gpt.chatgptRequestStreammode(userParams.msgStorage,apiGet())
        const receivedTime:number = new Date().getTime()
        let chunkTotal = []
        let contentTotal:string = ''
        userParams.msgStorage.conversation.pop()
        userParams.msgStorage.conversation.push({time:receivedTime,massages:{role:"assistant",content:''}})

        // 超时处理
        let isFinished = false
        const timeoutMaxtime = 30000
        const timeout = new Promise((resolve,reject)=>{setTimeout(() => {
            reject("timeout")
        }, timeoutMaxtime);}).catch((err)=>{
            if(!isFinished)
            {
                console.log(err)
                userParams.msgStorage.conversation[userParams.msgStorage.conversation.length-1].massages.content +="[time out, please try later]" 
            }
            return
        })

        await Promise.race([response,timeout])
        for await(const chunk of response)
        {
            chunkTotal.push(chunk)
            if(chunk.choices.length > 0)
            {
                contentTotal+=chunk.choices[0]?.delta?.content || ""
                userParams.msgStorage.conversation[userParams.msgStorage.conversation.length-1].massages.content = contentTotal
                if(chunk.choices[0]?.finish_reason == "stop")
                {
                    isFinished = true
                }
            }
        }
    }catch(err){
        console.log(err)
        userParams.msgStorage.conversation[userParams.msgStorage.conversation.length-1].massages.content +="[something wrong happened, please try later]" 
    }
    localStorage.setItem("chatListSets",JSON.stringify(chatListSets))
    
}

const inputNew = ref('')
async function sendNewchat(){
    const newid = userParams.id==0?Math.floor(Math.random()*(10**16)):userParams.id
    let newChat:chatElement
    if( chatListSets.find((chat:{id:number}) => chat.id === newid))
    {
        newChat = chatListSets.find((chat:{id:number}) => chat.id === newid)
        newChat.conversation = []
        newChat.title = inputNew.value

    }
    else{
        newChat = {id:newid,conversation:[],title:inputNew.value}
        chatListSets.unshift(newChat)
    }
    inputNew.value = ''
    
    
    localStorage.setItem('chatListSets',JSON.stringify(chatListSets))
    // console.log(newChat.title)
    router.push({name:'chatid',params:{id:newChat.id,},query:{startchat:1}})
}

onMounted(async()=>{
    updateData()
    if(userParams.autoChatContent == 1&&userParams.msgStorage?.conversation?.length == 0)
    {
        const sendingTime:number = new Date().getTime()
        const sendingMsg:string = userParams.msgStorage.title
        console.log(sendingMsg)
        const msgSend:gptMessage = {time:sendingTime,massages:{role:"user",content:sendingMsg}}
        
        userParams.msgStorage.conversation.push(msgSend)
        const msgReceiving:gptMessage = {time:sendingTime,massages:{role:"assistant",content:''}}
        userParams.msgStorage.conversation.push(msgReceiving)

        // 流式输出
        const response = await gpt.chatgptRequestStreammode(userParams.msgStorage,apiGet())
        const receivedTime:number = new Date().getTime()

        let chunkTotal = []
        let contentTotal:string = ''
        userParams.msgStorage.conversation.pop()
        userParams.msgStorage.conversation.push({time:receivedTime,massages:{role:"assistant",content:''}})
        for await(const chunk of response)
        {
            chunkTotal.push(chunk)
            if(chunk.choices.length > 0)
            {
                contentTotal+=chunk.choices[0]?.delta?.content || ""
                userParams.msgStorage.conversation[userParams.msgStorage.conversation.length-1].massages.content = contentTotal
                // console.log(contentTotal)
            }
        }
        localStorage.setItem("chatListSets",JSON.stringify(chatListSets))

        // 普通输出
        // const chatCompletions = await gpt.chatgptRequestWithAPI(userParams.msgStorage,apiGet())
        // const receivedTime:number = new Date().getTime()
        // if(chatCompletions.choices[0]?.message?.content)
        // {
        //     userParams.msgStorage.conversation.pop()
        //     const msgReceived:gptMessage = {time:receivedTime,massages:{role:"assistant",content:chatCompletions.choices[0]?.message?.content}}
        //     userParams.msgStorage.conversation.push(msgReceived)
        // }
        // localStorage.setItem("chatListSets",JSON.stringify(chatListSets))
        // console.log(userParams.msgStorage)
    }
})


function clearData(){
    userParams.msgStorage.conversation.length = 0
    localStorage.setItem("chatListSets",JSON.stringify(chatListSets))
    updateData()
}


function timeTransfer(time:number){
    const localtime = new Date(time)
    return localtime.toLocaleString()
}

function apiGet():apiInitOptionalElement{
    const storedAPIConfig = localStorage.getItem('localAPIConfig')
    return storedAPIConfig? JSON.parse(storedAPIConfig):{model:"gpt-3.5-turbo",useDefault:true}
}


</script>
