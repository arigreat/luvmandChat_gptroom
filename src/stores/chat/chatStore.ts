import { defineStore } from "pinia";
import { ref } from "vue";
import { type chatSession } from "./chatTypes"; // Adjust the import path as necessary

const useChatStore = defineStore("chat", () => {
    const chatList = ref<chatSession[]>([]);
    const currentChatId = ref<number>(0);
    // 待处理的聊天ID
    const pendingChatIdSets = new Set<number>();
    const isLoading = ref(false);

    function addChat(chat:chatSession) {
        chatList.value.push(chat);
    }
    function findChat(id:number) {
        return chatList.value.find(chat => chat.id === id);
    }
    function setCurrentChat(id:number) {
        currentChatId.value = id;
    }
    function setLoading(loading:boolean) {
        isLoading.value = loading;
    }
    function deleteChat(id:number) {
        chatList.value = chatList.value.filter(chat => chat.id !== id);
        if (currentChatId.value === id) currentChatId.value = 0;
    }
    function getCurrentChat() {
        if (currentChatId.value === null) return null;
        return chatList.value.find(chat => chat.id === currentChatId.value) || null;
    }
    function updateChat(updatedChat:chatSession) {
        const index = chatList.value.findIndex(chat => chat.id === updatedChat.id);
        if (index !== -1) {
            console.log("更新会话成功:", updatedChat);
            chatList.value[index] = updatedChat;
        }else{
            console.log("更新失败")
        }
    }
    // 添加待处理的聊天ID
    function addPendingChat(id:number) {
        pendingChatIdSets.add(id);
    }
    function checkAndRemovePendingChat(id:number) {
        if (pendingChatIdSets.has(id)) {
            pendingChatIdSets.delete(id);
            return true;
        }
        return false;
    }

    return {
        chatList,
        currentChatId,
        isLoading,
        getCurrentChat,
        findChat,
        addChat,
        setCurrentChat,
        setLoading,
        deleteChat,
        updateChat,
        addPendingChat,
        checkAndRemovePendingChat
    };
},{persist: true});

export default useChatStore;