<template>
	<div id="Design" class="design">
		<div class="design__row">
			<div class="design__row_item">
				<img src="https://themes.getbootstrap.com/wp-content/uploads/2018/05/front-preview-screenshot1-1200x900.jpg" alt="design item1">
			</div>
			<div class="design__row_item">
				<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/03/ThumbnailGridExpandingPreview.jpg" alt="design item2">
			</div>
			<div class="design__row_item">
				<img src="https://webdesigntips.blog/wp-content/uploads/2018/10/Top-5-Graphic-Design-Trends-of-2018-a-Preview-of-2019.jpg" alt="design item3">
			</div>
			<div class="design__row_item">
				<img src="https://themeforest.img.customer.envatousercontent.com/files/257111900/00_preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=3a0c2ad5a9e78366a325b6e7cf9eeca6" alt="design item4">
			</div>
			<div class="design__row_item">
				<img src="https://mir-s3-cdn-cf.behance.net/projects/404/21280343.5464a209ec465.png" alt="design item5">
			</div>
			<div class="design__row_item">
				<img src="https://cms-assets.tutsplus.com/uploads/users/2205/posts/32464/image/4%20-%20Preview.jpg" alt="design item6">
			</div>
			<div class="design__row_item">
				<img src="https://thepreviewapp.com/wp-content/uploads/2020/01/free-instagram-carousel-templates-11.jpg" alt="design item7">
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'Design',
}

</script>

<style lang="scss">	
.design{
	display: block;
	width: 100%;
	&__row{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 95%;
		height: 90vh;
		margin: 0 auto;
		flex-wrap: wrap;
		overflow-y: scroll;
		&_item{
			display: block;
			width: 48%;
			margin: 10px;
			box-sizing: border-box;
			box-shadow: 5px 5px 5px #576774;
			transition:transform .5s;
			&:hover{
				transition:transform .5s;
				transform: scale(1.03);
				cursor: pointer;
			}
			img{
				width:100%;
				height: 300px;
			}
		}
	}	
}
	::-webkit-scrollbar{
		  background-color:#969696;
		  border-radius: 10px;
		  width: 10px;
		&-thumb{
			width: 10px;
			background-color:#006BAF;
		  	border-radius: 10px;
		}
	}



</style>