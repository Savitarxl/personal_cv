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
                <div class="image-container">
                    <div class="image-placeholder" :class="{ 'hidden': imageLoaded }"></div>
                    <img loading="lazy" src="../assets/Photo/1.png" alt="邓伟豪的照片" class="my_photo" :class="{ 'loaded': imageLoaded }" @load="imageLoaded = true">
                </div>
            </div>
        </el-container>
        
        <!-- 底部 -->
        <el-footer id="mpbottom">
            <div class="background">
            <div class="textbackground">
                <div class="text1">
                    <p>
                        大家好！
                        我是邓伟豪，目前就读于澳门理工大学，攻读大数据与物联网专业硕士学位（2023.08-2025.06），本科毕业于北京师范大学珠海分校软件工程专业（GPA 3.2/4.0，前 10%，优秀毕业生）。我的专业背景融合了软件工程的底层技术能力与大数据、物联网的前沿技术视野，尤其聚焦于自然语言处理（NLP）、大模型部署与应用、机器学习等领域，擅长将技术理论转化为实际场景中的解决方案。
                        <br>
                        <strong>核心能力与技术优势</strong>
                        <br>
                        <strong>*AI 与大模型技术：</strong>
                        熟练掌握机器学习、语音识别、深度学习模型（如 LSTM），具备Qwen2、SD、ChatGLM3-6B 等大型模型的部署与优化经验。例如，在联想 AI Monitor 项目中，通过 Langchain 框架实现 RAG 技术，使模型回答准确率提升 20%；在粤语语音识别项目中，微调 Whisper 模型使粤语识别准确率提升 40%。
                        <br>
                        <strong>*产品与技术全流程落地：</strong>
                        兼具AI 产品经理与算法开发经验，能独立完成从市场调研、需求分析到原型设计、模型部署的全流程工作。曾在深圳易仓科技担任 AI 产品经理实习生，主导完成 6 个高保真原型设计，缩短制作周期 30%；在深圳闪联信息技术有限公司担任 AI 实习生时，全流程参与 AI 硬件产品的算法优化与项目交付，实现客户满意度 95%。
                        <br>
                        <strong>*编程与开发技能：</strong>
                        精通Python、JavaScript、HTML/CSS，熟悉Vue、React 前端框架及React Native 跨平台开发，具备 Web 端与移动端应用开发经验（如澳门旅游 APP 大模型对话系统）
                    </p>
                </div>
                <div class="text2">
                    <p>
                        <strong>职业素养与实践亮点</strong>
                        <br>
                        <strong>*团队协作与项目管理：</strong>
                        具备优秀的沟通协调能力，擅长跨部门协作（如与硬件团队、设计团队配合），曾在 POC 项目中推动软件与硬件兼容，提升项目成功率 20%。作为开发组长，主导 “基于 RNN 的抑郁症预判断” 项目，带领团队完成数据清洗、模型训练全流程，模型准确率提升 15%，成果应用于心理健康监测系统，服务超 1000 名用户。
                        <br>
                        <strong>*细节导向与效率优化：</strong>
                        注重数据驱动决策，擅长通过数据分析优化流程。例如，在需求分析中梳理 20 个高优先级功能，编写详细需求文档；在界面优化中通过用户测试提升满意度 15%，并通过前端响应式设计提升用户满意度 40%。
                        <br>
                        <strong>*快速学习与技术探索：</strong>
                        秉持终身学习理念，持续探索前沿技术（如同声传译技术栈、RAG 架构），曾独立完成 AI 语音对话、会议纪要等功能开发，并为未来技术升级储备关键能力。
                        <br>
                        <strong>*未来规划：</strong>
                        我希望在AI 产品开发、大模型应用落地领域深入发展，将软件工程的系统思维与大数据、NLP 技术结合，通过 “多动手、多实践” 的技术迭代路径，为团队提供从需求分析到技术实现的全链路支持，助力打造兼具创新性与用户价值的 AI 产品。
                        <br>
                        期待与各位的交流与合作！
                        <br>
                        <samll>Version 1.0</samll>
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
        min-height: 350px;
        display: flex;
        margin: 0px auto;
        background-color: #fbfbfd;
    }
    #mpmid .left{
        width: 45%;
        height: 350px;
        border: 2px;
        overflow: hidden;
    }   
    #mpmid .right{
        width: 55%;
        height: 350px;
        border: 2px;
        overflow: hidden;
    }
    .image-container {
        position: relative;
        height: 450px;
        overflow: hidden;
        margin-left: 50px;
    }
    
    .image-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 8px;
        z-index: 1;
        animation: pulse 1.5s infinite alternate;
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    .image-placeholder.hidden {
        opacity: 0;
    }
    
    #mpmid .my_photo{
        height: 450px;
        position: relative;
        z-index: 2;
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    #mpmid .my_photo.loaded {
        opacity: 1;
    }
    
    @keyframes pulse {
        0% {
            opacity: 0.5;
        }
        100% {
            opacity: 0.8;
        }
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

    /* 移动端适配 */
    @media screen and (max-width: 768px) {
        #mpmid {
            flex-direction: column-reverse;
            height: auto;
            padding: 20px 15px;
            box-sizing: border-box;
        }
        #mpmid .left,
        #mpmid .right {
            width: 100%;
            height: auto;
            padding: 0 5px;
            box-sizing: border-box;
        }
        #mpmid .my_photo {
            height: auto;
            width: 85%;
            max-width: 300px;
            margin: 20px auto;
            display: block;
        }
        .name1 {
            font-size: 38px;
            height: auto;
            line-height: normal;
            text-align: center;
            margin-top: 20px;
            width: 100%;
        }
        .name2 {
            font-size: 22px;
            height: auto;
            text-align: center;
            margin: 10px 0;
            width: 100%;
        }
        /* 为整个页面添加默认的盒模型 */
        #All_Contain {
            box-sizing: border-box;
            overflow-x: hidden;
        }
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
        padding: 25px 30px 0 30px;
        line-height: 35px;
    }

    /* 移动端适配 */
    @media screen and (max-width: 768px) {
        #mpbottom .textbackground {
            width: 100%;
            flex-direction: column;
            padding: 0;
            box-sizing: border-box;
        }
        #mpbottom .text1,
        #mpbottom .text2 {
            width: 100%;
            padding: 15px 20px;
            font-size: 16px;
            line-height: 28px;
            box-sizing: border-box;
        }
        #mpbottom .background {
            height: auto;
            padding-bottom: 30px;
            padding: 10px;
            box-sizing: border-box;
        }
        #mpbottom p {
            margin: 0;
            padding: 0;
        }
        strong {
            display: block;
            margin: 15px 0 10px 0;
        }
        br {
            margin-bottom: 8px;
            display: block;
            content: "";
        }
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
                imageLoaded: false,
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
            return { 
                ...toRefs(state),
                topline,
                parentMsg,
            }
        }
    }
</script>