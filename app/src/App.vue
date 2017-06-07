<template>
  <div id="app">
		<transition name="opacity"
		            mode="out-in">
            <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
    
  data () {
      return {
      }
  },
    
  computed: mapState([
      'abc'
  ]),
    
  mounted () {
//      this.log("gg")
//      console.log(this.$store.state.abc)
//      this.$store.commit('show')
//      console.log(this.$store.state.abc)
//      this.$store.commit('showTest', 'haha')
//      this.$HTTP.login().then((data) => {}, (data) => {
//          console.log('失败了')
//      })
  }
}
</script>
<style lang="scss">
    @import 'static/css/index';
</style>

