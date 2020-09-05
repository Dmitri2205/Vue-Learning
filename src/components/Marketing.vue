<template>
<div id="Marketing" class="marketing">
		<h3>Маркетинг</h3>

		<div class="marketing__top">
			<div id="linechart" ></div>
		</div>
		<div class="marketing__middle">
			<div id="piechart" ></div>
			<div id="scatter" ></div>
		</div>	
</div>

 		

</template>

<script>
	import chart from './modules/chart.js';
	import lineChart from './modules/lineChart.js';
	import scatter from './modules/scatter.js';
export default{
	name:'Marketing',
	 mounted(){
		lineChart();
	 	setTimeout(()=>{
		chart();
	 	},350)
			setTimeout(()=>{
				scatter();
		 	},550)
	}

}

</script>

<style lang="scss">
	.marketing{
		display: block;
		width: 100%;
		&__top{
			display: block;
			width: 100%;
			margin-bottom: 20px;
			animation:charts .8s ease;
			transition: .8s scale;
		}
		&__middle{
			display: flex;
			flex-direction: row;
			justify-content:flex-start;
			width: 95%;
			margin: 0 auto;
			#piechart{
				display: block;
				width: 40%;
				animation:charts .8s ease;
				animation-delay: .3s;
				transition: .8s scale;
			}
			#scatter{
				width: 60%;
				animation:charts .8s ease;
				animation-delay: .5s;
				transition: .8s scale;
				.marks{
					width: 100%;
					height: inherit;
				}
			}
		}
		@keyframes charts{
			0%{
				transform: scale(0);
			}100%{
				transform: scale(1);

			}
		}
	}
</style>