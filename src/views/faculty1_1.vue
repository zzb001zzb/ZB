<script setup>
const faculty1_1 = [
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动",text:"2022-02-17",img1:"/src/assets/img/41.png"}
]
</script>
<template>
    <div class="box">
       <div class="faculty1_1">
        <div class="div1" v-for="item in faculty1_1" :key="item">
            <div>
                <img :src="item.img" alt="">
            </div>
            <div>
                <p>{{ item.p }}</p>
                <p><img :src="item.img1" alt="">
                    <span>{{ item.text }}</span>
                </p>
            </div>
            </div> 
        </div>
        <div class="more">
            查看更多<img src="../assets/img/8.png" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "/src/assets/style/faculty1_1.scss";
</style>