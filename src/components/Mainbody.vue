<template>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="main">
        <div>
            <div class="main-one">
                <div class="one-s" v-if="!loading">
                    <div class="one" v-for="(content,index) in mainData.data.cards" :key="index">
                        <van-skeleton title avatar :row="6" :loading="loading">
                            <div class="card-wrap">
                                <header class="weibo-top">
                                    <div class="m-top-box">
                                        <a href="javascript:;" class="m-img-box">
                                            <img :src="content.mblog.user.avatar_hd" alt="" class="box-header">
                                            <img src="../assets/img/vip-g.png" alt="" class="box-i">
                                        </a>
                                    </div>
                                    <div class="m-box-dir m-box-col m-box-center">
                                        <div class="m-text-box">
                                            <a href="javascript:;" class="">
                                                <h3 class="m-text-cut">
                                                    {{content.mblog.user.screen_name}}
                                                    <i class="m-icon m-icon-vipl7"></i>
                                                </h3>
                                            </a>
                                            <h4 class="m-text-cut">
                                                <span class="time">{{content.mblog.created_at}}</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="m-add-box m-followBtn">
                                    <span class="m-add-box">
                                        <van-icon name="plus" class="m-font m-font-plus" />
                                        <h4>关注</h4>
                                    </span>
                                    </div>
                                </header>
                            </div>
                            <article class="weibo-main">
                                <div class="card-wrap">
                                    <div class="weibo-og" v-html="content.mblog.text">

                                    </div>
                                    <div v-if="content.mblog.pics">
                                        <div class="one-pic">
                                            <ul class="m-auto-list">
                                                <li v-for="(pics,index1) in content.mblog.pics" :key="index1">
                                                    <div class="m-img-box m-imghold-4-3">
                                                        <img  :src="pics.url" class="f-bg-img">
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div v-if="content.mblog.page_info">
                                        <div class="weibo-media f-media">
                                            <div class="weibo-media-wraps">
                                                <div class="card-video type-video">
                                                    <div class="mwb-video mwbv-play mwbv-info">
                                                        <div class="m-img-box" v-for="(i,s) in content.mblog.page_info.page_pic">
                                                            <img  v-lazy="i"/>
                                                        </div>
                                                        <button class="mwbv-play-button">
                                                            <van-icon name="play" class="mwbv-icon" />
                                                        </button>
                                                        <div class="mwbv-info-bar">
                                                            <div class="m-box">
                                                                <div class="m-box-col">{{content.mblog.obj_ext}}</div>
                                                                <div v-if="content.mblog.page_info.media_info"><div class="time">{{Retime(content.mblog.page_info.media_info.duration)}}</div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </van-skeleton>
                        <footer class="f-footer-ctrl">
                            <div class="m-diy-btn m-box-center-a">
                                <van-icon name="exchange" class="footer-icon"/>
                                <h4>{{content.mblog.reposts_count}}</h4>
                            </div>
                            <div class="m-diy-btn m-box-center-a">
                                <van-icon name="chat-o" class="footer-icon"/>
                                <h4>{{content.mblog.comments_count}}</h4>
                            </div>
                            <div class="m-diy-btn m-box-center-a">
                                <van-icon name="good-job-o" class="footer-icon"/>
                                <h4>{{content.mblog.attitudes_count}}</h4>
                            </div>
                            <div class="more">
                                <van-icon name="ellipsis" @click="show=true" class="footer-icon"/>
                                <van-action-sheet
                                        v-model="show"
                                        :actions="actions"
                                        cancel-text="取消"
                                        @select="onSelect"
                                        @cancel="onCancel"
                                />
                            </div>
                        </footer>
                    </div>
                </div>
                <div class="one-f" v-else>
                    <div class="one" v-for="(content,index) in 5" :key="index">
                        <van-skeleton title avatar :row="6" :loading="loading">

                        </van-skeleton>
                        <footer class="f-footer-ctrl">
                            <div class="m-diy-btn m-box-center-a">
                                <van-icon name="exchange" class="footer-icon"/>
                                <h4>转发</h4>
                            </div>
                            <div class="m-diy-btn m-box-center-a">
                                <van-icon name="chat-o" class="footer-icon"/>
                                <h4>转发</h4>
                            </div>
                            <div class="m-diy-btn m-box-center-a">
                                <van-icon name="good-job-o" class="footer-icon"/>
                                <h4>点赞</h4>
                            </div>
                            <div class="more">
                                <van-icon name="ellipsis" @click="show=true" class="footer-icon"/>
                                <van-action-sheet
                                        v-model="show"
                                        :actions="actions"
                                        cancel-text="取消"
                                        @select="onSelect"
                                        @cancel="onCancel"
                                />
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </van-pull-refresh>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    import Vue from 'vue';
    import { Lazyload } from 'vant';
    Vue.use(Lazyload);
    import time from '../configs/time'


    export default {
        name: "Mainbody",
        data() {
            return {
                show: false,
                actions: [
                    {name: '复制链接'},
                    {name: '查看编辑记录'},
                ],
                Retime:Function,
                isLoading: false
            }
        },
        computed: {
            ...mapGetters(['loading', 'mainData'])
        },
        methods: {
            onSelect(item) {
                this.show = false;
            },
            onCancel(item) {
                this.show = false;
            },
            onRefresh() {
                setTimeout(() => {

                    this.isLoading = false;
                }, 500)
            }
        },
        created(){
            this.Retime = time.Retime
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        top: 5.25rem;
        left: 0;
    }

    .one {
        border-bottom: .36px solid #e6e6e6;
    }

    .one >>> .van-skeleton {
        padding: 16px;
    }

    .f-footer-ctrl {
        border-top-width: 0;
        height: 1.1rem;
        padding: 1rem .375rem 1rem 0;
        margin: 0 0.75rem;
    }

    .f-footer-ctrl .m-diy-btn {
        color: rgba(40, 47, 60, 0.8);
        height: 100%;
        float: left;
    }

    .m-box-center-a {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .f-footer-ctrl .m-diy-btn h4 {
        font-size: .8125rem;
        display: inline-block;
        margin-top: 0;
        margin-left: .25rem;
    }

    .footer-icon {
        cursor: pointer;
        color: rgba(40, 47, 60, .8);
        font-size: 1.125rem;
    }

    .f-footer-ctrl .m-diy-btn + .m-diy-btn {
        margin-left: 1.6875rem;
    }

    .more {
        float: right;
        color: rgba(40, 47, 60, 0.8);
    }

    .one .card-wrap {
        margin-left: .75rem;
        margin-right: .75rem;
        padding-top: .9375rem;
        height: 100%;
    }

    .card-wrap {
        padding: 0 0 0 .25rem;
    }

    .weibo-top{
        width: 100%;
    }

    .weibo-top .m-top-box {
        display: flex;
        justify-content: center;
    }

    .m-top-box .m-img-box {
        width: 2rem;
        height: 2rem;
        background-color: #e6e6e6;
        border-radius: 50%;
        position: relative;
        display: inline-block;
    }

    .m-img-box .box-header {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        vertical-align: top;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .m-img-box .box-i {
        position: absolute;
        z-index: 3;
        right: -.0625rem;
        bottom: -.0625rem;
        width: 14px;
        height: 14px;
    }

    .m-box-col {
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        display: block;
        min-width: 0;
    }

    .m-box-center {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .m-box-col {
        min-width: 0;
    }

    .weibo-top {
        display: flex;
    }

    .m-box-dir {
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
    }

    .weibo-top .m-text-box {
        margin: .15rem 0 .15rem .5rem;
    }

    .m-text-box > * {
        margin: 0 0 .375rem 0;
    }

    .weibo-top .m-text-box h3 {
        font-size: .875rem;
    }

    .weibo-top .m-text-box h3 {
        font-size: .9375rem;
        margin: 0;
    }

    .m-text-box h3 {
        font-size: 1rem;
        color: #333;
        line-height: 1.4;
    }

    .m-text-cut {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .weibo-top .m-box-col .m-icon {
        margin-left: 3px;
    }

    .m-text-box h3 .m-icon {
        vertical-align: -.125rem;
    }

    .m-icon {
        background-size: 3em 57em !important;
    }

    .m-icon-vipl7 {
        background-position: -1em -55em;
    }

    .m-icon {
        display: inline-block;
        vertical-align: top;
        background-image: url(../assets/img/sprite.svg);
        background-size: 3em 57em;
        width: 1em;
        height: 1em;
    }

    .weibo-top .m-text-box h4 {
        color: #939393;
    }

    .m-text-box h4 {
        font-size: .6875rem;
    }

    .m-text-box h4:last-child {
        color: #939393;
    }

    .m-text-box > :last-child {
        margin: 0;
    }

    .m-text-box h4 {
        font-size: .75rem;
        color: #636363;
        line-height: 1.5;
    }

    .m-text-box > * {
        margin: 0 0 .375rem 0;
    }

    .m-text-cut {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .weibo-top .m-add-box {
        display: inline-block;
        width: 4.5625rem;
        height: 1.5rem;
        line-height: 1.625rem;
        cursor: pointer;
    }
    .m-add-box {
        color: #FF8200;
        text-align: center;
        display: inline-block;
    }
    .lite-page-top span.m-add-box, .weibo-top span.m-add-box {
        text-align: center;
        position: relative;
    }
    .weibo-top span.m-add-box i {
        position: relative;
        top: 0.45rem;
    }
    .weibo-top span.m-add-box h4, .weibo-top span.m-add-box i {
        display: inline-block;
        vertical-align: top;
        font-size: .75rem;
        color: #87909a;
        -webkit-font-smoothing: antialiased;
    }
    .weibo-top span.m-add-box:after {
        position: absolute;
        content: "";
        border: 1px solid #87909a;
        border-radius: 4px;
        width: 200%;
        height: 200%;
        top: 0;
        left: 0;
        transform: scale(.5);
        transform-origin: 0 0;
        -webkit-transform: scale(.5);
        -webkit-transform-origin: 0 0;
    }

    .weibo-main .card-wrap{
        margin-left: .75rem;
        margin-right: .75rem;
        padding-top: 0;
        height: 100%;
    }

    .weibo-main .weibo-og {
        padding: .75rem 0 0 .25rem;
    }
    .weibo-main .weibo-og {
        font-size: 1rem;
    }
     .weibo-main .weibo-og {
        font-size: .9375rem;
    }
    .weibo-main .weibo-og {
        font-size: 1.0625rem;
        color: #333;
        padding: .75rem;
    }
    .weibo-main .weibo-text {
        line-height: 1.5;
        word-wrap: break-word;
    }
    .weibo-main .weibo-og>>>a {
        color: #3c6e9e!important;
    }
    .one-pic{
        margin: .625rem 0 -.375rem;
    }
    .one-pic .m-auto-list{
        overflow: hidden;
        font-size: 0;
        max-width: 100%;
        margin: 0 0 -.25rem;
    }
    .m-auto-list li {
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
        width: 33.33%;
        padding: 0 .3125rem .3125rem 0;
    }
    .one-pic .m-img-box {
        background-color: #e6e6e6;
        padding-bottom: 100%;
        height: 0;
        position: relative;
        display: inline-block;
        width: 100%;
    }
    .one-pic .f-bg-img{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        position: absolute;
        width: 100%;
        height: 100%;
        vertical-align: top;
        -o-object-fit: cover;
        object-fit: cover;
    }
    .weibo-main .weibo-media {
        margin-top: .625rem;
    }
    .card-video{
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
    }
    .card-video .mwb-video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .mwb-video{
        background: #000;
        color: #fff;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .mwb-video .m-img-box{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-size: 100%;
        background-position: 50%;
        overflow: hidden;
    }
    .m-img-box {
        display: inline-block;
        width: 100%;
    }
    .mwb-video .mwbv-play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3.375rem;
        height: 3.375rem;
        margin: -1.6875rem 0 0 -1.6875rem;
        background: rgba(0,0,0,.4);
        border-radius: 50%;
    }
    .mwb-video button{
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
    }
    .mwb-video .mwbv-info-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        padding: .9375rem 0 .3125rem;
        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(3%,transparent),color-stop(98%,rgba(0,0,0,.2)));
        background-image: linear-gradient(-180deg,transparent 3%,rgba(0,0,0,.2) 98%);
    }
    .m-img-box img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        -o-object-fit: cover;
        object-fit: cover;
    }
    .mwb-video .mwbv-icon {
        font-size: 2.6rem;
    }
    .mwb-video .mwbv-info-bar .m-box {
        margin: 0 .3125rem;
        line-height: 1rem;
        font-size: .75rem;
        text-shadow: 0 0 2px rgba(0,0,0,.4);
        display: flex;
    }
</style>