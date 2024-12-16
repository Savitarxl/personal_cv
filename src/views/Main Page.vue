<template>
    <!-- 整体 -->
    <el-container id="All_Contain">
      <!-- 头部 -->
      <el-header id="Header">
          <!-- 应用topline组件 -->
          <MTopLine></MTopLine>
      </el-header>

      <!-- 中间部分 -->
      <el-container class="Almofadas" :class="{'Almofadas2':fix}">
      </el-container>
      <el-container class="Pageheader" :class="{'Pageheader2':fix}">
            <TopLine class="midtop" :info="parentMsg"></TopLine>
      </el-container>

      <el-container id="mpmid">
            <div class ="left">
            <h1 class="name1">邓 伟 豪<br><p class="name2">S a v i t a r</p></h1>
            </div>
            <div class ="right">
                <img src="../assets/Photo/1.png" alt="" class="my_photo">
            </div>
        </el-container>
        
        <!-- 底部 -->
        <el-footer id="mpbottom">
            <div class="background">
            <div class="textbackground">
                <div class="text1">
                    <p>
                        大家好，我是一名热情开朗、脚踏实地的研究生，目前就读于澳门理工大学，专注于大数据与物联网领域。我的本科背景是软件工程，这为我打下了坚实的编程和系统开发基础。现在，我正致力于深入研究自然语言处理（NLP）和模型应用，这些技术在当今的人工智能领域中扮演着至关重要的角色。
                        我的性格特点使我在团队中能够发挥积极的作用。我认真细致，能吃苦耐劳，这让我在面对复杂和挑战性的任务时，总能保持冷静和专注。强烈的责任心驱使我不断追求卓越，确保每一项工作都能达到最高标准。
                        优秀的沟通能力和协调技巧，让我能够在团队中有效地交流思想，协调资源，推动项目向前发展。我善于在活动后进行总结与反思，这不仅帮助我吸取经验教训，也促进了个人和团队的成长。
                        对细节的关注是我工作的一个重要方面，我相信"细节决定成败"。
                    </p>
                </div>
                <div class="text2">
                    <p>
                        在工作中，我能够随机应变，保持头脑清晰，这使我能够在压力下做出明智的决策。换位思考的能力让我能够更好地理解他人的需求和观点，从而更有效地解决问题。
                        我注重高效率地解决问题，这不仅体现在我对时间的管理上，也体现在我对资源的合理分配和利用上。熟练使用各类办公软件，如Microsoft Office套件、数据分析工具等，大大提高了我的工作效率。
                        同时，我也是一个终身学习者，拥有强烈的学习欲望和快速的学习能力。我喜欢制定计划，这帮助我系统地安排学习和工作，确保目标的实现。
                        在未来的工作中，我将继续深入学习技术，不断提高自己的技术能力。我相信，通过多动手、多实践，我能够将理论知识转化为实际应用，为团队和项目带来更大的价值。
                    </p>
                </div>
            </div>   
            </div>
        </el-footer>
       
        </el-container>


</template>
<style scoped>
    body{
        background-color: #fbfbfd;
        padding:0px;
        margin:0px;
        border:0px;
    }
    *{
        padding:0px;
        margin:0px;
        border:0px;
        scrollbar-width: none;
        
    }
    #Header {
        position: absolute;
        top:0;
        left: 0;
        background-color:rgba(0, 0, 0, 0.8);
        height: 50px;
        width:100%;
    }
    .Pageheader{
        background-color: #000000;
    }
    .Pageheader2{
        height: 60px;
        background-color: transparent;
        backdrop-filter: blur(20px);
        position: fixed;
        left: 0;
        top: 0;
        bottom:0;
        right: 0;
        /* margin:auto; */
        /* z-index: 0; */
        border-bottom: 0.3px solid rgb(186, 186, 186);
        margin-top:0;
    }
    .Almofadas{
        display: block;
        width: 100%;
        height: 50px;
        margin-top: 0;
    }
    .Almofadas2{
        height: 100px;
        width: 100%;
    }
    #mpmid{
        width: 100%;
        height: 350px;
        display: flex;
        margin: 0px auto;
        background-color: #fbfbfd;
    }
    #mpmid .left{
        width: 45%;
        height: 350px;
        border: 2px;
        /* background-color: #fbfbfd; */
        overflow: hidden;
    }   
     #mpmid .right{
        width: 55%;
        height: 350px;
        border: 2px;
        /* background-color: #fbfbfd; */
        overflow: hidden;
    }
    #mpmid .my_photo{
        height: 450px;
        margin-left: 50px;
    }
    .name1{
        font-size: 60px;
        height: 150px;
        width: 80%;
        line-height: 150px;
        margin: 0 auto;
        font-weight: 500;
        margin-top: 50px;
       
        text-align: right;
        
    }
    .name2{
        font-size: 30px;
        height: 70px;
        width: 95%;
        line-height: 30px;
        font-weight: 100;
        margin-left: 0;
        margin-top: 0;
        padding-left: 0;
        
    }
    #mpbottom .background{
        background-color: #ffffff;
        width: 100%;
        height: 100vh;
     }
    #mpbottom .textbackground{
        background-color:#ffffff;
        width:80%;
        margin-left:auto;
        margin-right: auto;
        display: flex;
    }
    #mpbottom .text1{
        width: 50%;
        font-size: larger;
        padding: 25px 30px 0 30px;
        line-height: 35px;
    }
    #mpbottom .text2{
        width: 50%;
        font-size: larger;
        /* height: 300px; */
        padding: 25px 30px 0 30px;
        line-height: 35px;
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