<template>
    <section class="collection">
       <div class="centerBox absolute">
            <header class="coll_header chuck_w">
                <span class="coll_nav" :class="{on: tabActive == 1}" @click="tabActive = 1"><label>我的收藏</label><em>(共15条)</em></span>
                <span class="coll_nav" :class="{on: tabActive == 2}" @click="tabActive = 2"><label>热门收藏</label><em>(共15条)</em></span>
                <div class="search_line pull-right relative">
                    <input type="text" placeholder="搜索收藏的微博">
                </div>
            </header>
            <CenterBody></CenterBody>
        </div>
        <div class="right_side absolute">
            <div class="topicRank radius">
                <div class="title relative"><b>收藏使用小助手</b></div>
                <div class="topicList">
                    <ul>
                        <li>A：为什么要收藏微博？<br><em class="font-12">B：微博变化太快，看到好东西，还不赶快收藏下来！</em></li>
                        <li>A：为什么要给收藏的微博加标签？<br><em class="font-12">B：加标签方便日后查找，同时系统也可以根据你的喜好进行微博推荐哦！</em></li>
                    </ul>
                </div> 
            </div>
            <div class="topicRank radius">
                <div class="title relative"><b>微博意见反馈</b></div>
                <div class="topicList">
                    <ul>
                        <li>欢迎使用微博并提出宝贵建议。请点击这里提交微博意见反馈。</li>
                        <li><a href="">微博常见问题</a><br><a href="">微博客服专区</a></li>
                        <li><a href="">全国人大常委会《关于加强网络信息保护的决定》</a></li>
                    </ul>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>
import CenterBody from './center_body/CenterBody'
    export default {
        data () {
            return {
                tabActive: 1
            }
        },
        components: {
            CenterBody
        },
        
        methods: {}
    }
</script>
