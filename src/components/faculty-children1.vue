<script setup>
import { ref } from "vue";

const img = ref([
    "/src/assets/img/34.png",
    "/src/assets/img/35.png",
    "/src/assets/img/37.png",
    "/src/assets/img/36.png",
    "/src/assets/img/30.png",
    "/src/assets/img/31.png"
])
const show = ref(0)
</script>
<template>
        <div class="faculty1">
            <div class="faculty1_top">
                <div>
                    <img src="../assets/img/26.png" alt="">
                    院部简介
                </div>
                <div>
                    <p>当前位置：<router-link to="/index" class="a1">首页</router-link> | 院部简介</p>
                    <input type="text" placeholder="输入关键词搜索">
                    <img src="../assets/img/27.png" alt="">
                </div>
            </div>
            <!-- 内容 -->
            <div class="faculty1_content">
                <!-- 头部 -->
                <div class="faculty1_content_top">
                    <router-link to="/faculty/faculty-children/faculty1_1">
                        <img :src="img[0]" alt="" v-if="show == 0" @click=" show = 0">
                        <img :src="img[1]" alt="" v-else @click="show=0">
                    </router-link>
                   <router-link to="/faculty/faculty-children/faculty1_2">
                        <img :src="img[2]" alt="" v-if="show == 1" @click=" show = 1">
                        <img :src="img[3]" alt="" v-else @click=" show = 1">
                    </router-link>
                    <router-link to="/faculty/faculty-children/faculty1_3">
                        <img :src="img[4]" alt="" v-if="show == 2" @click=" show = 2">
                        <img :src="img[5]" alt="" v-else @click=" show = 2">
                    </router-link>
                </div>
                <router-view></router-view>
            </div>
        </div>
</template>
<style lang="scss" scoped>
@import "../assets/style/faculty1.scss";
</style>