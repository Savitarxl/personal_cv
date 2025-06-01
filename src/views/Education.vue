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

      <el-container id="epmid">
            <div class ="left">
                <img src="..\assets\Photo\北师.png" alt="" class="schoollogo1">
                <!-- <p class="schoolname1">北京师范大学.珠海</p> -->
            </div>
            <div class ="right">
                <img src="..\assets\Photo\澳理.png" alt="" class="schoollogo2">
                <!-- <p class="schoolname1">澳门理工大学</p> -->
            </div>
        </el-container>
        
        <!-- 底部 -->
        <el-footer id="epbottom">
            <div class="background">
            <div class="textbackground">
                <div class="text1">
                    <p>
                        <strong><h2>北京师范大学珠海分校</h2></strong>
                        <br>
                        是教育部批准设立、由北京师范大学和珠海市人民政府合作举办、进行本科层次教育的全日制普通高等学校。
                        建设珠海分校是北京师范大学建设世界一流大学宏伟目标的重要组成部分。在教育部有关批复精神的指导下，珠海分校坚决执行北京师范大学提出的“资源国有、学校举办、市场运作、全新模式”的建校方针，坚决贯彻“以质量求生存，以创新求发展，以贡献求支持，以共赢求合作”的发展思路，在学校建设与发展中大胆进行教学模式、管理方式、运行机制、国际合作以及产学研一体化方面的改革尝试，努力把学校建设成为教育与科技产业复合发展、特色鲜明的综合性改革实验区，发展成为开放式、有特色、应用型高水平大学。
                        按照教育部的规定，珠海分校的教学组织和管理由北京师范大学负责。北京师范大学高度重视珠海分校的教育质量和办学水平，派出经验丰富的管理干部，负责分校的行政和教育教学管理工作。
                        珠海分校依托北师大的优质学科资源，着眼当代经济发展和社会需求，致力于培养具有宽厚人文、科学素养和学科专业知识的应用型专门人才。建校以来，生源遍及全国二十七个省（自治区、直辖市）及港澳台地区，在四川省和青海省一本批次招生，其余省份在本科批次或二本批次招生。2018年，录取的广东省外一本线上学生比例达到60%。2011年我校与清华大学、北京大学、北京师范大学等63所高校被国家教育部制定列入2012年免试招收香港学生的高校名册。现有在校生达2.3万多人。
                        珠海分校设有文学院、教育学院、管理学院、信息技术学院、不动产学院、物流学院、法律与行政学院、设计学院、艺术与传播学院、外国语学院、工程技术学院、应用数学学院、运动休闲学院以及国际商学部等十四个学院（部），涵盖8大学科门类的61个本科专业，形成了以经济类、管理类及工科类等应用型学科为主体，教育类学科为特色，文学、艺术、法律、理学等传统学科协调发展的综合性学科布局。
                    </p>
                </div>
                <div class="text2">
                    <p>
                        <strong><h2>澳门理工大学</h2></strong>
                        <br>
                        简称“MPU”，是一所位于中国澳门的教学与科研并重的公立大学，为粤港澳高校联盟、语言大数据联盟、世界翻译教育联盟、大湾区葡语教育联盟成员。 
                        澳门理工大学设有15个学术单位，包括艺术及设计学院，应用科学学院，管理科学学院，人文与社会科学学院，健康科学及体育学院，语言及翻译学院，一国两制研究中心，博彩旅游教学及研究中心，葡语教学及研究中心，机器翻译暨人工智能应用技术教育部工程研究中心，教与学中心，持续教育中心，长者书院，国际葡萄牙语培训中心（会议传译），北京大学医学部-澳门理工大学护理书院。 
                        澳门理工大学是中国澳门首个荣获“国家级教学成果奖”、全国唯一三度获得“亚太教育质量奖”的高等院校；大部分专业通过国际性学术评审或专业认证；设有中国港澳地区第一家教育部工程研究中心 ——“机器翻译暨人工智能应用技术教育部工程研究中心”；设有国际英语语言测试系统在澳门高校的唯一考点和博思英语测试中心；亦与欧盟口译总司合作成立国际葡萄牙语培训中心（会议传译）。
                        2024年度英国泰晤士高等教育世界大学影响力(Times Higher Education World University Impact Rankings 2024) 排名中，澳门理工大学跻身世界大学影响力总榜全球排名第301至400名区间，是澳门地区排名最高的高校。 
                        在2024年国际高等教育咨询机构Quacquarelli Symonds(QS)亚洲大学排名第601至650位之内。
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
        background-color: #fbfbfd;
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
    #All_Contain{
        height: 100vh;
        overflow: auto;
        background-color: #fbfbfd;
        box-sizing: border-box;
    }
    #epmid {
        display: flex;
        justify-content: space-between; /* 这将使得.left和.right分别位于容器的两侧 */
        align-items: center; /* 这将使得子元素在交叉轴上居中，即垂直居中 */
        width: 100%;
        height: 350px;
        margin: 0px auto;
        background-color: #fbfbfd;
    }

    #epmid .left {
        display: flex;
        align-items: center; /* 使得schoollogo1在交叉轴上居中，即垂直居中 */
        justify-content: center; /* 使得schoollogo1在主轴上居中，即水平居中 */
        width: 50%;
        height: 350px;
        border: 2px;
        overflow: hidden;
    }
    #epmid .right{
        width: 50%;
        height: 350px;
        border: 2px;
        overflow: hidden;
    }
    #epmid .schoollogo1{
        height: 300px;
        margin-left: 50px;
    }
    #epmid .schoollogo2{
        height: 350px;
        margin-left: 50px;
    }
    /* 移动端适配 */
    @media screen and (max-width: 768px) {
        #epmid {
            flex-direction: column;
            height: auto;
            padding: 20px 5px;
            box-sizing: border-box;
        }
        #epmid .left,
        #epmid .right {
            width: 100%;
            height: auto;
            padding: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #epmid .schoollogo1{
            height: 300px;
            margin-left: 0;
            object-fit: contain;
        }
        #epmid .schoollogo2 {
            height: 350px;
            margin-left: 0;
            object-fit: contain;
        }
    }
    #epbottom .background{
        background-color: #ffffff;
        width: 100%;
        height: 100vh;
     }
    #epbottom .textbackground{
        background-color:#ffffff;
        width:80%;
        margin-left:auto;
        margin-right: auto;
        display: flex;
    }
    #epbottom .text1{
        width: 50%;
        font-size: larger;
        /* height: 300px; */
        padding: 25px 30px 0 30px;
        line-height: 35px;
    }
    #epbottom .text2{
        width: 50%;
        font-size: larger;
        /* height: 300px; */
        padding: 25px 30px 0 30px;
        line-height: 35px;
    }
    /* 移动端适配 */
    @media screen and (max-width: 768px) {
        #epbottom .textbackground {
            flex-direction: column;
            width: 90%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
        }
        #epbottom .text1,
        #epbottom .text2 {
            width: 100%;
            padding: 0px 0px;
            font-size: 16px;
            line-height: 28px;
        }
        #epbottom h2 {
            margin-bottom: 10px;
            font-size: 20px;
            text-align: center;
        }
        #epbottom p {
            /* text-align: justify; */
            margin: 0;
            padding: 0 10px;
        }
        #epbottom .background {
            height: auto;
            padding-bottom: 30px;
            padding: 5px;
            box-sizing: border-box;
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
            const parentMsg=ref('Education')
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