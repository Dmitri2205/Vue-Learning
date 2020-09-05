<template>
	<div id="SideBar" class="sidebar" :style='[{backgroundColor:themeChange}]'>
		<div class="sidebar__heading">
			<!-- <span @click="menu()" >◄</span> -->
			<h2>Powered by</h2>
			<div class="sidebar__heading_powered">
			<img src="../assets/Vue.png" alt="Logo">
			<img src="../assets/VueX.png" alt="VueX Logo">
			</div>
		</div>
			<hr>
		<h4>Меню</h4>
		<ul>
			<li @click="change('panel')"  ><img src="../assets/panel.png" alt="Панель">Панель</li>
			<li @click="change('extensions')" ><img src="../assets/extensions.png" alt="Расширения">Расширения</li>
			<li @click="change('design')" ><img src="../assets/design.png" alt="Дизайн">Дизайн</li>
			<li @click="change('sales')" ><img src="../assets/sales.png" alt="Продажи">Продажи <span class='salesCount'>
			 {{activeProjects}} </span> </li>
			<li @click="change('customers')" ><img src="../assets/customers.png" alt="Покупатели">Покупатели</li>
			<li @click="change('marketing')" ><img src="../assets/marketing.png" alt="Маркетинг">Маркетинг</li>
			<li @click="change('system')" ><img src="../assets/system.png" alt="Система">Система</li>
		</ul>

	<hr>
		<div class="sidebar__support">
			<h4>Поддержка</h4>
			<ul>
				<li @click="change('help')"><img src="../assets/support.png" alt="Нужна помощь?">Нужна помощь?</li>
				<li @click="change('contacts')"><img src="../assets/contacts.png" alt="Контакты">Контакты</li>
			</ul>
			<h4>Настройки</h4>
			<ul>
				<li @click="change('settings')"><img src="../assets/settings.png" alt="Настройки">Настройки</li>
				<li @click="change('themes')"><img src="../assets/themes.png" alt="Темы">Темы</li>
				<li @click="logout('Вход не выполнен')"><img src="../assets/logout.png" alt="Выйти">Выйти</li>
			</ul>

		</div>

	</div>
</template>

<script>

	export default {
		name:'SideBar',
		computed:{
			activeProjects(){
				return this.$store.getters.activeProjects;
			},
			themeChange(){
				return this.$store.getters.theme;
			},
			userGet(){
				return this.$store.getters.user;
			}
		},
		methods:{
			change(value){
				this.$store.dispatch('screenSwitch',value);
			},
			logout(string) {
				if (this.userGet === string) {
					alert("Вы не авторизованы");
				}else{
				let result = confirm('Выйти?');
					if (result) {
						this.$store.dispatch('logout',string);
						alert('Вы вышли из системы');
					}else{
						return;
					}
				}
			},
			menu(){
				const sidebar = document.getElementById('SideBar');
				console.log(sidebar);
				const main = document.getElementById('mainScreen');
				console.log(main);
				sidebar.style.left = '-250px';
				main.style.margin = '0 auto';
			}
		}
	}

</script>

<style lang="scss">
	#SideBar {
		display:block;
		width:400px;
		height:100vh;
		background-color:#1e2933;
		position:relative;
		top:0;
		left:0;
		z-index:9999;
		color:white;
		h4{
		width:90%;
		margin:20px auto;
		text-align:left;
		color:#9ba4b0;
		text-transform:uppercase;
		margin-top:30px;
		}
		hr{
		border:0.010em solid #576774;
		}
		ul{
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		width:100%;
		padding: 0;
		list-style: none;	
			li{
			display:flex;
			flex-direction:row;
			justify-content:flex-start;
			width:90%;
			font-size:.9em;
			margin:5px auto;
			padding:5px;
			text-align:left; 
			line-height:25px;
			transition:600ms;
			&:hover{
			background-color:#576774;
			border-radius:5px;
			box-sizing:inherit;
			transition:600ms;
			cursor:pointer;
			}
				img{
				display:inline-block;
				margin:auto 10px;
				width:auto;
				height:auto;
				}
				span{
					font-weight:bold;
					margin-left:auto;
					width:25px;
					height:25px;
					line-height:27px;
					text-align:center;
					border-radius:50%;
					background-color:white;
					color:black;
				}
		}
	}
}
.sidebar__heading{
			display:block;
			width:100%;
			height:130px;
			font-family: 'Krona One', sans-serif;
			&_powered{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 40%;	
				margin: 0 auto;
				img{
					display: block;
					width: 60px;
					height: 50px;
					margin: auto;
					position: relative;
					top: 0;
					left: 0;
				}
			}
		}
</style>