<template>
    <transition-group name="taglist-moving-animation" mode="out-in">
        <iframe :key='src' :src="src" style="border: 0; width: 100%; height: 100%;"></iframe>
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
    }
}
</script>