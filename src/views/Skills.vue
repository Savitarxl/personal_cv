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

      <el-container id="spmid">
            <div class ="left">
                <img src="../assets/Photo/skills.jpg" class="skillimg"></img>
            </div>
            <div class ="right">
                <img src="..\assets\Photo\Project.png" class="projectimg"></img>
            </div>
      </el-container>
        
        <!-- 底部 -->
        <el-footer id="spbottom">
            <div class="background">
            <div class="textbackground">
                <div class="text1">
                    <p>
                        <b>编程语言：</b>熟练掌握C++、Java、JavaScript、CSS、HTML，有实际项目经验<br>
                        <b>数据库：</b>熟悉MySQL，能够进行数据库设计和查询优化，在Windows及linux都有开发经验<br>
                        <b>机器学习与AI：</b>了解机器学习基础，熟练使用Lstm等模型，有AI应用开发经验<br>
                        <b>前端开发：</b>精通Web前端开发，使用Vue、React等框架<br>
                        <b>办公软件：</b>熟练使用各类办公软件，具备高效的数据分析和报告撰写能力<br>
                        <b>英语水平：</b>CET4,研究生阶段全英授课
                    </p>
                </div>
                <div class="text2">
                    <h1>1.澳门旅游APP大模型对话系统</h1>
                    <p>
                        <strong>项目个人工作内容</strong><br>
                        <b>移动端应用开发：</b>与澳门相关部门紧密合作，负责开发一款集成了旅游文化资讯的移动APP，整合热门景点、活动和AI对话服务。<br>
                        <b>技术栈应用：</b>运用React Native进行安卓前端界面开发，确保APP的跨平台兼容性和高性能表现。<br>
                        <b>AI系统集成：</b>探索并实施服务器端部署大型语言模型构建了稳定的对话系统为用户提供互动体验。<br>
                    </p>
                    <br>
                    <h1>2.关于RNN的抑郁症预判断</h1>
                    <p>
                        <strong>项目个人工作内容</strong><br>
                        <b>模型开发：</b>参与开发针对抑郁症识别的AI应用，成功运用LSTM和RNN等先进机器学习模型，提升模型性能。<br>
                        <b>数据处理：</b>独立研究并选取合适数据集完成数据清洗和预处理为模型训练和验证提供高质量数据。<br>
                        <b>模型优化：</b>负责RNN模型训练，通过实验和微调，显著提高模型准确率。<br>
                        <b>界面开发：</b>利用PYQT5工具包开发前端交互界面，实现用户与AI应用的互动，增强用户体验。<br>
                    </p>
                    <br>
                    <h1>3.基于finetuning——whisper的粤语语音识别以多语种字幕生成</h1>
                    <p>
                        <strong>项目个人工作内容</strong><br>
                        <b>数据收集：</b>收集大量的粤语语音数据集以及公开的语音数据库。<br>
                        <b>预处理：</b>对收集到的粤语语音数据进行预处理，包括去噪、标准化音量、分割音频片段等，以提高语音识别的准确性。<br>
                        <b>Fine-tuning Whisper模型：</b>使用收集到的粤语语音数据对Whisper模型进行微调（Fine-tuning）。这个过程涉及到调整模型的参数，使其更好地适应粤语的语音特征。<br>
                        <b>多语种字幕生成</b>：在模型训练完成后，可以利用该模型进行实时或批量的粤语语音识别。然后，将识别出的文本翻译成所需的多种语言，并生成相应的字幕。<br>
                        <b>字幕同步：</b>确保生成的字幕与语音同步，这可能需要进一步的算法来分析语音的节奏和语调，以实现准确的时间对齐。<br>
                        <b>用户界面：</b>开发一个用户友好的界面，使用户可以轻松上传粤语音频文件，选择所需的字幕语言，并下载生成的字幕文件。<br>
                        <b>测试与优化：</b>在系统开发过程中，不断测试并优化模型的性能，确保语音识别的准确性和字幕生成的质量。<br>
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
    #spmid{
        width: 80%;
        height: 350px;
        display: flex;
        margin: 0px auto;
        background-color: #fbfbfd;
    }
    #spmid .left{
        width: 50%;
        height: 350px;
        border: 2px;
        /* background-color: #ff0404; */
        overflow: hidden;
        display: flex;
        align-items: center; /* 使得schoollogo1在交叉轴上居中，即垂直居中 */
        justify-content: center; /* 使得schoollogo1在主轴上居中，即水平居中 */
    }   
     #spmid .right{
        width: 50%;
        height: 350px;
        border: 2px;
        /* background-color: #1717c9; */
        overflow: hidden;
        display: flex;
        align-items: center; /* 使得schoollogo1在交叉轴上居中，即垂直居中 */
        justify-content: center; /* 使得schoollogo1在主轴上居中，即水平居中 */
    }
    #spmid .skillimg{
        height: 300px;
        border-radius: 10px;
        border: 2px black solid;
    }
    #spmid .projectimg{
        height: 300px;
        border-radius: 10px;
        border: 2px white solid;
    }


    #spbottom .background{
        background-color: #ffffff;
        width: 100%;
        height: 100vh;
     }
    #spbottom .textbackground{
        background-color:#ffffff;
        width:80%;
        margin-left:auto;
        margin-right: auto;
        display: flex;
    }
    #spbottom .text1{
        width: 50%;
        font-size:larger;
        padding: 25px 30px 0 50px;
        line-height: 55px;
    }
    #spbottom .text2{
        width: 50%;
        font-size: larger;
        /* height: 300px; */
        padding: 25px 30px 0 50px;
        line-height: 35px;
    }
    h1{
        font-size: larger;
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
            const parentMsg=ref('Projects & Skills')
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