<template>
<div class="themes" id="Themes">
	<div class="themes__wraper">
		<label>Default <span style="background-color: #1e2933;"></span><input type="radio" @click="themeChange('#1e2933')"></label>
		<label>Тема 1 <span style="background-color: #00E07E;"></span><input type="radio"  @click="themeChange('#00E07E')"></label>
		<label>Тема 2 <span style="background-color: #5B90FC;"></span><input type="radio" @click="themeChange('#5B90FC')"></label>
		<label>Тема 3 <span style="background-color:#FF5656 ;"></span><input type="radio" @click="themeChange('#FF5656')"></label>
		<label>Тема 4 <span style="background-color:#FCAC21;"></span><input type="radio" @click="themeChange('#FCAC21')"></label>
	</div>
</div>
</template>

<script>
import system from './modules/system.js';
export default {
	name:'Themes',
	methods:{
		themeChange(color){
			this.$store.dispatch('themeChange',color);
		}
	}
}
</script>

<style lang="scss">
	.themes{
		display: block;
		width: 100%;
		&__wraper{
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			width: 90%;
			margin: 0 auto;
			text-align: left;
			label span{
				display: inline-block;
				width: 15px;
				height: 15px;
				border-radius: 50%;
			}
		}
	}
</style>