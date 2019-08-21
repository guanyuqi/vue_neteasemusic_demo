/*
包含n个用于直接更新状态的方法的对象模块
 */

import {SET_SEARCHFLG_SHOW, SET_SEARCHFLG_HIDE, SET_PLAY_TRUE, SET_PLAY_FALSE,
        SET_PLAYERSHOW_TRUE, SET_PLAYERSHOW_FALSE} from './mutation-types'

export default {
  [SET_SEARCHFLG_SHOW] (state ) {
    state.searchflg = true
  },

  [SET_SEARCHFLG_HIDE] (state) {
    state.searchflg = false
  },

  [SET_PLAY_TRUE] (state) {
    state.play = true
  },

  [SET_PLAY_FALSE] (state) {
    state.play = false
  },

  [SET_PLAYERSHOW_TRUE] (state) {
    state.playershow = true
  },
  
  [SET_PLAYERSHOW_FALSE] (state) {
    state.playershow = false
  },
}
