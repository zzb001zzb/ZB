<script setup>
const faculty1_2 = [
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动,热情迎世赛",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动,热情迎世赛",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动,热情迎世赛",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动,热情迎世赛",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动,热情迎世赛",text:"2022-02-17",img1:"/src/assets/img/41.png"},
    {img:"/src/assets/img/14.png",p:"热情迎世赛，一起想未来：山东成员启动时赛倒计时200天特色活动,热情迎世赛",text:"2022-02-17",img1:"/src/assets/img/41.png"}
]
</script>
<template>
    <div class="box">
        <div v-for="item in faculty1_2" :key="item" class="faculty1_2">
            <div>
                <img :src="item.img" alt="">
            </div>
            <div class="div2">
                <p>{{ item.p }}</p>
                <div>
                     <img :src="item.img1" alt="">
                     {{ item.text }}
                </div>
            </div>
        </div>
        <div class="more">
            查看更多<img src="../assets/img/8.png" alt="">
        </div>
    </div>
</template>
<style scoped lang="scss">
@media only screen and (min-width:1200px) {
.faculty1_2{
    width: 90%;
    margin: 0 auto;
    position: relative;
    div{
        &:nth-child(1){
            z-index: 10;
            width: 30%;
            background-color: #f5f5f5;
            text-align: center;
            margin-top: 20px;
            padding: 20px;
           
            img{
                width: 140px;
                height: 140px;
            }
        }
       
    }
    .div2{
        background-color: white;
            z-index: 99;
            width: 64%;
            height: 90px;
            position: absolute;
            top: 30px;
            right: 0;
            box-shadow: 0 0 10px rgba(128, 128, 128, 0.5); 
            padding: 20px 10px 10px 20px;
            p{                  
                font-size: 16px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;

            }
            div{
                display: flex;
                align-content: center;
                font-size: 14px;
                color: #ccc;
                margin-top: 20px;
                    img{
                        width: 20px;
                        height: 20px;
                        margin-right: 4px;
                    }

            }
        }
}
.more{
    width: 100px;
    margin: 0 auto;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #ccc;
    margin-top: 40px;
    margin-bottom: 100px;
    img{
        width: 16px;
        height: 16px;
        margin-left: 6px;
    }
}
}
@media only screen and (max-width:1200px) {
    .box{

        padding-bottom: 10px;
    }
    .faculty1_2{
    width: 100%;
    margin: 0 auto;
    position: relative;
    div{
        &:nth-child(1){
            width: 30%;
            background-color: #f5f5f5;
            text-align: center;
            margin-top: 20px;
            padding: 20px;
            z-index: 10;
            img{
                width: 100px;
                height: 100px;
            }
        }
       
    }
    .div2{
        background-color: white;
            z-index: 99;
            width: 54%;
            height: 68px;
            position: absolute;
            top: 26px;
            right: 0;
            box-shadow: 0 0 10px rgba(128, 128, 128, 0.5); 
            padding: 10px;
            padding-left: 20px;
            p{                  
                font-size: 16px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;

            }
            div{
                display: flex;
                align-content: center;
                font-size: 14px;
                color: #ccc;
                margin-top: 10px;
                // margin-bottom: 10px;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-right: 4px;
                    }

            }
        }
}
.more{
    width: 100px;
    margin: 0 auto;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #ccc;
    margin-top: 40px;
    margin-bottom: 100px;
    img{
        width: 16px;
        height: 16px;
        margin-left: 6px;
    }
}
}
</style>