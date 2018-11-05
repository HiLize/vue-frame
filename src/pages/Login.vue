<template>
    <div class="wrap" style="background-image: url('static/login-bg.png')">
        <div class="qrcode-box">
            <div class="slogan">
                <img src="static/login-logo.png" alt="">
            </div>
            <div>
                <span class="top">请使用今日校园</span>
                <span class="top">首页右上方 "扫一扫" 登录</span>
                <div class="qrcode" id="qrcode"></div>
            </div>
        </div>
    </div>
</template>
<script>
import util from 'conf/util'
import api from 'conf/api'
let timer = null, dealy = 2000

export default {
    data: function () {
        return {
        }
    },
    computed: {
        ...Vuex.mapState({
            index: state => state.index
        })
    },
    mounted() {
        this.initQRCode()
        console.log(location.href, 'hello')
    },
    methods: {
        initQRCode () {
            let path = this.$route.path
            let pms = {
                id: 'qrcode',
                clientId: '10000000000000007',
                self_redirect: false,
                redirectUri: window.location.origin + api.login,
                topRedirect: true
            }
            cpdailyLogin(pms)
        },
        loginSucc() {
            this.$router.push('/manage')
        },
        freshWin () {
            window.location.href = window.location.origin + api.logout
            // this.$router.push('/login')
            // window.location.reload()
        }
    }
}
</script>
<style scoped lang="less" rel="stylesheet/less" scoped>
    .wrap {
        background-color: #ffffff;
        width: 100vw;
        height: 100vh;
        min-height:760px;
        min-width:1100px;
        max-width:1920px;
        overflow: auto;
        background-repeat:  no-repeat;
        background-size: 100% 100%;
        position: relative;
        .logo-box {
            position: absolute;
            left: 50%;
            top: 7vw;
            transform: translateX(-50%);
            .logo {
                vertical-align: middle;
            }
            .title {
                font-size: 23px;
                // margin-left: 10px;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .slogan {
            // width: 25vw;
            // min-width:535px;
            // max-width:535px;
            position: relative;
            // top: 3.5vw;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 3vw;
            // img{
            //     width:100%;
            // }
        }

        .qrcode-box {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 50%;
            height: 750px;
            width: 536px;
            padding: 60px;
            background: #ffffff;
            text-align: center;
            overflow: hidden;
            box-sizing: border-box;
            // box-shadow: 0px 0 20px #e4e4e4;

            .top {
                font-size: 16px;
                line-height: 22px;
                display: inline-block;
                width: 100%;
                color: #f00;
            }
            .qrcode {
                display: inline-block;
                width: 310px;
                min-width:310px;
                border: solid 1px #000000;
                img {
                    width: 100%;
                }
            }
            .bottom {
                font-size: 18px;
                background: #F9FFFF;
                border: 1px solid #D8F4F4;
                border-radius: 10px;
                padding: 8px 0;
                width:15vw;
                min-width:200px;
                max-width:272px;
                margin-top: 20px;
            }
            .media-deny {
                width: 200px;
                height: 337px;
            }
        }
    }
</style>
