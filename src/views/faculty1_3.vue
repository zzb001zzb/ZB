<script setup>
const faculty1_3 = [
    {li:"● 山东成员召开公文写作培训会",time:"2021-10-19"},
    {li:"● 关于报送2022年部门重点工作和日常工作的通知",time:"2021-10-19"},
    {li:"● 速读年度成员年度工作报告",time:"2021-10-19"},
    {li:"● 中国共产党山东省城市服务技师学院第一届委员会第五次全体会议公报",time:"2021-10-19"},
    {li:"● 山东城院召开2022年度工作会议",time:"2021-10-19"},
    {li:"● 关于召开3月份月度调度会的通知",time:"2021-10-19"},
]
</script>
<template>
    <div class="faculty1_3">
        <ul>
            <li v-for="item in faculty1_3" :key="item" class="li">
                <span>{{ item.li }}</span>
                <span>{{ item.time }}</span>
            </li>
        </ul>
        <div class="more">
            查看更多<img src="../assets/img/8.png" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
@media only screen and (min-width:1200px) {
    ul{
        width: 94%;
        margin: 0 auto;
        padding: 0;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style: disc;
            // display: block;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            padding-top: 10px;
            &:hover{
                color: red;
            }
            span{
                display: block;
                &:nth-child(2){
                    font-size: 14px;
                    color: #ccc;
                    &:hover{
                    color: red;
                }
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
    .faculty1_3{
        padding-bottom: 10px;
    }
    ul{
        width: 94%;
        margin: 0 auto;
        padding: 0;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            padding-top: 10px;
            font-size: 14px;
            &:hover{
                color: red;
            }
            span{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                display: block;
                &:nth-child(1){
                    width: 70%;
                }
                &:nth-child(2){
                    width: 22%;
                    font-size: 12px;
                    color: #ccc;
                    &:hover{
                    color: red;
                }
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