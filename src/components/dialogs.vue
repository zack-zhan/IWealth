<template>
  <div class="dialogs">
    <div class="title">
      <div>登錄iwealthmanagement.net</div>
      <div class="close" @click="close">×</div>
    </div>
    <div class="password">
      <div class="text">密碼</div>
      <input type="password" placeholder="請輸入密碼" v-model="password">
    </div>
    <div class="login" :class="password?'bg':''" @click="login">登錄</div>
  </div>
</template>

<script>
import { getlogin } from '@/api'
export default {
  data () {
    return {
      password: ''
    }
  },
  methods: {
    // 登录
    login () {
      if (this.password) {
        getlogin(this.password)
          .then(res => {
            if (res.resultCode === '200') {
              localStorage.setItem('accountId', res.data.accountId)
              this.$router.push('./introduction_ch')
            } else {
              this.$message.error(res.resultDesc)
            }
          })
      }
    },
    // 发送关闭方法
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialogs{
  width:540px;
  height:268px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 10px 0px rgba(0,0,0,0.5);
  border-radius:10px;
  margin: 0 auto;
  padding: 26px 30px;
  box-sizing: border-box;
  .title{
    color: #001432;
    font-family:PingFangSC-Semibold;
    line-height: 28px;
    position: relative;
    div:nth-child(1){
      font-size: 20px;
      font-weight:600;
    }
    div:nth-child(2){
      font-size: 16px;
    }
    .close{
      font-size: 20px;
      color: #000;
      font-weight: bold;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
  }
  .password{
    margin-top: 26px;
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid #001434;
    .text{
      font-size:20px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(0,20,50,1);
      float: left;
      margin-right: 30px;
    }
    input{
      height: 28px;
      line-height: 28px;
      outline: none;
      border: none;
      padding: 0;
      font-size: 20px;
    }

  }
  .bg{
    background: #001434 !important;
  }
  .login{
    margin-top: 40px;
    width:480px;
    height:56px;
    line-height: 56px;
    text-align: center;
    background:rgba(193,193,193,1);
    border-radius:6px;
    font-size:20px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    cursor: pointer;
  }
}
</style>
