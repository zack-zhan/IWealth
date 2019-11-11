<template>
  <div class="container">
    <div class="header">
      <div class="header-link">｜<router-link to="/fund" class="english">English</router-link>｜中文｜</div>
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
      <dl v-for="(item,index) in textData" :key="index">
        <dt>{{item.title}}</dt>
        <dd v-html="item.texts[0].textContent" v-if="item.texts[0]"></dd>
      </dl>
      <dl>
        <dt>{{tableData.title}}</dt>
        <dd>
          <table class="company-table" v-for="(item,index) in tableData.tables" :key="index">
            <tr>
              <th>{{item.headerContent}}</th>
              <td>{{item.bodyContent}}</td>
            </tr>
          </table>
        </dd>
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
      textData: [],
      tableData: []
    }
  },
  components: {
    Footer
  },
  mounted () {
    const obj = {
      accountId: localStorage.getItem('accountId'),
      menuId: 2
    }
    GetContentsById(obj)
      .then(res => {
        if (res.resultCode === '200') {
          this.textData.push(res.data[0])
          this.textData.push(res.data[1])
          this.tableData = res.data[2]
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
      h2 {
        text-align: center;
        font-size: 28px;
        font-family: "ＭＳ 明朝","TimesNewRoman",serif;
      }
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
    .company-table {
      width: 820px;
      margin: 0;
      th, td {
        text-align: left;
        padding: 20px 0 20px;
        border-bottom: #6b7380 dotted 1px;
        font-size: 16px;
      }
      th {
        width: 280px;
        font-weight: bold;
      }
    }
  }
}
</style>
