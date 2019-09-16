<template>
    <div class="header main-top">
        <div class="nav-top">
            <div class="nav-left logo">

            </div>
            <a class="nav-search  search">
                <aside>
                    <label class="m-search">
                        <van-icon name="search" class="m-font-search"  />
                        <div class="m-text">大家都在搜：越来越多香港人站出来了</div>
                    </label>
                </aside>
            </a>
            <div class="nav-right">
                <van-icon name="edit" class="m-font-edit" />
            </div>
        </div>
        <div class="nav-main">
            <van-tabs v-model="active" swipeable line-width="15px" line-height="2px" background="#fafafa" title-inactive-color="#a5adb5" title-active-color="#000">
                <van-tab v-for="index in 6" :title="'选项 ' + index">
                    内容 {{ index }}
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                active:''
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

    .m-font-search{
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        left: .5rem;
    }
    .m-text{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .m-search div {
        padding-left: 1.875rem!important;
        background-color: #ebebec!important;
        font-size: .875rem!important;
        border: none;
        height: 1.75rem;
        line-height: 1.75rem;
    }
    .nav-top .nav-right{
        right: .9375rem;
    }

    .m-font-edit{
        font-size: 1.65rem!important;
        position: absolute;
        color: #282f3c;
        right: 0;
        top: 0.6rem;
    }

    .header>>>.van-tabs__line{
        background-color: #000;
        bottom: 1.4rem;
    }
</style>