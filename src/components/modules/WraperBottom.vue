<template>
	<div class="wraperBottom">
		<div class="wraperBottom__left">
			<h4>На карте</h4>
			<img src="../../assets/map.png" alt="map">
		</div>
		<div class="wraperBottom__right" >
			<img src="../../assets/supportImage.png" alt="support">
			<h4>Нужна помощь?</h4>
			<p>Есть ли у вас проблемы при использовании программы?</p>
			<span>Напишите нам</span>
		</div>
	</div>
</template>

<script>

	export default{
		name:'WraperBottom'	
	}
</script>

<style lang="scss">
	.wraperBottom{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 95%;
		margin: 50px auto;
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
			} 
		}

	}

</style>