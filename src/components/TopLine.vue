<template>
    <div id="top">
        <h2 class="title">{{info}}</h2>
        <a href="#/"><img src="..\assets\Photo\简历.png" class="trans" title="返回简历页"></a>
    </div>
</template>
<style>

    #top{
        width: 78%; 
        height: 60px;
        margin: 0 auto;
        margin-top: 0px;
        display: block;
        border-bottom: solid 0.3px rgb(186, 186, 186);
    }
    .title {
        display: inline;
        float: left;
        margin: 0px;
        margin-left: 10px;
        margin-right: 20px;
        font-size: 20px;
        color: rgb(0, 0, 0);
        font-weight: 700;
        line-height: 60px;
    }
    .trans{
        float: right;
        width: 40px;
        height: 40px;
        margin-top: 12px;
        margin-right: 20px;
        transition: transform 0.5s
    }
    .trans:hover{
        float: right;
        width: 40px;
        height: 40px;
        margin-top: 12px;
        margin-right: 20px;
        background-color: rgb(230, 230, 230);
        border-radius: 3px 10px  3px 3px; 
        transform: scale(1.2);
    }
    
</style>
<script setup>
import { toRefs, defineProps } from 'vue'
const props = defineProps({
  //子组件接收父组件传递过来的值
  info: String,
})
//使用父组件传递过来的值
const {info} =toRefs(props)
 
</script>
