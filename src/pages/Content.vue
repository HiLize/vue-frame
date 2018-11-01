<template>
    <div style="height: 100%;">
        <!-- 加载动画 -->
        <div v-if="isLoading" class="demo-spin-col" key="loading">
            <Spin fix size="large">
                <Icon type="ios-loading" size=30 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </div>
        <!-- iframe onload后false加载动画 -->
        <transition-group name="taglist-moving-animation" mode="out-in">
            <iframe :key='src' :src="src" style="border: 0; width: 100%; height: 100%;" @load='onload'></iframe>
        </transition-group>
    </div>
</template>

<script>
export default {
    components: {
    },
    data () {
    	return {
            src: '',
            isLoading: false
    	}
    },
    computed: {
    },
    watch: {
        '$route' (to, from) {
            this.src = to.meta.path
        }
    },
    updated () {
        this.isLoading = true
    },
    created() {
        this.src = this.$route.meta.path
        this.isLoading = true
    },
    methods: {
        onload () {
            this.isLoading = false
            let that = this
            window.addEventListener('message',function(e){
                // 跨域iframe页面调用此方法
                // console.log(e, 'parent addEventListener');//{data:'params'}
                // that.$router.push('/login')
            });
        }
    }
}
</script>

<style lang="less" scoped>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100%;
        position: relative;
        border: 1px solid #eee;
    }
</style>
