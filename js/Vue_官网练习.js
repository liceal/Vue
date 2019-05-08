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
			{text:'学习vue',number:0},
			{text:'学习laravel',number:0},
			{text:'成为小小全栈工程师',number:0},
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

/**组建基础
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


var app8=new Vue({
	/**
	 * 尝试把computed换成methods
	 * methods方法：html中调用需要加()
	 * 
	 * */
	el:'#app-8',data:{
		message:'hello'
	},
	computed:{
		reversedMessage:function(){
			return this.message.split('').reverse().join('')
		}
	}
})

var app9=new Vue({
	/**
	 * 默认方法get与set会自动调用
	 * 绑定id=app-9元素，设置数据属性，设置计算属性
	 * 数据属性默认存在两个值
	 * 计算属性中设置
	 * 	键fullName,值写了get与set方法
	 * 	在调用fullName后自动执行get，在对fullName赋值时自动调用set方法
	 * 
	 * get方法：返回Li ceal
	 * set方法：对参数进行 ' ' 分割成数组
	 * 	改写数据firsetName为参数分割后的第一组数据
	 * 	改写数据lastName为参数分割后的最后一组数据
	 *
	 * */
	el:'#app-9',data:{
		firstName:'Li',
		lastName:'ceal'
	},computed:{
		fullName:{
			//getter
			get:function(){
				return this.firstName+' '+this.lastName
			},
			//setter
			set:function(newValue){
				var names=newValue.split(' ')
				this.firstName=names[0]
				this.lastName=names[names.length-1]
			}
		}
	}
})

var app10=new Vue({
	/**
	 * 简单的watc监听器测试
	 * watch内指定了question键，并提供方法
	 * 	当question改变时，会执行这个方法
	 * 	方法中传递了一个参数，为question的值
	 * 	这里判断了question的内容来改变answer的值
	 * 函数内可以多一个参数，返回值是改变前的指
	 * */
	el:'#app-10',data:{
		question:'',
		answer:'I cannot give you an answer until ask a question!'
	},watch:{
		question:function(value){
			if(value==1){
				this.answer='this content changed of 1'	
			}else{
				this.answer=value
			}
		}
	}
})


var app11=new Vue({
	/**
	 * 简单的class与style绑定
	 * 这里做了简单的效果，详情使用看html注解
	 * class绑定  [className]:[false/true] 用boolean型来设置class是否绑定使用
	 * 绑定id=app-11的元素 设置数据 设置计算 设置回调
	 * 设置数据
	 * 	control是输入框的内容，这里输入框的内容会返回到这个参数内存放，默认为空
	 * 	isActive判断三个class是否绑定，默认都false不绑定
	 * 	styleObject为style绑定，这里直接初始化值
	 * 设置计算
	 * 	classObject是为前端提供的绑定class的参数
	 * 	这个参数内返回三种class是否被绑定
	 * 	用function来返回值，return {键值内容}
	 * 设置回调
	 * 	对输入的内容进行获取判断
	 * 	每次初始化三种判断三种class是否存放的数组为false
	 * 	拆分输入的值，进行判断那个class需要使用
	 * */
	el:'#app-11',data:{
		control:'',
		isActive:[false,false,false],
		styleObject:{
			//TIPS:border-color在这里要borderColor。以大写代替-
			color:'red',
			borderColor: 'blue',
			fontSize:'20px'
		}
	},computed :{
		classObject:function(){
			return {
				active1:this.isActive[0],
				active2:this.isActive[1],
				active3:this.isActive[2],
			}
		}
	},watch:{
		control:function(value){
			this.isActive=[false,false,false]
			var options=value.split('')
			for(var i=0;i<options.length;i++){
				if(options[i]>=1&&options[i]<=3){
					if(options[i]==1) this.isActive[1]=false
					this.isActive[options[i]-1]=true
				}
			}
		}
	}
})

var app12=new Vue({
	/**
	 * 简单的for循环迭代案例参数
	 * 详情看html注解
	 * */
	el:'#app-12',data:{
		object:{
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
})

/**提供按钮事件的初始函数
 * 可以自定义按钮时间 值为键码值
 * 键码：https://www.cnblogs.com/hubgit/p/5794856.html
 * */
Vue.config.keyCodes.f1=112;
var app13=new Vue({
	el:'#app-13',data:{

	},methods:{
		submit:function(value){
			alert('按钮事件')
		}
	}
})

var app14=new Vue({
	/**
	 * 表单输入绑定
	 * 提供一些数据
	 * 详情看html注解
	 * */
	el:'#app-14',data:{
		message1:'',
		message2:'false',
		message3:[],
		message4:'',
		message5:'',
		message6:[],
		message7:'',
		options:[
			{ text: 'One', value: 'A' },
			{ text: 'Two', value: 'B' },
			{ text: 'Three', value: 'C' }
    	]
	}
})

/**组件的复用
 * 这里创建了一个组件 button-counter
 * 组件默认输出一个按钮，点击的时候 count++ 内容返回count值
 * 在data中有一个函数，函数内一定要return值
 * 这里默认count为0
 * 每次++时，会访问data使用函数返回count值，count值会保存
 * 复用组件返回的值不会相互影响
 * props自定义了属性，接受html内传递的指定数据
 * 默认值为空，可以在html中赋值
 * */
Vue.component('button-counter',{
	data:function(){
		return{
			count:0	
		}
	},
	props:['tit','val'],
	template:'<button @click="count++">You clicked me {{count}} tit:{{tit}} val:{{val}}</button>'
})
var app15=new Vue({
	el:'#app-15'
})

/**通过事件向父级组件发送消息
 * 未完成
 * 这里就构建了组件与组件属性
 * html 迭代了下面数据中的posts数据
 * 传递给自定义属性post进行赋值
 * 然后template默认输出post属性里的内容
 * */
Vue.component('blog-post',{
	props:['post'],
	template:'<div><h3>{{ post.title }}</h3><div v-html="post.content"></div></div>',
})
var app16=new Vue({
	el:'#app-16',data:{
		posts:[
			{id:0,title:'海绵宝宝',content:'我是海绵宝宝'},
			{id:1,title:'派大星',content:'我是派大星'},
			{id:2,title:'章鱼哥',content:'我是章鱼哥'},
		],
		postFontSize:1
	}
})

/**slot插槽
 * 在模板里加入<slot></slot>,slot可供前端存放内容，甚至可以存放别的组件
 * 组件中依次：
 * 	第一个模板：总模板，提供默认插槽
 * 	第二个模板：自己的测试模板
 *  第三个模板：使用了默认插槽，具名插槽。实现多插槽功能
 * 		具名插槽：对slot赋予name属性，通过前端slot="name"，来指定使用插槽（可复用）
 * 	第四个模板：作用域插槽（未）
 */
var app17=new Vue({
	el:'#app-17',
	data:{
		todos:[
			{id:0,title:'海绵宝宝',content:'我是海绵宝宝'},
			{id:1,title:'派大星',content:'我是派大星'},
			{id:2,title:'章鱼哥',content:'我是章鱼哥'},
		]
		
	},
	components:{
		'navigation-link':{
			template:'<a v-bind:href="url" class="nav-link"><slot></slot></a>'		
		},
		'test1':{
			template:'<a>test1模板</a>'
		},
		'base-layout':{//多lost模板调用
			template:'<div><header><slot name="header"></slot></header><main><slot></slot></main><footer><slot name="footer"></slot></footer></div>'
		},
		'todo-list':{
			template:'<ul><li v-for="todo in todos" v-bind:key="todo.id"><slot v-bind:todo="todo">{{todo.content}}</slot></li></ul>'
		}
	},
})

/**在动态组件上使用 keep-alive|组件访问data,method..并且使用
 * html中在keep-alive标签内的组件，会进入缓存，在更换的时候不会重写实例化，会在缓存中调用
 * 这里的temp-b在HB的网页中可以显示，在浏览器中错误，有点迷。。。
 * 
 * 组件访问实例的方法与数据
 * 	$root访问根数据，Data访问：this.$root..|$root..,方法访问:$root..
 * 	this.$root.foo		访问根组件数据
 * 	this.$root.foo=2	写入根组件数据
 * 	this.$root.bar		访问根组件计算属性
 * 	this.$root.baz		访问根组件方法属性
 */
var app18=new Vue({
	el:"#app-18",
	data:{
		demo:'temp-a',
		todos:[
			{id:0,title:'海绵宝宝',content:'我是海绵宝宝，海面海绵~~'},
			{id:1,title:'派大星',content:'我是派大星，海星海星~~'},
			{id:2,title:'章鱼哥',content:'我是章鱼哥，嘟嘟嘟~~'},
		],
		content:'空'
	},
	components:{
		'temp-a':{
			template:"<a style='color:red'>this is tempA</a>"
		},
		'temp-b':{
			template:"<table style='border:3px solid orange'><tr><td style='cursor:pointer' v-for='todo in this.$root.todos' @click='$root.show(todo.id)'> |{{todo.title}}| </td></tr><tr><td style='border:2px solid red' colspan='3'>{{this.$root.content}}</td></tr></table>"
		},
		'temp-c':{
			template:"<input ref='app18Input'>"
		}
	},
	methods:{
		'changed':function(){
			if(this.demo=='temp-a')this.demo='temp-b';
			else this.demo='temp-a'
		},
		'show':function(id){
			this.content=this.todos[id].content
//			this.$refs.Input.focus()
		}
	}
})

/**异步组件
 * 创建组件后跟function()
 * 	两个参数，参数一resolve:组件加载成功时，执行。参数二reject:组件加载失败时
 * 	加载成功后，执行resolve:参数：需要执行的命令，可以是alert(1)，可以是{template:'...'}创建组件
 * 这里效果一秒后出现i am async
 */
var app19=new Vue({
	el:'#app-19',
	components:{
		'async-example':function(resolve,reject){
			setTimeout(function(){
				resolve({
					template:'<div>I am async!</div>'
				})
			},1000)
		}
	}
})

/**过渡效果
 * 提供show参数为v-if判断来是否显示
 * 具体效果在css中实现
 */
var app20=new Vue({
	el:'#app-20',
	data:{
		show:true,
		msg:'',
		or:'no'
	},
	methods:{
		state:function(val){
			this.msg+=' '+val
		},
		ifnot:function(){
			if(this.or=='no')this.or='off'
			else this.or='no'
		}
	}
})

/**组建过度
 * 
 */
var app21=new Vue({
	el:"#app-21",
	data:{
		view:'v-a'
	},
	components:{
		'v-a':{
			template:'<div>Component A</div>'
		},
		'v-b':{
			template:'<div>Component B</div>'
		}
	}
})

/** 平滑过渡插件使用
 * shuffle()洗牌函数，参数数组，将内容打乱返回
 * _.	下划线好像是选中列表内容,是平滑过渡插件提供
 */
var app22=new Vue({
 	el:"#app-22",
 	data:{
 		items:[1,2,3,4,5,6,7,8,9]
 	},
 	methods:{
 		shuffle:function(){
 			this.items=_.shuffle(this.items);
 		}
 	}
 })

/** 列表进入|离开过渡
 * 
 */
var app23=new Vue({
	el:"#app-23",
	data:{
		items:[1,2,3,4,5,6,7,8,9],
		Number:10
	},
	methods:{
		randomIndex:function(){
			return Math.floor(this.items.length*Math.random());//取随机下标
		},
		add:function(){
//			alert(this.randomIndex());
			this.items.splice(this.randomIndex(),0,this.Number++);
		},
		remove:function(){
			this.items.splice(this.randomIndex(),1);
		},
		shuffle:function(){
			this.items=_.shuffle(this.items);
		}
		
	}
})

/**render使用
 * 不停的调用自身，直到不成立则停止
 * 组件里，不停的创建模板使用
 * render:function(createElement){...}	//重复调用的代码，方法内为此重复调用的代码一直使用的函数
 * 	createElement('标签',内容)	创建应用
 */
var app24=new Vue({
	el:"#app-24",
	data:{
		todos:[
			{id:0,title:'海绵宝宝',content:'我是海绵宝宝'},
			{id:1,title:'派大星',content:'我是派大星'},
			{id:2,title:'章鱼哥',content:'我是章鱼哥'},
		]
	},
	components:{
		'render-test':{
			render:function(createElement){
				if(this.$root.todos.length){//数组有内容
					return createElement('ul',this.$root.todos.map(function(todo){//创建ul
						return createElement('li',todo.title)//创建li
					}))	
				}else{//数组没有内容
					return createElement('span','No todos found')
				}
				
			}
		}
	}
})