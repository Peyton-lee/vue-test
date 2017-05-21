<template>
  <div class="centerBox">
   
     <!------------- 微博内容 start ------------->
     <div class="blog relative" v-for="(v,$index) in msgList">
        <div class="blog_top overflow">
           <div class="info pull-left" @mouseover="showUserInfo($event,$index)" @mouseleave="hideUserInfo">
               <img :src="v.head" width="50" height="50" alt="" class="pointer">
           </div>
           <div class="infoTwo pull-left">
               <h4><span class="pointer">{{ v.name }}</span></h4>
               <p>{{ v.time }}</p>
               <div class="WB_content">
                   {{ v.body.content }}
                   <p v-if="v.type==2"><img :src="v.body.img" alt=""></p>
               </div>
           </div>
         </div>
         <div class="blog_bottom overflow">
             <div class="cont_list pointer">
                 <a href="javascript:;"><i class="fa fa-share-square-o" aria-hidden="true"></i>{{ v.body.relay}}</a>
                 <span class="act"><i></i><em></em></span>
             </div>
             <div class="cont_list pointer">
                 <a href="javascript:;"><i class="fa fa-heart-o" aria-hidden="true"></i>{{ v.body.collect}}</a>
                 <span class="act"><i></i><em></em></span>
             </div>
             <div class="cont_list pointer" @click="tabCommon($event),$index">
                 <a href="javascript:;"><i class="fa fa-commenting-o" aria-hidden="true"></i>{{ v.body.comment}}</a>
                 <span class="act"><i></i><em></em></span>
             </div>
             <div class="cont_list pointer">
                 <a href="javascript:;"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{{ v.body.like}}</a>
                 <span class="act"><i></i><em></em></span>
             </div>
         </div>
         <div class="mark absolute">
             <i aria-hidden="true" class="fa fa-angle-down" @click="showStp($event,$index)"></i>
                 <div class="absolute scope_list_box animated pointer" v-bind:class="{ fadeInDown: v.key, hide: !v.key }">
                 <div class="scope_list"><span class="text">屏蔽</span></div> 
                 <div class="scope_list"><span class="text">取消关注</span></div> 
             </div>
         </div>
         <common :index.sync="$index"></common>
     </div>
     <!------------- 微博内容 end ------------->
     
     <!------------- 个人信息框 start ------------->
     <div class="infoAlert absolute animated" :style="{top: infoTop}" :class="{fadeInDown:infoShow && side,fadeInUp:infoShow && !side}" v-if="infoShow" @mouseover="showUserInfoTwo" @mouseleave="hideUserInfo">
         <div class="infoCheck" v-bind:style="{backgroundImage : 'url(' + hover.bg + ')'}">
             <div class="infoCheckHead"><img class="pointer" :src="hover.head" alt="" width="50" height="50" :alt="hover.name"></div>
             <div class="mask text-center white">
                 <div class="name">
                     <a class="W_f14 font-16 white" target="_blank" :href="hover.link" :title="hover.name" :uid="hover.uid">{{hover.name}}</a>
    		     </div>
                 <div class="intro W_autocut font-12">
                     <span title="世界这么大我想去看看❤️">简介：{{hover.intro}}</span>
    	         </div>
             </div>
         </div>
         <div class="nc_content text-center">
             <div class="c_content font-12 font-bold">
                 <span class="W_fb">关注：{{hover.attent}}</span>
                 <span class="W_fb">粉丝：{{hover.fans | _number}}</span>
                 <span class="W_fb">微博：{{hover.wb}}</span>
             </div>
             <p class="addr font-12">{{hover.addr}}</p>
             <div class="c_btnbox text-center">
                 <span class="W_btn font-12"><i class="fa fa-plus" aria-hidden="true"></i>关注他</span>
                 <span class="W_btn font-12">私 信</span>
             </div>
         </div>
         <div class="nc_foot">
             <p><b>关系</b></p>
             <div class="item font-12">
                 谁还关注了他 ( {{hover.friend.length}} )： <span><a href="#">{{hover.friend | joins( '、' )}}</a></span>
             </div>
         </div>
         <div class="W_layer_top" v-if="infoAddr">
         	   <i></i><em></em>
         </div>
         <div class="W_layer_bottom" v-if="!infoAddr">
         	   <i></i><em></em>
         </div>
     </div>
     <!------------- 个人信息框 end ------------->
  </div>
</template>

<style type="text/css">
  .animated{
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
  }
  .fadeInDown,.fadeInUp{
  	animation-delay: .1s;
  	-webkit-animation-delay: .1s;
  }
  @keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}  @keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}
</style>

<script>
import Common from './Common'
import $ from 'jquery'
export default {
  name: 'CenterBody',
  data () {
    return {
      active: false,
      showNum: 0,
      infoTop: null,
      infoShow: false,
      infoAddr: null,
      show: false,
      side: null,
      time: null,
      tab: null,
      hover: {
        gid: 10,
        bg: '/static/img/043_m.jpg',
        head: '/static/img/head.jpg',
        name: '旧人在哪i',
        link: 'http://www.baidu.com',
        intro: '世界这么大我想去看看❤️',
        attent: 10000,
        fans: 145000,
        wb: 24624,
        addr: '北京',
        friend: ['傻逼一', '傻逼二', '傻逼三']
      },
      msgList: [{
        'gid': 10,
        'bg': '/static/img/043_m.jpg',
        'head': '/static/img/head.jpg',
        'name': '旧人在哪i',
        'intro': '世界这么大我想去看看❤️',
        'time': '今天 07:43',
        'type': 2,
        'key': false,
        'body': {
          'content': '今天好无聊今天好无聊今天好无聊今天好无聊今天好无聊今天好无聊今天好无聊今天好无聊今天好无聊今天好无聊。',
          'like': 101, // 点赞
          'relay': 100, // 转发
          'comment': 100, // 评论
          'collect': 100, // 收藏
          'img': '/static/img/bg2.jpg'
        }
      }, {
        'head': '/static/img/head.jpg',
        'name': '培彬_同學',
        'time': '今天 06:33',
        'type': 1,
        'key': false,
        'body': {
          'content': '今天天气好晴朗',
          'like': 101,
          'relay': 100,
          'comment': 100,
          'collect': 100
        }
      }]
    }
  },
  components: {
  	Common
  },
  mounted () {
    window.addEventListener('click', this.scopeBlur)
  },
  methods: {
    showStp (e, index) {
      e.stopPropagation()
      this.msgList[index].key = true
    },
    scopeBlur () {
      for (var i = 0; i < this.msgList.length; i++) {
        this.msgList[i].key = false
      }
    },
    showUserInfo (e, index) {
      this.infoShow = true
      clearTimeout(this.timer)
      if (e.clientY > 291) {
        this.infoAddr = false
        this.infoTop = e.pageY - e.offsetY - (291 + 65 + 7) + 'px'
        this.side = true
      } else {
        this.infoAddr = true
        this.infoTop = e.pageY - e.offsetY - 65 + (50 + 7) + 'px'
        this.side = false
      }
    },
    showUserInfoTwo () {
      clearTimeout(this.timer)
      this.show = true
      this.infoShow = true
    },
    hideUserInfo () {
      let _this = this
      this.timer = setTimeout(function () {
        _this.infoShow = false
      }, 400)
    },
    tabCommon (t, index) {
    	$(t.currentTarget).toggleClass('on')
    	$(t.currentTarget).parents('.blog').find('.commonBox').toggle()
    }
  }
}
</script>