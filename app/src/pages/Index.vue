<template>
  <div v-on:click="searchBlur()">
    <Top v-bind:active.sync="active" v-bind:search_text.sync="search_text"></Top>
	    <div class="main_content">
	    	<div class="content relative">
	    		<left></left>
          <router-view></router-view>
	    	</div>
	    </div>
  </div>
</template>


<script>
import Top from './Top'
import Left from './Left'

export default {
  name: 'index',
  data () {
    return {
      searchMax: null,
      searchDom: null,
      active: null,
      search_text: null
    }
  },
  components: {
    Top,
    Left
  },
  methods: {
    searchBlur () {
      let data = '大家都在搜：' + this.searchMax
      this.searchDom.setAttribute('placeholder', data)
      this.active = false
      this.search_text = ''
    }
  }
}
</script>


