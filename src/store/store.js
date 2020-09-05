import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		activeProjects:13,
		currentScreen:sessionStorage.getItem('lastScreen'),
		posts:' ',
		extensions:[
		"static/extensions/ext0.png",
		"static/extensions/ext1.png",
		"static/extensions/ext2.png",
		"static/extensions/ext3.png",
		"static/extensions/ext4.png",
		"static/extensions/ext5.png",
		"static/extensions/ext6.png",
		"static/extensions/ext7.png",
		],
		customers:[
		{id:2037620717,name:'Chester',lastName:'Benington',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar1.png'},
		{id:31,name:'Mathew',lastName:'Tuck',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar3.png'},
		{id:42,name:'Michael',lastName:'Padget',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar2.png'},
		{id:57,name:'Jamie',lastName:'Mathias',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar4.png'},
		{id:29,name:'Jason',lastName:'Bowld',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar2.png'},	
		],
		theme:'',
		user:'John Doe'
	},
	getters:{
		activeProjects:state=>{
			return state.activeProjects;
		},
		currentScreen:state=>{
			return state.currentScreen;
		},
		posts:state=>{
			return state.posts;
		},
		extension:state=>{
			return state.extensions;
		},
		customers:state=>{
			return state.customers;
		},
		theme:state=>{
			return state.theme;
		},
		user:state=>{
			return state.user;
		}
	},
	
	actions:{
		screenSwitch(ctx,value){
			ctx.commit('screenChange',value );
				sessionStorage.setItem('lastScreen', value)
				if (value === 'extensions' || 'panel' && this.state.posts.length === 0 ) {
					axios.get(`http://jsonplaceholder.typicode.com/posts?_limit=${this.state.extensions.length}`) //Fake request API
					.then((response)=>{
						ctx.commit('postsFetch',response);
					})
					.catch((error)=>{
						console.error(error);
					})
				};
		},
		fetchPosts(ctx){
			axios.get(`http://jsonplaceholder.typicode.com/posts?_limit=${this.state.extensions.length}`) //Fake request API
					.then((response)=>{
						ctx.commit('postsFetch',response);
					})
					.catch((error)=>{
						console.error(error);
					})
		},
		logout(ctx,string){
			ctx.commit('logout',string);
		},
		login(ctx,string){
			ctx.commit('login',string);
		},
		themeChange(ctx,color){
			ctx.commit('themeChange',color)
		}
	},
	mutations:{
		screenChange(state, value){
		 state.currentScreen = value;
		},
		postsFetch(state,response){
			const posts = response.data.map((item,i)=>{
				return {...item,...item.img = this.state.extensions[i]}	
			});
			state.posts = posts;
		},
		logout(state,string){
			state.user = string;
		},
		login(state,string){
			state.user = string;
		},
		themeChange(state,color){
			state.theme = color;
		}
	}
})