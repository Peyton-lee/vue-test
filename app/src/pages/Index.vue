<template>
  <div v-on:click="searchBlur()">
    <Top v-bind:active.sync="active" v-bind:search_text.sync="search_text"></Top>
    <div class="main_content">
        <div class="content relative">
            <left></left>
            <router-view></router-view>
        </div>
        <div class="scrollTip fixed font-16 pointer" v-if="SCROLL_TIP_CTL" @click="scrollToTop">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>        
        </div>
        <div class="chatSm fixed" @click="showChat" v-if="!show">
            <i class="fa fa-envelope fold_icon font-20" aria-hidden="true"></i>
            <span class="font-14">私信聊天</span>
            <span class="wchat_btn pull-right"><i class="fa fa-commenting font-20" aria-hidden="true"></i></span>
        </div>
        <Chat v-if="show"></Chat>
    </div>
  </div>
</template>


<script>
import Top from './Top'
import Left from './Left'
import Chat from './Chat'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'index',
  data () {
      return {
        searchMax: null,
        searchDom: null,
        active: null,
        search_text: null,
        show: false
      }
  },
    
  components: {
      Top,
      Left,
      Chat
  },
  
  mounted() {
      window.addEventListener('scroll', this.handleScroll)
  },  
    
  computed: {
      ...mapGetters([
          'SCROLL_TIP_CTL'
      ])
  },
    
  methods: {
      searchBlur() {
          let data = '大家都在搜：' + this.searchMax
          this.searchDom.setAttribute('placeholder', data)
          this.active = false
          this.search_text = ''
      },
      
      handleScroll(e) {
         e.currentTarget.scrollY > 0 ? this.ScrollAction(true) : this.ScrollAction(false)
      },
      
      scrollToTop() {
          let t =  setInterval(() => {
              document.body.scrollTop == 0 ? clearInterval(t) : (document.body.scrollTop -= 30)
          }, 10)
      },
      
      showChat() {
          this.show = true
      },
      
      ...mapActions({
          ScrollAction: 'SHOW_SCROLL' 
      })
  }
}
</script>


