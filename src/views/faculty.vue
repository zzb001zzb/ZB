<script setup>
    import top from "../components/top.vue"
    import bottom from "../components/bottom.vue"
</script>
<template>
    <div>
        <top></top>
        <div class="faculty_flex">
            <div class="div1">
                <div><span>快速导航</span>
                    <span>Quick navigation</span>
                </div>
                <div>
                    <p><router-link to="/faculty/faculty-children">院部简介</router-link></p>
                </div>
            </div>
            <router-view></router-view>
        </div>
        <bottom></bottom>
    </div>
</template>
<style lang="scss" scoped>
@import "../assets/style/faculty.scss";
</style>