<template >
<div class="extensions" id="Extension" >
	<div class="extensions__wraper">
		<div  v-for='(item,index) in getPosts' :class="'extensions__wraper_item'+index" >
			<span class="item-image"></span>
			<h5>{{item.title}}</h5>
			<p>{{item.body}}</p>
		</div>
	</div>
	</div>
</div>

</template>

<script>

export default{
	name:'Extensions',
	computed:{
		getPosts(){
		return this.$store.getters.posts;
		}
	}
}
</script>

<style lang="scss">
.extensions{
	display:block;
	width: 100%;
	height: 90.52%;
	background-color:#1e2933;
	&__wraper{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 90%;
		margin: 10px auto;
		@for $i from 0 through 7 {
			&_item#{$i}{
				width: 21%;
				height:auto;
				margin:20px auto;
				border:1px solid black;
				border-radius: 5px;
				background-color: white;
				animation:scale .65s ease-in;
				animation-delay:(#{$i}10ms);
				@keyframes scale {
					0%{
					display: none;
					transform: scale(0);
					visibility: hidden;
					}
					70%{
					display: none;
					transform: scale(0.8);
					visibility: hidden;

					}
					100%{
					display: block;
					transform: scale(1);
					}	
				}
			
				.item-image{
				display: block;
				width: 100%;
				height: 130px;
				background: url("../assets/extensions/ext"+"#{$i}"+".png") top no-repeat; //Один из способов реализации.Другой пример можно увидеть во вкладке "Покупатели"
				background-size: contain;
				border-radius: 5px;

				}
				h5{
					width:90%;	
					margin:5px auto;
					text-transform: capitalize;
				}
				p{
					width:90%;	
					margin:5px auto;
					text-align: left;
					text-transform: capitalize;
				}
			} 
		}
		}
	}

</style>