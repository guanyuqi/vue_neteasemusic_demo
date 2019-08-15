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

Mock.mock('https://www.csdn.net/api/mock','get',{
    lunbo
})