var bsurl = require('../../../utils/bsurl.js');
var app = getApp();
Page({
    data: {
        banner:[{
            id:1,
            src: '//edu-image.nosdn.127.net/881a9c08-b432-4d2a-bd50-b049cebc46ce.jpg?imageView&quality=100',
            href: '//kada.163.com',
            target:'_self',
            text: '',
            bgColor: '#418eea'
        },{
        id:2,
        src: '//edu-image.nosdn.127.net/881a9c08-b432-4d2a-bd50-b049cebc46ce.jpg?imageView&quality=100',
        href: '//kada.163.com',
        target:'_self',
        text: '',
        bgColor: '#418eea'
    }]
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