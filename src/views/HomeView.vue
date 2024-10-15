<template>
  <div class=" w-full h-auto md:h-[calc(300vh+11rem)] bg-[#112d4e] text-white flex justify-start flex-col items-center">
    <!-- 背景星星 -->
    <div class="starSets absolute w-full h-screen"></div>
    <!-- 导航栏 -->
    <div class="topNavigation navigateShowup fixed w-screen bg-[#112d4e] p-2 h-12 flex justify-around items-center z-20 bottom-[calc(100%-3rem)] font-bold">
      <div class="logo flex items-center justify-center">
        <img src="@/assets/svg/chatlogo.svg" alt="" class="w-8">
        <p class=" text-lg font-bold ml-2 text-[#1296db]">Luvmand Chat</p>
      </div>
      <div class="navigate hidden md:flex justify-around items-center absolute ">
        <a href="#homePage" class=" md:mr-4">Home</a>
        <a href="#chartPage" class="md:ml-4 md:mr-4">Chart</a>
        <a href="#commentPage" class="md:ml-4">Details</a>
      </div>
      <RouterLink to="/chat" class=""><div class="">Start Chat</div></RouterLink>
    </div>

    <div class="homePage w-5rem md:w-[90%] h-screen flex justify-center items-center bg-transparent" id="homePage">
      <!-- 轮播图 -->
      <div class="Carousel rounded-2xl shadow-2xl flex z-10" @mouseenter="()=>{isCarousing=true}" @mouseleave="()=>{isCarousing=false}">
        <div ref="carouselSelecter" class="imgBoxes">
          <div class="imgBox justify-center items-center flex flex-col">
            <h1 class=" text-3xl md:text-5xl font-bold text-white">以LuvmandChat连接世界</h1>
            <RouterLink to="/chat" class=""><div class="imgBoxButton w-48 h-16 text-xl font-semibold mt-10 p-4 pl-6 pr-6 rounded-2xl bg-transparent border-2 text-center text-white">Start Chat</div></RouterLink>
          </div>
          <div class="imgBox justify-center items-center flex flex-col">
            <h1 class="text-3xl md:text-5xl font-bold text-white">OpenJT鼎力打造，构建未来</h1>
            <a href="https://d.jotang.club/"><div class="imgBoxButton w-56 h-16 text-xl font-semibold mt-10 p-4 pl-6 pr-6 rounded-2xl bg-transparent border-2 text-center text-white">Offcial Website</div></a>
          </div>
          <div class="imgBox justify-center items-center flex flex-col">
            <h1 class="text-3xl md:text-5xl font-bold text-white ">Luvmand个人博客</h1>
            <a href="https://luvmand.top/"><div class="imgBoxButton w-48 h-16 text-xl font-semibold mt-10 p-4 pl-6 pr-6 rounded-2xl bg-transparent border-2 text-center text-white">Visit Blog</div></a>
          </div>
          <div class="imgBox justify-center items-center flex flex-col">
            <h1 class="text-3xl md:text-5xl font-bold text-white">开源前端 学习交流</h1>
            <a href="https://github.com/arigreat/"><div class="imgBoxButton w-48 h-16 text-xl font-semibold mt-10 p-4 rounded-2xl bg-transparent border-2 text-white flex justify-around items-center">
            <svg t="1727958935200" class="icon" viewBox="0 0 1024 1024" style="width: 40; height: 40;" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7301" width="40" height="40"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="currentColor" p-id="7302"></path></svg> 
            Github</div>
          </a>
          </div>
          <div class="imgBox justify-center items-center flex flex-col">
            <h1 class="text-3xl md:text-5xl font-bold text-white">以LuvmandChat连接世界</h1>
            <RouterLink to="/chat" class=""><div class=" imgBoxButton w-48 h-16 text-xl font-semibold mt-10 p-4 pl-6 pr-6 rounded-2xl bg-transparent border-2 text-center text-white">Start Chat</div></RouterLink>
          </div>
        </div>
        <div class="imgButtons absolute w-full flex justify-center items-end top-[calc(100%-3rem)]">
            <div class="imgSelectButtons border w-3 h-3 rounded-full p-[2px] flex justify-center items-center m-2" v-for="(buttonSet,index) in carouselImgSets" @click="carouselMovingButton(index)">
              <div class=" hover:bg-white w-full h-full rounded-full z-10" :style="{backgroundColor:index == carouselImg?'white':'transparent'}" ></div>
            </div>
          </div>
        </div>
      <!-- cloud -->
      <div class="homePagebg hidden md:flex flex-col absolute right-full top-[calc(100%-14rem)] left-[10rem] z-0">
        <!-- <div class="homePagebgCloud relative top-52" style="--bgcolor:#757575"></div> -->
        <div class="homePagebgCloud1 relative" style="--bgcolor:rgb(118, 146, 203)"></div>
        <div class="homePagebgCloud2 relative bottom-52" style="--bgcolor:rgb(219, 226, 239)"></div>
      </div>
      <div class="transitionPage w-full h-[8rem] bg-transparent hidden md:flex justify-center items-start z-10 absolute top-[calc(100%-8rem)]">
          <div class="transitionArc"></div>
          <div class="p absolute top-12 text-2xl font-bold text-[#1b2b47]">世界上许多优秀企业都在使用Luvmand Chat。</div>
        </div>
    </div>


    <div class="chartPage w-full h-screen bg-white flex flex-col justify-center items-center z-10" id="chartPage">
      <!-- 上面滚动条 -->
      <div class="userList w-full h-32 flex flex-row items-center overflow-hidden relative top-6">
        <div v-for="user in userListData" class="userListUser1 w-[10%] h-24 hidden md:flex justify-center items-center text-gray-400 flex-shrink-0"><p class=" text-xl font-bold">{{user.name}}</p></div>
        <div v-for="user in userListData" class="userListUser2 w-[10%] h-24 hidden md:flex justify-center items-center text-gray-400 flex-shrink-0"><p class=" text-xl font-bold">{{user.name}}</p></div>
      </div>
      <!-- echarts表格 -->
      <chartComponents/>
      <div class="w-full h-32 relative md:bottom-16 flex justify-center items-center text-[#1b2b47] font-bold md:text-4xl"><p>现在加入5000+用户群体</p></div>
      <!-- 下面滚动条 -->
      <div class="userList w-full h-32 flex flex-row items-center overflow-hidden relative bottom-6">
        <div v-for="user in userListDataReverse" class="userListUser1 w-[10%] h-24 hidden md:flex justify-center items-center text-gray-400 flex-shrink-0"><p class=" text-xl font-bold">{{user.name}}</p></div>
        <div v-for="user in userListDataReverse" class="userListUser2 w-[10%] h-24 hidden md:flex justify-center items-center text-gray-400 flex-shrink-0"><p class=" text-xl font-bold">{{user.name}}</p></div>
      </div>
      
    </div>
    <div class="commentPage w-full h-auto md:h-screen bg-white flex md:flex-col justify-center items-center z-10 overflow-hidden" id="commentPage">
      <div class="comment w-full md:w-4/5 h-4/5 bg-white text-black flex flex-col md:flex-row ">
        <div class="detailText md:w-2/5 p-10 flex justify-center items-center flex-col font-bold">
          <p class="w-full text-[#1b2b47] font-bold text-3xl mb-7">产品介绍</p>
          <p class=" text-xl text-[#6D6D6D] mb-6">Luvmand Chat是OpenJT出品的一款基于先进人工智能技术的对话系统，能够与用户进行自然流畅的对话。我们具有的优势：</p>
          <ul class="text-xl ">
            <li class="m-1">卓越的自然语言处理能力</li>
            <li class="m-1">领域丰富的知识库</li>
            <li class="m-1">创意与灵感支持</li>
            <li class="m-1">个性化的对话体验</li>
            <li class="m-1">全天候可用性</li>
            <li class="m-1">探索更多...</li>
          </ul>
          <p class="w-full text-[#1b2b47] font-bold text-2xl mt-7">用户有什么要说的：</p>
        </div>
        
        <!-- 用户评价卡片 -->
        <div class="commentCards md:w-3/5 text-black font-bold">
          <div class="card p-10 m-8 rounded-lg">
            <svg t="1728922444797" class="icon absolute bottom-2/3 right-2/3 " viewBox="0 0 1452 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4211" width="200" height="200"><path d="M612.88056325 845.13035965l0-260.71071625c-4.69279289-207.61263371 98.41829539-347.61428833 309.28981304-420.04841566l0 108.62946511C800.37502001 340.56822014 741.75856065 432.33839227 746.49480532 548.18085383L932.03393172 548.18085384 932.03393172 845.13035965l-319.15336847 0z m-433.21430683 0l0-260.71071625c-4.69279289-207.61263371 98.41829539-347.61428833 309.28981305-420.04841566l0 108.62946511c-121.83880806 67.5675273-180.41181564 159.33769942-175.71902276 275.18016099l185.53912639 0L498.7761731 845.13035965l-319.10991668 0z" fill="#13227a" fill-opacity=".687" p-id="4212"></path></svg>
            <div class="cardImg rounded-full w-36 h-36"><img src="https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg" alt=""></div>
            <div class="cardText flex flex-col items-center">
              <p>Alex Adam</p>
              <P class="text-xs font-normal text-[#6D6D6D]">Panapple CEO</P>
              <p class="text-sm font-normal relative mt-2 w-4/5">我深切感受到LuvmandChat的巨大价值。它极大提升了我们的工作效率，节省了大量时间，无论是内部讨论还是与客户交流都显得更加顺畅。此外，它为我们提供了丰富的创意支持，帮助我们在产品开发和营销策略上获得新的灵感，促进了决策的高效性。我们期待在未来继续利用这一强大的工具，实现更大的成就。</p>
            </div>
          </div>
          <div class="card border rounded-lg">
            <svg t="1728922444797" class="icon absolute bottom-2/3 right-2/3" viewBox="0 0 1452 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4211" width="200" height="200"><path d="M612.88056325 845.13035965l0-260.71071625c-4.69279289-207.61263371 98.41829539-347.61428833 309.28981304-420.04841566l0 108.62946511C800.37502001 340.56822014 741.75856065 432.33839227 746.49480532 548.18085383L932.03393172 548.18085384 932.03393172 845.13035965l-319.15336847 0z m-433.21430683 0l0-260.71071625c-4.69279289-207.61263371 98.41829539-347.61428833 309.28981305-420.04841566l0 108.62946511c-121.83880806 67.5675273-180.41181564 159.33769942-175.71902276 275.18016099l185.53912639 0L498.7761731 845.13035965l-319.10991668 0z" fill="#13227a" fill-opacity=".687" p-id="4212"></path></svg>
            <div class="cardImg rounded-full w-24 h-36"><img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.NqhPeKql4Eb9FpnOw0pG-wHaHa?rs=1&pid=ImgDetMain" alt=""></div>
            <div class="cardText flex flex-col items-center">
              <p>Alice Wang</p>
              <P class="text-xs font-normal text-[#6D6D6D]">Huavei SEO</P>
              <p class="text-sm font-normal relative mt-2 w-4/5">我对Luvmand Chat的表现深感赞赏。它不仅提高了我们的工作效率，还为团队提供了强大的创意支持，使我们能够专注于战略决策和业务发展。智能响应能力增强了与客户的互动体验。无论是在市场分析、产品开发还是客户服务，它已成为我们企业不可或缺的合作伙伴，为我们的创新和成长提供了强有力的支持。</p>
            </div>
          </div>
          <div class="card border rounded-lg">
            <svg t="1728922444797" class="icon absolute bottom-2/3 right-2/3" viewBox="0 0 1452 1524" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4211" width="200" height="200"><path d="M612.88056325 845.13035965l0-260.71071625c-4.69279289-207.61263371 98.41829539-347.61428833 309.28981304-420.04841566l0 108.62946511C800.37502001 340.56822014 741.75856065 432.33839227 746.49480532 548.18085383L932.03393172 548.18085384 932.03393172 845.13035965l-319.15336847 0z m-433.21430683 0l0-260.71071625c-4.69279289-207.61263371 98.41829539-347.61428833 309.28981305-420.04841566l0 108.62946511c-121.83880806 67.5675273-180.41181564 159.33769942-175.71902276 275.18016099l185.53912639 0L498.7761731 845.13035965l-319.10991668 0z" fill="#13227a" fill-opacity=".687" p-id="4212"></path></svg>
            <div class="cardImg rounded-full w-36 h-36"><img src="https://img.freepik.com/free-photo/handsome-smiling-young-african-man_171337-9650.jpg" alt=""></div>
            <div class="cardText flex flex-col items-center">
              <p>Jeck Shpmah</p>
              <P class="text-xs font-normal text-[#6D6D6D]">Staem Manager</P>
              <p class="text-sm font-normal relative mt-2 w-4/5">LuvmandChat的自然语言处理能力使我们能够提供更加个性化的服务，快速响应用户需求。智能内容审核系统有效过滤不当内容，提升平台安全性。聊天机器人功能增强了用户沟通的即时性和流畅性，推动了用户粘性和活跃度的提升。这一切都让我们的平台在激烈的竞争中脱颖而出。</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="startNow w-full h-44 flex flex-col justify-center items-center  font-bold z-20">
      <div class="flex justify-center items-center">
        <p class=" text-sm md:text-3xl ">现在开始免费试用Luvmand Chat！</p>
      <RouterLink to="/chat" class=" md:w-36 md:h-16 p-3 flex justify-center items-center text-sm md:text-xl bg-yellow-600 rounded-2xl"><p>Start Now</p></RouterLink>
      </div>
      
      <p class="relative top-5 text-sm font-normal">2024 © OpenJT. All Rights Reserved.</p>
    </div>
    <canvas id="canvasMouse" :width=screenWidth :height=screenHeight class="fixed z-20 pointer-events-none"></canvas>
    
  </div>
</template>

<script lang="ts">
import '@/assets/css/homeView.css'


</script>

<script setup lang="ts">
import { onMounted, reactive, ref, type CanvasHTMLAttributes } from 'vue';
import chartComponents from '../components/chart.vue'
// 轮播图
const carouselImgSets = reactive([0,1,2,3])
const carouselImgTotal:number = 4
const carouselAnimationTime:number = 500
const carouselSelecter:any = ref(null)
const carouselImg = ref<number>(0)
let isCarousing:boolean = false
// 自动移动
function carouselMoving(){
  if(isCarousing){return}
  if(carouselSelecter.value)
  {
    isCarousing = true
    document.documentElement.style.setProperty('--transformNewX', `-${carouselImg.value*100+100}%`);
    // console.log(`right:before${document.documentElement.style.getPropertyValue('--transformOldX')} ${document.documentElement.style.getPropertyValue('--transformNewX')}`)
    carouselSelecter.value.classList.add("CarouselmoveRight")
    setTimeout(()=>{
      carouselSelecter.value.classList.remove("CarouselmoveRight")
      carouselImg.value++
      document.documentElement.style.setProperty('--transformOldX', `-${carouselImg.value*100}%`);
      // 循环轮播图回到头部
      if(carouselImg.value == carouselImgTotal)
      {
        carouselImg.value = 0
        document.documentElement.style.setProperty('--transformOldX', `-${carouselImg.value*100}%`)
        carouselSelecter.value.classList.add(".CarouselmoveEndless")
        setTimeout(()=>{carouselSelecter.value.classList.remove(".CarouselmoveEndless");isCarousing = false},100)
            
      }
      isCarousing = false
    },carouselAnimationTime)
  }
}
// 自动移动定时
setInterval(carouselMoving,carouselAnimationTime*8)
// 手动移动
function carouselMovingButton(index:number){
  isCarousing = true
  document.documentElement.style.setProperty('--transformNewX', `-${index*100}%`);
  carouselSelecter.value.classList.add("CarouselmoveRight")
  setTimeout(()=>{
      carouselSelecter.value.classList.remove("CarouselmoveRight")
      carouselImg.value = index
      document.documentElement.style.setProperty('--transformOldX', `-${carouselImg.value*100}%`);
      isCarousing = false
    },carouselAnimationTime)
}

// 用户轮播
const userListData = reactive({
  0:{name:"UESTC"},1:{name:"Yilu Studio"},2:{name:"JoTang"},3:{name:"Huavei"},4:{name:"光点计划"},
  5:{name:"Staem"},6:{name:"Velorant"},7:{name:"Bethseda"},8:{name:"At1us"},9:{name:"Wue.js"},
})
const userListDataReverse = reactive({
  9:{name:"UESTC"},8:{name:"Yilu Studio"},7:{name:"JoTang"},6:{name:"Huavei"},5:{name:"光点计划"},
  4:{name:"Staem"},3:{name:"Velorant"},2:{name:"Bethseda"},1:{name:"At1us"},0:{name:"Wue.js"},
})

// 导航栏移动收起
document.addEventListener('wheel', navigateControl, { passive: false })
function navigateControl(e:WheelEvent) {
  const navigate = document.querySelector('.topNavigation')
  if(e.deltaY < 0)
  {
    navigate&&navigate.classList.remove('navigateShowup')
    navigate&&navigate.classList.add('navigateHidden')
  }
  else{
    navigate&&navigate.classList.remove('navigateHidden')
    navigate&&navigate.classList.add('navigateShowup')
    
  }
}

const screenWidth = document.documentElement.clientWidth
const screenHeight = document.documentElement.clientHeight

onMounted(()=>{
  // 星星闪烁
  const starSets = <HTMLElement>document.querySelector('.starSets')
  const screenWidth = document.documentElement.clientWidth
  const screenHeight = document.documentElement.clientHeight
  function starGet(){

    for(let i=0;i<50;i++)
    {
      const star = document.createElement('div')
      star.classList.add('star')
      starSets.appendChild(star)
      const starX = Math.random() * screenWidth 
      const starY = Math.random() * screenHeight - 120
      const animationTime = Math.random()*10
      star.style.left = starX +  'px'
      star.style.top = starY  +  'px'
      star.style.scale = (Math.random()/6.5).toString()
      star.style.transform = `rotate(${Math.random()*360}deg)`
      star.style.setProperty('--animationTime',`${animationTime}s`)
      setTimeout(() => {
        starSets.removeChild(star)
      }, animationTime*1000);
    }
  }
  starGet()
  setInterval(starGet,6000)


  // 鼠标特效
  const canvas = <HTMLCanvasElement>document.querySelector('#canvasMouse')
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d")
  let ballSets:Ball[] = []
  class Ball{
    public x:number
    public y:number
    public round:number
    public color:string
    constructor(x:number,y:number,round:number){
      this.x = x
      this.y = y
      this.round = round
      this.color = this.randomColor()
    }
    private randomColor():string{
    const colorType = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let color:string = '#'
    for(let i = 0;i<6; i++){
      color += colorType[Math.floor(Math.random()*colorType.length)]
    }
    return color
    }
    public drawBall(){
      ctx.beginPath()
      ctx.arc(this.x,this.y,this.round,0,Math.PI*2,false)
      ctx.fillStyle = this.color;
      ctx.fill()
      // console.log("drow")
    }
    public updateBall(){
      this.x += 0.5
      this.y += 0.5
      this.round -= 0.5
    }
  }
  function ballInit(x:number,y:number){
    const ball = new Ball(x,y,10)
    ballSets.push(ball)
  }

  setInterval(()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    if(ballSets.length)
    {
      ballSets = ballSets.filter((ball=>(ball.round>0)))
      ballSets.forEach((ball)=>{ball.updateBall();ball.drawBall();})
    }
  },15)
  let isAddBall = false
  // ballInit(100,100)
  // ballInit(100,200)
  // ballInit(100,300)
  addEventListener("mousemove",(e)=>{
    if(isAddBall){return}
    isAddBall = true
    setTimeout(() => {
      // console.log(`x:${e.clientX} y:${e.clientY}`)
      ballInit(e.clientX,e.clientY)
      isAddBall = false
    }, 25); 
  })
})


</script>
