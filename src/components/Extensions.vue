<template >
<div class="extensions" id="Extension" >
	<div class="extensions__wraper">
		<div  v-for='(item,index) in getPosts' class="extensions__wraper_item" >
			<img :src="item.img" alt="item.id" class="item-image">
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
	},
	methods:{
		fetchPosts(){
			this.$store.dispatch("fetchPosts");
		}
	},
	mounted(){
		this.fetchPosts();
	}
}
</script>

<style lang="scss">
.extensions{
	display:block;
	width: 100%;
	height: auto;
	&__wraper{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 90%;
		margin: 10px auto;
		animation:extensions .3s ease-in;
		transition: .3s;
		@keyframes extensions{
			0%{
				visibility: hidden;
			}
			100%{
				visibility: visible;
			}
		}

			&_item{
				width: 23%;
				height:auto;
				margin:20px auto;
				border:1px solid black;
				border-radius: 5px;
				background-color: white;
				animation:scale .3s ease-in;
				box-shadow: 5px 5px 5px #576774;
				.item-image{
				display: block;
				width: 100%;
				height: 130px;
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
			} 
		}
	}

</style>