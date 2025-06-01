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
                <img loading="lazy" src="..\assets\Photo\work.png" alt="工作经验展示图片" class="work_photo">
       </el-container>
        
        <!-- 底部 -->
        <el-footer id="wpbottom">
            <div class="background">
            <div class="textbackground">
                <div class="text1">
                    <p>
                        中移通信技术有限公司是中国移动通信有限公司于2015年9月7日成立的独资有限责任公司，总部位于北京，注册资金10亿元。中移通信技术有限公司是中国移动通信集团公司控股的中国移动通信有限公司的全资子公司。
                        2015年11月27日，中移铁通有限公司与中国铁通集团有限公司达成收购协议，中移铁通收购中国铁通资产和业务，收购价格为318.8亿元。中移铁通有限公司是中国移动为本次收购而设立的一家全资附属公司。
                        据悉，中移铁通收购的铁通资产和业务包括约9.9万皮长公里的全国骨干网络、约182.2万皮长公里的城市光缆、约2471万个IPv4地址资源、房屋1814项及土地685项、约1198万的固网宽带用户和约1829万固话用户（其中含1388万的传统固话用户）。此外，中移铁通还将接收铁通约4.7万固网运营人员。至此，中移铁通实际上接手铁通的核心资产及业务。根据中国移动公告，中移铁通收购的若干资产2014年实现了233.43亿元收入，税后净利润为1000万；2015年前5个月的收入约为93.44亿元，税后净利润为3300万。
                    </p>
                </div>
                <div class="text2">
                    <p>
                        在我的实习期间，我深入参与了公司的核心业务流程，积累了丰富的工作经验和专业技能。我主要负责数据处理工作，包括数据的汇总、清洗、存储以及通过自动化脚本和软件优化数据流程，确保了数据的高效处理和准确性。此外，我还利用数据可视化工具，将复杂数据转化为直观的图表和图形，便于团队成员理解。在项目分析方面，我运用统计方法深入挖掘项目数据，发现趋势和模式，并与项目团队紧密合作，为项目决策提供了有力的数据支持。同时，我也全面了解了公司的业务流程和市场趋势，通过与业务团队的沟通，我提出了基于数据的业务发展策略和优化建议。通过跨部门的项目合作，我提升了跨领域的沟通能力和团队协作能力。这段实习经历不仅让我在数据分析和业务洞察方面得到了锻炼，也为我未来的职业发展奠定了坚实的基础。
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
    #wpmid{
        width: 100%;
        height: 350px;
        display: flex;
        align-items: center; /* 使得schoollogo1在交叉轴上居中，即垂直居中 */
        justify-content: center; /* 使得schoollogo1在主轴上居中，即水平居中 */
        margin: 0px auto;
        background-color: #fbfbfd;
        overflow: hidden;
    }

    #wpmid .work_photo{
        height: 450px;
    }
    #wpbottom .background{
        background-color: #ffffff;
        width: 100%;
        height: 100vh;
     }
    #wpbottom .textbackground{
        background-color:#ffffff;
        width:80%;
        margin-left:auto;
        margin-right: auto;
        display: flex;
    }
    #wpbottom .text1{
        width: 50%;
        font-size: larger;
        padding: 25px 30px 0 30px;
        line-height: 35px;
    }
    #wpbottom .text2{
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