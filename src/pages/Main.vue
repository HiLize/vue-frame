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
                    <span :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)', display: 'inline-block'}" type="text" @click="toggleClick">
                        <Icon type="ios-menu" size="32" />
                    </span>
                </div>
                <div class="header-middle-con">
                    <div class="main-breadcrumb">
                        <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
                    </div>
                </div>
                <div class="header-avator-con">
                    <div class="user-dropdown-menu-con">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                            <span style="margin: 0 10px;">李小泽</span>
                            <Dropdown trigger="click" @on-click="logout">
                                <a href="javascript:void(0)" style="color: #515a6e">
                                    <Avatar icon="ios-person"></Avatar>
                                    <Icon type="md-arrow-dropdown" />
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name='logout'>
                                        <Icon type="ios-log-out" />
                                        退出登录
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
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
    import Util from '@/libs/util'
    export default {
        components: {
            shrinkableMenu,
            breadcrumbNav,
            scrollBar,
            tagsPageOpened
        },
        data () {
            return {
                count: this.$store.state.menu.count,
                shrink: false,
                userName: '',
                openedSubmenuArr: [this.$route.params.module],
                avatorPath: '', //http://img17.3lian.com/d/file/201703/06/ea0b5efc8ab75167dd7655bcc16defca.jpg
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
            menuList () {
                return this.$store.state.menu.menuList
            }
        },
        methods: {
            toggleClick () {
                this.shrink = !this.shrink;
            },
            handleSubmenuChange (val) {
                this.$router.push({path: `/manage/${val}`})
            },
            beforePush (name) {
                return false;
            },
            scrollBarResize () {
                this.$refs.scrollBar.resize();
            },
            getMenuList () {
                this.$store.dispatch('setMenuList', this)
            },
            getUserInfo(){
                util.httpPost(api.userInfo,{},{}).then(res => {
                    console.log(res)
                })
            },
            logout(e) {
                Util.delCookie('adminSessionToken')
                this.$router.replace({path: `/login`})
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
