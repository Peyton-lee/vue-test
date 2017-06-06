<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">LOGIN IN</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号" v-focus="focus"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" :loading="logining" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { mapActions } from 'vuex'
    
  export default {
    data() {
      return {
        logining: false,
          
        ruleForm: {
          account: '',
          checkPass: ''
        },
          
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
            
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
          
        checked: true,
        focus: false
      };
    },
      
    created() {
        this.focus = true
    },
      
    methods: {
         login() {
            this.$refs.ruleForm.validate(async (valid) => {
                if (!valid)
                    return
                this.logining = true
                    
                try {
                    const response = await (this.$HTTP.login(this.ruleForm.account, this.ruleForm.checkPass))
                    if (0 == response.data.code) {
                        this.loginAction(this.ruleForm.account)
                        this.$router.push({ path: '/index/default' })
                    }
                } catch (err) {
                    if (err instanceof Error) {
                        this.$notify.error({
                            title: '错误',
                            message: '系统出错'
                        })
                    }
                }
                
                this.logining = false
            })
        },
        
        ...mapActions({
            loginAction: 'LOGIN' // this.$store.dispatch('LOGIN')
        })
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 150px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    /*box-shadow: 0 0 25px #cac6c6;*/
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>