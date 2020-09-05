<template>
<div class="panel" style="position:sticky;top:-1px;">
	<div class="panel__grid">
		<div class="panel__grid_top">Panel</div>
		<div class="panel__grid_left">
			<nav>
				<span @click="spanClick('Nav 1')">example nav 1 </span>
				<span @click="spanClick('Nav 2')">example nav 2 </span>
				<span @click="spanClick('Nav 3')">example nav 3 </span>
				<span @click="spanClick('Nav 4')">example nav 4 </span>
				<span @click="spanClick('Nav 5')">example nav 5 </span>
			</nav>
		</div>
		<div class="panel__grid_center">
			<table>
				<tbody>
					<tr>
						<td>id</td>
						<td>User id</td>
						<td>post title</td>
						<td>post body</td>
						</tr>
					<tr v-for='item in getPosts'> 
						<td>{{item.id}}</td>
						<td>{{item.userId}}</td>
						<td>{{item.title}}</td>
						<td>{{item.body}}</td>
						</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
</template>

<script>
export default{
	name:'Panel',
	computed:{
		getPosts(){
			console.log(this.$store.getters.posts);
		return this.$store.getters.posts;
		}
	},
	methods:{
		spanClick(value){
			alert(value);
		},
		fetchPosts(){
			this.$store.dispatch("fetchPosts");
		}
	},
	mounted(){
		this.fetchPosts();
	},
}

</script>

<style lang="scss">
	.panel{
		display: block;
		width: 100%;
		height: auto;
		&__grid{
		display: grid;
		width:100%;
		height: 100%;
		margin: 30px auto;
		border:1px solid black;
		box-sizing: border-box;
		grid-template-areas:"top top"
							"left  center";

		grid-template-columns: 20% 80%;
		grid-template-rows: 50px 1fr;
		animation:panel .7s ease-in-out;
		 &_top{
			display: block;
			width: 100%	;
			height:50px;
			grid-area: top;
			font-size: 25px;
			line-height:50px;
			font-family:'Krona One',sans-serif ;
			background-color: #1e2933;
			color: white;
		 }
		 &_left{
			display: block;
			width:100%;
			height: 100%;
			grid-area: left;
			background-color: #1e2933;
			font-family:'Krona One',sans-serif ;
			text-transform: capitalize;
			color: white;
			nav{
				display:flex;
				flex-direction: column;
				justify-content: space-around;
				width: 95%;
				height: 100%;
				margin:0;
				span{
				width: 90%;
				height: 30px;
				line-height: 30px;
				margin:-1px auto;
				text-decoration: none;
				color: white;
				transition: 1s;	
				box-sizing: border-box;
				border-radius: 5px;
					border:1px solid transparent;
				&:hover{
				transition: .6s;
				border:1px solid white;
				cursor:pointer;
				}
				}
			}
		 }
		 &_center{
		 display: block;
			width: 100%;
			height: auto;
			grid-area: center;	
			background-color:#1e2933;
			table{
				width: 100%;
				border-collapse: collapse;
				tr:first-child{
					text-transform: capitalize;
				}
				td{
				background-color:#1e2933;
					border:2px solid #38424C;
					color: black;
					text-align: left;
					color:white; 
					&:nth-child(2){
						width: 55px;
					}
				}
			}
		 }
			@keyframes panel{
				0%{
					transition: .7s;
					position: absolute;
					top: 0;
					left: -100%;
					z-index: -9999;
				}
				100%{
					transition: .7s;
					position: absolute;
					height: 100%;
					top: 0;
					left: 0;
				}
			}
		}	
	}
</style>