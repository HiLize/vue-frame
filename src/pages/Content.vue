<template>
    <iframe :src="src" style="border: 0; width: 100%; height: 100%;"></iframe>
</template>

<script>
export default {
    components: {
    },
    data () {
    	return {
            menuList: this.$store.state.menu.menuList,
    		src: ''
    	}
    },
    watch: {
        '$route' (to, from) {
            this.buildSrc(to)
        }
    },
    created () {
        this.buildSrc(this.$route)
    },
    methods: {
        buildSrc (route) {
            if (typeof this.menuList !== 'undefined') {
                let menuList = this.menuList
                for (let i = 0; i < menuList.length; i++) {
                    for (let j = 0; j < menuList[i].children.length; j++) {
                        if (route.params.module === menuList[i].children[j].name) {
                            this.src = menuList[i].children[j].path
                            document.title = menuList[i].children[j].title // 修改body title的值
                            break
                        }
                    }
                }
            }
        }
    }
}
</script>