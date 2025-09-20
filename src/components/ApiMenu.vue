<template>
    <div class=" w-full h-full relative flex justify-center items-center">
        <div 
        @click="e=>{e.stopPropagation()}"
        class="apiOption md:top-[calc(50%-10rem)] md:left-[calc(50%-15rem)] md:w-[30rem] rounded-lg z-20 p-10 pb-2 pt-2 flex justify-center items-center">
            <div class="flex flex-col justify-start items-start w-96">
                <div class="flex items-start justify-start w-full mb-2">
                    <div class="text-sm font-semibold w-20 flex-shrink-0"><p>模型选择</p></div>
                    <div class="flex flex-col justify-center w-full items-start">
                        <el-radio-group v-model="InputType" class="flex flex-row flex-nowrap">
                            <el-radio value="input" size="small">手动输入</el-radio>
                            <el-radio value="cascader" size="small">下拉选择</el-radio>    
                        </el-radio-group>
                         <div class=" flex justify-center items-start mt-4 mb-2 w-full">
                            <div class="w-full relative right-20 " v-if="InputType === 'input'">
                                <div class="w-full flex items-center mb-2 justify-start text-sm font-semibold">
                                    <div class="w-20 flex-shrink-0"><p>Base-URL</p></div>
                                    <el-input v-model="localAPIConfig.baseURL" placeholder="默认url" class=" pb-1 text-sm font-normal outline-none bg-transparent flex-grow text-gray-600 overflow-ellipsis"/>
                                </div>
                                <div class="w-full flex items-center justify-start text-sm font-semibold">
                                    <div class="w-20 flex-shrink-0"><p>Model</p></div>
                                    <el-input v-model="localAPIConfig.model" placeholder="默认model" required="true" class=" pb-1 pt-2 text-sm font-normal outline-none bg-transparent flex-grow text-gray-600 overflow-ellipsis"/></div>
                            </div>
                            <el-cascader class="w-full" v-if="InputType==='cascader'" v-model="cascaderValue" :options="apiOptions" @change="()=>{console.log(cascaderValue)}" />
                        </div>
                    </div>

                </div>
               

                <div class="w-full flex items-center justify-start mb-2 text-sm font-semibold">
                    <div class="w-20 flex-shrink-0"><p>API-Key</p></div>
                    <el-input v-model="localAPIConfig.apiKey" placeholder="默认api" class="pb-2 pt-2 text-sm font-normal outline-none bg-transparent flex-grow text-gray-600 overflow-ellipsis"/>
                </div>

                <div class="flex items-center justify-center w-full rounded-full p-2 text-sm font-semibold mt-2">
                    <button @click="localAPIReset" class=" border rounded-xl p-2 pr-4 pl-4 mr-3">恢复默认</button>
                    <button @click="localAPISave" class="ml-3 border rounded-xl p-2 pr-4 pl-4 bg-blue-400 text-white">保存</button>
                </div>
            
            <!-- <div class="flex items-center justify-center flex-col mt-2"><p class="text-xs">make sure your apiKey supports the selected model</p><a href="https://github.com/popjane/free_chatgpt_api" class=" text-xs text-blue-600 text-center w-full">don't have an apiKey? click me</a></div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed,reactive,defineEmits, onMounted } from 'vue'
import useconfigStore from '@/stores/config/configStore'
import { type apiInitOptionalElement } from '@/stores/config/configTypes';
import { storeToRefs } from 'pinia';
import apiOptions from '@/data/apiOptions';

const configStore = useconfigStore()
const { apiConfig } = storeToRefs(configStore)
const InputType = ref<"input"|"cascader">("cascader")
const cascaderValue = ref<(string | null)[]>([])
onMounted(()=>{
    // console.log(apiOptions.findIndex(item => apiConfig.value.baseURL === item.value && item.children.findIndex(model => model.value === apiConfig.value.model))!== -1)
    cascaderValue.value = apiOptions.findIndex(item => apiConfig.value.baseURL === item.value && item.children.findIndex(model => model.value === apiConfig.value.model)) !== -1 ? [apiConfig.value.baseURL,apiConfig.value.model] : [null]
})
// console.log(cascaderValue.value)   
const emits = defineEmits(['value'])

const localAPIConfig = reactive<apiInitOptionalElement>({
    apiKey: apiConfig.value.useDefault?'':apiConfig.value.apiKey,
    baseURL: apiConfig.value.baseURL,
    model: apiConfig.value.model,
})
function localAPIConfigInit(){
    localAPIConfig.apiKey = apiConfig.value.useDefault ? '' : apiConfig.value.apiKey;
    localAPIConfig.baseURL = apiConfig.value.baseURL;
    localAPIConfig.model = apiConfig.value.model;
    cascaderValue.value = apiOptions.findIndex(item => apiConfig.value.baseURL === item.value && item.children.findIndex(model => model.value === apiConfig.value.model)) !== -1 ? [apiConfig.value.baseURL,apiConfig.value.model] : [null];
}
function localAPIReset(){
    configStore.setDefaultApiConfig();
    localAPIConfigInit();
}
function localAPISave(){

    if(InputType.value === 'cascader'){
        if(cascaderValue.value.length !== 2 || cascaderValue.value[0] === null || cascaderValue.value[1] === null){
            alert('Please select a model')
            return
        }
        else if(localAPIConfig.apiKey === ''){
            alert('Please input API Key')
            return
        }
        localAPIConfig.baseURL = cascaderValue.value[0] as string
        localAPIConfig.model = cascaderValue.value[1] as string
    }
    else{
        if(localAPIConfig.apiKey === '' || localAPIConfig.baseURL === '')
        {
            alert('Please input API Key and Base URL')
            return
        }
    }
    configStore.setApiConfig({
        apiKey: localAPIConfig.apiKey,
        baseURL: localAPIConfig.baseURL,
        model: localAPIConfig.model,
        useDefault: false
    })
    closeMenu()
}

function closeMenu(){
    emits('value', false)
}

</script>