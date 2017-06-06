<template>
    <section class="collection">
       <div class="centerBox absolute">
            <header class="coll_header chuck_w">
                <span class="coll_nav on"><label>我的收藏</label> (共15条)</span>
                <span class="coll_nav"><label>热门收藏</label></span>
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
        }
    }
</script>
