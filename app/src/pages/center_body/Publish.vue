<template>
  <div class="publish radius">
  <img src="/static/img/nuw.png" alt="">
  <textarea name="" id="publish_body" v-bind:class="{ active: isActive }" @focus="change(true)" @blur="change(false)"></textarea>
  <div class="push_line">
      <a href="javascript:;" id="emotion"><i class="fa fa-smile-o" aria-hidden="true"></i>表情</a>
      <a href="javascript:;"><i class="fa fa-picture-o" aria-hidden="true"></i>图片</a>
      <a href="javascript:;"><i class="fa fa-hashtag" aria-hidden="true"></i>话题</a>
      <button type="button" class="btn btn-orange pull-right" id="pushBtn">发 布</button>
      <div class="pull-right scope pointer font-sm relative" @click="chooseScope">{{ scopeText }}<i class="fa fa-angle-down" aria-hidden="true"></i>
      <div class="absolute scope_list_box animated" v-bind:class="{ fadeInDown: scopeActive, hide: !scopeActive }">
          <div class="scope_list" @click="addScope">
              <i class="fa fa-futbol-o" aria-hidden="true"></i>
              <span class="text">公开</span>
          </div>
          <div class="scope_list" @click="addScope">
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              <span class="text">朋友圈</span>
          </div>
          <div class="scope_list" @click="addScope">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <span class="text">仅自己可见</span>
          </div>
      </div>
      </div>
  </div>
  </div>
</template>

<script>
import $ from 'jquery'
import qqFace from '../../own/jquery.qqFace'
export default {
  name: 'publish',
  data () {
    return {
      isActive: false,
      scopeActive: false,
      scopeText: '公开'
    }
  },
  mounted () {
    qqFace($)
    window.addEventListener('click', this.scopeBlur)
    
    //表情插件Init
    $('#emotion').qqFace({
    	id: 'faceBox',
    	assign: 'publish_body',
    	path: '/static/img/emotions/'
    })
  },
  methods: {
    change (t) {
      this.isActive = t
    },
    chooseScope (e) {
      e.stopPropagation()
      this.scopeActive = true
    },
    scopeBlur () {
      this.scopeActive = false
    },
    addScope (e) {
      e.stopPropagation()
      var t = e.currentTarget.lastChild.innerHTML // 获取最后一个子节点内容
      this.scopeActive = false
      this.scopeText = t
    }
  }
}
</script>