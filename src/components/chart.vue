<template>
    <div class=" w-full h-screen flex flex-col justify-center items-center relative top-5">
        <!-- <div class="userList w-full h-24 bg-slate-400 flex flex-row">


        </div> -->
        <!-- <div class="w-full h-[20%] flex flex-col justify-center items-center"><p class=" text-black text-4xl font-bold">我们的用户太多啦</p></div> -->
        <div class="w-full h-full flex-col md:flex-row flex justify-center items-center">
            <div id="lineChart" class="w-1/2 md:w-1/3 h-72 md:h-full z-50 bg-transparent"></div>
            <div id="pieChart" class="w-1/2 md:w-1/3 h-72 md:h-full z-50 bg-transparent"></div>
        </div>

    </div>

</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';

type EChartsOption = echarts.EChartsOption;

onMounted(()=>{
    var chartDom1 = document.getElementById('lineChart')!;
    var myChart1 = echarts.init(chartDom1);
    var option1: EChartsOption;

    const data = [
    ["2024-07-01", 3000],
    ["2024-07-08", 3450],
    ["2024-07-15", 3620],
    ["2024-07-22", 3180],
    ["2024-07-29", 3460],
    ["2024-08-05", 3520],
    ["2024-08-12", 3700],
    ["2024-08-19", 3931],
    ["2024-08-26", 4200],
    ["2024-09-02", 4050],
    ["2024-09-09", 4310],
    ["2024-09-16", 4400],
    ["2024-09-23", 4150],
    ["2024-09-30", 4600],
    ["2024-10-07", 4910],
    ["2024-10-14", 4310],
    ["2024-10-21", 5020],
    ["2024-10-28", 5200]
];

    const dateList = data.map(function (item) {
    return item[0];
    });
    const valueList = data.map(function (item) {
    return item[1];
    });

    option1 = {
    // Make gradient line here
    backgroundColor:'rgba(0,0,0,0)',
    visualMap: [
        {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 3000,
        max: 5500
        },
    ],
    title: [
        {
        left: 'center',
        text: '企业用户周活量'
        },
    ],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [
        {
        data: dateList
        },
    ],
    yAxis: [
        {},
    ],
    grid: [
        {
        bottom: '35%'
        },
    ],
    series: [
        {
        type: 'line',
        showSymbol: false,
        data: valueList
        },
    ]
    };
    option1 && myChart1.setOption(option1);

    var chartDom2 = document.getElementById('pieChart')!;
    var myChart2 = echarts.init(chartDom2);
    var option2: EChartsOption;

    option2 = {
    backgroundColor:'rgba(0,0,0,0)',
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '65%',
        left: 'center'
    },
    title: [
        {
        left: 'center',
        text: '用户行业分布'
        },
    ],
    series: [
        {
        name: 'Access From',
        bottom: '30%',
        left:'center',
        width:'100%',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 3,
        itemStyle: {
            borderRadius: 10
        },
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 1048, name: 'IT' },
            { value: 735, name: '教育' },
            { value: 580, name: '用户服务' },
            { value: 504, name: '社区平台' },
            { value: 484, name: '个体用户' },
            { value: 300, name: '其他' }
        ]
        }
    ]
    };

    option2 && myChart2.setOption(option2);

})


</script>