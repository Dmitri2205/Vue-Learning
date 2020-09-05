<template>
<div class="settings" id="Settings" :style="[{fontSize:range+'px',fontFamily:fontFamily,color:option}]">
	<h3>Settings</h3>
	<div class="settings__top">
		<ul>
			<li><p>Параметр 1</p><input type="checkbox" value="Param1" v-model="checkedParams" ></li>
			<li><p>Параметр 2</p><input type="checkbox" value="Param2" v-model="checkedParams" ></li>
			<li><p>Пареметр 3</p><input type="checkbox" value="Param3" v-model="checkedParams"></li>
			<li><p>Параметр 4</p><input type="checkbox" value="Param4" v-model="checkedParams"></li>
			<li><p>Параметр 5</p><input type="checkbox" value="Param5" v-model="checkedParams"></li>
			<li><p>Параметр 6</p><input type="checkbox" value="Param6" v-model="checkedParams"></li>
		</ul>
	</div>
	<div class="settings__middle">
		<div class="settings__middle_item" v-for="param in checkedParams" v-if="param === 'Param1'">
			<h3 >Список опций 1</h3>
			<select name="test1" id="item1" v-model="option">
				<option disabled value="0"> Выберите цвет	</option>
				<option value="white">Без цвета	</option>
				<option value="#FE6969"> red	</option>
				<option value="#5A5AFC"> blue	</option>
				<option value="yellow"> yellow	</option>
				<option value="#2EFF2E"> green	</option>
				<option value="cyan"> cyan	</option>
			</select>
		</div>
		<div class="settings__middle_item"  v-for="param in checkedParams" v-if="param === 'Param2'">
			<h3 :style="[{fontFamily}]">Список опций 2</h3>
			<select name="test1" id="item2" v-model="fontFamily">
				<option value="0" disabled>Выберите шрифт</option>
				<option value="Arial" >Шрифт по умолчанию</option>
				<option value="Roboto" >Roboto</option>
				<option value="Open Sans" >Open Sans</option>
				<option value="Montserrat" >Montserrat</option>
				<option value="Pacifico" >Pacifico</option>
			</select>
		</div>

		<div class="settings__middle_item"  v-for="param in checkedParams" v-if="param === 'Param3'">
			<h3 :style="[{fontSize:range+'px'}]">Параметр 3</h3>
			<input type="range" min="16" max="32" v-model="range"><span style="float: right;">{{range}}</span>
		</div>
		
		<div class="settings__middle_item"  v-for="param in checkedParams" v-if="param === 'Param4'">
			<h3 >Параметр 4</h3>
			<input type="range" min="0" max="360" v-model="degree"><span style="float: right;">{{degree}}</span>
			<br>
			<span class="rotate" :style="{transform:'rotateZ('+ degree+'deg)',lineHeight:'90px'}"></span>
		</div>

		<div class="settings__middle_item"  v-for="param in checkedParams" v-if="param === 'Param5'">
			<h3 >Параметр 5</h3>
			<input type="range" min="0" max="60" v-model="radius"><span style="float: right;" step="0.10">{{radius}} px</span>
			<div :style="[{borderRadius:radius+'px'}]" class="float">
			Floating window
			</div>
		</div>
		
		<div class="settings__middle_item item4"  v-for="param in checkedParams" v-if="param === 'Param6'">
			<h3 >Параметр 6</h3>

		</div>
		

	</div>											
</div>
</template>

<script>
export default {
	name:'Settings',
	data(){
		return{
			checkedParams:['Param1','Param2','Param3'],
			option:'0',
			fontFamily:'0',
			range:16,
			degree:0,
			radius:''
		}
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

@mixin checkbox_mixin{
	display: inline-block;
	content: " ";
	width:100%;
	height:3px;
	background-color:#FE2F2F;
	font-size: 20px;
	font-weight: bold;
	color: red;
	position: absolute;
	top:45%;
	left: -1%;
	border-radius: 5px;
	margin: auto;
}



.settings{
	display: block;
	width: 100%;
	background-color: #445d73;
	color: white;
	&__top{
	display: block;
	width: 50%;
		ul{
			padding: 0;
			margin: 0 0 0 10px;
			text-align: left;
			list-style: none;
			font-size: inherit;
			li{
				display::inline-flex;
				width: 100%;
				line-height: 20px;
				font-size: inherit;
				p{
					font-size: 18px;
					font-weight: bold;
					width: 30%;
				}
				input{
					display: inline-block;
					margin:auto 0; 
					text-align: left;
					height: 20px;
					width: 20px;
					position: relative;
					&:before{
					@include checkbox_mixin;	
						transform: rotateZ(-45deg);
					}
					&:after{
						@include checkbox_mixin;
						transform: rotateZ(45deg);
					
					}
					&[type="checkbox"]:checked{
						width: 20px;
						height: 20px;
						transition: all 1s;
						&:after,&:before{
							display: none;
						}
					}
				}	
			}
		}
	}
	&__middle{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		width: 100%;
		&_item{
			display: block;
			width: 25%;
			text-align: left;
			padding: 10px;
			border:1px solid black;
			box-sizing: border-box;
			animation: item 0.6s ease-in-out;
			transition:all 0.6s;
			@keyframes item {
				0%{
					visibility: hidden;
					opacity: 0;
				}100%{
					transition: 0.6s;
					visibility: visible;
					opacity: 1;
				}
				
			}
			h3{
				margin: 10px auto;
			}
			input{
				margin:3% auto;
			}
			select{
				display: inline-block;
				width: 100%;
				height: 30px;
				outline:none;
				border-radius: 5px;
				margin: 0 auto;
				font-size: 18px;
			}
			.float{
				display: block;
				width: 150px;
				height:150px;
				background-color: #3e3e3e;
				margin: auto;
				line-height:150px;
				text-align: center;
			}
		}
		.rotate{
			display: inline-block;
			width: 100px;
			height: 100px;
			background-color:black;
			border-radius:50%;
			position: relative;
			top: 50%;
			left: 0;
			&:after{
				display: inline-block;
				content: '';
				width: 50px;
				height: 2px;
				background-color: white;
				position: absolute;
				top:0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto 0;
			}
		}
	}
}

</style>