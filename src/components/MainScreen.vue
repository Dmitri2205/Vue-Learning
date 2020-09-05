<template>
	<div id="mainScreen" class="mainScreen">
			<div class="headingRow">
				<span @click='arrowMenuAction()'></span>
				<p @click="login()">{{user}}</p>
				<img src="../assets/avatar.png" alt="avatar">
				<!-- <div v-bind:class="{arrowMenu : isActive}">
					<ul>
						<li @click='arrowMenuClick("info")'>Инфо</li>
						<li @click='arrowMenuClick("settings")'>Настройки</li>
						<li @click='arrowMenuClick("help")'>Помощь</li>
						<li @click='arrowMenuClick("contacts")'>Контакты</li>
					</ul>
				</div> -->
			</div>
			<Sales v-if="current === 'sales'" style="position:sticky;top:0;"/>
			<Extensions v-if="current === 'extensions'"/>
			<Panel v-if="current === 'panel'" />
			<Design	v-if="current === 'design'"/>
			<Customers v-if="current === 'customers'"/>
			<Marketing	v-if="current === 'marketing'"/>
			<System	v-if="current === 'system'"/>
			<Help	v-if="current === 'help'"/>
			<Contacts	v-if="current === 'contacts'"/>
			<Settings	v-if="current === 'settings'"/>
			<Themes	v-if="current === 'themes'"/>
		</div>
</template>

<script>

import Sales from './Sales.vue'
import Extensions from './Extensions.vue'
import Panel from './Panel.vue'
import Design from './Design.vue'
import Customers from './Customers.vue'
import Marketing from './Marketing.vue'
import System from './System.vue'
import Help from './Help.vue'
import Contacts from './Contacts.vue'
import Settings from './Settings.vue'
import Themes from './Themes.vue'


export default{
	name:'MainScreen',
	components:{
		Sales,
		Extensions,
		Panel,
		Design,
		Customers,
		Marketing,
		System,
		Help,
		Contacts,
		Settings,
		Themes
	},
	data:()=>{
		return{
		isActive:false,
		}
	},
	computed:{
		current(){
				return this.$store.getters.currentScreen;
		},
		user(){
			return this.$store.getters.user;
		}
	},
	methods:{
		arrowMenuAction(){
			console.log(isActive);
		},
		arrowMenuClick(value){
			alert(value);
		},
		login(){
				const userName = prompt('Введите имя');
				const password = prompt('Пароль           (admin123)');
				if (password !== 'admin123') {
					alert('Упс....пароль не подошёл')
				}else{
				this.$store.dispatch('login',userName);
				}
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
			margin:0;
			padding: 0;
			line-height: 20px;
			background-color: white;
			position: relative;
			.arrowMenu{
				display: block;
				width: 10%;
				position: absolute;
				top: 100%;
				right: 3%;
				background-color: #fff;
				z-index: 9999;
				border: 1px solid #2e2e2e;
				border-bottom-left-radius:10px;
				border-bottom-right-radius:10px;
				ul{
					list-style: none;
					padding: 0;
					text-align: left;
					li{
						width: 90%;
						margin: 5px auto;
						cursor: pointer;
					}
				}
			}
			.visibleinActive{
				display: none;
			}
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
	}



</style>