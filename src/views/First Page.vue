<template>
    <div class="split-layout">
        <!-- 左侧简历图片区域 -->
        <div class="resume-section">
            <div class="resume-scroll">
                <div class="image-container">
                    <div class="image-placeholder" :class="{ 'hidden': imageLoaded }"></div>
                    <img class="resume-image" :class="{ 'loaded': imageLoaded }" loading="lazy" src="../assets/Photo/CV.webp" alt="简历图片" @load="imageLoaded = true">
                </div>
            </div>
        </div>
        <!-- 右侧内容区域 -->
        <div class="content-section">
            <div class="content-wrapper">
                <h1 class="greeting">你好！<br>欢迎查看我的个人介绍</h1>
                <button class="cta-button" @click="$router.push('/Mp')">了解更多</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .split-layout {
        display: flex;
        min-height: 100vh;
        background-color: #1a1a1a; /* 添加背景色作为占位 */
        background-image: url("../assets/Photo/壁纸15.webp");
        /* 使用will-change提示浏览器优化背景图片渲染 */
        will-change: background-image;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        overflow-y: auto; /* 确保可以滚动 */
        position: relative;
    }
    
    /* 添加一个伪元素确保背景完全覆盖 */
    .split-layout::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #1a1a1a; /* 添加背景色作为占位 */
        background-image: url("../assets/Photo/壁纸15.webp");
        /* 使用will-change提示浏览器优化背景图片渲染 */
        will-change: background-image;
        background-size: cover;
        background-position: center;
        z-index: -1;
    }

    /* 左侧简历区域 */
    .resume-section {
        flex: 1;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .resume-scroll {
        height: 90vh;
        overflow-y: auto;
        border-radius: 20px;
        /* 确保内部内容也遵循圆角 */
        -webkit-mask-image: -webkit-radial-gradient(white, black);
        mask-image: radial-gradient(white, black);
        /* 自定义滚动条样式 */
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
    }

    .resume-scroll::-webkit-scrollbar {
        width: 6px;
    }

    .resume-scroll::-webkit-scrollbar-track {
        background: transparent;
    }

    .resume-scroll::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 3px;
    }

    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .image-container {
        position: relative;
        width: 100%;
        max-width: 800px;
        height: auto;
        border-radius: 12px;
        overflow: hidden;
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
        border-radius: 12px;
        z-index: 1;
        animation: pulse 1.5s infinite alternate;
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    .image-placeholder.hidden {
        opacity: 0;
    }
    
    .resume-image {
        width: 100%;
        max-width: 800px;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        transition: all 0.5s ease;
        animation: slideInFromLeft 1s ease-out forwards;
        opacity: 0;
        z-index: 2;
        position: relative;
    }
    
    .resume-image.loaded {
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

    /* 右侧内容区域 */
    .content-section {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .content-wrapper {
        text-align: center;
        max-width: 600px;
    }

    .greeting {
        color: white;
        font-size: 3rem;
        margin-bottom: 3rem;
        line-height: 1.4;
        font-weight: 700;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .cta-button {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.25);
        padding: 1.2rem 3.5rem;
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        box-shadow: 0 4px 20px rgba(255, 255, 255, 0.08);
        letter-spacing: 0.5px;
        position: relative;
        overflow: hidden;
    }

    .cta-button:hover {
        transform: translateY(-3px) scale(1.02);
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.5);
        letter-spacing: 1px;
    }

    .cta-button:active {
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    }

    /* 响应式设计 */
    /* 大屏幕（横屏）*/
    @media (min-width: 1441px) {
        .resume-scroll {
            height: 85vh;
            max-width: 1000px;
        }
        .greeting {
            font-size: 3.5rem;
        }
        .cta-button {
            padding: 1.5rem 4rem;
            font-size: 1.4rem;
        }
    }

    /* 标准桌面显示器 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        .resume-scroll {
            height: 90vh;
            max-width: 800px;
        }
    }

    /* 平板和小屏幕笔记本（横屏）*/
    @media (min-width: 769px) and (max-width: 1024px) {
        .resume-section,
        .content-section {
            padding: 1.5rem;
        }
        .resume-scroll {
            height: 80vh;
            max-width: 700px;
        }
        .greeting {
            font-size: 2.8rem;
        }
    }

    /* 平板（竖屏）和大屏手机 */
    @media (min-width: 481px) and (max-width: 768px) {
        .split-layout {
            flex-direction: column;
            min-height: calc(100vh - env(safe-area-inset-bottom));
            box-sizing: border-box;
        }
        
        /* 平板设备特别处理背景 */
        .split-layout::before {
            position: fixed; /* 固定背景 */
            min-height: 100vh;
        }
        .resume-section,
        .content-section {
            width: 100%;
            padding: 1.5rem;
            box-sizing: border-box;
        }
        .resume-scroll {
            height: 50vh; /* 增加高度，从45vh到50vh */
            margin-bottom: 1.5rem;
            max-width: 550px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 18px;
        }
        .resume-image {
            min-height: 350px; /* 平板上设置最小高度 */
            object-fit: contain;
        }
        .resume-image {
            animation: slideInFromBottom 1s ease-out forwards;
        }
        .content-wrapper {
            padding: 1rem;
            max-width: 500px;
            margin: 0 auto;
        }
        .greeting {
            font-size: 2.3rem;
            margin-bottom: 2rem;
            line-height: 1.35;
        }
        .cta-button {
            padding: 1rem 3rem;
            font-size: 1.1rem;
            max-width: 320px;
            width: 90%;
        }
    }

    /* 手机屏幕 */
    @media (max-width: 480px) {
        .split-layout {
            flex-direction: column;
            min-height: 100vh; /* 恢复使用100vh但添加其他修复 */
            height: auto; /* 添加自动高度 */
            padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
            box-sizing: border-box;
            overflow-x: hidden;
            overflow-y: auto; /* 确保可以滚动 */
            padding-bottom: 50px; /* 添加底部空间 */
        }
        
        /* 移动端特别处理背景 */
        .split-layout::before {
            position: fixed; /* 固定背景 */
            background-attachment: scroll; /* 移动端更好的性能 */
            min-height: 100vh; /* 确保至少覆盖整个视口高度 */
            height: 100%; /* 确保覆盖整个内容高度 */
        }
        .resume-section,
        .content-section {
            width: 100%;
            padding: 1rem 1.25rem;
            box-sizing: border-box;
            position: relative; /* 添加定位 */
        }
        .resume-scroll {
            height: auto; /* 改为自适应高度 */
            max-height: 55vh; /* 增加最大高度，从40vh到55vh */
            margin-bottom: 1.5rem;
            border-radius: 16px;
            margin-left: auto;
            margin-right: auto;
            width: 95%;
        }
        .resume-image {
            max-width: 100%;
            border-radius: 12px;
            animation: slideInFromBottom 0.8s ease-out forwards;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            min-height: 300px; /* 设置最小高度 */
            object-fit: contain; /* 确保图片比例不变 */
        }
        .greeting {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            line-height: 1.3;
            padding: 0 0.5rem;
        }
        .content-wrapper {
            padding: 0.75rem;
            width: 100%;
            max-width: 95%;
            margin: 0 auto;
            position: relative; /* 添加定位 */
            z-index: 5; /* 确保在上层 */
        }
        .cta-button {
            padding: 0.9rem 2rem;
            font-size: 1rem;
            width: 85%;
            max-width: 280px;
            margin: 20px auto 30px; /* 增加上下边距 */
            border-width: 1.5px;
            display: block;
            position: relative; /* 确保可以正确定位 */
            z-index: 10;
        }
    }

    @keyframes slideInFromBottom {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    /* 处理极端宽高比 */
    @media (max-aspect-ratio: 2/3) {
        .split-layout {
            flex-direction: column;
        }
    }

    @media (min-aspect-ratio: 2/1) {
        .resume-scroll {
            height: 85vh;
        }
        .content-section {
            padding: 2rem 4rem;
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
                if(window.scrollY > 50){
                    state.fix = true;
                    // console.log('yes')
                } else { 
                    state.fix = false;
                    // console.log('no')
                }
            }

            const parentMsg = ref('Home');

            onBeforeMount(() => {
                // 修正：调用 topline 函数
                topline();
            });

            window.addEventListener("scroll", () => {
                topline();
                // console.log(window.scrollY)
                // console.log(state.fix)
            });

            return { 
                ...toRefs(state),
                topline,
                parentMsg,
            }
        }
    }
</script>





