<template>
				<div class="wraperTop">

				<div class="wraperTop__left">
				
					<p>Аналитика продаж <span>90</span> </p>
					<br>
					<p>Активных проектов <span style="color:#8b94fb;font-size: 20px">{{activeProjects}} проектов</span>	
						<select name="left__select" v-model="selected">

							<option value="month">Месяц</option>		
							<option value="week">Неделя</option>		
							<option value="day">День</option>		
						</select> 
						</p>
							<div v-if="selected === 'month'" id="Graph" class="graph">
							<img src="../../assets/diagrams.png" alt="graphs">
							<ul class="graph__markers" >
									<li><span class="next"></span>Предстоящие</li>
									<li><span class="inProcess"></span>В процессе</li>
									<li><span class="finished"></span>Завершённые</li>
								</ul>	
							</div>
							<div v-else class="left__noData">No {{selected}} data </div>		
						

				</div>
				
				<div class="wraperTop__right">

						<div class="wraperTop__right-item">
							<h2>Заказы</h2>
							<h2>1.7K</h2>
							<p>Подробнее</p>
						</div>
						<div class="wraperTop__right-item">
							<h2>Распроджа</h2>
							<h2>24.5K</h2>
							<p>Подробнее</p>
						</div>
						<div class="wraperTop__right-item">
							<h2>Онлайн</h2>
							<h2>17.7K</h2>
							<p>Подробнее</p>
						</div>
						<div class="wraperTop__right-item">
							<h2>Общие</h2>
							<h2>43.6K</h2>
							<p>Подробнее</p>
						</div>
				</div>
			
			</div>
</template>

<script>

	export default{
		name:'WraperTop',
		computed:{
			activeProjects(){
				return this.$store.getters.activeProjects;
			}
		},
		data(){
			return {
				selected:'month',
			}
		},
	}
</script>

<style lang="scss">
			.wraperTop{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 95%;
				margin: 0 auto;
				padding-bottom:20px; 

			&__left{
				display: block;
				width: 50%;
				height: auto;
				padding: 0 20px;
					.graph{
					 	display:block;
					 	width: 100%;
					 	height: 73%;
					 	animation:graphs .5s ease-in;
						transition: .5s;
						position: relative;
						 	img{
						 		width: 100%;
					 			height: 226px;
						 		opacity: 1;
						 		animation:graph .5s ease-in-out;
						 		@keyframes graph{
						 			0%{
						 				height:0;
						 			}25%{
						 				opacity: .5;
						 			}50%{
						 				opacity: .8;
						 			}75%{
						 				opacity: .8;
						 			}100%{
						 				opacity: 1;
						 				height: 226px;
						 			}
						 			
						 		}
						 	}
					 	&__markers{
				 			display: flex;
				 			flex-direction: row;
				 			justify-content: space-between;
				 			width: 90%;
				 			margin: 15px auto 0 auto;
				 			padding: 0;	
				 			list-style: none;
				 			li{
				 				display: inline-flex;
				 				border: 1px solid #C7C6C6;
				 				border-radius: 5px;
				 				padding: 3px 5px;
				 				@each $class, $color in (next,blue),
				 										(inProcess,yellow),
				 										(finished,#C7C6C6){
					 				.#{$class}{
					 					display: inline-block;
										width: 6px;
										height: 6px;
										background-color: $color;
										margin:auto 5px;
										border-radius: 50%;
									}
				 				}
				 			} 
				 		}
					 }
				.left__noData{
					display: block;
					width: 100%;
					height: 250px;
					line-height: 250px;
					background-color:lighten(#1e2933,15%);
					color: white;
					font-size: 25px;
					font-family:"Krona One", sans-serif ;
					margin:25px auto;
					border-radius: 5px;
					animation:graphs .5s ease-in;
					transition: .5s;
					position: relative;

				}
				@keyframes graphs{
					0%,95%{
						visibility: hidden;
					}100%{
						visibility: visible;
					}
				}
					p{
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 90%;
						height: 30px;
						margin: 0;
						text-align: left;
						font-size: 20px;
						&:nth-child(3){
							margin-bottom: 20px;
						}
						span{
							font-weight: bold;
							font-size: 25px;
						}
					}
					select{
						display: inline-block;
						width: 120px;
						text-align: right;
						background: url('../../assets/calendar.png') no-repeat;
						background-position: 12px 5px;
						padding-left: 35px;
						border-radius: 5px;
						border:1px solid #C8C8C8;
						outline: none;
						option{
							width: 100%;
							padding-left: 0;
						}
					}
				}
			&__right{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				flex-wrap: wrap;
				width: 50%;
				color: white;
				font-size: 25px;
				h2{
					margin: 15px auto;
				}
				p{
					margin: 10px auto;
				}
				&-item{
					display: block;
					width: 46%;
					max-height:450px;
					background-color: #7faaf8;
					margin:0.2em auto;
					border-radius: 5px;
					text-align: left;
					padding: 5px;
				}
			}
			.fade-enter-active, .fade-leave-active {
			  transition: opacity .3s;
			}
			.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
			  opacity: 0;
			}
}

</style>