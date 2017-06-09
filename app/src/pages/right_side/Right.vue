<template>
   <div class="right_side absolute" v-bind:style="{top : dom_top}">
     
     <!------------- 个人信息 start ------------->
      <div class="userInfo relative">
        <img width="100%" height="75" src="/static/img/005_s.jpg" alt="">
        <div class="headImg absolute">
            <a href="" :title="user.name"><img :src="user.img" :alt="user.name"></a>
        </div>
        <div class="userBox">
            <h4 class="text-center"><span class="pointer">{{user.name}}</span></h4>
            <div class="infoBox text-center">
                <div class="infoL">
                    <p class="font-18"><a href=""><b>{{user.attention}}</b></a></p>
                    <p class="font-12">关注</p>
                </div>
                <div class="infoL">
                    <p class="font-18"><a href=""><b>{{user.fan}}</b></a></p>
                    <p class="font-12">粉丝</p>
                </div>
                <div class="infoL">
                    <p class="font-18"><a href=""><b>{{user.wb_num}}</b></a></p>
                    <p class="font-12">微博</p>
                </div>
            </div>
        </div>
      </div>
      <!------------- 个人信息 end ------------->
      
      <!------------- 话题排行 start ------------->
      <div class="topicRank radius">
          <div class="title relative"><b>话题排行</b><span class="absolute update pointer font-12"><i class="fa fa-undo" aria-hidden="true"></i>换一换</span></div>
          <div class="topicList">
              <ul>
                  <li v-for="i in topicList"><a href="">{{i.name | topic}} <span class="pull-right">{{i.num | _number}}</span></a></li>
              </ul>
          </div>
          <a class="moreLink font-12 text-center" href="">查看更多  <i class="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
      <!------------- 个人信息 end ------------->
      <div class="topicRank radius">
          <div class="title relative"><b>广告</b></div>
          <div class="topicList text-center">
              <img src="http://wx1.sinaimg.cn/large/005MPofvly1fgdkfmhonqj305606yjrh.jpg" alt="">
          </div>
      </div>
      
      <!------------- 公告栏 start ------------->
      <div class="topicRank radius">
          <div class="title relative"><b>公告栏</b></div>
          <div class="topicList">
              <ul>
                  <li v-for="i in notice"><a :href="i.href">{{i.text | notice}}</a></li>
              </ul>
          </div>
          <a class="moreLink font-12 text-center" href="">查看更多  <i class="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
       <!------------- 公告栏 end ------------->
  </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {
      user: {
        name: '培斌灬同學',
        img: '/static/img/head.jpg',
        attention: 100,
        fan: 1000,
        wb_num: 1002
      },
      dom_top: 0,
      topicList: [{
        name: 'MIUI 8.2免费升级',
        num: 1000
      }, {
        name: '花式比心',
        num: 1024
      }, {
        name: '秀个假恩爱',
        num: 1024
      }, {
        name: '爱乐之城',
        num: 1024
      }, {
        name: '江苏卫视元宵晚会',
        num: 1024
      }, {
        name: '新春歌会',
        num: 10241024
      }, {
        name: '我们的挑战',
        num: 1024
      }, {
        name: '高校版成都',
        num: 1024
      }],
      notice: [{
        text: '全国辟谣平台',
        href: 'http://www.baidu.com'
      }, {
        text: '首都互联网协会发布坚守七条底线倡议书',
        href: 'http://www.baidu.com'
      }]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (e) {
      let scrollTop = e.currentTarget.scrollY // 滚动条高度
      scrollTop > 15 ? this.dom_top = (scrollTop - 210) + 'px' : this.dom_top = 0
    }
  }
}
</script>