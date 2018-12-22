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

/**
 * 提供按钮事件的除法函数
 * 可以自定义按钮时间 值为键码值
 * 键码：https://www.cnblogs.com/hubgit/p/5794856.html
 * */
Vue.config.keyCodes.f1=112;
var app13=new Vue({
	el:'#app-13',data:{
		
	},methods:{
		submit:function(){
			alert('按键事件')
		}
	}
})