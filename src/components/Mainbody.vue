<template>
    <div class="main">
        <div class="main-one">
            <div class="one-s" v-if="!loading">
                <div class="one" v-for="(content,index) in mainData.data.cards" :key="index">
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
                            <van-icon name="ellipsis"  @click="show=true" class="footer-icon"/>
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
                            <van-icon name="ellipsis"  @click="show=true" class="footer-icon"/>
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
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

    export default {
        name: "Mainbody",
        data() {
            return {
                show: false,
                actions: [
                    {name: '复制链接'},
                    {name: '查看编辑记录'},
                ]
            }
        },
        computed:{
            ...mapGetters(['loading','mainData'])
        },
        methods: {
            onSelect(item) {
                this.show = false;
            },
            onCancel(item) {
                this.show = false;
            }
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
    .more{
        float: right;
        color: rgba(40,47,60,0.8);
    }
</style>