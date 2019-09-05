/*
包含n个用于间接更新状态的方法的对象模块
 */
import {SET_SEARCHFLG_HIDE, SET_SEARCHFLG_SHOW, SET_PLAY_TRUE, SET_PLAY_FALSE,
        SET_PLAYERSHOW_TRUE, SET_PLAYERSHOW_FALSE,  SET_MINIPLAYERSHOW_TRUE, SET_MINIPLAYERSHOW_FALSE,
        SET_SONGINDEX, SET_MUSICLIST} from './mutation-types'

export default {

  searchflg({commit}, routename) {
    if(routename == 'player' || routename == 'musiclist' || routename == 'ranklist' || routename == 'singerlist'){
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

  miniplayshowtrue({commit}) {
    commit(SET_MINIPLAYERSHOW_TRUE)
  },

  miniplayshowfalse({commit}) {
    commit(SET_MINIPLAYERSHOW_FALSE)
  },

  setsongindex({commit},payload) {
    commit(SET_SONGINDEX,payload)
  },
  setmusiclist({commit},payload){
    commit(SET_MUSICLIST,payload)
  },






}