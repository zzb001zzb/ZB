 <!-- "build": "vite build", -->
<script setup>
import{ref, onMounted,watch} from"vue"
import { RouterView,RouterLink,useRoute,useRouter } from "vue-router";
import {getBanner} from "@/api"
const route = useRoute();
const router = useRouter();
const newPath1 = ref(null)
const banner1 = ref()


onMounted(()=>{
    newPath1.value = route.path;
    console.log(route.path);
    getBanner(1).then(res =>{
        banner1.value = res.data;
        // console.log(banner1);
    })
    .catch(ses =>{
        console.log(ses);
    })
})
// watch(
//     ()=>route.path,
//     (newPath)=>{
//         newPath1.value = newPath;
//     }
// )
const banner = [
{src:new URL('../assets/img/5.png',import.meta.url).href},
{src:new URL('../assets/img/45.png',import.meta.url).href},
{src:new URL('../assets/img/5.png',import.meta.url).href},
{src:new URL('../assets/img/45.png',import.meta.url).href}
]
const top_nav = [
    {text:"首页",src:"/index"},
    {text:"院部简介",src:"/faculty/faculty-children/faculty1_1"},
    {text:"办学特色"},
    {text:"专业介绍"},
    {text:"领导关怀"},
    {text:"对外交流"},
    {text:"社会服务"},
    {text:"师资力量"},
    {text:"实训中心"},
    {text:"实习基地"},
]
const show = ref(false)
const top_nav1 = ()=>{
    show.value =!show.value
}
</script>
<template>
    <div>
       <div class="top_nav">
            <div>
                <img src="../assets/img/4.png" alt="" mode="widthFix" />
                <ul>
                    <li v-for="item in top_nav" :key="item" :class="item.src == newPath1 ? 'in' : '' "><router-link :to="item.src" class="router">{{ item.text }}</router-link></li>
                </ul>
            </div>
       </div>
       <div class="top_nav_sj">
            <div class="">
                   <img src="../assets/img/4.png" alt="" mode="widthFix">
                   <img src="../assets/img/23.png" alt="" mode="widthFix" @click="top_nav1"> 
            </div>
       </div>
       <div class="banner_box">
        
        <el-carousel :interval="5000" arrow="always" class="banner_el">
            <el-carousel-item v-for="item in banner" :key="item" class="banner_el1">
            <img :src="item.src" alt="" class="banner">
            <!-- <img src="/src/assets/img/5.png"> -->
            </el-carousel-item>
        </el-carousel>
       </div>
       <div class="top-nav1" v-if="show">
        <ul>
            <li v-for="item in top_nav" :key="item" :class="item.src == newPath1 ? 'in' : '' "><router-link :to="item.src" class="router">{{ item.text }}</router-link></li>
        </ul>
       </div>
    </div>
</template>
<style lang="scss" scoped>
@import "/src/assets/style/top.scss";
</style>