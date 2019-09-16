<template>
    <div class="header main-top">
        <div class="nav-top">
            <div class="nav-left logo">

            </div>
            <a class="nav-search  search">
                <aside>
                    <label class="m-search">
                        <van-icon name="search" class="m-font-search"/>
                        <div class="m-text">大家都在搜：越来越多香港人站出来了</div>
                    </label>
                </aside>
            </a>
            <div class="nav-right">
                <van-icon name="edit" class="m-font-edit"/>
            </div>
        </div>
        <div class="nav-main">
            <div class="m-box">
                <van-tabs v-model="active" swipeable line-width="15px" line-height="2px" background="#fafafa"
                          title-inactive-color="#a5adb5" title-active-color="#000" @click="test">
                    <van-tab v-for="(content,index) in listData" :title="content.title" :key="index">

                    </van-tab>
                </van-tabs>
                <van-collapse v-model="activeNames">
                    <van-collapse-item name="1">
                    </van-collapse-item>
                </van-collapse>
            </div>
            <div class="content-show" v-show="activeNames[0] == 1">
                <div class="show-one" v-for="(value,index) in listData" :key="index" @click="test1(index)">
                    <span :class="{active:index==trueValue}">{{value.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                active: '',
                activeNames: [],
                trueValue:0,
                listData: [
                    {title: '热门', containerId: '102803', since_id: 0},
                    {title: '新鲜事', containerId: '102803_ctg1_7978_-_ctg1_7978', since_id: 0},
                    {title: '同城', containerId: '102803', since_id: 0},
                    {title: '搞笑', containerId: '102803_ctg1_4388_-_ctg1_4388', since_id: 0},
                    {title: '情感', containerId: '102803_ctg1_1988_-_ctg1_1988', since_id: 0},
                    {title: '明星', containerId: '102803_ctg1_4288_-_ctg1_4288', since_id: 0},
                    {title: '动漫', containerId: '102803_ctg1_4188_-_ctg1_4188', since_id: 0},
                    {title: '数码', containerId: '102803_ctg1_5088_-_ctg1_5088', since_id: 0},
                    {title: '体育', containerId: '102803_ctg1_1388_-_ctg1_1388', since_id: 0},
                    {title: '汽车', containerId: '102803_ctg1_5188_-_ctg1_5188', since_id: 0},
                    {title: '电影', containerId: '102803_ctg1_3288_-_ctg1_3288', since_id: 0},
                    {title: '游戏', containerId: '102803_ctg1_4888_-_ctg1_4888', since_id: 0},
                ]
            }
        },
        methods: {
            test(name, title) {
                console.log(this.listData[name].containerId);
                this.trueValue = name;
            },
            test1(v){
                this.active = v;
                this.trueValue = v;
                this.activeNames =[];
            }
        }
    }
</script>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        background-color: #fafafa;
        color: #262626;
        border-top-width: 0;
        border-right-width: 0;
        border-bottom-width: 1px;
        border-left-width: 0;
        border-color: #e6e6e6;
        border-style: solid;
        font-size: 1rem;
        z-index: 995;
    }

    .main-wrap .header {
        border-image: none;
        border-top-width: 0;
        border-right-width: 0;
        border-bottom-width: .35714px;
        border-left-width: 0;
    }

    .header.main-top {
        height: 5.25rem;
    }

    .header .nav-main, .header .nav-left, .header .nav-right, .header .search {
        position: absolute;
        line-height: 2.75rem;
    }

    .header .nav-main {
        top: 2.5rem;
        right: 0;
        left: 0;
        font-size: 1rem;
        color: #a5adb5;

    }

    .header .nav-left {
        left: .75rem;
        z-index: 1;
    }

    .logo {
        width: 1.625rem;
        height: 2.5rem;
        background-image: url(../assets/img/logo.svg);
        background-position: 0 .75rem;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .nav-search {
        left: 2.75rem;
        right: 5.375rem;
        line-height: 2.5rem;
    }

    .header .nav-search {
        right: 2.75rem;
    }

    .m-search {
        display: block;
        background: #e3e4e6;
        color: #939393;
        border-radius: .25rem;
        box-sizing: border-box;
        position: relative;
    }

    .m-search {
        margin: .56rem .5rem;
        color: #bdbdbd;
    }

    .m-font-search {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        left: .5rem;
        font-size: 1.2rem;
    }

    .m-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .m-search div {
        padding-left: 1.875rem !important;
        background-color: #ebebec !important;
        font-size: .945rem !important;
        border: none;
        height: 1.75rem;
        line-height: 1.75rem;
    }

    .nav-top .nav-right {
        right: .9375rem;
    }

    .m-font-edit {
        font-size: 1.65rem !important;
        position: absolute;
        color: #282f3c;
        right: 0;
        top: 0.6rem;
    }

    .header >>> .van-tabs__line {
        background-color: #000;
        bottom: 1.4rem;
    }

    .nav-main >>> .van-ellipsis {
        font-size: 1.1rem !important;
    }

    .m-box {
        display: flex;
    }

    .m-box >>> .van-collapse-item, .m-box >>> .van-collapse, .m-box >>> .van-cell, .m-box >>> .van-collapse-item__content {
        background-color: #fafafa !important;
    }

    .m-box >>> .van-collapse-item__wrapper {
        position: absolute;
        width: 100%;
    }

    .m-box >>> .van-collapse-item__content {
        width: 100%;
        display: flex;
        padding: 0;
    }

    .m-box >>> .van-tab {
        flex-basis: 18% !important;
    }

    .m-box >>> .van-tabs {
        width: 87%;
    }

    .content-show {
        background-color: #fafafa;
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 2.75rem;
        left: 0;
        right: 0;
        text-align: left;
        padding: 0 .5rem 1.125rem;
        color: #333;
        z-index: 2;
    }

    .show-one {
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
        width: 25%;
        position: relative;
        padding: 0 .5rem;
        font-size: .875rem;
        text-align: center;
        margin-top: .5rem;
    }

    .show-one:nth-of-type(4n+1){
        margin-left: -.25rem;
    }

    .show-one span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        width: 100%;
        height: 2.125rem;
        line-height: 2.125rem;
        padding: 0 .25rem;
        vertical-align: middle;
        background-color: #eee;
        border-radius: 3px;
    }
    .active{
        color: #ff8200;
    }
</style>