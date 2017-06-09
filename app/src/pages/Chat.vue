<template>
    <section class="chat_box fixed">
        <aside class="WB_Chat_Aside">
            <div class="search_top">
                <el-input
                  placeholder="查找联系人"
                  icon="search"
                  v-model="input"
                  :on-icon-click="handleIconClick">
                </el-input>
            </div>
            <div class="contact_list">
                <ul>
                    <li v-for="(item,i) in list" class="font-12 pointer relative" :class="{on: li_active == i}" @click=active(i)>
                        <span class="img"><img :src="item.img" alt="" width="30" height="30"></span>
                        <span class="name">{{ item.name }}</span>
                        <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
                    </li>
                </ul>
            </div>
            <div class="contact_bottom relative">
                <i class="el-icon-setting pointer" @click=clickTip></i>
                <transition name="fade">
                    <div class="absolute scope_list_box pointer" v-if="tip">
                        <div class="scope_list"><span class="text">关闭热点提醒</span></div> 
                        <div class="scope_list"><span class="text">关闭声音提醒</span></div>
                    </div>
                </transition>
            </div>
        </aside>
        <article class="WB_Chat_Content">
            <div class="chat_title relative">
                <span class="W_autocut"><b>{{ chater.name }}</b></span>
                <span class="close font-16 absolute icon_default" @click="hideChat"><i class="fa fa-times" aria-hidden="true"></i></span>
            </div>
            <div class="chat_content">
                <div class="null text-center" v-if="msgList.length == 0">
                    <i class="fa fa-commenting" aria-hidden="true"></i>
                </div>
                <div class="bubble_mod_all" v-else>
                    <div class="bubble_mod" v-for="(v, i) in msgList" :class="{right: v.myself == 1}">
                        <div class="img">
                            <img :src="v.img" alt="" width="30" hight="30">
                        </div>
                        <div class="bubble" :class="{bulleLeft: v.myself == 0}">{{ v.text }}</div>
                    </div>
                </div>
            </div>
            <div class="chat_input">
                <div class="pull-left chat_text_input">
                    <el-input v-model="input" placeholder="按回车发送信息"></el-input>
                </div>
                <a href="javascript:;" id="emotion_chat" class="pull-right"><i aria-hidden="true" class="fa fa-smile-o"></i></a>
            </div>
        </article>
    </section>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
        input: '',
        li_active: 0,
        tip: false,
        chater: {},
        list: [
            {img: 'http://tva2.sinaimg.cn/crop.0.0.179.179.50/61ecce97tw1ednir6uqxxj2050052mx7.jpg', name: '微博小助手'},
            {img: 'http://tva2.sinaimg.cn/crop.0.0.750.750.50/669294a1jw8f093e8kkb5j20ku0ku0tl.jpg', name: '风风火火'}
        ],
        msgList: [
            {img: 'http://tva2.sinaimg.cn/crop.0.0.179.179.50/61ecce97tw1ednir6uqxxj2050052mx7.jpg', text: '这是一条消息记录', myself: 0},
            {img: 'http://tva2.sinaimg.cn/crop.0.0.750.750.50/669294a1jw8f093e8kkb5j20ku0ku0tl.jpg', text: '这是另外一条消息记录', myself: 1},
            {img: 'http://tva2.sinaimg.cn/crop.0.0.179.179.50/61ecce97tw1ednir6uqxxj2050052mx7.jpg', text: '消息记录小鸡记录我的天空为浮点数六放假拉的算法就啦啦浮点数', myself: 0},
            {img: 'http://tva2.sinaimg.cn/crop.0.0.179.179.50/61ecce97tw1ednir6uqxxj2050052mx7.jpg', text: '你的存在,我的青睐,你存在在,我的存在', myself: 0}
        ]
    }
  },
    
  mounted () {
      this.chater = this.list[0]
  },
    
  methods: {
      handleIconClick() {},
      active(index) {
          this.li_active = index
          this.chater = this.list[index]
      },
      clickTip() {
          this.tip = !this.tip;
      },
      hideChat() {
          this.$parent.show = false
      }
  }
}
</script>