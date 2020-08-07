<template v-if="current === 'sales'">
	<div id="Sales" class="sales" >
		 <WraperTop/>
		 <WraperBottom/>
	</div>

</template>

<script>
import WraperTop from './modules/WraperTop.vue'
import WraperBottom from './modules/WraperBottom.vue'


export default{
	name:'Sales',
	components:{
		WraperBottom,
		WraperTop
	},
	computed:{
		current(){
			return this.$store.getters.currentScreen;
		}
	}
}
</script>