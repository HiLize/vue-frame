<style lang="less">
    @import "./main.less";
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
            <scroll-bar ref="scrollBar">
                <shrinkable-menu 
                    :shrink="shrink"
                    @on-change="handleSubmenuChange"
                    :theme="menuTheme"
                    :before-push="beforePush"
                    :open-names="openedSubmenuArr"
                    :menu-list="menuList">
                    <div slot="top" class="logo-con">
                        <img v-show="!shrink"  src="static/logo.jpg" key="max-logo" />
                        <img v-show="shrink" src="static/logo-min.jpg" key="min-logo" />
                    </div>
                </shrinkable-menu>
            </scroll-bar>
        </div>
        <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
            <div class="main-header">
                <div class="navicon-con">
                    <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
                <div class="header-middle-con">
                    <div class="main-breadcrumb">
                        <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
                    </div>
                </div>
                <div class="header-avator-con">
                    <div class="user-dropdown-menu-con">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                            <span>xxxx</span>
                            <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="tags-con" v-if="false">
                <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
            </div>
        </div>
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
    import shrinkableMenu from './components/shrinkable-menu/shrinkable-menu.vue';
    import breadcrumbNav from './components/breadcrumb-nav.vue';
    import scrollBar from './components/scroll-bar/vue-scroller-bars';
    import tagsPageOpened from './components/tags-page-opened.vue';
    import api from 'api'
    import util from 'util'
    export default {
        components: {
            shrinkableMenu,
            breadcrumbNav,
            scrollBar,
            tagsPageOpened
        },
        data () {
            return {
                shrink: false,
                userName: '',
                openedSubmenuArr: [this.$route.params.module],
                menuList: this.$store.state.menu.menuList,
                avatorPath: 'http://img17.3lian.com/d/file/201703/06/ea0b5efc8ab75167dd7655bcc16defca.jpg',
                currentPath: [
                    {
                        title: '首页',
                        path: '',
                        name: 'home'
                    }
                ],
                pageTagsList: []
            };
        },
        computed: {
            menuTheme () {
                return this.$store.state.app.menuTheme;
            },
        },
        methods: {
            toggleClick () {
                this.shrink = !this.shrink;
            },
            handleSubmenuChange (val) {
                console.log('handleSubmenuChange')
                console.log(val)
                this.$router.push({path: `/manage/${val}`})
            },
            beforePush (name) {
                return false;
            },
            scrollBarResize () {
                this.$refs.scrollBar.resize();
            },
            getMenuList () {
                util.httpPost(api.menuList,{},{}).then(res => {
                    console.log(res)
                    if(res && res.code == '0'){
                        this.menuList = res.datas
                    }
                })
            },
            getUserInfo(){
                util.httpPost(api.userInfo,{},{}).then(res => {
                    console.log(res)
                })
            }
        },
        mounted () {
            // this.getMenuList()
            // this.getUserInfo()
            window.addEventListener('resize', this.scrollBarResize);
        },
        created () {
        },
        dispatch () {
            window.removeEventListener('resize', this.scrollBarResize);
        }
    };
</script>
