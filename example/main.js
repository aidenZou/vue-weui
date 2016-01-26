'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import App from './modules/App.vue'
import IndexView from './modules/IndexView.vue'
import ButtonView from './modules/ButtonView.vue'
import ToastView from './modules/ToastView.vue'
import DialogView from './modules/DialogView.vue'
import ActionSheet from './modules/ActionSheetView.vue'
import MsgView from './modules/MsgView.vue'
import ArticleView from './modules/ArticleView.vue'
import CellView from './modules/CellView.vue'
import ProgressView from './modules/ProgressView.vue'
import IconsView from './modules/IconsView.vue'

// install router
Vue.use(Router)

// register filters globally

// routing
var router = new Router()

router.map({
  '/': {
    name: 'index',  // 路径别名
    component: IndexView
  },
  '/button': {
    name: 'button',
    component: ButtonView
  },
  '/toast': {
    component: ToastView
  },
  '/dialog': {
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
