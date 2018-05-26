var bsurl = require('../../../utils/bsurl.js');
var app = getApp();
Page({
    data: {
        rec: {
            idx: 0, loading: false,
        },
        music: {},
        playing: false,
        playtype: {},
        banner: [4],
        thisday: (new Date()).getDate(),
        cateisShow: false,
        playlist: {
            idx: 1, loading: false,
            list: {},
            offset: 0,
            limit: 20
        },
        catelist: {
            res: {},
            checked: {}
        },
        djlist: {
            idx: 2, loading: false,
            list: [],
            offset: 0,
            limit: 20
        },
        djcate: { loading: false },
        djrecs: {},
        sort: {
            idx: 3, loading: false
        },
        tabidx: 0
    },
    
    onLoad: function (options) {
        wx.request({
            url: bsurl + '/j/v1/qiyu/customerService/consult?termId=&reqType=1&_t=1526172554184',
            success: function (res) {
                //res.data.idx = 3;
                //res.data.loading = true;
                // that.setData({
                //     sort: res.data
                // })
            }
        })
    },
    onHide: function () {
        // nt.removeNotification("music_next", this)
        // nt.removeNotification("music_toggle", this)
    },
    onShow: function () {
        
    }
})