<template>
    <div class="mt">
        <!-- PC端导航 -->
        <div class="desktop-nav">
            <h2><a href="#/Mp">Home</a></h2>
            <h2><a href="#/Ep">Education</a></h2>
            <h2><a href="#/Wp">Work Experience</a></h2>
            <h2><a href="#/Sp">Projects & Skills</a></h2>
        </div>
        
        <!-- 移动端标题和菜单按钮 -->
        <div class="mobile-header">
            <div class="mobile-title">邓伟豪的CV</div>
            <div class="mobile-menu-button" @click="toggleMobileMenu">
                <div class="menu-icon" :class="{ 'open': isMobileMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        
        <!-- 移动端导航菜单 -->
        <div class="mobile-nav" v-if="isMobileMenuOpen">
            <h2><a href="#/Mp" @click="closeMobileMenu">Home</a></h2>
            <h2><a href="#/Ep" @click="closeMobileMenu">Education</a></h2>
            <h2><a href="#/Wp" @click="closeMobileMenu">Work Experience</a></h2>
            <h2><a href="#/Sp" @click="closeMobileMenu">Projects & Skills</a></h2>
        </div>
    </div>
</template>

<style scoped>
    * {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    
    .desktop-nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
    h2 {
        display: inline;
        float: left;
        margin: 0px;
        font-size: 18px;
        font-weight: 250;
        vertical-align: middle;
    }
    
    a {
        text-decoration: none; 
        color: #E8E8ED;
    }
    
    a:hover {
        text-decoration: none;
        color: #FFFFFF;
    }
    
    .mt {
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        width: 76%;
        height: 40px;
        padding: 0;
        display: flex;
        justify-content: space-between;
        z-index: 1000;
    }
    
    /* 移动端菜单按钮样式 */
    .mobile-menu-button {
        display: none;
        cursor: pointer;
        z-index: 1001;
        position: relative;
        height: 100%; /* 占满父元素高度 */
        display: flex;
        align-items: center; /* 垂直居中 */
    }
    
    .menu-icon {
        width: 30px;
        height: 25px;
        position: relative;
    }
    
    .menu-icon span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: #E8E8ED;
        border-radius: 3px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }
    
    .menu-icon span:nth-child(1) {
        top: 0px;
    }
    
    .menu-icon span:nth-child(2) {
        top: 10px;
    }
    
    .menu-icon span:nth-child(3) {
        top: 20px;
    }
    
    .menu-icon.open span:nth-child(1) {
        top: 10px;
        transform: rotate(135deg);
    }
    
    .menu-icon.open span:nth-child(2) {
        opacity: 0;
        left: -60px;
    }
    
    .menu-icon.open span:nth-child(3) {
        top: 10px;
        transform: rotate(-135deg);
    }
    
    /* 移动端导航菜单样式 */
    .mobile-nav {
        display: none;
        position: fixed;
        top: 80%; /* 显著降低位置到屏幕底部 */
        left: 50%;
        transform: translate(-50%, -20%); /* 将Y轴平移调整为-20%，让菜单显示在更低的位置 */
        width: 85%;
        max-width: 400px;
        height: auto;
        background-color: rgba(30, 30, 30, 0.7); /* 改为半透明背景 */
        padding: 20px 20px; /* 进一步减少上下内边距 */
        flex-direction: column;
        z-index: 999;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(15px); /* 增强模糊效果 */
        -webkit-backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.1); /* 添加半透明边框 */
        margin-top: 60px; /* 显著增加上边距 */
    }
    
    .mobile-nav h2 {
        float: none;
        margin: 10px 0; /* 进一步减少选项之间的间距 */
        text-align: center;
        font-size: 18px; /* 缩小字体大小以减少高度 */
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* 添加文字阴影 */
    }
    
    .mobile-nav a {
        padding: 8px 15px;
        display: inline-block;
        width: 80%;
        border-radius: 10px;
        transition: all 0.2s ease;
    }
    
    .mobile-nav a:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }
    
    /* 添加菜单背景遮罩 */
    .mobile-nav::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        z-index: -1;
    }
    
    /* 移动端标题样式 */
    .mobile-header {
        display: none;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 40px; /* 添加固定高度确保对齐 */
    }
    
    .mobile-title {
        font-size: 18px;
        font-weight: 500;
        color: #E8E8ED;
        letter-spacing: 0.5px;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        display: flex;
        /* align-items: center;  */
        height: 100%; /* 占满父元素高度 */
        /* padding-top: 2px;  */
    }
    
    /* 移动端适配 */
    @media screen and (max-width: 768px) {
        .desktop-nav {
            display: none;
        }
        
        .mobile-header {
            display: flex;
        }
        
        .mobile-menu-button {
            display: block;
        }
        
        .mobile-nav {
            display: flex;
            opacity: 0;
            transform: translate(-50%, -20%) scale(0.9); /* 与CSS定义保持一致 */
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .mt {
            width: 90%;
            justify-content: space-between;
        }
    }
</style>

<script>
export default {
    data() {
        return {
            isMobileMenuOpen: false
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            // 当菜单打开时禁止页面滚动
            if (this.isMobileMenuOpen) {
                document.body.style.overflow = 'hidden';
                // 添加动画效果
                setTimeout(() => {
                    const mobileNav = document.querySelector('.mobile-nav');
                    if (mobileNav) {
                        mobileNav.style.opacity = '1';
                        mobileNav.style.transform = 'translate(-50%, -20%) scale(1)'; /* 与CSS定义保持一致 */
                    }
                }, 10);
            } else {
                document.body.style.overflow = '';
            }
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
            document.body.style.overflow = '';
        }
    }
}
</script>