<template>
	<div id="mainScreen" class="mainScreen">
			<div class="headingRow">
				<span></span>
				<p>John Doe</p>
				<img src="../assets/avatar.png" alt="avatar">
			</div>
			<transition name="slide-fade">

			<Sales v-if="current === 'sales'" style="position:sticky;top:0;"/>
			<Extensions v-if="current === 'extensions'"/>
			<Panel v-if="current === 'panel'" />
			<Design	v-if="current === 'design'"/>
			<Customers v-if="current === 'customers'"/>
			</transition>
		</div>
</template>

<script>

import Sales from './Sales.vue'
import Extensions from './Extensions.vue'
import Panel from './Panel.vue'
import Design from './Design.vue'
import Customers from './Customers.vue'


export default{
	name:'MainScreen',
	components:{
		Sales,
		Extensions,
		Panel,
		Design,
		Customers
	},
	computed:{
		current(){
				return this.$store.getters.currentScreen;
		}
	}
};
</script>

<style lang="scss">
	
	.mainScreen{
		display: block;
		width: 100%;
		color:black;
		background-color: #f9f9fa;			
		.headingRow{
			display:flex;
			flex-direction:row;
			justify-content:flex-end;
			width:100%;
			margin:20px 0;
			padding: 0;
			line-height: 20px;
			background-color: white;			
			p{
				font-size: 20px;
				font-weight: bold;
			} 
			span{
				display: inline-block;
				content:url('../assets/arrowDown.png');
				width: 16px;
				height: 8px;
				margin: auto 10px;
			}
			img{
				width: 40px;
				height:40px;
				margin:10px;
			}
		}
			.slide-fade-enter-active {
			  transition: all 1s ease;
			}
			.slide-fade-leave-active {
			  transition: all .6s cubic-bezier(1.0, 0.8, 0.5, 1.0);
			  opacity: 1;
			}
			.slide-fade-enter, .slide-fade-leave-to
			/* .slide-fade-leave-active до версии 2.1.8 */ {
			  transform: translateX(10px);
			  opacity: 0;
			}
	}



</style>