<template>
  <div class="nav">
     <div class="nav_in">
         <div class="nav_logo text-center pointer pull-left"><img src="/static/img/WB_logo.png" alt=""></div>
         
         <!------------- 搜索 start ------------->
         <div class="nav_search pull-left relative" v-on:click.prevent="$event.stopPropagation()">
             <input type="text" id="search" v-bind:placeholder="getTop(search[0])" @focus="focus($event, search[0])"  v-bind:value="search_text" />
             <div class="search_list absolute" v-if="active">
                 <div v-for="(v,i) in search" class="search_max font-sm pointer" @click="addText(v)"><span class="num white">{{ i+1 }}</span>{{ v }}</div>
             </div>
         </div>
         <!------------- 搜索 end ------------->
         
         <!------------- 导航 start ------------->
         <div class="nav_box pull-right">
             <div class="nav_link pull-left">
                 <a href="#" class="pull-left">
                     <i class="fa fa-home" aria-hidden="true"></i>首页
                 </a>
                 <a href="#" class="pull-left">
                     <i class="fa fa-video-camera" aria-hidden="true"></i>视频
                 </a>
                 <a href="#" class="pull-left">
                     <i class="fa fa-search-plus" aria-hidden="true"></i>发现
                 </a>
                 <a href="#" class="pull-left">
                     <i class="fa fa-gamepad" aria-hidden="true"></i>游戏
                 </a>
             </div>
             <div class="sign pull-left">
                 <div class="sign_up pull-left pointer">注册</div>
                 <div class="sign_in pull-left pointer">登录</div>
             </div>
         </div>
         <!------------- 导航 end ------------->
     </div>
  </div>
</template>


<script>
export default {
  name: 'top',
  data () {
    return {
      msg: ['第一行', '第二行', '第三行', '第四行'],
      search: ['新杰狗+大杰狗', '蓝瘦香菇哥结婚', '有人越看越好看', '范冰冰爸爸', '女白领被安排相亲水泥工']
    }
  },
  props: ['active', 'search_text'],
  mounted () {
    this.$parent.searchMax = this.search[0]
    this.$parent.searchDom = document.querySelector('#search')
  },
  methods: {
    getTop (data) {
      return '大家都在搜：' + data
    },
    focus (dom, data) {
      dom.currentTarget.setAttribute('placeholder', data)
      this.$parent.active = true
    },
    addText (data) {
      this.$parent.search_text = data
      this.$parent.active = false
    }
  }
}
</script>