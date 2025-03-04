<script setup>
import top from "../components/top.vue"
import bottom from "../components/bottom.vue"
import {onMounted, ref} from "vue"
import{getnewList} from "@/api"
// import { el } from "element-plus/es/locale"
const arr1 = ref()
const index = ref(0)
const arr = ref([])
const num = ref(1)
onMounted(()=>{
    getnewList().then(res=>{
        arr1.value = res.data.list;
        arr.value[0] = arr1.value[0]
        console.log(arr.value[0],'arr')
    })
    .catch(ses =>{
        console.log(ses);
    })
})
console.log(arr1.value,'arr1')
console.log(arr.value,'arr')
const faculty = [
    {text1:"传承八一精神凝聚奋进力量 服务第一第二党支部开展主题 服务第一第二党支部开展主题……",img:new URL('../assets/img/10.png',import.meta.url).href,time:"222-11-02"},
    {text1:"传承八一精神凝聚奋进力量 服务第一第二党支部开展主题 服务第一第二党支部开展主题……",img:new URL('../assets/img/10.png',import.meta.url).href,time:"222-11-02"},
    {text1:"传承八一精神凝聚奋进力量 服务第一第二党支部开展主题 服务第一第二党支部开展主题……",img:new URL('../assets/img/10.png',import.meta.url).href,time:"222-11-02"},
]
const political = [
    {text1:"28",text2:"2019-01",text3:"中餐学院2022级新生军训圆满闭营,中餐学院2022级新生军训.…"},
    {text1:"28",text2:"2019-01",text3:"中餐学院2022级新生军训圆满闭营,中餐学院2022级新生军训.…"},
    {text1:"28",text2:"2019-01",text3:"中餐学院2022级新生军训圆满闭营,中餐学院2022级新生军训.…"},
    {text1:"28",text2:"2019-01",text3:"中餐学院2022级新生军训圆满闭营,中餐学院2022级新生军训.…"}
]
const skill = [
    {img:new URL('../assets/img/15.png',import.meta.url).href},
    {img:new URL('../assets/img/15.png',import.meta.url).href},
    {img:new URL('../assets/img/15.png',import.meta.url).href}
]
const children= [
    {img:new URL('../assets/img/20.png',import.meta.url).href,p:"迎新晚会现代舞"},
    {img:new URL('../assets/img/22.png',import.meta.url).href,p:"运动会"},
    {img:new URL('../assets/img/20.png',import.meta.url).href,p:"运动会全景"},
    {img:new URL('../assets/img/22.png',import.meta.url).href,p:"才艺展示"}

]
const frendlly = [
    {li:"友情链接"},
    {li:"中华人民共和国教育部"},
    {li:"山东教育厅"},
    {li:"山东省科学技术厅"},
    {li:"中国高职专教育网"},
    {li:"山东省科学技术厅"},
    {li:"中国高职专教育网"}
]


const jia = ()=>{
    index.value++;
    arr.value[0] = arr1.value[index.value];
    if(index.value==2){ 
        index.value=-1 
    }

   if(num.value == 3){
    num.value = 1
   }else{
    num.value++
   }
}
const jian = ()=>{
 if(index.value>0){
  index.value--;
  arr.value[0] = arr1.value[index.value]
 }else{  index.value = 2;
    arr.value[0] = arr1.value[index.value]
 }
 if(num.value == 0){
    num.value = 2
   }else{
    num.value--
   }
}
</script>

<template>
    <div>
        <top></top>
        <!-- 院部新闻 -->
        <div class="faculty">
            <!-- 头部 -->
            <div class="faculty_top">
                <p>院部新闻</p>
                <p>查看更多<img src="../assets/img/8.png" alt=""></p>
            </div>
            <!-- 中间 -->
            <div class="faculty_content" v-for="item in arr" :key="item.index">
                <div class="faculty_content_left">
                    <img :src="item.image" alt="">
                </div>
                <div class="faculty_content_right">
                    <p class="p1">{{ item.title }}</p>
                    <div class="div1">
                        <p></p>
                        <span>{{item.create_time}}</span>
                    </div>
                    <p class="p2">{{ item.abstract}}</p>
                    <div class="div2">
                        <div>
                            <img src="../assets/img/43.png" alt="" @click="jian">
                            <img src="../assets/img/44.png" alt="" @click="jia">
                        </div>
                        <div>
                            <span>{{ num }}</span><p>/3</p>
                        </div>
                    </div>
                </div> 
            </div>
            <!-- 下面 -->
            <div class="faculty_bottom">
                <div v-for="item in faculty" :key="item">
                    <p>{{ item.text1 }}</p>
                    <p><img :src="item.img" alt="" mode="widthFix" />{{ item.time }}</p>
                </div>
            </div>
        </div>
        <!-- 党团建设 -->
        <div class="political">
            <div class="political_content">
                <div class="political_left">
                    <div class="faculty_top">
                        <p>党团建设</p>
                        <p>查看更多<img src="../assets/img/8.png" alt=""></p>
                    </div>
                    <div v-for="item in political" :key="item" class="political_left_div">
                        <ul>
                            <li>{{item.text1}}</li>
                            <li>{{item.text2}}</li>
                        </ul>
                        <p>{{ item.text3 }}</p>
                    </div>
                </div>
                <img src="../assets//img//11.png" alt="" mode="widthFix">
                <div class="political_left1">
                    <div class="faculty_top">
                        <p>校企合作</p>
                        <p>查看更多<img src="../assets/img/8.png" alt=""></p>
                    </div>
                    <div v-for="item in political" :key="item"  class="political_left_div">
                        <p>{{ item.text3 }}</p>
                        <ul>
                            <li>{{item.text1}}</li>
                            <li>{{item.text2}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 技能大赛 -->
        <div class="skill">
            <div class="faculty_top">
                <p>技能大赛</p>
                <p>查看更多<img src="../assets/img/8.png" alt=""></p>
            </div>
            <div class="skill_content">
                <el-carousel :interval="4000" type="card" height="260px">
                    <el-carousel-item v-for="item in skill" :key="item">
                        <div class="aaa">
                           <img :src="item.img" alt=""/> 
                           <div>
                                <p>2021-09-10</p>
                                <p>我院参加全省技工院校学生自主管理工……</p>
                                <img src="../assets/img/12.png" alt="">
                           </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="skill_content2">
                <div class="aaa" v-for="item in skill" :key="item">
                    <img :src="item.img" alt=""/> 
                    <div>
                        <p>2021-09-10</p>
                        <p>我院参加全省技工院校学生自主管理工……</p>
                        <img src="../assets/img/12.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 教研成果 -->
        <div class="theme">
			<div class="news_top">
				<p>JIAO YAN CHENG GUO</p>
				<p>教研成果</p>
			</div>
			<div class="theme_content">
				<div class="theme-card1">
					<div class="theme-top">
						<p class="theme-title1">划重点!一图读懂山东<br />城院“十四五”发<br />展规划</p>
						<p class="theme-title2">山东城院“五心工程”温暖校园</p>
					</div>
					<div class="theme-bottom">
						<p class="theme-text1">3月20日下午，烟台市高新区<br />管委副主任李如鹏、市教育局<br />高新区分局...</p>
						<p class="theme-text2">3月24日，一场别开生面的“<br />平台通过网络直播的形式拉<br />开帷幕..</p>
					</div>
                    <div class="theme_none1"><img src="../assets/img/10.png" alt="">2022-11-04</div>
				</div>
				<div class="theme-card1">
					<div class="theme-top">
						<p class="theme-title1">划重点!一图读懂山东<br />城院“十四五”发<br />展规划</p>
						<p class="theme-title2">山东城院“五心工程”温暖校园</p>
					</div>
					<div class="theme-bottom">
						<p class="theme-text1">3月20日下午，烟台市高新区<br />管委副主任李如鹏、市教育局<br />高新区分局...</p>
						<p class="theme-text2">3月24日，一场别开生面的“<br />平台通过网络直播的形式拉<br />开帷幕..</p>
					</div>
                    <div class="theme_none1"><img src="../assets/img/10.png" alt="">2022-11-04</div>
				</div>
				<div class="theme-card1">
					<div class="theme-top">
						<p class="theme-title1">划重点!一图读懂山东<br />城院“十四五”发<br />展规划</p>
						<p class="theme-title2">山东城院“五心工程”温暖校园</p>
					</div>
					<div class="theme-bottom">
						<p class="theme-text1">3月20日下午，烟台市高新区<br />管委副主任李如鹏、市教育局<br />高新区分局...</p>
						<p class="theme-text2">3月24日，一场别开生面的“<br />平台通过网络直播的形式拉<br />开帷幕..</p>
					</div>
                    <div class="theme_none1"><img src="../assets/img/10.png" alt="">2022-11-04</div>
				</div>
				<div class="theme-card1">
					<div class="theme-top">
						<p class="theme-title1">划重点!一图读懂山东<br />城院“十四五”发<br />展规划</p>
						<p class="theme-title2">山东城院“五心工程”温暖校园</p>
					</div>
					<div class="theme-bottom">
						<p class="theme-text1">3月20日下午，烟台市高新区<br />管委副主任李如鹏、市教育局<br />高新区分局...</p>
						<p class="theme-text2">3月24日，一场别开生面的“<br />平台通过网络直播的形式拉<br />开帷幕..</p>
					</div>
                    <div class="theme_none1"><img src="../assets/img/10.png" alt="">2022-11-04</div>
				</div>



			</div>
		</div>
        <!-- 学生动态 -->
        <div class="children">
            <div class="faculty_top">
                <p>学生动态</p>
                <p>查看更多<img src="../assets/img/8.png" alt=""></p>
            </div>
            <!-- 内容 -->
            <div class="children_content">
                <div  class="children_content_img1">
                    <img src="../assets/img/19.jpg" alt="">
                    <div>
                        <p>迎新晚会●独唱</p>
                        <p><router-link to="">更多+</router-link></p>
                    </div>
                </div>
                <div class="div2">
                    <div v-for="item in children" :key="item"> 
                        <img :src="item.img" alt="">
                        <p>{{ item.p }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 友情链接 -->
        <ul class="frendlly">
            <li v-for="item in frendlly" :key="item">
                {{ item.li }}
            </li>
        </ul>
        <bottom></bottom>
    </div>
</template>

<style scoped lang="scss">
@import "/src//assets/style/index.scss";
</style>