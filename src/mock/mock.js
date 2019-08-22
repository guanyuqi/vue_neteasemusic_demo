const Mock = require('mockjs')

const Random = Mock.Random;
let lunbo = {
    "img":[
        {"id":"1","img":"http://p1.music.126.net/KGSF8DPSl5wluWK4mNrqMA==/109951164293269360.jpg"},
        {"id":"2","img":"http://p1.music.126.net/s0DAYGK6F2HFCi1LH5SKyg==/109951164294469557.jpg"},
        {"id":"3","img":"http://p1.music.126.net/oWLABzTapLtAIyl85sxSyA==/109951164294446095.jpg"},
        {"id":"4","img":"http://p1.music.126.net/_eobdSsvVxqH3qesDcnYBA==/109951164294447850.jpg"},
    ]
  }
let songimg = {
  "img":[
      {"id":"1","img":"http://p3.music.126.net/EkPU_UxbmQzt2ENftl6IhA==/109951164297146790.jpg?param=200y200","txt":"【青春洋溢】乐华娱乐热门单曲精选","count":"29万"},
      {"id":"2","img":"http://p4.music.126.net/l7Oj2O6HLAvqjXoX_vGSWA==/109951164284065852.jpg?param=200y200","txt":"拯救坏情绪：一键开启愉悦模式","count":"61万"},
      {"id":"3","img":"http://p4.music.126.net/0jS11D3OFnYBUpako_cLWA==/18547661650919676.jpg?param=200y200","txt":"J.Fla丨音乐十载，独宠J.Fla，英文惊艳翻唱","count":"183万"},
      {"id":"4","img":"http://p2.music.126.net/xkmWDhs99OtZtFV4W8wHYw==/109951164259902048.jpg?param=140y140","txt":"杰迷写给哪吒的歌","count":"70万"},
      {"id":"5","img":"http://p4.music.126.net/LIB4mDHAw0mIeZiXuRNIHg==/109951164276995474.jpg?param=200y200","txt":"“情与爱”在姚若龙笔下如何演绎？","count":"14万"},
      {"id":"6","img":"http://p1.music.126.net/iJT-bhv5MYL0qIF_D-87XA==/109951164291908181.jpg?param=140y140","txt":"FEVER & elrow Edition 26","count":"234万"},
      {"id":"7","img":"http://p1.music.126.net/yl9BZ3NVy3Js_3KX3dpQsA==/109951163556246314.jpg?param=140y140","txt":"这次,我不会再选择去放弃了","count":"102万"},
      {"id":"8","img":"http://p3.music.126.net/EkPU_UxbmQzt2ENftl6IhA==/109951164297146790.jpg?param=200y200","txt":"【青春洋溢】乐华娱乐热门单曲精选","count":"29万"},
      {"id":"9","img":"http://p4.music.126.net/l7Oj2O6HLAvqjXoX_vGSWA==/109951164284065852.jpg?param=200y200","txt":"拯救坏情绪：一键开启愉悦模式","count":"61万"},
      {"id":"10","img":"http://p4.music.126.net/0jS11D3OFnYBUpako_cLWA==/18547661650919676.jpg?param=200y200","txt":"J.Fla丨音乐十载，独宠J.Fla，英文惊艳翻唱","count":"183万"},
      {"id":"11","img":"http://p2.music.126.net/xkmWDhs99OtZtFV4W8wHYw==/109951164259902048.jpg?param=140y140","txt":"杰迷写给哪吒的歌","count":"70万"},
      {"id":"12","img":"http://p4.music.126.net/LIB4mDHAw0mIeZiXuRNIHg==/109951164276995474.jpg?param=200y200","txt":"“情与爱”在姚若龙笔下如何演绎？","count":"14万"},
      {"id":"13","img":"http://p1.music.126.net/iJT-bhv5MYL0qIF_D-87XA==/109951164291908181.jpg?param=140y140","txt":"FEVER & elrow Edition 26","count":"234万"},
      {"id":"14","img":"http://p1.music.126.net/yl9BZ3NVy3Js_3KX3dpQsA==/109951163556246314.jpg?param=140y140","txt":"这次,我不会再选择去放弃了","count":"102万"},
      {"id":"15","img":"http://p3.music.126.net/EkPU_UxbmQzt2ENftl6IhA==/109951164297146790.jpg?param=200y200","txt":"【青春洋溢】乐华娱乐热门单曲精选","count":"29万"},
  ]
}

let list = {
  "data":[
      {"id":"1","name":"够爱","singer":"东城卫",'songid':'http://music.163.com/song/media/outer/url?id=352894.mp3','songimg':'http://p1.music.126.net/rOHSMD05LHAPPK6F4s_I4Q==/41781441867842.jpg'},
      {"id":"2","name":"Out of Time (Sagan Remix)","singer":"Shane 54/Cubicore",'songid':'http://music.163.com/song/media/outer/url?id=1314777725.mp3','songimg':'http://p1.music.126.net/_s6JoXrFv3E2NPzdU7w6dw==/109951163621935108.jpg'},
      {"id":"3","name":"空欢喜","singer":"南游记乐队",'songid':'http://music.163.com/song/media/outer/url?id=1299595170.mp3','songimg':'http://p2.music.126.net/pJyzfRiq4MgXUjbdfcOHgg==/109951163620819102.jpg'},
      {"id":"4","name":"坠落星空","singer":"小星星Aurora",'songid':'http://music.163.com/song/media/outer/url?id=1351520305.mp3','songimg':'http://p1.music.126.net/-kDO5LiKki3bmeF21MaCuQ==/109951163917806959.jpg'},
      {"id":"5","name":"Cyberangel","singer":"Hanser",'songid':'http://music.163.com/song/media/outer/url?id=1375725396.mp3','songimg':'http://p1.music.126.net/TAiliOjM10DlKiL56fPIMw==/109951163737497396.jpg'},
      {"id":"6","name":"EZ4ENCE ","singer":"The Verkkars",'songid':'http://music.163.com/song/media/outer/url?id=1346907833.mp3','songimg':'http://p2.music.126.net/mXEv9aXxfiUGGyhjrvUm_Q==/109951163872509815.jpg'},
      {"id":"7","name":"梦回还","singer":"呦猫UNEKO",'songid':'http://music.163.com/song/media/outer/url?id=405253631.mp3','songimg':'http://p1.music.126.net/hAfIXJP_ZBRQKd1VE_Hqbg==/16625715324173485.jpg'},
      {"id":"8","name":"够爱","singer":"东城卫",'songid':'http://music.163.com/song/media/outer/url?id=352894.mp3','songimg':'http://p1.music.126.net/rOHSMD05LHAPPK6F4s_I4Q==/41781441867842.jpg'},
      {"id":"9","name":"Out of Time (Sagan Remix)","singer":"Shane 54/Cubicore",'songid':'http://music.163.com/song/media/outer/url?id=1314777725.mp3','songimg':'http://p1.music.126.net/_s6JoXrFv3E2NPzdU7w6dw==/109951163621935108.jpg'},
      {"id":"10","name":"空欢喜","singer":"南游记乐队",'songid':'http://music.163.com/song/media/outer/url?id=1299595170.mp3','songimg':'http://p2.music.126.net/pJyzfRiq4MgXUjbdfcOHgg==/109951163620819102.jpg'},
      {"id":"11","name":"坠落星空","singer":"小星星Aurora",'songid':'http://music.163.com/song/media/outer/url?id=1351520305.mp3','songimg':'http://p1.music.126.net/-kDO5LiKki3bmeF21MaCuQ==/109951163917806959.jpg'},
      {"id":"12","name":"Cyberangel","singer":"Hanser",'songid':'http://music.163.com/song/media/outer/url?id=1375725396.mp3','songimg':'http://p1.music.126.net/TAiliOjM10DlKiL56fPIMw==/109951163737497396.jpg'},
      {"id":"13","name":"EZ4ENCE ","singer":"The Verkkars",'songid':'http://music.163.com/song/media/outer/url?id=1346907833.mp3','songimg':'http://p2.music.126.net/mXEv9aXxfiUGGyhjrvUm_Q==/109951163872509815.jpg'},
      {"id":"14","name":"梦回还","singer":"呦猫UNEKO",'songid':'http://music.163.com/song/media/outer/url?id=405253631.mp3','songimg':'http://p1.music.126.net/hAfIXJP_ZBRQKd1VE_Hqbg==/16625715324173485.jpg'},
      {"id":"15","name":"够爱","singer":"东城卫",'songid':'http://music.163.com/song/media/outer/url?id=352894.mp3','songimg':'http://p1.music.126.net/rOHSMD05LHAPPK6F4s_I4Q==/41781441867842.jpg'},
      {"id":"16","name":"Out of Time (Sagan Remix)","singer":"Shane 54/Cubicore",'songid':'http://music.163.com/song/media/outer/url?id=1314777725.mp3','songimg':'http://p1.music.126.net/_s6JoXrFv3E2NPzdU7w6dw==/109951163621935108.jpg'},
      {"id":"17","name":"空欢喜","singer":"南游记乐队",'songid':'http://music.163.com/song/media/outer/url?id=1299595170.mp3','songimg':'http://p2.music.126.net/pJyzfRiq4MgXUjbdfcOHgg==/109951163620819102.jpg'},
      {"id":"18","name":"坠落星空","singer":"小星星Aurora",'songid':'http://music.163.com/song/media/outer/url?id=1351520305.mp3','songimg':'http://p1.music.126.net/-kDO5LiKki3bmeF21MaCuQ==/109951163917806959.jpg'},
      {"id":"19","name":"Cyberangel","singer":"Hanser",'songid':'http://music.163.com/song/media/outer/url?id=1375725396.mp3','songimg':'http://p1.music.126.net/TAiliOjM10DlKiL56fPIMw==/109951163737497396.jpg'},
      {"id":"20","name":"EZ4ENCE ","singer":"The Verkkars",'songid':'http://music.163.com/song/media/outer/url?id=1346907833.mp3','songimg':'http://p2.music.126.net/mXEv9aXxfiUGGyhjrvUm_Q==/109951163872509815.jpg'},
      {"id":"21","name":"梦回还","singer":"呦猫UNEKO",'songid':'http://music.163.com/song/media/outer/url?id=405253631.mp3','songimg':'http://p1.music.126.net/hAfIXJP_ZBRQKd1VE_Hqbg==/16625715324173485.jpg'},
  ]
}


Mock.mock('https://www.csdn.net/api/mock','get',{
    lunbo
})

Mock.mock('https://www.csdn.net/api/song','get',{
  songimg
})
Mock.mock('https://www.csdn.net/api/list','get',{
  list
})