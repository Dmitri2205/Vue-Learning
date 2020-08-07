<template>
	<div id="Customers" class="customers">
		<div  class="customers__wraper">
			<div v-for="customer in getCustomers" class="customers__wraper_item">
			<img :src="customer.img" alt="customer">
			<h3>Name:{{customer.name}}</h3>
			<h3>Lastname:{{customer.lastName}}</h3>
			<h2>Customer ID:{{customer.id}}</h2>
			<p>Customer info:
				<br>
			{{customer.info}}
			</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Customers',
		computed:{
			getCustomers(){
				return this.$store.getters.customers;
			}
		}
	}
</script>

<style lang="scss">
	.customers{
		display: block;
		width: 100%;
		&__wraper{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			flex-wrap: wrap;
			width: 95%;
			margin: 30px auto;
			&_item{
				display: block;
				width:30%;
				min-height: 200px;
				margin: 10px;
				background-color:lighten(#576774,5%);
				text-align: left;
				border-radius: 5px;
				img{
					width: 80px;
					height:80px;
					float: left;
					margin: 10px;
					border-radius: 50%;
				}
				>h3,h2,p{
					margin-left: 10px;
				}
			}
		}
	}
</style>