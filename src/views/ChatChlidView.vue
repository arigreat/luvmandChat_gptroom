<template>
    <div 
    :key="currentChatId"
    class="w-full h-full bg-white dark:bg-[#212121] rounded-md md:rounded-r-md md:rounded-l-none border md:border-l-0 overflow-hidden dark:border-gray-950">
        <!-- 聊天内容 -->
            <div 
            class="chatroomHome flex items-center justify-center flex-col w-full h-full"
            v-if="ifShowNewChat">
                <div class="flex flex-row justify-center items-center m-5 relative bottom-10">
                    <img src="@/assets/svg/chatlogo.svg" alt="" width="100" class=" hidden md:block">
                    <div class="h1 text-3xl md:text-6xl font-bold text-[rgb(38,83,107)] ml-4 dark:text-white">Luvmand Chat</div>
                </div>

                <div 
                class="inputField w-full border-blue-400 flex justify-center">
                    <div 
                    class="w-full max-w-3xl mx-auto flex flex-col  bg-gray-100 dark:bg-gray-700 rounded-xl shadow-sm">
                        <textarea 
                        ref="inputFieldNew"
                        v-model="inputNew" 
                        class="w-full py-3 px-4 bg-transparent outline-none resize-none dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                        @keydown.enter.exact.prevent="sendNewchat"
                        placeholder="让我们畅所欲言..."
                        rows="1"
                        style="min-height: 60px; max-height: 200px;"
                        @input="adjustHeightNew"
                        ></textarea>
                
                        <div class="flex justify-end items-center p-2 ">
                            <div 
                            class="w-10 ml-10 h-10 p-2 flex justify-center items-center flex-col bg-blue-400 hover:bg-blue-500 rounded-full">
                                <img src="@/assets/svg/send.svg" alt="" width="25" class="" @click="sendNewchat">
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div 
            class="w-full h-full pt-4" 
            :style="{ paddingBottom: inputAreaHeight + 'px' }"
            v-else="ifShowNewChat">
                <div 
                class="chatroomMsg flex flex-col w-full h-full overflow-y-scroll px-4 scroll-white dark:scroll-black transition-all duration-300" 
                ref="chatScroll">
                    <div class="mb-6" v-for="(message,index) in currentSession.conversation">
                        <div class="w-full flex flex-row items-start justify-end" v-if="message.role == 'user'">
                            <div class="mr-1 flex flex-col max-w-64 md:max-w-[90%]">
                            <div class="relative text-xs mt-1 flex justify-end"><p class=" text-gray-400">({{ timeTransfer(message.timestamp) }})</p></div>
                            <div class="chatmessage relative m-1 p-2 pr-4 pl-4 bg-blue-200 w-auto rounded-lg whitespace-pre-wrap max-w-6xl">{{ message.content }}</div>
                            </div>
                            <img src="@/assets/svg/user.svg" alt="" width="40" class="relative top-3">
                        </div>

                        <div class="w-full flex flex-row items-start justify-start" v-if="message.role == 'assistant'">
                            <svg t="1727340660565" class="icon dark:text-white relative top-3" viewBox="0 0 1024 1024" style="width: 40; height: 40;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4369" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40">
                                <path d="M855.823059 439.235765c10.059294-27.587765 12.589176-55.175529 10.059294-82.82353-2.529882-27.587765-12.528941-55.175529-25.118118-80.293647a216.907294 216.907294 0 0 0-92.822588-85.353412 196.487529 196.487529 0 0 0-125.530353-12.528941 263.951059 263.951059 0 0 0-67.764706-50.176c-25.057882-12.589176-55.175529-17.588706-82.823529-17.588706-42.646588 0-85.293176 12.528941-120.470588 37.647059-35.117176 25.118118-60.235294 60.235294-72.764236 100.412236-30.117647 7.529412-55.235765 20.058353-80.293647 35.117176-22.588235 17.588706-40.176941 40.176941-55.235764 62.765176-22.588235 37.647059-30.117647 80.293647-25.118118 122.940236 5.059765 42.706824 22.588235 82.823529 50.236235 115.471059a188.536471 188.536471 0 0 0-10.059294 82.823529c2.529882 27.587765 12.528941 55.235765 25.118118 80.293647a216.967529 216.967529 0 0 0 92.822588 85.353412 196.427294 196.427294 0 0 0 125.530353 12.528941c20.058353 20.118588 42.646588 37.647059 67.764706 50.236235 25.057882 12.528941 55.175529 17.528471 82.823529 17.528471 42.646588 0 85.293176-12.528941 120.470588-37.647059 35.117176-25.057882 60.235294-60.235294 72.764236-100.352a182.512941 182.512941 0 0 0 77.824-35.177412c22.588235-17.528471 42.646588-37.647059 55.175529-62.704941 22.588235-37.647059 30.117647-80.353882 25.118118-123.00047-4.999529-42.646588-20.058353-82.823529-47.706353-115.471059z m-301.176471 421.647059a146.070588 146.070588 0 0 1-97.882353-35.117177s2.529882-2.529882 5.059765-2.529882l160.587294-92.822589a19.636706 19.636706 0 0 0 10.059294-10.059294c2.529882-4.999529 2.529882-7.529412 2.529883-12.528941V481.882353l67.764705 40.116706v185.765647a147.937882 147.937882 0 0 1-148.118588 153.057882z m-323.764706-137.999059c-17.528471-30.117647-25.057882-65.295059-17.52847-100.412236 0 0 2.469647 2.529882 4.999529 2.529883l160.64753 92.822588A22.588235 22.588235 0 0 0 391.529412 720.414118c4.999529 0 10.059294 0 12.528941-2.529883l195.764706-112.941176v77.824L436.705882 778.059294a148.961882 148.961882 0 0 1-112.941176 15.058824 146.733176 146.733176 0 0 1-92.882824-70.234353z m-42.646588-348.882824c17.588706-30.117647 45.176471-52.705882 77.824-65.234823V499.471059c0 5.059765 0 10.059294 2.469647 12.589176a19.576471 19.576471 0 0 0 10.059294 9.999059l195.764706 112.941177-67.764706 40.176941-160.647529-92.882824c-35.117176-20.058353-60.235294-52.705882-70.234353-90.352941-10.059294-37.647059-7.529412-82.823529 12.528941-117.940706z m554.646588 128l-195.764706-112.941176 67.764706-40.176941 160.64753 92.882823c25.118118 15.058824 45.176471 35.117176 57.705412 60.235294 12.589176 25.118118 20.118588 52.705882 17.588705 82.82353A150.588235 150.588235 0 0 1 752.941176 712.824471V522.059294c0-4.999529 0-9.999059-2.529882-12.528941 0 0-2.469647-4.999529-7.529412-7.529412z m67.764706-100.412235s-2.469647-2.469647-4.999529-2.469647l-160.64753-92.882824c-4.999529-2.529882-7.529412-2.529882-12.528941-2.529882-4.999529 0-10.059294 0-12.528941 2.529882l-195.764706 112.941177V341.353412L587.294118 246.000941c25.118118-15.058824 52.705882-20.058353 82.823529-20.058353 27.587765 0 55.235765 9.999059 80.293647 27.587765 22.588235 17.588706 42.706824 40.176941 52.705882 65.234823 10.059294 25.118118 12.589176 55.235765 7.529412 82.82353z m-421.647059 140.589176l-67.764705-40.176941V313.765647c0-27.587765 7.529412-57.705412 22.588235-80.293647 15.058824-25.118118 37.647059-42.706824 62.765176-55.235765 25.118118-12.528941 55.235765-17.588706 82.82353-12.528941 27.587765 2.469647 55.235765 15.058824 77.824 32.587294 0 0-2.529882 2.529882-5.059765 2.529883L401.588706 293.707294A19.576471 19.576471 0 0 0 391.529412 303.706353c-2.529882 5.059765-2.529882 7.529412-2.529883 12.589176V542.117647z m35.177412-80.353882L512 411.648l87.823059 50.176v100.412235L512 612.412235l-87.823059-50.176V461.824z" p-id="4370" fill="currentColor"></path></svg>
                            <div class="ml-1 flex flex-col max-w-64 md:max-w-[90%]">
                            <div class="relative text-xs mt-1 flex justify-start"><p class=" text-gray-400">({{ timeTransfer(message.timestamp) }})</p></div>
                            <div class=" text-sm relative p-2 pr-4 pl-4 bg-gray-100 dark:bg-[#757575] dark:text-white w-auto rounded-lg max-w-5xl">
                                <svg t="1727665297057" class="icon animate-spin w-6 h-6 dark:text-white" viewBox="0 0 1024 1024" style="width: 20; height: 20;" v-if=" message.content == ''" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4261" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M765.576 875.544c10.216 17.248 4.456 40.264-13.376 49.952a35.984 35.984 0 0 1-49.64-13.376c-10.72-17.232-4.472-39.728 12.784-49.936a36.984 36.984 0 0 1 50.232 13.36z m-215.72 77.968c0 19.904-16.472 36.576-37.16 36.576a36.672 36.672 0 0 1-36.576-36.576v-25.64a36.72 36.72 0 0 1 36.576-36.656c20.408 0 37.16 16.232 37.16 36.656v25.64z m-225.92-41.312a36.512 36.512 0 0 1-49.768 13.856l-0.48-0.264a36.328 36.328 0 0 1-13.576-50.248l27.232-47.64a37.648 37.648 0 0 1 50.736-13.584c17.248 10.208 23.568 32.992 13.072 50.24l-27.216 47.64zM148.672 764.168c-17.744 9.92-40.528 3.952-50.24-13.576-10.416-17.248-4.448-40.032 13.072-50.24l73.232-42.384c17.536-9.696 40.24-4.256 50.24 13.576 9.92 17.248 3.872 40.04-13.584 50.248l-72.72 42.376zM70.768 547.872a36.48 36.48 0 0 1-36.576-36.384v-0.192a36.56 36.56 0 0 1 36.256-36.864H184.8a36.48 36.48 0 0 1 36.576 36.384v0.192a36.552 36.552 0 0 1-36.224 36.864H70.768z m40.816-226.208c-17.824-9.92-23.568-32.416-13.072-49.952 9.696-17.744 32.416-23.792 50.24-13.584l123.888 71.936c17.536 9.984 23.28 32.4 13.584 49.728a36.96 36.96 0 0 1-50.16 13.584l-124.48-71.712z m148.528-175.2l86.304 149.824c10.496 17.536 32.992 23.776 50.448 13.36 17.536-9.92 23.28-32.688 13.072-50.224L323.344 109.888c-9.92-17.328-32.4-23.568-49.664-13.36a36.512 36.512 0 0 0-13.648 49.8l0.08 0.136z m216.016-77.392c0-19.904 16.736-36.864 36.576-36.864 20.408 0 37.16 16.528 37.16 36.864V241.68c0 20.4-16.472 36.864-37.16 37.152a36.752 36.752 0 0 1-36.576-36.928V69.072z m225.92 40.816a36.928 36.928 0 0 1 50.24-13.584 36.296 36.296 0 0 1 14.104 49.344l-0.512 0.896L679.36 296.368c-9.76 17.456-32.768 23.712-50.232 13.584-17.544-10.208-23.28-32.992-13.36-50.512l86.28-149.552z m175.784 148.24L727.696 344.656c-17.536 9.92-23.568 32.4-13.584 50.224a37.648 37.648 0 0 0 50.24 13.36l150.12-86.512a36.288 36.288 0 0 0 13.296-49.568l-0.232-0.384c-9.976-17.808-32.528-24.128-49.704-13.648z m77.096 216.304a36.208 36.208 0 0 1 36.568 36.864 36.344 36.344 0 0 1-36.128 36.576H782.112a36.96 36.96 0 0 1-36.656-36.864c0-20.112 16.752-36.576 36.656-36.576h172.816z" p-id="4262" fill="currentColor"></path></svg>
                                <p class=" chatmessage" v-else=" message.content == ''"  v-html="renderMarkdown(message.content)"></p>
                            </div>
                            <!-- 下方选项 -->
                            <div class="text-gray-400 mt-1 px-1 flex justify-between items-center" v-if="message.isFinished===true">
                                <div class="flex flex-row items-center">
                                    <el-tooltip content="重新生成" placement="top">
                                        <div 
                                        @click="resendMessage(index)"
                                        class=" w-7 h-7 p-1 rounded-lg flex justify-center items-center mr-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <svg t="1754740851063" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3945" width="25" height="25"><path d="M229.7856 197.5296a45.8752 45.8752 0 0 1 13.1072-59.5968A460.8 460.8 0 0 1 972.8 512a458.8032 458.8032 0 0 1-63.488 233.4208 21.6064 21.6064 0 0 1-37.4784-0.4096l-111.616-200.9088a21.6064 21.6064 0 0 1 18.944-32.1024H880.64A368.64 368.64 0 0 0 296.96 212.48a46.08 46.08 0 0 1-67.2256-14.9504z m564.4288 628.9408a45.9776 45.9776 0 0 1-13.056 59.5968A460.8 460.8 0 0 1 51.2 512 458.9056 458.9056 0 0 1 114.688 278.528a21.6064 21.6064 0 0 1 37.4784 0.4608l111.616 200.8576a21.6064 21.6064 0 0 1-18.8416 32.1024H143.36a368.64 368.64 0 0 0 583.5776 299.52 46.08 46.08 0 0 1 67.2256 14.9504z" fill="currentColor" p-id="3946"></path></svg>
                                        </div>
                                    </el-tooltip>
                                    <el-tooltip content="复制" placement="top">
                                        <div 
                                        v-clipboard="() => message.content"
                                        v-clipboard:success="() =>getNewElMessageCopySuccess()"
                                        v-clipboard:error="()=>getNewElMessageCopyError()"
                                        class=" w-7 h-7 p-1 rounded-lg flex justify-center items-center mr-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600" >
                                            <svg t="1754741131821" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8904" width="30" height="30"><path d="M731.68184 676.057473 731.68184 183.323259c0-30.233582-24.512277-54.745858-54.747905-54.745858L184.216093 128.577401c-30.233582 0-54.746882 24.512277-54.746882 54.745858l0 492.734214c0 30.207999 24.5133 54.746882 54.746882 54.746882l492.717841 0C707.16854 730.804355 731.68184 706.265472 731.68184 676.057473zM622.1891 676.057473 238.962975 676.057473c-30.233582 0-54.746882-24.538883-54.746882-54.745858L184.216093 238.07014c0-30.233582 24.5133-54.746882 54.746882-54.746882l383.226125 0c30.233582 0 54.744835 24.512277 54.744835 54.746882l0 383.242498C676.933935 651.51859 652.421658 676.057473 622.1891 676.057473zM841.17458 292.817022l-54.745858 0 0 54.746882c30.232558 0 54.745858 24.5133 54.745858 54.759161l0 383.228171c0 30.206976-24.5133 54.745858-54.745858 54.745858L403.201573 840.297095c-30.233582 0-54.746882-24.538883-54.746882-54.745858l-54.746882 0 0 54.745858c0 30.207999 24.5133 54.747905 54.746882 54.747905l492.719888 0c30.234605 0 54.747905-24.539906 54.747905-54.747905L895.922485 347.563904C895.922485 317.329299 871.408161 292.817022 841.17458 292.817022z" fill="currentColor" p-id="8905"></path></svg>
                                        </div>
                                    </el-tooltip>
                                </div>
                                <el-tooltip content="切换生成内容" placement="top">
                                    <el-pagination 
                                    layout="prev, pager, next"
                             
                                    :current-page="(message.childrenIndex ?? 0) + 1"
                                    @update:current-page="(val:number)=>switchMessageContent(index,val-1)"
                                    :total="(message.children? message.children.length:1)*10" 
                                    :hide-on-single-page="true"
                                    :pager-count="5"
                                    size="small" />
                                </el-tooltip>

                            </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
                <!-- 聊天框 -->
                <!-- 新样式 -->

                <div 
                ref="inputContainer"
                class="input-field w-full flex justify-center items-start py-2 bg-white dark:bg-transparent border-gray-200 dark:border-gray-900">
                        <div 
                        v-show="!isAtBottom"
                        ref="buttonBottom"
                        class=" absolute z-30 border-solid shadow-md border-gray-100 dark:border-gray-500 border text-gray-600 dark:text-gray-200 bg-white dark:bg-gray-600 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600" 
                        @click="()=>scrollToBottom()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.00008 2.41429C0.609551 2.02376 0.609551 1.3906 1.00008 1.00008C1.3906 0.609551 2.02376 0.609551 2.41429 1.00007L8.00008 6.58586L13.5859 1.00008C13.9764 0.609551 14.6096 0.609551 15.0001 1.00008C15.3906 1.3906 15.3906 2.02376 15.0001 2.41429L8.8486 8.56576C8.37997 9.03439 7.62018 9.03439 7.15155 8.56576L1.00008 2.41429Z" fill="currentColor"></path></svg>
                        </div>


                    <div 
                    class="w-full max-w-3xl mx-auto flex flex-col bg-gray-100 dark:bg-[#414141] rounded-xl shadow-sm">
                        <textarea 
                        ref="inputField"
                        v-model="input" 
                        class="w-full py-3 px-4 bg-transparent outline-none resize-none dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                        @keydown.enter.exact.prevent="messageRequestHandler()"
                        placeholder="输入消息..."
                        rows="1"
                        style="min-height: 60px; max-height: 200px;"
                        @input="adjustHeight"
                        ></textarea>
                
                        <div 
                        class=" flex justify-end items-center p-1 ">
                            <div 
                            v-if="isStreaming"
                            class="w-8 ml-10 h-8 p-2 flex justify-center items-center flex-col bg-blue-400 hover:bg-blue-500 rounded-full">
                                <img src="@/assets/svg/stop.svg" alt="" width="20" class="" @click="()=>stopMessageRequest()">
                            </div>
                            <div 
                            v-else="isStreaming"
                            class="w-8 ml-10 h-8 p-2 flex justify-center items-center flex-col bg-blue-400 hover:bg-blue-500 rounded-full">
                                <img src="@/assets/svg/send.svg" alt="" width="20" class="" @click="()=>messageRequestHandler()">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 旧样式 -->
                <!-- <div class="inputField w-full h-16 flex justify-center">
                    <div class=" flex justify-center items-center  border-blue-400 dark:border-white border-2 pr-1.5 pl-1 md:pl-10 rounded-full overflow-hidden">
                        <svg t="1727347052169" class="icon dark:text-white relative right-2 hidden md:block" viewBox="0 0 1024 1024" style="width: 30; height: 30;" @click="clearData" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15657" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><path d="M505.17 128a73.54 73.54 0 0 1 73.05 66.34l0.34 7v308.92h58c31.41 0 61.18 22 71.07 52.18l1.81 6.59 59.76 296.31A25.6 25.6 0 0 1 744.11 896H266.24a25.6 25.6 0 0 1-25-31l64.53-296.38a74.41 74.41 0 0 1 72.78-58.28h53.22V201.47a73.53 73.53 0 0 1 73.4-73.47z m169.74 528.84l-2.48 0.23h-333.6L298 844.8h62.1v-70a25.6 25.6 0 0 1 50.78-4.6l0.42 4.6v70H599v-22.19a25.6 25.6 0 0 1 50.79-4.6l0.41 4.6v22.19h62.58z m-38.32-95.35h-258a23.18 23.18 0 0 0-22.77 18.08L350 605.85h314.62l-5.24-26.17c-1.59-7.15-8.12-13.81-15.41-16.69l-3.69-1.11z m-109.24-71.71H483v20.48h44.39zM505.17 179.2a22.35 22.35 0 0 0-21.82 18.23l-0.36 4v237.19h44.39V201.39a22.33 22.33 0 0 0-22.21-22.19z" fill="currentColor" p-id="15658"></path></svg>
                        <input v-model="input" class="sm:w-36 md:w-96 h-full bg-white outline-none dark:bg-transparent dark:text-white" @keypress="(k)=> {if(k.key=='Enter'){messageRequestHandler()}}" type="text" placeholder="Ask anything..."></input>
                        <div class="w-12 ml-10 h-12 p-2 flex justify-center items-center flex-col  bg-[#1296db] rounded-full">
                            
                            <img src="@/assets/svg/send.svg" alt="" width="30" class="" @click="()=>messageRequestHandler()">
                        </div>
                    </div>
                </div> -->
        
        </div>
    </div>

</template>
<script setup lang="ts">
import { reactive,ref, watch,nextTick, onMounted, computed } from 'vue';
// import gpt,{type chatElement,type gptMessage, type apiInitOptionalElement} from "@/utils/gpt"
import { chatgptRequest,type optionalConfig } from '@/utils/gptApi';
import useConfigStore from '@/stores/config/configStore';
import useChatStore from '@/stores/chat/chatStore';
import { storeToRefs } from 'pinia';
import { type Message,type chatSession } from '@/stores/chat/chatTypes';
import { useRoute } from 'vue-router';
import router from '@/router';

import '@/assets/css/chatmessage.scss'
import markdownIt from '@/utils/markdown';

const route = useRoute()

// 配置Store
const configStore = useConfigStore()
const {apiConfig} = storeToRefs(configStore)

// 聊天Store
const chatStore = useChatStore()
const currentChatId = computed(() => Number(route.params.id))
const currentSession = reactive<chatSession>(chatStore.findChat(currentChatId.value) || { id: 0, title: '', conversation: [] })
const ifShowNewChat = computed(() => currentSession.id === 0 || currentSession.conversation.length === 0)

// 容器高度适应
const chatScroll = ref<HTMLElement|null>(null)
const chatContainer = ref<HTMLElement|null>(null)
const inputContainer = ref<HTMLElement|null>(null)
const inputField = ref<HTMLTextAreaElement>()
const inputFieldNew = ref<HTMLTextAreaElement>()
const inputAreaHeight = ref<number>(120) // 初始高度估计值
const isAtBottom = ref<boolean>(false)
const buttonBottom = ref<HTMLElement|null>(null)

// 新聊天输入框高度调整
const adjustHeightNew = () => {
  const textarea = inputFieldNew.value
  if(textarea){
    textarea.style.height = 'auto'
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'
    // 更新容器高度
    nextTick(() => {
        if(inputContainer.value){
            inputAreaHeight.value = inputContainer.value.offsetHeight
            adjustButtonBottom()
        }
    })
  }
}

const adjustButtonBottomInit = () => {
    let lastPosition:number = 0
    return ()=>{
        if(buttonBottom.value && inputContainer.value && lastPosition!== inputAreaHeight.value){
            buttonBottom.value.style.bottom = (inputAreaHeight.value + 10) + 'px';
            lastPosition = inputAreaHeight.value;
        }
    }
}
const adjustButtonBottom = adjustButtonBottomInit()

// 聊天输入框高度调整
const adjustHeight = () => {
  const textarea = inputField.value
  if(textarea){
    textarea.style.height = 'auto'
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'
    // 更新容器高度
    nextTick(() => {
        if(inputContainer.value){
            inputAreaHeight.value = inputContainer.value.offsetHeight
            adjustButtonBottom()
        }
    })
  }
}
// 聊天下滑至底部
const scrollToBottomInit = () => {
    let lock:boolean = false;
    return (time:number=0) => {
        if(lock) return;
        if(chatScroll.value){
            lock = true;
            chatScroll.value.scrollTop = chatScroll.value.scrollHeight
        }
        setTimeout(() => {
            lock = false;
        }, time);
    }
}
const scrollToBottom = scrollToBottomInit()

const checkScrollPosition = () => {
    if (!chatScroll.value) return;
    const container = chatScroll.value;
    const isBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 10;
    isAtBottom.value = isBottom;
    nextTick(()=>buttonBottom.value && adjustButtonBottom())
};
    
// 自动下滑
// watch(()=>currentSession.conversation[currentSession.conversation.length-1].content,
// async()=>{
//     // console.log("会话内容更新:", currentSession.conversation)
//     if(currentSession.conversation[currentSession.conversation.length-1]){
//         await nextTick()
//         if(chatScroll.value)
//         {
//             chatScroll.value.scrollTop = chatScroll.value.scrollHeight
//         }
//     }
// },{deep:true})


const input = ref("")

// 更新查询参数数据
function updateData()
{
    console.log("更新查询参数数据")
    const foundChat = chatStore.findChat(currentChatId.value) || { id: currentChatId.value, title: '', conversation: [] }
    currentSession.id = foundChat.id
    currentSession.title = foundChat.title
    currentSession.conversation = foundChat.conversation
    console.log("更新后的会话:", currentSession)
}

// 传输变量
const isStreaming = ref<boolean>(false)
const abortController = ref<AbortController|null>(null)

// 停止传输
function stopMessageRequest(){
    if(isStreaming.value && abortController.value)
    {   
        abortController.value.abort()
        isStreaming.value = false
    }
}

// 聊天请求函数handler
async function messageRequestHandler(config?:optionalConfig){
    isStreaming.value = true
    console.log("messageRequestHandler:当前会话:", currentSession.conversation)
    abortController.value = new AbortController()
    try{
        if(!config){
            // 默认配置
            const sendingMsg:string = input.value
            input.value = ""
            const msgSend:Message = {timestamp:new Date().getTime(),role:"user",content:sendingMsg}
            const msgPreload:Message = {timestamp:new Date().getTime(),role:"assistant",content:'',children:[]}
            msgPreload.children?.push({timestamp:msgPreload.timestamp,role:msgPreload.role,content:msgPreload.content})
            currentSession.conversation.push(msgSend,msgPreload)
            await (apiConfig.value.stream ? messageRequestStreamMode() : messageRequestNoStreamMode())
        }
        else{
            if(config.resendMessageIndex){
                // 重新生成消息
                await (apiConfig.value.stream ? messageRequestStreamMode(config) : messageRequestNoStreamMode(config))
            }
        }   
    }
    finally{
        isStreaming.value = false
    }
}
// 普通模式
async function messageRequestNoStreamMode(config?:optionalConfig) {
    if(!config && abortController.value) config = {abortController:abortController.value}
    else if (config && abortController.value) { config.abortController = abortController.value }
    const chatCompletions = await chatgptRequest(currentSession, apiConfig.value, config)
    // 接收gpt信息并存储
    // 生成的消息插入位置 重新生成的消息需要index
    const insertIndex = config?.resendMessageIndex ?? currentSession.conversation.length-1
    if((chatCompletions as any).choices[0]?.message?.content)
    {
        const msgReceived:Message = {timestamp:new Date().getTime(),role:"assistant",content:(chatCompletions as any).choices[0]?.message?.content}
        // 默认处理
        if(!config?.resendMessageIndex){
            currentSession.conversation[insertIndex] = msgReceived;
            currentSession.conversation[insertIndex].children = [msgReceived];
        }          
        // 重新生成的消息，更新到children
        else if (currentSession.conversation[insertIndex].children) {
            let index = currentSession.conversation[insertIndex].children?.length-1;
            currentSession.conversation[insertIndex].children[index] = msgReceived;
        }
        currentSession.conversation[insertIndex].childrenIndex = (currentSession.conversation[insertIndex].children?.length || 1) - 1;
        currentSession.conversation[insertIndex].isFinished = true;
    }
    chatStore.updateChat(currentSession)
}
// 流式模式
async function messageRequestStreamMode(config?:optionalConfig){
    let timeoutTimer;
    // 生成的消息插入位置 重新生成的消息需要index
    const insertIndex = config?.resendMessageIndex ?? currentSession.conversation.length-1;
    // 生成的消息插入children位置，用于存储多条重新生成的消息
    let index = (currentSession.conversation[insertIndex].children?.length || 1) - 1;
    if(!config && abortController.value) config = {abortController:abortController.value}
    else if (config && abortController.value) { config.abortController = abortController.value }
    try{
        // 接收gpt信息并存储
        const response = await chatgptRequest(currentSession,apiConfig.value,config)
        let chunkTotal = []
        let contentTotal:string = ''
        // 超时处理
        let isFinished = false
        const timeoutMaxtime = apiConfig.value.timeout || 30000
        
        const timeout = new Promise((resolve,reject)=>{timeoutTimer =setTimeout(() => {
            reject("timeout")
        }, timeoutMaxtime);}).catch((err)=>{
            if(!isFinished)
            {
                console.log(err)
                currentSession.conversation[insertIndex].content +="[传输超时，请稍后再试]" 
            }
            return
        })

        await Promise.race([response,timeout])
        for await(const chunk of response as any)
        {
            chunkTotal.push(chunk)
            if(chunk.choices.length > 0)
            {
                contentTotal+=chunk.choices[0]?.delta?.content || ""
                currentSession.conversation[insertIndex].content = contentTotal
                if( currentSession.conversation[insertIndex].children && currentSession.conversation[insertIndex].children[index])
                {
                    currentSession.conversation[insertIndex].children[index].content = contentTotal
                }
                if(chunk.choices[0]?.finish_reason == "stop")
                {
                    isFinished = true
                }
            }
        }
    }catch(err){
        console.log(err)
        currentSession.conversation[insertIndex].content +="[发生错误，请稍后再试]" 
    }
    finally{
        // 清除超时定时器
        clearTimeout(timeoutTimer);
        currentSession.conversation[insertIndex].isFinished = true;
        chatStore.updateChat(currentSession);
        console.log("流式传输结束，当前消息:", currentSession.conversation[insertIndex])
    }
}

const inputNew = ref('')
async function sendNewchat(){
    // console.log("新建聊天:", inputNew.value)
    let newChat:chatSession = {
        id:Math.floor(Math.random()*(10**16)),
        conversation:[],
        title:inputNew.value
    }
    while(chatStore.findChat(newChat.id))
    {
        newChat.id = Math.floor(Math.random()*(10**16))
    }
    chatStore.addChat(newChat)
    chatStore.setCurrentChat(newChat.id)
    chatStore.addPendingChat(newChat.id)
    updateData();
    inputNew.value = '';
    router.push({name:'chatid',params:{id:newChat.id,}})
}

// 切换生成的消息内容
function switchMessageContent(messageIndex:number,messageChildrenIndex:number){
    console.log(messageChildrenIndex)
    currentSession.conversation[messageIndex].childrenIndex = messageChildrenIndex;
    currentSession.conversation[messageIndex].content = currentSession.conversation[messageIndex].children?.[messageChildrenIndex]?.content || '';
    currentSession.conversation[messageIndex].timestamp = currentSession.conversation[messageIndex].children?.[messageChildrenIndex]?.timestamp || new Date().getTime();
    chatStore.updateChat(currentSession);
}
// 重新生成内容
async function resendMessage(currentMessageIndex:number){
    // 添加新child
    currentSession.conversation[currentMessageIndex].children?.push({
        content:"",
        timestamp:new Date().getTime(),
        role:currentSession.conversation[currentMessageIndex].role,
    })
    console.log("currentSession:", currentSession)
    console.log("重新生成内容，当前消息索引:", currentMessageIndex,"children:", currentSession.conversation[currentMessageIndex].children)
    const childrenLength = currentSession.conversation[currentMessageIndex].children ? currentSession.conversation[currentMessageIndex].children.length : 0;
    // 更新此位置的消息内容为空
    switchMessageContent(currentMessageIndex, childrenLength > 0 ? childrenLength - 1 : 0);
    // 发送请求
    messageRequestHandler({resendMessageIndex:currentMessageIndex})
}

onMounted(async()=>{
    // 检查处理新聊天
    if(chatStore.checkAndRemovePendingChat(currentChatId.value) && currentChatId.value!==0)
    {
        console.log("onMounted新建聊天发起会话:", currentSession,currentChatId.value===currentSession.id)
        input.value = currentSession.title
        messageRequestHandler();
    }
    // 滑动到底部
    scrollToBottom();
    chatScroll.value?.addEventListener('scroll', checkScrollPosition, { passive: true });
    // adjustButtonBottom();
    adjustHeight();
})


// 清空当前聊天
function clearData(){
    chatStore.deleteChat(currentSession.id)
    updateData()
}

function timeTransfer(time:number){
    const localtime = new Date(time)
    return localtime.toLocaleString()
}

// 渲染Markdown内容
const renderMarkdown = (content: string): string => {
    // console.log("渲染Markdown内容:", content)
    return markdownIt.render(content);
}

const getNewElMessageCopySuccess = () => {
    ElMessage.primary('复制成功')
}
const getNewElMessageCopyError = () => {
    ElMessage.error('复制失败')
}

</script>




<style lang="scss">
.el-pagination {
    button {
        background-color: transparent !important;
    }
    .el-pager li {
        background-color: transparent !important;
    }
}

</style>