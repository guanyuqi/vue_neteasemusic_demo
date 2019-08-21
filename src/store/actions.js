/*
包含n个用于间接更新状态的方法的对象模块
 */
import {SET_SEARCHFLG_HIDE, SET_SEARCHFLG_SHOW, SET_PLAY_TRUE, SET_PLAY_FALSE,
        SET_PLAYERSHOW_TRUE, SET_PLAYERSHOW_FALSE} from './mutation-types'

export default {

  searchflg({commit}, routename) {
    if(routename == 'player' || routename == 'musiclist'){
      commit(SET_SEARCHFLG_HIDE)
    }else{
      commit(SET_SEARCHFLG_SHOW)
    }
  },

  searchflg_1({commit}) {
      commit(SET_SEARCHFLG_HIDE)
  },

  playtrue({commit}) {
    commit(SET_PLAY_TRUE)
  },

  playfalse({commit}) {
    commit(SET_PLAY_FALSE)
  },

  playshowtrue({commit}) {
    commit(SET_PLAYERSHOW_TRUE)
  },

  playshowfalse({commit}) {
    commit(SET_PLAYERSHOW_FALSE)
  },






}