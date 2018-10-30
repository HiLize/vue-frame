<template>
    <transition-group name="taglist-moving-animation" mode="out-in">
        <iframe :key='src' :src="src" style="border: 0; width: 100%; height: 100%;" @load='onload'></iframe>
    </transition-group>
</template>

<script>
export default {
    components: {
    },
    data () {
    	return {
    		src: ''
    	}
    },
    computed: {
    },
    watch: {
        '$route' (to, from) {
            this.src = to.meta.path
        }
    },
    created() {
        this.src = this.$route.meta.path
    },
    methods: {
        onload () {
            let that = this
            window.addEventListener('message',function(e){
                // 跨域iframe页面调用此方法
                console.log(e, 'parent addEventListener');//{data:'params'}
                // that.$router.push('/login')
            });
        }
    }
}
</script>