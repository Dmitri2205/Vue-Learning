<template>
	<div id="Design" class="design">
		<div class="design__row">
			<div class="design__row_item">
				<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/03/ThumbnailGridExpandingPreview.jpg" alt="design item1">
			</div>
			<div class="design__row_item">
				<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/03/ThumbnailGridExpandingPreview.jpg" alt="design item2">
			</div>
			<div class="design__row_item">
				<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/03/ThumbnailGridExpandingPreview.jpg" alt="design item3">
			</div>
			<div class="design__row_item">
				<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/03/ThumbnailGridExpandingPreview.jpg" alt="design item4">
			</div>
			<div class="design__row_item">
				<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/03/ThumbnailGridExpandingPreview.jpg" alt="design item5">
			</div>
			<div class="design__row_item">
				<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/03/ThumbnailGridExpandingPreview.jpg" alt="design item6">
			</div>
			<div class="design__row_item">
				<img src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/03/ThumbnailGridExpandingPreview.jpg" alt="design item7">
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
		display: flex;flex-direction: row;justify-content: space-between;
		width: 90%;
		margin: 0 auto;
		flex-wrap: wrap;
		&_item{
			display: block;
			width: 48%;
			margin: 10px;
			box-sizing: border-box;
			img{
				width:100%;
				height: auto;
			}
		}
	}	
}



</style>