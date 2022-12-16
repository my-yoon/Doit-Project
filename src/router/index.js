import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


const constantRoutes = [
	{
		path: "/",
		name: "home",
		redirect: "/main",
		
	}
]
const router = new VueRouter({
	mode:"history",
	routes: [
		...constantRoutes,
	],
	
});

export default router;
