<template>
<div class="contacts">
	<div class="contacts__heading">
		<h3>Наши контакты:</h3>
		<p>Телефон:<a href="tel:8(999)999-99-99">8(999)999-99-99</a></p>
		<p>Email:<a href="mailto:mail@mail.ru">mail@mail.ru</a></p>
	</div>
	<div class="contacts__middle">
		<h3>Мы на карте:</h3>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d558.5788089676005!2d37.26061582928308!3d55.94390799878784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDU2JzM4LjEiTiAzN8KwMTUnNDAuMiJF!5e0!3m2!1sru!2sru!4v1597561450615!5m2!1sru!2sru"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
	</div>
</div>								
</template>

<script>
	export default{
		name:'Contacts',
	}

</script>

<style lang="scss">
.contacts{
	display: block;
	width: 90%;
	height: 93.6%;
	margin: 0 auto;
	padding: 0 5%;
	color: white;
	background-color: lighten(#1e2933,15%);
	&__heading{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 90%;
		margin: 0 auto;
		text-align: left;
		a{
			color: white;
			text-decoration: none;
			&:after{
				display: inline-block;
				content:'◄';
				transition: opacity .15s;
				opacity: 0;
				color: #17FD99;
			}
			&:hover{
				&:after{
					opacity: .5;
					animation:arrow 1.2s ease-in-out infinite;
					animation-delay: .15s;
					transition: opacity .5s;
					@keyframes arrow {
						0%{
							opacity: 1;
							margin-left: 0px;
						}50%{
							margin-left: 5px;
						}100%{
							opacity: 1;
							margin-left: 0px;
						}
					}
				}				
			}
		}
	}
	&__middle{
		display: block;
		width: 90%;
		margin: 0 auto;
		text-align: left;
		iframe{
			display: inline-block;
			width: 100%;
			height: 50vh;
			border:1px solid black;
			border-radius: 5px;
			margin: 30px auto;
		}
	}
}
</style>