import { defineStore } from "pinia";
import { ref } from "vue";
import { type apiInitOptionalElement } from "./configTypes"; // Adjust the import path as necessary

const useConfigStore = defineStore("config", () => {
    const apiConfig = ref<apiInitOptionalElement>({stream:true,apiKey: import.meta.env.VITE_DS_API_KEY, baseURL: import.meta.env.VITE_APP_BASE_URL, model: import.meta.env.VITE_DS_MODEL,useDefault:true});
    const isDarkMode = ref(false);

    function setApiConfig(config: apiInitOptionalElement) {
        apiConfig.value = config;
    }

    function setDefaultApiConfig() {
        apiConfig.value = {stream:true,apiKey: import.meta.env.VITE_DS_API_KEY, baseURL: import.meta.env.VITE_APP_BASE_URL, model: import.meta.env.VITE_DS_MODEL,useDefault:true};
    }

    function toggleDarkMode() {
        isDarkMode.value = !isDarkMode.value;
    }

    return {
        apiConfig,
        isDarkMode,
        setApiConfig,
        setDefaultApiConfig,
        toggleDarkMode
    };
},{persist: true});

export default useConfigStore;