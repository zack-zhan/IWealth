<template>
  <div class="container">
    <div class="header">
      <div class="header-link">｜<router-link to="/introduction" class="english">English</router-link>｜中文｜</div>
      <div class="header-wrap">
        <h1><router-link to="/"><img src="@/assets/logo-x2.png" height="48" width="592" alt="logo" /></router-link></h1>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li><router-link to="/introduction_ch">介紹</router-link></li>
        <li><router-link to="/fund_ch">基金</router-link></li>
        <li><router-link to="/report_ch">報告</router-link></li>
        <li><router-link to="/application_ch">申請表格</router-link></li>
      </ul>
    </div>
    <div class="main">
      <dl v-for="(item,index) in data" :key="index">
        <dt>{{item.title}}</dt>
        <dd v-html="item.texts[0].textContent" v-if="item.texts[0]"></dd>
      </dl>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer'
import { GetContentsById } from '@/api'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {
    Footer
  },
  mounted () {
    const obj = {
      accountId: localStorage.getItem('accountId'),
      menuId: 1
    }
    GetContentsById(obj)
      .then(res => {
        if (res.resultCode === '200') {
          this.data = res.data
          console.log(this.data, '--')
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #001332;
  .header-link {
    width: 980px;
    margin: 0 auto;
    text-align:right;
    color: gray;
    position: relative;
    top: 10px;
    .english{
      text-decoration:underline;
      color: #fff;
    }
  }
  .header-wrap {
    width: 980px;
    height: 120px;
    margin: 0 auto;
    h1 {
      text-align: center;
      padding: 44px 0 0 0;
    }
  }
}
.nav {
  height: 42px;
  background: url('../../assets/nav-bg.gif') repeat-x;
  ul {
    width: 980px;
    margin: 0 auto;
    li {
      display: inline;
      line-height: 40px;
      a {
        text-decoration: none;
        font-size: 14px;
        color: #001332;
      }
      a:hover {
        color: #23459d;
      }
    }
    li:after {
      content: '｜'
    }
  }
}
.main {
  width: 980px;
  margin: 0 auto;
  padding: 40px 0 80px;
  background: #f6f6f7;
  border-top: #fff double 3px;
  dl {
    margin: 50px 80px 0;
    dt {
      font-family: serif;
      font-size: 24px;
      line-height: 26px;
      color: #001332;
      text-indent: 0.5em;
      border-left: #001332 3px solid;
      margin: 0 0 15px;
    }
    dd {
      font-size: 14px;
      line-height: 1.75em;
      letter-spacing: 0.025em;
      color: #4d4f52;
    }
  }
}
</style>
