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

       <el-container id="wpmid">
            <div class ="left">
                <img loading="lazy" src="..\assets\Photo\闪联.webp" alt="闪联公司logo" class="work_photo1">
            </div>
            <div class ="right">
                <img loading="lazy" src="..\assets\Photo\易仓.webp" alt="中移公司logo" class="work_photo2">
            </div>
       </el-container>
        
        <!-- 底部 -->
        <el-footer id="wpbottom">
            <div class="background">
            <div class="textbackground">
                <div class="text1">
                    <strong><h2>深圳闪联信息技术有限公司</h2></strong>
                    <br>
                    <p>
                        深圳闪联成立于2006年，注册资金10111.12万元深圳市闪联信息技术有限公司(以下简称:深圳闪联深圳闪联是一家以闪联标准为基础，在智能连接、智食音视频等领域，为全球知名品牌厂商提供高效办公硬件、软件及系统产品解决方案!以领先的技术标准构交产业创新生态;核心团队来源于IT行业500强公司、国内软件行业上市公司等;其中研发和项目人员超过55%克科技大厦，2009年，建立深圳市第一家国家工程实总部位于深圳市南山区粤海街道麻岭社区科研路9号比验室-电子信息产品协同互联国家工程实验室;
                        <br>
                        <br>
                        <h3>工作内容</h3>
                        <p>
                            <strong>模型部署：</strong>成功部署Qwen2、SD等大型AI模型至生产环境，确保服务的稳定运行，提升系统性能30%。
                            <br>
                            <strong>硬件协调：</strong>参与多个与联想的POC项目，与硬件部门紧密协作，确保软件与硬件的完美兼容，提升项目成功率20%。
                            <br>
                            <strong>界面改造：</strong>实现响应式设计，改造前端界面，显著提升用户体验，用户满意度提高40%。
                            <br>
                            <strong>模型应用：</strong>实现不同场景下的AI赋能，为联想、小米、华为等客户的POC项目提供高效服务，客户满意度达95%。
                        </p>
                        <br>
                        <h3>工作成绩</h3>
                        <p>
                            <strong>功能开发：</strong>100%独立完成AI WorkStation设备云端路线的AI语音对话、会议纪要、同声传译功能开发。
                            <br>
                            <strong>算法优化：</strong>完成AI Memo设备的AI摘要算法优化，提升摘要准确率20%，显著提高用户工作效率。
                            <br>
                            <strong>技术研发：</strong>全流程参与AI Monitor的基于RAG的意图识别算法开发和优化，提升25%回答准确率，确保技术领先。
                            <br>
                            <strong>项目交付：</strong>全流程参与产品需求分析、方案确定、开发及后期调优，确保项目按时交付，项目交付率100%。
                        </p>
                    </p>
                </div>
                <div class="text2">
                    <strong><h2>深圳易仓科技有限公司</h2></strong>
                    <br>
                    <p>
                        跨境行业全生态链软件服务供应商，深圳市易仓科技有限公司一直致力于研发高效可控的跨境管理模式。精研跨境电商ERP、国际物流TMS、海外仓WMS和跨境分销M2B等管理系统。汇集目前国内强大的IT团队，创始人和开发巨匠均在跨境B2C、海外仓、国际物流等领域有5-12年研发经验，ECCANG目前已和国内外众多跨境卖家、海外仓服务商和国际物流等跨境巨头合作。跨境业务不断发展，ECCANG管理软件每月也更新大量功能，以确保客户使用软件在跨境行业占有优势地位！
                        <br>
                        <br>
                        <h3>工作内容</h3>
                        <p>
                            <strong>市场调研：</strong>AI电商产品市场进行分析，收集用户需求及竞品信息。
                            <br>
                            <strong>需求分析：</strong>通过调查，梳理用户需求和产品功能优先级，编写需求文档。
                            <br>
                            <strong>原型制作：</strong>用原型平台或者前端代码进行原型制作
                            <br>
                            <strong>设计协助：</strong>协助设计团队界面优化，提升用户体验，确保产品功能实现与设计一致。
                        </p>
                        <br>
                        <h3>工作成绩</h3>
                        <p>
                            <strong>市场洞察：</strong>收集并分析了超过数10个AI电商产品数据，分析需求和主要竞品优势。
                            <br>
                            <strong>需求梳理：</strong>成功梳理出20个高优先级功能需求，编写了详细的需求文档。
                            <br>
                            <strong>原型设计：</strong>利用原型平台和前端开发，独立完成了多个高保真原型，缩短周期30%。
                            <br>
                            <strong>界面优化：</strong>协助进行界面优化，通过用户测试反馈，提升了用户体验满意度15%。
                        </p>
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
    #wpmid {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 20px auto;
        background-color: #fbfbfd;
        padding: 0 30px;
        box-sizing: border-box;
    }

    #wpmid .left,
    #wpmid .right {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45%;
        height: 350px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        padding: 20px;
        box-sizing: border-box;
        transition: transform 0.3s ease;
    }

    #wpmid .left:hover,
    #wpmid .right:hover {
        transform: translateY(-5px);
    }

    #wpmid .work_photo1,
    #wpmid .work_photo2 {
        max-height: 280px;
        max-width: 90%;
        object-fit: contain;
    }
    #wpbottom .background {
        background-color: #ffffff;
        width: 100%;
        height: 100%;
    }

    #wpbottom .textbackground {
        background-color: #ffffff;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }

    #wpbottom .text1 {
        width: 50%;
        font-size: larger;
        padding: 25px 25px 0 0px;
        line-height: 35px;
    }
    
    #wpbottom .text2 {
        width: 50%;
        font-size: larger;
        padding: 25px 0px 0 35px;
        line-height: 35px;
    }
    /* 移动端适配 */
    @media screen and (max-width: 768px) {
        #wpmid {
            flex-direction: column;
            height: auto;
            padding: 20px 15px;
            margin: 10px auto;
        }
        
        #wpmid .left,
        #wpmid .right {
            width: 90%;
            height: auto;
            margin-bottom: 25px;
            padding: 15px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        #wpmid .work_photo1,
        #wpmid .work_photo2 {
            height: auto;
            width: 100%;
            max-height: 180px;
            margin: 0 auto;
        }
        
        #wpmid .left:hover,
        #wpmid .right:hover {
            transform: none;
        }
        
        /* 易仓科技标题上方的分隔线，只在移动端显示 */
        #wpbottom .text2 h2::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: #333;
            margin: 20px auto 15px;
        }
        
        #wpbottom .textbackground {
            flex-direction: column;
            width: 90%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
        }
        
        #wpbottom .text1,
        #wpbottom .text2 {
            width: 100%;
            padding: 0px 0px;
            font-size: 16px;
            line-height: 28px;
        }
        
        #wpbottom h2 {
            margin-bottom: 10px;
            font-size: 20px;
            text-align: center;
        }
        
        #wpbottom p {
            margin: 0;
            padding: 0 10px;
        }
        
        #wpbottom .background {
            height: auto;
            padding: 5px 5px 30px 5px;
            box-sizing: border-box;
        }
        
        #wpbottom p {
            margin: 0;
            padding: 0 10px;
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
            const parentMsg=ref('Work Experience')
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