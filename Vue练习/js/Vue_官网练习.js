var app=new Vue({
			/**
	 * new Vue一个实例
	 * el[Element元素]，绑定id=app的对象；
	 * 设置键值，message=>'Hello Vue!'
	 * 在网页中用 {{键}} 获取值
	 * */
	el:'#app',data:{
		message:'Hello Vue!'
	}
})
var app2=new Vue({
	/**
	 * 对id=app-2的元素绑定事件
	 * 赋予数据data
	 * 参数：message=>'页面加载与'+
	 * new Date()新建日期实例
	 * toLocaleString() 获取此网页创建时间
	 * */
	el:'#app-2',data:{
		message: '页面加载于 ' + new Date().toLocaleString()
	}
})
var app3=new Vue({
	/**
	 * 绑定id=app-3元素
	 * 设置键data={}值存放键值
	 * seen=true
	 * */
	el:'#app-3',data:{
		seen:true
	}
})
var app4=new Vue({
	/**
	 * 绑定id=app-4元素
	 * 设置键值data
	 * 键todos，值为数组
	 * 数组内容键值形式
	 * text:'你好啊'
	 * ...
	 * */
	el:'#app-4',data:{
		todos:[
			{text:'学习vue'},
			{text:'学习laravel'},
			{text:'成为小小全栈工程师'},
		]
	}
})
var app5=new Vue({
	/**
	 * 绑定id=app-5元素
	 * data设置数据
	 * 	键值message=>'Hello Vue.js'
	 * methods设置方法
	 * 	键值reverMessage:function()
	 * 	方法内容
	 * 		this指代此元素
	 * 		message键的内容替换
	 * 		当前值拆分在成数组.倒序排序.
	 * 		splite('')字符串按某个字符分割，返回数组
	 * 		reverse()该方法会改变原来的数组，不会创建新数组，倒叙排序原来的数组，返回数组
	 * 		join()将数组所有的元素放入一个字符串，元素如果是指定的分割符进行分割的，指定方法合并join('')
	 * */
	el:'#app-5',data:{
		message:'Hello Vue.js'
	},methods:{
		reverseMessage:function(){
			this.message=this.message.split('').reverse().join('')
		}
	}
})
var app6=new Vue({
	/**
	 * 对应v-model测试数据
	 * */
	el:'#app-6',data:{
		message:'Hello model'
	}
})

/**
 * 组建基础
 * 
 * 组件化应用构建component：
 * 	开始让Vue组件化，用component方法
 * 	参数一：组建名称	参数二：定义组建方法
 * 	这里定义组建名称为 todo-item 
 * 组建方法中：
 * 	props定义子组建，数组形式。
 * 	template定义模块，内容默认传递静态值 '<li>....'
 * 		todo.text 指的是此子组件下定义的数据，数据以键值存放,text指键，返回指定值
 * 		其他同理
 * 
 * 下面绑定id=app-7元素
 * 设置数据
 * 键groceryList
 * 指为键值数组[]
 * 在键值数组中，id:0=>id赋值0，text:'蔬菜'=>text赋值蔬菜，其余同理
 * 
 * 剩下操作在html中进行
 * 
 * html进行完后
 * todo有了值，就是遍历数据的每组数据值
 * todo.id是这组数据内的指定键，返回指定值
 * todo.text 和 .money同理
 * 
 * */
Vue.component('todo-item',{
	props: ['todo'],
	template:'<li>{{todo}} =>{{todo.id}} =>{{todo.text}}=>{{todo.money}}</li>',
//	template:'<li>hello component</li>'
})
var app7=new Vue({
	el:'#app-7',data:{
		groceryList:[
			{id:0,text:'蔬菜',money:10},
			{id:1,text:'奶酪',money:50},
			{id:2,text:'好吃的',money:99}
		]
	}
})