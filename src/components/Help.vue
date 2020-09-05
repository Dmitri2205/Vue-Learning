<template>
<div id="Help" class="help">
	<h2>Нужна помощь?</h2>
	<h3>Часто задаваемые вопросы</h3>

		<ul>
			<li> <a href="#"> Lorem, ipsum dolor sit.</a></li>
			<li> <a href="#"> Lorem ipsum dolor.</a></li>
			<li> <a href="#"> Lorem, ipsum dolor sit amet consectetur.</a></li>
			<li> <a href="#"> Lorem ipsum, dolor sit. </a></li>
			<li> <a href="#"> Lorem ipsum dolor.</a></li>
			<li> <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing.</a></li>
		</ul>
	<h3>Опишите вашу проблему</h3>
	<div class="help__input_row">
		<div class="help__input_row-left">
	<p>Ваш email:</p><input type="text">
	<p>Тема:</p><input type="text">
	</div>
	<div class="help__input_row-right">
		<p>Описание проблемы:</p><textarea name="trouble" id="trouble" cols="30" rows="10" ></textarea>
	</div>
	</div>
	<button @click="a()">Отправить</button>
</div>
</template>

<script>
export default {
	name:'Help',
	methods:{
		a(){
			alert('send');
		}
	}

}
</script>

<style lang="scss">
	.help{
		display: block;
		width: 90%;
		margin: 0 auto;
		padding: 10px;
		background-color: lighten(#1e2933,20%);
		border-radius: 5px;
		color: white;
		animation:help .7s ease;
		h2,h3{
			text-align: left;
			width: 90%;
			margin:5px 25px;
		}
		
		ul{
			text-align: left;
			animation:ul .9s ease-in;
			@keyframes ul {
				0%,90%{
					opacity: 0;
				}100%{
					opacity: 1;
				}
			}
			li{
				margin: 15px auto;
				a{
					text-decoration: none;
					color: darken(white,25%);
					font-size: 18px;
					font-weight: bold;
					transition: color .65s;
					&:hover{
					color: white;
					}

				}
			}
		}
		@keyframes help {
			0%{
				height: 60px;
			}100%{
				height:55%;
			}
		}
		&__input_row{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			flex-wrap: wrap;
			width: 96%;
			height: 250px;
			padding: 0 2%;
			animation:ul 1.4s ease-in;
			&-left{
				display: block;
				width: 40%;
				margin-top: 40px;
				p{
					width: 30%;
					text-align: left;
					font-size: 20px;
					font-weight: bold;
					float: left;
					margin:10px 0;
				}
				input{
					width: 50%;
					height: 25px;
					margin-left: 5px;
					border-radius: 3px;
					border:none;
					margin:10px 0;
					font-size: 16px;
					&:focus{
						outline:none;
					}
				}
			}
			&-right{
				display: block;
				width: 50%;
				height: 100%;
				font-weight: bold;
				text-align: left;
				textarea{
					width: 90%;
					height: 75%;
					resize: none;
					border-radius: 4px;
					font-size: 18px;
					&:focus{
						outline:none;
					}
				}
			}
		}
		button{
			display: inline-block;
			width: 250px;
			height: 50px;
			background-color: transparent;
			border-radius: 3px;
			color: white;
			border:1px solid white;
			outline: none;
			font-size: 18px;
			margin: 20px auto;
		}
	}
</style>