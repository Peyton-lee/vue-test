<template>
     <div class="commonBox">
 		<div class="WB_feed_publish relative">
 		  	<div class="WB_face absolute"><img src="/static/img/head.jpg" width="30" height="30" alt="" /></div>
 		  	<div class="WB_publish">
	  			<p><textarea class="radius WB_publish_input" name="" rows="" cols="" :id="'WB_publish_input'+index"></textarea></p>
	  			<div class="opt text-right">
	  				<span :id="'c_emotion'+index" class="text-left pointer c_emotion"><i class="fa fa-smile-o"></i></span>
	  				<div><button class="btn btn-sm btn-orange">评 论</button></div>
	  			</div>
 		  	</div>
 		</div>
 		<div class="WB_feed_common relative">
 			<div class="WB_face absolute"><img src="/static/img/head.jpg" width="30" height="30" alt="" /></div>
 			<div class="WB_common_list">
 				<div class="list_con"><a href="" class="font-12 pull-left">培斌灬同學</a><img width="14" src="/static/img/vip_icon_zuanshi5_4.png" alt="" /></div>
 				<p class="time font-12 note">58分钟前</p>
 				<div class="common_text font-12 radius">
 					黑边依旧感人啊，能不能把黑边做成跟三星系的<img src="/static/img/emotions/1.gif" alt="" />
 				</div>
 			</div>
 		</div>
     </div>
</template>

<script>
import $ from 'jquery'
import qqFace from '../../own/jquery.qqFace'
export default {
  name: 'common',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['index'],
  mounted () {
  	qqFace($)
  	//表情插件Init
    $('#c_emotion'+this.index+'').qqFace({
    	id : 'faceBox'+this.index+'',
    	assign: 'WB_publish_input'+this.index+'',
    	path: '/static/img/emotions/'
    })
  }
}
</script>