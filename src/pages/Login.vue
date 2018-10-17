<template>
    <iframe :src="src" style="border: 0; width: 100%; height: 100%;"></iframe>
</template>

<script>
export default {
    components: {
    },
    data () {
    	return {
    		src: 'http://www.baidu.com/'
    	}
    },
    watch: {
        '$route' (to, from) {
            console.log(to, from)
            if (to.name === 'crosstalkcheck') {
            	this.src = `http://www.baidu.com/`
            } else {
            	this.src = 'http://www.baidu.com/'
            }
            
        }
    }
}
</script>


