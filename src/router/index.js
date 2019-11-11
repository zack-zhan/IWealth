import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Introduction from '@/views/introduction/index'
import IntroductionCh from '@/views/introduction/index_ch'
import Fund from '@/views/fund/index'
import FundCh from '@/views/fund/index_ch'
import Report from '@/views/report/index'
import ReportCh from '@/views/report/index_ch'
import Application from '@/views/application/index'
import ApplicationCh from '@/views/application/index_ch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/introduction_ch',
      name: 'IntroductionCh',
      component: IntroductionCh
    },
    {
      path: '/fund',
      name: 'Fund',
      component: Fund
    },
    {
      path: '/fund_ch',
      name: 'FundCh',
      component: FundCh
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/report_ch',
      name: 'ReportCh',
      component: ReportCh
    },
    {
      path: '/application',
      name: 'Application',
      component: Application
    },
    {
      path: '/application_ch',
      name: 'ApplicationCh',
      component: ApplicationCh
    }
  ]
})
