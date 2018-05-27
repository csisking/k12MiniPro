var app = getApp();
Page({
    data: {
        list:[],
        cover:'http://mgc.stu.126.net/res/img/page/member/learn/courseBg.png?1dd4e5c51c5bb67545f4e6a7197d2f62',
        playlist: {
            idx: 1, loading: false,
            list: {},
            offset: 0,
            limit: 20
        }
    },
    onLoad: function () {
        var that=this;
        
        this.gplaylist();
        
    },
    onShow: function () {
        console.log("me show----------")
    },
    gplaylist: function (isadd) {
        //分类歌单列表
        var that = this;
        // wx.request({
        //     url: bsurl + 'top/playlist',
        //     data: {
        //         limit: that.data.playlist.limit,
        //         offset: that.data.playlist.offset,
        //         type: that.data.catelist.checked.name
        //     },
        //     complete: function (res) {
        //         that.data.playlist.loading = true;
        //         if (!isadd) {
        //             that.data.playlist.list = res.data
        //         } else {
        //             res.data.playlists = that.data.playlist.list.playlists.concat(res.data.playlists);
        //             that.data.playlist.list = res.data
        //         }
        //         that.data.playlist.offset += res.data.playlists.length;
        //         that.setData({
        //             playlist: that.data.playlist
        //         })
        //     }
        // })
        that.data.playlist.list = [{"courseId":400000002833070,"courseName":"【零基础】Scratch趣味创意编程","bigPhoto":"http://edu-image.nosdn.127.net/96ec47d1-4fce-4802-8c5e-84f3c40391eb.png?imageView&quality=100","compositeType":0,"siteId":-20,"id":400000002972175,"name":"第14期","publishStatus":2,"delStatus":null,"validStartTime":null,"validEndTime":null,"status":null,"copyrightType":0,"validStatus":1,"beforeValidStartTime":null,"termType":3,"termSchedule":{"id":400000002972175,"gmtCreate":1524474088622,"gmtModified":1527317807651,"startTime":1526432400000,"endTime":1535731140000,"enrollStartTime":null,"enrollEndTime":1527350400000,"enrollEndTimeType":-1,"duration":"11","courseLoad":"1","closeVisableStatus":0,"closeVisableTime":null,"expectLessonDuration":null},"termOnDemand":null}];
    },
    onReachBottom: function () {
        if (this.data.tabidx == 1) {
            this.gplaylist(1);//更多歌单
        }
        else if (this.data.tabidx == 2) {
            this.gdjlist(1);//更多dj节目
        }
    }
})