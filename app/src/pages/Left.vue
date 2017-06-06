<template>
  <div class="left_side absolute" v-bind:style="{ top : dom_top}">
     <div class="left_link">
         <router-link to="/index/default" class="font-weight">首页</router-link>
         <router-link to="/index/collection" class="font-weight">我的收藏</router-link>
         <router-link to="/index/praise" class="font-weight">我的赞</router-link>
     </div>
     <p class="left_line"></p>
     <div class="left_link">
         <router-link to="/index/hotWB" class="font-weight">热门微博</router-link>
         <router-link to="/index/hotVideo" class="font-weight">热门视频</router-link>
     </div>
     <p class="left_line"></p>
     <div class="left_link">
         <a href="javascript:;" class="with_icon"><i class="fa fa-user" aria-hidden="true"></i>好友圈</a>
         <a href="javascript:;" class="with_icon"><i class="fa fa-eye" aria-hidden="true"></i>特别关注</a>
         <a href="javascript:;" class="with_icon"><i class="fa fa-circle" aria-hidden="true"></i>同事</a>
         <a href="javascript:;" class="with_icon"><i class="fa fa-circle" aria-hidden="true"></i>友</a>
         <a href="javascript:;" class="with_icon"><i class="fa fa-circle" aria-hidden="true"></i>名人明星</a>
         <a href="javascript:;" class="with_icon"><i class="fa fa-circle" aria-hidden="true"></i>同学</a>
         <a v-if="active" href="javascript:;" class="with_icon"><i class="fa fa-smile-o" aria-hidden="true"></i>群微博</a>
         <a v-if="active" href="javascript:;" class="with_icon"><i class="fa fa-heart-o" aria-hidden="true"></i>悄悄关注</a>
     </div>
     <div class="text-center">
         <button type="button" class="btn btn-sm showBtn white" @click="showTip">{{ text }}</button>
     </div>
     <p class="left_line"></p>
  </div>
</template>

<script>
export default {
  name: 'left',
    
  data () {
    return {
      active: false,
      dom_top: 0,
      text: '展开',
      index: 1
    }
  },
    
  mounted () {
      window.addEventListener('scroll', this.handleScroll)
  },
  
  computed: {
  },
    
  methods: {
      showTip (e) {
          this.active ? this.text = '展开' : this.text = '收起'
          this.active = !this.active
      },
      
      handleScroll (e) {
         let scrollTop = e.currentTarget.scrollY // scrollTop
         scrollTop > 15 ? this.dom_top = (scrollTop - 15) + 'px' : this.dom_top = 0
      }
  }
}
</script>