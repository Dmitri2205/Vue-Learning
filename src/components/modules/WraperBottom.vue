<template>
	<div class="wraperBottom">
		<div class="wraperBottom__left">
			<h4>На карте</h4>
			<!-- <div id="regions_div"></div> -->
			<img src="../../assets/map.png" alt="map">
		</div>
		<div class="wraperBottom__right" >
			<img src="../../assets/supportImage.png" alt="support">
			<h4>Нужна помощь?</h4>
			<p>Есть ли у вас проблемы при использовании программы?</p>
			<span @click="support" >Напишите нам</span>
		</div>
	</div>
</template>

<script>
// import map from "./map.js";
	export default{
		name:'WraperBottom',
		mounted(){
				// map();
		},
		methods:{
			support(){
				alert("Support window must apear")
			}
		}	
	}
</script>

<style lang="scss">

@mixin pseudoStyle{
	display: inline-block;
	content:' ';
	width: 20px;
	height:3px;
	background-color: white;
	border-radius: 2px;
	
}

	.wraperBottom{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 95%;
		margin:auto;
		padding: 20px;
		text-align:left; 
		h4{
			margin: 10px 0;
			margin-left: 20px;
		}
		p{
			width: 50%;
			margin:0 0 0 20px;
			color: #a0a0a0;
			font-size: 12px;
		}
		img{
			width: 90%;
			margin: 10px auto;
		} 
		&__left{
			display: block;
			width: 55%;
			border:1px solid black;
			border-radius:5px;
			background-color: white;
		}
		&__right{
			display: block;
			width: 40%;
			border:1px solid black;
			border-radius:5px;
			p{
				margin: 10px 0 10px 20px;
			}
			span{
				display: inline-block;
				width: auto;
				height: 20px;
				line-height: 20px;
				margin:5px 0 5px 20px;
				padding: 5px;
				border-radius: 5px;
				background-color: #6672fb;
				color: white;
				&:hover{
					cursor: pointer;
				}
			} 
		}
		// &__supportWindow{
		// 	display: block;
		// 	width: 50%;
		// 	height: 50%;
		// 	position: absolute;
		// 	top: 25%;
		// 	left: 25%;
		// 	margin: auto;
		// 	text-align: center;
		// 	line-height: 10rem;
		// 	border: 1px solid black;
		// 	background-color: #576774;
		// 	span{
		// 		display: inline-block;
		// 		width:30px;
		// 		height:30px;	
		// 		position: absolute;
		// 		top: 20px;
		// 		right: -270px;
		// 		&:before{
		// 		@include pseudoStyle;
		// 		transform: rotateZ(45deg);
		// 		}
		// 		&:after{
		// 			@include pseudoStyle;
		// 			transform: rotateY(-45deg);
		// 		}
		// 	}
		// }
	}

</style>