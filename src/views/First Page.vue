<template>
    <el-container id="mpmain">
        <div class="first_contentbox">
            <img src="../assets/Photo/me.jpg">
            <div class="text_button">
                <li>
                    <h1 class="wellcome">你好！<br>欢迎查看我的个人介绍网页！</h1>
                    <button><a href="#/Mp">了解更多</a></button>
                </li>
            </div>
        </div>
    </el-container>
</template>

<style scoped>
    *{
        padding:0px;
        margin:0px;
        border:0px;
        scrollbar-width: none;
    }
    .first_contentbox{
        width: 100%;
        display: flex;
        background-image: url("../assets/Photo/壁纸15.jpeg");
        background-size: cover; /* 或者使用 contain, auto 等 */
        background-position: center; 
        background-repeat: no-repeat; 
    }
    img{
        height: 95vh;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 100px;
        border: 5px black solid;
        border-radius: 40px;
        transition: transform 1s
    }
    img:hover{
        height: 95vh;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 100px;
        border: 5px rgb(42, 42, 42) solid;
        border-radius: 41px;
        transform: scale(1.02);
    }
    .text_button{
        height: 100vh;
        width: 45%;
        margin-left: 100px;
        display: flex;
        justify-content: space-between; /* 这将使得.left和.right分别位于容器的两侧 */
        align-items: center; /* 这将使得子元素在交叉轴上居中，即垂直居中 */
        /* background-color: aqua; */
    }
    li{
        /* background-color: blue; */
        list-style-type: none;
        margin: auto;
        margin-top: 0px
    }
    a{
        text-decoration: none; 
        color: rgb(0, 0, 0);
        font-size: 30px;
        font-weight: bolder;
        transition: transform 0.5s;
    }
    a:hover{
        text-decoration: none; 
        color: rgb(0, 0, 0);
        font-size: 30px;
        font-weight: bolder;
        transform: scale(1.2);
    }
    .wellcome{
        font-size: 40px;
        color: white;
        margin: 0;
        width: 100%;
        height: auto;
        margin-top: 300px;
        text-align: center;
        line-height: 80px
    }
    button{
        width: 85%;
        height: 100px;
        margin-top: 150px;
        margin-left:38px;
        background-color: rgba(255, 255, 255, 0.9); /* 鼠标悬停时增加透明度 */
        backdrop-filter: blur(5px); /* 创建模糊效果 */
        -webkit-backdrop-filter: blur(5px); /* Safari 和 Chrome 的前缀 */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
        /* border:2px black solid ; */
        border-radius: 40px;
        transition: transform 0.5s 
    }
    button:hover{
        width: 85%;
        height: 100px;
        margin-top: 150px;
        margin-left:38px;
        border:none;
        border-radius: 42px;
        transform: scale(1.2);
        background-color: rgba(255, 255, 255, 0.7); /* 鼠标悬停时增加透明度 */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.9); /* 增加阴影效果 */
    }
</style>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import {
        reactive,
        toRefs,
        ref,
        onBeforeMount,
    } from "vue"
    import {
        useRouter
    } from "vue-router"
    import {
        ElMessage,
        ElMessageBox
    } from 'element-plus';
    // 引入组件
    import MTopLine from '../components/MTopLine.vue'
    import TopLine from '../components/TopLine.vue'
    export default {
        name: 'Main Page',
        // 引入组件
        components: {
            MTopLine,
            TopLine
        },
        setup() {
            const router = useRouter();
            const state = reactive({
                fix:false,
                num:123,
            })
            const topline = () => {
                if(window.scrollY>50){
                    state.fix = true
                    // console.log('yes')
                }
                else{ 
                    state.fix = false
                    // console.log('no')
                }
            }
            const parentMsg=ref('Home')
            onBeforeMount(() => {
                topline
            })
            window.addEventListener("scroll",()=>{
                topline()
                // console.log(window.scrollY)
                // console.log(state.fix)
            })
            // const initLine = () => {
            //     state.chartInstance = echarts.init(chartLine.value);
            //     state.links = state.data.map(function(item, i) {
            //         return {
            //             source: i,
            //             target: i + 1
            //         };
            //     })
            //     // state.chartInstance.setOption({
            //     //     xAxis: {
            //     //         type: 'category',
            //     //         boundaryGap: false,
            //     //         show: false,
            //     //         data: state.axisData,
            //     //     },
            //     //     yAxis: {
            //     //         type: 'value',
            //     //         show: false,
            //     //     },
            //     //     series: [{
            //     //         type: 'graph',
            //     //         layout: 'none',
            //     //         coordinateSystem: 'cartesian2d',
            //     //         symbolSize: 100,
            //     //         label: {
            //     //             show: true
            //     //         },
            //     //         edgeSymbol: ['circle', 'arrow'],
            //     //         edgeSymbolSize: [4, 20],
            //     //         data: state.data,
            //     //         links: state.links,
            //     //         label: {
            //     //             fontSize: 20,
            //     //             show: true,
            //     //         },
            //     //         itemStyle: {
            //     //             color: "#ffffff"
            //     //         },
            //     //         lineStyle: {
            //     //             color: "#000000",
            //     //             width: 5,
            //     //             type: 'dashed'
            //     //         }
            //     //     }]
            //     // })
            // }
            // const open = () => {
            //     nextTick(() => {
            //         initLine()
            //     })
            // }
            //读取数据库的路线
            // const getdataL = () => {
            //     console.log('函数执行了');
            //     axios({
            //             url: `API/getline`, //后端的接口地址                    	
            //             method: "get", //注意，这里没有s！！！
            //             transformRequest: [
            //                 function(data) {
            //                     data = qs.stringify(data);
            //                     return data;
            //                 },
            //             ],
            //             headers: {
            //                 "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            //             },
            //             dataType: "json",
            //         })
            //         .then((res) => {
            //             console.log("连接成功"); //这里打印出来是为了更直观的看到连接成功了
            //             // console.log(res); //res是后端返回来的数据，如果连接成功，则把res打印出来
            //             state.arr = res.data.msg[0].line1.split(',') //这里进行传回数据的赋值
            //             res.data.msg.forEach((e) => {
            //                     state.arrAxisData.push(e.line1.split(','))
            //                 })
            //                 // console.log('arraxios:', state.arrAxisData)
            //                 //this.age = res.data.msg[0].sage //让本页的数据等于回传的数据
            //         })
            //         .catch(function(error) {
            //             console.log("连接失败");
            //             console.log(error); //如果连接失败，则抛出错误的信息
            //         });
            // }
            // const getdataM = () => {
            //     console.log('函数执行了');
            //     axios({
            //             url: `API/getMission`, //后端的接口地址                    	
            //             method: "get", //注意，这里没有s！！！
            //             transformRequest: [
            //                 function(data) {
            //                     data = qs.stringify(data);
            //                     return data;
            //                 },
            //             ],
            //             headers: {
            //                 "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            //             },
            //             dataType: "json",
            //         })
            //         .then((res) => {
            //             console.log("连接成功"); //这里打印出来是为了更直观的看到连接成功了
            //             // console.log(res); //res是后端返回来的数据，如果连接成功，则把res打印出来
            //             console.log(res.data.msg[0].mtitle) //这里进行传回数据的赋值
            //             res.data.msg.forEach((e) => {
            //                 state.mtitle.push(e.mtitle)
            //             })
            //             res.data.msg.forEach((e) => {
            //                 state.mtime.push(e.mtime)
            //             })
            //             console.log("push完后：" + state.mtime[0])
            //                 // state.mtitle.push(res.data.msg[0].mtitle)
            //                 //this.age = res.data.msg[0].sage //让本页的数据等于回传的数据
            //         })
            //         .catch(function(error) {
            //             console.log("连接失败");
            //             console.log(error); //如果连接失败，则抛出错误的信息
            //         });
            // }
            // onBeforeMount(() => {
            //     open();
            //     getdataL();
            // })
            return { 
                ...toRefs(state),
                topline,
                parentMsg,
                // ...toRefs(state),
                // echarts,
                // chartLine,
                // logshow,
                // getdataL,
                // getdataM,
            }
        }
    }
</script>





