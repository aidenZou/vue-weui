import Vue from 'vue'
import Router from 'vue-router'

import App from './example/App.vue'
import IndexView from './example/IndexView.vue'
import ButtonView from './example/ButtonView.vue'
import ToastView from './example/ToastView.vue'
import DialogView from './example/DialogView.vue'
import ActionSheet from './example/ActionSheetView.vue'
import MsgView from './example/MsgView.vue'
import ArticleView from './example/ArticleView.vue'
import CellView from './example/CellView.vue'
import ProgressView from './example/ProgressView.vue'
import IconsView from './example/IconsView.vue'

// install router
Vue.use(Router)

// register filters globally

// routing
var router = new Router()

router.map({
  '/':{
    name: 'index',  // 路径别名
    component: IndexView
  },
  '/button':{
    name:'button',
    component:ButtonView
  },
  '/toast':{
    component:ToastView
  },
  '/dialog':{
    component: DialogView
  },
  '/actionsheet': {
    component: ActionSheet
  },
  '/msg': {
    component: MsgView
  },
  '/article': {
    component: ArticleView
  },
  '/cell': {
    component: CellView
  },
  '/progress': {
    component: ProgressView
  },
  '/icons': {
    component: IconsView
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')


// function aa(){console.log('hahah')}
