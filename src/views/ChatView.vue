<template>
<div class=" w-screen h-screen flex  dark:bg-black" id="chatMenu1">
    <div class="w-64 h-full absolute md:relative flex flex-col rounded-l-md border bg-white dark:bg-[#212121] dark:border-gray-950" id="chatMenu">
        <!-- 上册聊天栏 -->
        <div class="w-64 md:h-[calc(100%-5rem)] relative flex flex-col items-center p-4 overflow-hidden hover:overflow-y-scroll "
            style="scrollbar-width:none">
            <div class=" md:block relative md:left-0 hidden text-md text-gray-600 font-semibold dark:text-white">对话列表</div>
            <div class=" w-full m-2 text-center border p-2 hover:bg-gray-100 rounded-md dark:bg-gray-300 dark:text-black font-bold" @click="()=>{localAPIMenu = !localAPIMenu}">API设置</div>
            <el-dialog v-model="localAPIMenu" width="40%" :close-on-click-modal="false">
                <template #header >
                    <div class="flex items-start justify-center font-bold text-xl text-gray-600">API设置</div>
                </template>
                <ApiMenu @value="val=>{localAPIMenu = val}" />
            </el-dialog>
            <div class="  w-full m-2 text-center border p-2 text-white bg-blue-400 rounded-md font-bold" @click="chatCreate">新对话</div>
            <!-- <div class="  w-full m-2 text-center border p-2 text-white bg-blue-400 rounded-md font-bold" @click="chatCreateTitleInput">新对话</div>
            <div class=" w-full m-2 text-center border p-2 flex justify-around rounded-md " v-if="chatInitElements.chatCreateClick">
                <input type="text" placeholder="input name..." class=" w-32 outline-none bg-transparent dark:text-white" v-model="chatInitElements.chatCreateTitle">
                <img src="@/assets/svg/add.svg" alt="" width="16" @click="chatCreate">
            </div> -->
            <!-- 聊天列表目录 -->
            <div 
            class="chatlist w-full m-2 text-center border p-2 hover:bg-gray-100 rounded-md dark:bg-transparent dark:border-gray-600 dark:hover:bg-[#24272E] dark:text-white" 
            :class="getCurrentParamsid===chat.id?isDarkMode?'selectedChatDark':'selectedChat':''"
            v-for="(chat,index) in chatList" 
            :key="chat.id.toString()+chat.title"
            :id="chat.id.toString()"
            @click="chatChange(chat)">
                <!-- <p v-if="">{{ chat. }}</p> -->
                <div class="text-center p-1 flex justify-around items-center">
                    <div class="title w-32 h-5 truncate">{{ chat.title }}</div>
                    <!-- <img class=" mr-1" src="@/assets/svg/rename.svg" alt="" width="18" @click="chatRename(chat)"> -->
                    <!-- <img src="@/assets/svg/delete.svg" alt="" width="20" @click="chatDelete(index)"> -->
                    <svg @click="chatRename(chat)" t="1727343188604" fill="currentColor"  class="icon" viewBox="0 0 1024 1024" style="width: 14; height: 16;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13520" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="16"><path d="M960.206979 1024H43.574468A43.620948 43.620948 0 0 1 0 980.425532V117.871841a43.620948 43.620948 0 0 1 43.574468-43.574468h516.421356a20.334752 20.334752 0 0 1 0 40.669504H43.574468a2.904965 2.904965 0 0 0-2.904964 2.904964v862.565311a2.904965 2.904965 0 0 0 2.904964 2.904964h916.644131a2.904965 2.904965 0 0 0 2.904964-2.904964V515.340709a20.334752 20.334752 0 0 1 40.669504 0v465.096443a43.620948 43.620948 0 0 1-43.586088 43.562848z" p-id="13521"></path><path d="M518.687228 570.418837a20.334752 20.334752 0 0 1-14.362144-34.731756L1035.120204 5.949367a20.334752 20.334752 0 0 1 28.72429 28.782389l-530.795121 529.737714a20.276652 20.276652 0 0 1-14.362145 5.949367z" p-id="13522"></path></svg>
                    <svg @click="chatDelete(chat)" t="1727191734568" class="icon" viewBox="0 0 1024 1024" style="width: 16; height: 16;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8207" width="16" height="16" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M106.666667 213.333333h810.666666v42.666667H106.666667z" fill="currentColor" p-id="8208"></path><path d="M640 128v42.666667h42.666667V128c0-23.573333-19.093333-42.666667-42.538667-42.666667H383.872A42.496 42.496 0 0 0 341.333333 128v42.666667h42.666667V128h256z" fill="currentColor" p-id="8209"></path><path d="M213.333333 896V256H170.666667v639.957333C170.666667 919.552 189.653333 938.666667 213.376 938.666667h597.248C834.218667 938.666667 853.333333 919.68 853.333333 895.957333V256h-42.666666v640H213.333333z" fill="currentColor" p-id="8210"></path><path d="M320 341.333333h42.666667v384h-42.666667zM490.666667 341.333333h42.666666v384h-42.666666zM661.333333 341.333333h42.666667v384h-42.666667z" fill="currentColor" p-id="8211"></path></svg>
                </div>
                <!-- 重命名 -->
                <div class="top-2 border-t pt-2 flex justify-around" v-if="titleRenameID == chat.id.toString()">
                    <input class="w-32 text-sm outline-none bg-transparent" form="text" placeholder="Input name..." v-model="titleRenameNewname"></input>
                    <svg @click="chatRenameSave(chat)" t="1727344488300" class="icon" viewBox="0 0 1024 1024" style="width: 16; height: 16;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14539" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M725.333333 682.666667v128h85.333334V396.8L669.866667 256H256v554.666667h85.333333v-170.666667h42.666667v170.666667h298.666667v-128H384v-42.666667h341.333333v42.666667z m-38.4-469.333334L853.333333 379.733333V853.333333H213.333333V213.333333h473.6zM341.333333 341.333333h42.666667v213.333334H341.333333V341.333333z" fill="currentColor" p-id="14540"></path></svg>
                </div>
            </div>
        </div>
        <!-- 下侧svg菜单 -->
        <div class=" w-full md:h-20 flex justify-center items-center text-[rgb(38,83,107)] dark:text-gray-200 border-t dark:border-gray-900">
            <RouterLink to="/home" class=" text-center w-full absolute text-xs bottom-20 mb-1 z-10">back to homepage</RouterLink>
            <!-- github -->
             <a href="https://github.com/arigreat/"><svg t="1727958935200" class="icon m-4" viewBox="0 0 1024 1024" style="width: 40; height: 40;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7301" width="40" height="40"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="currentColor" p-id="7302"></path></svg></a>
            <!-- lightmode -->
            <svg t="1727959780633" v-if="!isDarkMode"  @click="darkmodeSwitch" class="icon m-4" viewBox="0 0 1024 1024" style="width: 40; height: 40;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10504" width="40" height="40"><path d="M298.7 676.2l-52.3 52.3c-9.6 9.6-9.6 25.3 0 34.9 9.6 9.6 25.3 9.6 34.9 0l52.3-52.3c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0z m-15-372.7c9.7 9.7 25.5 9.7 35.2 0 9.7-9.7 9.7-25.5 0-35.2l-52.8-52.8c-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2l52.8 52.8z m-69.9 168.8h-74.7c-13.8 0-24.9 11.1-24.9 24.9 0 13.8 11.2 24.9 24.9 24.9h74.7c13.8 0 24.9-11.1 24.9-24.9 0-13.7-11.2-24.9-24.9-24.9z m298.8-249c13.8 0 24.9-11.1 24.9-24.9v-74.7c0-13.8-11.1-24.9-24.9-24.9s-24.9 11.1-24.9 24.9v74.7c0 13.8 11.2 24.9 24.9 24.9z m239.6 69.2l52.3-52.3c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0l-52.3 52.3c-9.6 9.6-9.6 25.3 0 34.9 9.6 9.7 25.3 9.7 34.9 0z m133.9 179.8h-74.7c-13.8 0-24.9 11.1-24.9 24.9 0 13.8 11.1 24.9 24.9 24.9h74.7c13.8 0 24.9-11.1 24.9-24.9 0-13.7-11.1-24.9-24.9-24.9zM741.5 690.9c-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2l52.8 52.8c9.7 9.7 25.5 9.7 35.2 0 9.7-9.7 9.7-25.5 0-35.2l-52.8-52.8zM512.6 273c-123.9 0-224.3 100.4-224.3 224.3s100.4 224.3 224.3 224.3 224.3-100.4 224.3-224.3S636.5 273 512.6 273z m0 498.1c-13.8 0-24.9 11.1-24.9 24.9v74.7c0 13.8 11.1 24.9 24.9 24.9s24.9-11.1 24.9-24.9V796c0-13.7-11.1-24.9-24.9-24.9z" fill="currentColor" p-id="10505"></path></svg>
            <svg t="1727959697900" v-else="!isDarkMode"  @click="darkmodeSwitch" class="icon m-4" viewBox="0 0 1024 1024" style="width: 40; height: 40;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9343" width="40" height="40"><path d="M518.8 512.7c0-178.9 116.1-330.9 278.5-389.1-45.6-16.3-94.6-25.7-145.9-25.7C417 97.9 227 283.7 227 512.7c0 229.1 190 414.8 424.5 414.8 51.4 0 100.3-9.4 145.9-25.7-162.5-58.1-278.6-210.1-278.6-389.1z" fill="currentColor" p-id="9344"></path></svg>
        
        </div>
    
        <div class=" left-[calc(100%-1rem)] top-2/3 rounded-full flex justify-center items-center text-[rgb(38,83,107)] bg-white dark:bg-black dark:border-black border-r w-8 h-8 z-20 absolute md:hidden hover:shadow-md" @click="openSidebar">
            <svg t="1727621475574" class="icon" viewBox="0 0 1024 1024" style="width: 25; height: 25;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4229" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z" fill="currentColor" p-id="4230"></path><path d="M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z" fill="currentColor" p-id="4231"></path><path d="M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z" fill="currentColor" p-id="4232"></path></svg>
        </div>

    </div>

    <!-- 自定义API -->
    <!-- <div v-if="localAPIMenu" class=" w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-10" @click="localAPIConfigReset">
        <div 
        @click="e=>{e.stopPropagation()}"
        class="apiOption absolute w-[30rem] md:top-[calc(50%-10rem)] md:left-[calc(50%-15rem)] md:w-[30rem] bg-white dark:bg-slate-800 dark:border-gray-900 dark:text-white rounded-lg shadow-xl z-20 p-10 pb-5 pt-5">
            <div class=" flex items-start justify-center flex-col">
                <div class="flex items-start justify-center font-bold text-xl mb-2 ml-3">Custom API</div>
                <div class="w-full flex items-center justify-start border-b p-2 text-sm font-semibold"><div class="mr-3 w-20"><p>BaseURL</p></div><input v-model="localAPIConfig.baseURL" type="text" placeholder="default url" class=" text-sm font-normal outline-none bg-transparent w-full text-gray-600 overflow-ellipsis"></div>
                <div class="w-full flex items-center justify-start border-b p-2 text-sm font-semibold"><div class="mr-3 w-20"><p>API-Key</p></div><input v-model="localAPIConfig.apiKey" type="text" placeholder="default api" class=" text-sm font-normal outline-none bg-transparent w-full text-gray-600 overflow-ellipsis"></div>
                <div class="w-full flex items-center justify-start border-b p-2 text-sm font-semibold"><div class="mr-3 w-20"><p>Model</p></div><input v-model="localAPIConfig.model" type="text" placeholder="default model" class=" text-sm font-normal outline-none bg-transparent w-full text-gray-600 overflow-ellipsis"></div>
            </div>
            <div class="flex items-center justify-center rounded-full p-2 text-sm font-semibold mt-2">
                <button @click="localAPIConfigReset" class="mr-3 border rounded-xl p-1 pr-3 pl-3">Cancel</button>
                <button @click="localAPIReset" class=" border rounded-xl p-1 pr-3 pl-3">Use Default</button>
                <button @click="localAPISave" class="ml-3 border rounded-xl p-1 pr-3 pl-3 bg-blue-400 text-white">Save</button>
            </div>
            <div class="flex items-center justify-center flex-col mt-2"><p class="text-xs">make sure your apiKey supports the selected model</p><a href="https://github.com/popjane/free_chatgpt_api" class=" text-xs text-blue-600 text-center w-full">don't have an apiKey? click me</a></div>
        </div>
    </div> -->
    
     <RouterView :key="`chat${$route.fullPath}`"/>
</div>

</template>

<script setup lang="ts">
import router from '@/router';
import { useRoute } from 'vue-router';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import gpt,{type chatElement} from '@/utils/gpt';
import useChatStore from '@/stores/chat/chatStore';
import useConfigStore from '@/stores/config/configStore';
import { storeToRefs } from 'pinia';
import { onBeforeRouteUpdate } from 'vue-router';
import { type apiInitOptionalElement } from '@/stores/config/configTypes';
import type { chatSession } from '@/stores/chat/chatTypes';
import ApiMenu from '@/components/ApiMenu.vue';
import { use } from 'echarts';

// 配置store
const configStore = useConfigStore()
const {apiConfig,isDarkMode} = storeToRefs(configStore)

// 自定义api配置
// const storedAPIConfig = localStorage.getItem('localAPIConfig')
const localAPIConfig = reactive<apiInitOptionalElement>({
    apiKey: apiConfig.value.useDefault?'':apiConfig.value.apiKey,
    baseURL: apiConfig.value.baseURL,
    model: apiConfig.value.model,
})
function localAPIConfigInit(){
    localAPIConfig.apiKey = apiConfig.value.useDefault ? '' : apiConfig.value.apiKey
    localAPIConfig.baseURL = apiConfig.value.baseURL
    localAPIConfig.model = apiConfig.value.model
}
const localAPIMenu = ref(false)
function localAPIConfigReset(){
    localAPIConfigInit();
    localAPIMenu.value = !localAPIMenu.value;
}
function localAPISave(){
    if(localAPIConfig.apiKey === '' || localAPIConfig.baseURL === '')
    {
        alert('Please input API Key and Base URL')
        return
    }
    configStore.setApiConfig({
        apiKey: localAPIConfig.apiKey,
        baseURL: localAPIConfig.baseURL,
        model: localAPIConfig.model,
        useDefault: false
    })
    // if(localAPIConfig.apiKey!=''&&localAPIConfig.baseURL!='')
    // {
    //     localAPIConfig.useDefault = false
    //     localStorage.setItem('localAPIConfig',JSON.stringify(localAPIConfig))
    // }
    // console.log(localAPIConfig)
    localAPIMenu.value = false
}
function localAPIReset(){
    configStore.setDefaultApiConfig();
    localAPIConfigInit()
    // localAPIConfig.apiKey = ''
    // localAPIConfig.baseURL = ''
    // localAPIConfig.model = 'gpt-3.5-turbo'
    // localAPIConfig.useDefault = true
    // localStorage.setItem('localAPIConfig',JSON.stringify(localAPIConfig))
    // console.log(localAPIConfig)
    localAPIMenu.value = false
}


// 聊天store
const chatStore = useChatStore()
const {currentChatId, chatList} = storeToRefs(chatStore)
console.log("chatList",chatList.value)
watch(()=>chatList,()=>{
    console.log("chatList changed",chatList.value)
})
// 聊天记录
// let chatListSets= reactive<Array<chatElement>>(JSON.parse(localStorage.getItem('chatListSets')||'[]'))

// 新聊天初始化参数
const chatInitElements = reactive({
chatCreateClick:false,
chatCreateTitle:""
})
// 新聊天名字输入窗口
function chatCreateTitleInput(){
    chatInitElements.chatCreateClick = !chatInitElements.chatCreateClick
    console.log(chatInitElements.chatCreateClick)
}
// 新聊天创建
// function chatCreate(){
//     const newChat:chatSession = {id:Math.floor(Math.random()*(10**16)),conversation:[],title:chatInitElements.chatCreateTitle}
//     while(chatStore.findChat(newChat.id))
//     {
//         newChat.id = Math.floor(Math.random()*(10**16))
//     }
//     chatStore.addChat(newChat)
//     chatInitElements.chatCreateTitle = ""
//     chatInitElements.chatCreateClick = false
//     chatChange(newChat)
// }
// 新聊天创建 跳转新路由
function chatCreate(){
    router.push({name:'chatid',params:{id:0}})
}
// function chatCreate(){
//     const newChat:chatElement = {id:Math.floor(Math.random()*(10**16)),conversation:[],title:chatInitElements.chatCreateTitle}
//     chatListSets.unshift(newChat)
//     localStorage.setItem('chatListSets',JSON.stringify(chatListSets))
//     chatInitElements.chatCreateTitle = ""
//     chatInitElements.chatCreateClick = false
//     chatChange(newChat)
// }
// 聊天删除
function chatDelete(deletedSession:chatSession){
    if(deletedSession.id!==0)
    {
        chatStore.deleteChat(deletedSession.id)
        if(deletedSession.id == currectRoute.value)
        {router.push({name:'chatid',params:{id:0},query:{startchat:0}})}
    }
}

const titleRenameID = ref('')
const titleRenameNewname = ref('')
// 聊天重命名
function chatRename(renameChat:chatSession){
    titleRenameID.value = titleRenameID.value==''?renameChat.id.toString():''
}
function chatRenameSave(renameChat:chatSession){
    const rechat = chatList.value.find(item => item==renameChat)
    if(rechat)
    {
        rechat.title = titleRenameNewname.value
        chatStore.updateChat(rechat)
    }
    titleRenameID.value = ''
}


// 聊天切换路由
function chatChange(gotoChat:chatSession){
    // chatChangeColor(gotoChat)
    router.push({name:'chatid',params:{id:gotoChat.id}})
}

const route = useRoute()
onMounted(()=>{
    let currentChatId = route.params.id
    let currectChat = chatStore.findChat(Number(currentChatId))
    console.log("当前聊天",currectChat?.id)
    // if(currectChat) chatChangeColor(currectChat)
})

const currectRoute = ref()
// 路由列表更新
onBeforeRouteUpdate((to, from, next)=>{
    currectRoute.value = to.params.id
    next()
})
// 手机端侧栏按钮
const sidebar = ref<HTMLElement | null>(null)
onMounted(()=>{
    // 手机端侧栏设置
    if(window.screen.width<500)
    {
        sidebar.value = <HTMLHtmlElement>document.querySelector('#chatMenu')
        sidebar.value.classList.add('chatMenuOpen')
    }

    if(isDarkMode.value)
    {
        document.documentElement.classList.add('dark')
    }
    else{
        document.documentElement.classList.remove('dark')
    }
})
function openSidebar(){
    if(sidebar.value?.classList.contains('chatMenuOpen')){
        sidebar.value?.classList.remove('chatMenuOpen')
        sidebar.value?.classList.add('chatMenuClose')
    }
    else{
        sidebar.value?.classList.remove('chatMenuClose')
        sidebar.value?.classList.add('chatMenuOpen')
    }
}

// 主题颜色
function darkmodeSwitch(){
    if(isDarkMode.value)
    {
        isDarkMode.value = false
        document.documentElement.classList.remove('dark')
        currectChat?.classList.remove('selectedChatDark')
        currectChat?.classList.add('selectedChat')
        console.log("light mode")
    }
    else{
        isDarkMode.value = true
        document.documentElement.classList.add('dark')
        currectChat?.classList.remove('selectedChat')
        currectChat?.classList.add('selectedChatDark')
        console.log("dark mode")
    }
}
// const themeColor = ref<'dark'|'light'>(localStorage.getItem('theme') ==='dark'?'dark':'light')
// function darkmodeSwitch(){
//     if(themeColor.value == 'dark')
//     {
//         themeColor.value = 'light'
//         document.documentElement.classList.remove('dark')
//         currectChat?.classList.remove('selectedChatDark')
//         currectChat?.classList.add('selectedChat')
//         console.log("light mode")
//     }
//     else{
//         themeColor.value = 'dark'
//         document.documentElement.classList.add('dark')
//         currectChat?.classList.remove('selectedChat')
//         currectChat?.classList.add('selectedChatDark')
//         console.log("dark mode")
//     }
//     localStorage.setItem('theme',themeColor.value)
// }

// 选中聊天添加颜色
const getCurrentParamsid = computed(()=>Number(route.params.id))
let currectChat:HTMLElement|null = document.getElementById(`${Number(route.params.id)}`)
function chatChangeColor(gotoChat:chatSession){
    const newChat:HTMLElement|null = document.getElementById(`${gotoChat.id}`)
    let newChatid;
    if(typeof newChat?.id === 'string') newChatid = Number(newChat.id)
    console.log(currectChat,newChatid)
    if(currectChat?.id == newChat?.id)
    {
        return
    }

    if(currectChat!==null){
        currectChat?.classList.remove('selectedChat')
        currectChat?.classList.remove('selectedChatDark')
    }
    currectChat = newChat
    currectChat?.classList.add(isDarkMode.value?'selectedChatDark':'selectedChat')
    console.log("added")
}

// 获取会话相对时间
</script>

<style>

.selectedChat{
    background-color: #f3f4f6;
}
.selectedChatDark{
    background-color:#24272E;
    color:#448aff;

}
.chatMenuClose{
    box-shadow: none;
    animation: close 0.4s forwards;
    /* background-color: white; */
    z-index: 10;
}
.chatMenuOpen{
    position: absolute;
    /* background-color: white; */
    z-index: 10;
    box-shadow: 55px 10px 80px 10px rgba(0, 0, 0, 0.3);
    /* shadow-[55px_10px_80px_10px_rgba(0,0,0,0.3)] */
    /* transform: translateX(-100px); */
    animation: open 0.4s forwards;
}
@keyframes close{
    0%{
        transform: translateX(0);
        box-shadow: 55px 10px 80px 10px rgba(0, 0, 0, 0.3);
    }
    100%{
        transform: translateX(-101%);
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
    }
}
@keyframes open{
    100%{
        transform: translateX(0);
        box-shadow: 55px 10px 80px 10px rgba(0, 0, 0, 0.3);
    }
    0%{
        transform: translateX(-101%);

        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
    }
}

</style>