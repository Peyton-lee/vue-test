<template>
    <div class="center_nav overflow radius">
        <ul class="nav_in_list pull-left font-sm">
            <li v-for="(v,$index) in nav" class="pull-left pointer" v-bind:class="{ active: navActive($index) }" @click="changeAct($index)">
            <p>{{ v }}</p>
            </li>
        </ul>
        <div class="search_line pull-right relative">
            <input type="text" placeholder="搜索我关注人的微博">
        </div>
    </div>
</template>

<script>
export default {
  name: 'centerNav',
  data () {
    return {
      index: 0,
      nav: ['全部', '图片', '话题']
    }
  },
  methods: {
    navActive (i) {
      return this.index === i
    },
    changeAct (i) {
      this.index = i
    }
  }
}
</script>