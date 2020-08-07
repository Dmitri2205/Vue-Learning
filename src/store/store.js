import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		activeProjects:13,
		currentScreen:'sales',
		posts:' ',
		extensions:8,
		customers:[
		{id:13,name:'John',lastName:'Doe',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar1.png'},
		{id:29,name:'John',lastName:'Watson',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar2.png'},	
		{id:31,name:'Mathew',lastName:'Tuck',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar3.png'},
		{id:42,name:'Michael',lastName:'Padget',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar2.png'},
		{id:57,name:'Jamie',lastName:'Mathias',info:'Lorem ipsum dolor sit amet, consectetur adipisicing.', img:'static/avatar4.png'},
		]
	},
	getters:{
		activeProjects:state=>{
			return state.activeProjects;
		},
		currentScreen:state=>{
			return state.currentScreen;
		},
		posts:state=>{
			// console.log(state.posts);
			return state.posts;
		},
		extension:state=>{
			return state.extensions;
		},
		customers:state=>{
			return state.customers;
		}
	},
	
	actions:{
		screenSwitch(ctx,value){
			// console.log(ctx);
			// console.log(value);
			ctx.commit('screenChange',value );
		
				if (value === 'extensions' || 'panel' && this.state.posts === ' ') {
		
					axios.get(`http://jsonplaceholder.typicode.com/posts?_limit=${this.state.extensions}`) //Fake request API
					.then((response)=>{
						console.log(response.data);
						ctx.commit('postFetch',response);
					})
					.catch((error)=>{
						console.error(error);
					})
				};

		}
	},
	mutations:{
		screenChange(state, value){
			// console.log(state);
			// console.log(value);
		 state.currentScreen = value;
		},
		postFetch(state,response){
			// console.log(response.data)
			// console.log('Mutation=>'+'Posts:' + response.data);
			state.posts = response.data;
		}
	}
})





console.log('Store инициализирован.Отлично сработано Дмитрий!');