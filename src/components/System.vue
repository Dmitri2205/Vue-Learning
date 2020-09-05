<template>
<div class="system" id="System">
	<div id="wordtree_basic"></div>
</div>
</template>

<script>
import system from './modules/system.js';
export default {
	name:'System',
	mounted(){
		system();
	}
}
</script>

<style lang="scss">

</style>