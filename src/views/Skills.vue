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
                <img loading="lazy" src="../assets/Photo/skills.webp" alt="技能展示图片" class="skillimg">
            </div>
            <div class ="right">
                <img loading="lazy" src="../assets/Photo/Trans.webp" alt="项目展示图片" class="projectimg">
            </div>
      </el-container>
        
        <!-- 底部 -->
        <el-footer id="spbottom">
            <div class="background">
            <div class="textbackground">
                <div class="text1">
                    <h1>个人技能</h1>
                    <p>
                        <b>*产品规划与需求分析：</b>熟悉产品市场研究，定位以及用户需求的验证确认和需求文档撰写<br>
                        <b>*人工智能：</b>掌握AI相关技术，包括机器学习、语音识别，熟悉LSTM等深度学习模型<br>
                        <b>*原型设计与制作：</b>具备高效原型制作能力，能够精准呈现产品构想<br>
                        <b>*数据分析：</b>具备数据分析能力，能够进行数据驱动的决策支持<br>
                        <b>*编程语言：</b>熟练掌握Python、JavaScript，具备机器学习、语音识别相关编程经验<br>
                        <b>*前端开发：</b>精通前端开发技术，包括HTML、CSS、JavaScript，熟悉Vue等前端框架<br>
                        <b>*办公软件：</b>熟练使用各类办公软件，具备高效的数据分析和报告撰写能力<br>
                        <b>*英语水平：</b>CET4,研究生阶段全英授课
                    </p>
                </div>
                <br>
                <br>
                <div class="text2">
                    <h1>项目经历</h1>
                    <br>
                    <h1>1.基于finetuning——whisper的粤语语音识别以多语种字幕生成</h1>
                    <p>
                        <strong>项目个人工作内容</strong><br>
                        <b>预处理：</b>对收集到的粤语语音数据进行预处理，包括去噪、标准化音量、分割音频片段等，以提高语音识别的准确性。<br>
                        <b>Fine-tuning Whisper模型：</b>使用收集到的粤语语音数据对Whisper模型进行微调（Fine-tuning）。这个过程涉及到调整模型的参数，使其更好地适应粤语的语音特征。<br>
                        <b>多语种字幕生成</b>：在模型训练完成后，可以利用该模型进行实时或批量的粤语语音识别。然后，将识别出的文本翻译成所需的多种语言，并生成相应的字幕。<br>
                        <b>字幕同步：</b>确保生成的字幕与语音同步，这可能需要进一步的算法来分析语音的节奏和语调，以实现准确的时间对齐。<br>
                        <b>用户界面：</b>开发一个用户友好的界面，使用户可以轻松上传粤语音频文件，选择所需的字幕语言，并下载生成的字幕文件。<br>
                        <b>测试与优化：</b>在系统开发过程中，不断测试并优化模型的性能，确保语音识别的准确性和字幕生成的质量。<br>
                        <b>识别准确率提升：</b>通过模型微调，粤语识别准确率提升40%，显著改善用户体验。<br>
                        <b>算法性能提升：</b>VAD算法时间戳正确率提升20%，多语字幕翻译准确度提高12%，大幅提升系统性能。<br>
                        <b>工作效率提升：</b>优化用户界面和工作流程，团队工作效率提升20%，有效缩短项目周期。<br>
                        <b>技术储备：</b>完成同声传译技术栈探索，为未来应用升级提供有力技术支持。<br>
                        <b>合作成果：与澳门广播电视台成功合作，项目成果获得高度认可，提升影响力。</b><br>
                    </p>
                    <br>
                    <h1>2.联想AI Monitor</h1>
                    <p>
                        <strong>项目个人工作内容</strong><br>
                        <b>性能提升:</b>通过优化API调用效率，提升系统整体性能，调用效率提高30%。<br>
                        <br>
                        <b>准确率提升:</b>利用Langchain框架实现RAG，使模型回答准确率提升20%，显著提高产品智能化水平。<br>
                        <br>
                        <b>市场认可:此POC产品成功参加CES展会，获得业界广泛关注和认可。</b><br>
                    </p>
                    <br>
                    <h1>3.澳门旅游APP大模型对话系统</h1>
                    <p>
                        <strong>项目个人工作内容</strong><br>
                        <b>移动端应用开发：</b>与澳门相关部门紧密合作，负责开发一款集成了旅游文化资讯的移动APP，整合热门景点、活动和AI对话服务。<br>
                        <b>技术栈应用：</b>运用React Native进行安卓前端界面开发，确保APP的跨平台兼容性和高性能表现。<br>
                        <b>AI系统集成：</b>探索并实施服务器端部署大型语言模型构建了稳定的对话系统为用户提供互动体验。<br>
                        <b>用户体验提升：</b>通过AI对话服务的优化，用户满意度提升30%，互动频率增加25%。<br>
                        <b>系统稳定性：</b>成功部署ChatGLM3-6B模型后，对话系统稳定性达到90%，有效减少了故障率。<br>
                        <b>技术贡献：</b>在前端框架和AI集成的技术创新应用中，为项目节省了20%的开发时间，提升了整体开发效率。<br>
                    </p>
                    <br>
                    <h1>4.关于RNN的抑郁症预判断</h1>
                    <p>
                        <strong>项目个人工作内容</strong><br>
                        <b>模型开发：</b>参与开发针对抑郁症识别的AI应用，成功运用LSTM和RNN等先进机器学习模型，提升模型性能。<br>
                        <b>数据处理：</b>独立研究并选取合适数据集完成数据清洗和预处理为模型训练和验证提供高质量数据。<br>
                        <b>模型优化：</b>负责RNN模型训练，通过实验和微调，显著提高模型准确率。<br>
                        <b>界面开发：</b>利用PYQT5工具包开发前端交互界面，实现用户与AI应用的互动，增强用户体验。<br>
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
    #spmid {
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
    
    #spmid .left,
    #spmid .right {
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

    #spmid .left:hover,
    #spmid .right:hover {
        transform: translateY(-5px);
    }

    #spmid .skillimg,
    #spmid .projectimg {
        max-height: 280px;
        max-width: 90%;
        object-fit: contain;
        border-radius: 10px;
    }
    
    #spmid .skillimg {
        border: 2px black solid;
    }
    
    #spmid .projectimg {
        border: 2px white solid;
    }
    #spbottom .background{
        background-color: #ffffff;
        width: 100%;
        height: 100%;
     }
    #spbottom .textbackground{
        background-color:#ffffff;
        width:80%;
        margin-left:auto;
        margin-right: auto;
        display: flex;
    }
    #spbottom .text1{
        width: 100%;
        font-size:larger;
        padding: 25px 30px 0 50px;
        line-height: 55px;
    }
    #spbottom .text2{
        width: 100%;
        font-size: larger;
        /* height: 300px; */
        padding: 25px 30px 0 50px;
        line-height: 35px;
    }
    h1{
        font-size: larger;
    }
    /* 移动端适配 */
    @media screen and (max-width: 768px) {
        #spmid {
            flex-direction: column;
            height: auto;
            padding: 20px 15px;
            margin: 10px auto;
        }
        
        #spmid .left,
        #spmid .right {
            width: 90%;
            height: auto;
            margin-bottom: 25px;
            padding: 15px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        #spmid .skillimg,
        #spmid .projectimg {
            height: auto;
            width: 100%;
            max-height: 180px;
            margin: 0 auto;
        }
        
        #spmid .left:hover,
        #spmid .right:hover {
            transform: none;
        }
        
        /* 项目标题上方的分隔线，只在移动端显示 */
        #spbottom .text2 h1:not(:first-child)::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: #333;
            margin: 20px auto 15px;
        }
        
        #spbottom .textbackground {
            flex-direction: column;
            width: 90%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
        }
        
        #spbottom .text1,
        #spbottom .text2 {
            width: 100%;
            padding: 0px 0px;
            font-size: 16px;
            line-height: 28px;
        }
        
        #spbottom h1 {
            margin-bottom: 10px;
            font-size: 20px;
            text-align: center;
        }
        
        #spbottom p {
            margin: 0;
            padding: 0 10px;
        }
        
        #spbottom .background {
            height: 100vh;
            padding: 5px 5px 30px 5px;
            box-sizing: border-box;
        }
    }
</style>

<script>
    import { reactive, toRefs, ref, onBeforeMount } from "vue"
    import MTopLine from '../components/MTopLine.vue'
    import TopLine from '../components/TopLine.vue'
    
    export default {
        name: 'Skills',
        components: {
            MTopLine,
            TopLine
        },
        setup() {
            const state = reactive({
                fix: false
            })
            
            const topline = () => {
                state.fix = window.scrollY > 50
            }
            
            const parentMsg = ref('Projects & Skills')
            
            onBeforeMount(() => {
                topline()
            })
            
            window.addEventListener("scroll", topline)
            
            return { 
                ...toRefs(state),
                parentMsg
            }
        }
    }
</script>