<template>
    <section class="praise">
       <div class="centerBox absolute">
            <header class="chuck_w center_nav overflow">
                <ul class="nav_in_list pull-left font-sm">
                    <li class="pull-left pointer active"><p>赞过的微博</p></li>
                </ul>
            </header>
            <CenterBody></CenterBody>
        </div>
        <div class="right_side absolute">
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
            return {}
        },
        components: {
            CenterBody
        },
        
        methods: {}
    }
</script>
