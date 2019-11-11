<template>
  <div class="entrance">
    <div class="entrance-wrap">
      <div class="logo">
        <img src="@/assets/logo-x2.png" height="48" width="592" alt="logo" />
      </div>

      <!-- 弹框 -->
      <Dialogs v-if="visible" @close='visible = false'></Dialogs>

      <div class="member" v-else>
        <div @click="visible = true"></div>
      </div>

      <div class="copy" :class="visible?'mt-100':''">Copyright &copy; i Wealth Management Limited. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import Dialogs from '@/components/dialogs'
export default {
  data () {
    return {
      visible: false
    }
  },
  components: {
    Dialogs
  }
}
</script>

<style lang="scss" scoped>
.entrance {
  position: relative;
  min-width: 100%;
  height: 100%;
  background: #001332;
  .entrance-wrap {
    width: 980px;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 150px auto;
    .logo {
      text-align: center;
      padding: 28px 0 0 0;
    }
    .member {
      text-align: center;
      margin: 100px 0 0;
      div{
        width: 406px;
        height: 66px;
        margin: 0 auto;
        cursor: pointer;
        background-image: url('../../assets/btn_off.png');
        transition: 1s;
      }
      div:hover{
        background-image: url('../../assets/btn_on.png');
        transition: 1s;
      }
    }
    .copy {
      text-align: center;
      font-style: normal;
      font-size: 11px;
      margin-top: 20px;
      color: #6b7380;
    }
    .mt-100{
      margin-top: 100px;
    }
  }
}
</style>
