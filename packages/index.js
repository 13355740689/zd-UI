// 统一导出 // 导入颜色选择器组件 
import Button from './button' 
import Dialog from './dialog' 
import Input from './input' 
import Checkbox from './checkbox' 
import Radio from './radio' 
import RadioGroup from './radioGroup' 
import Switch from './switch' 
import CheckboxGroup from './checkboxGroup' 
import Form from './form' 
import FormItem from './formItem' 
import './fonts/font.scss'

// 存储组件列表 
const components = [ Button, Dialog, Input, Checkbox, Radio, RadioGroup, Switch, CheckboxGroup, Form, FormItem ]

const install = function (Vue) { 
	// 遍历注册全局组件 
	components.forEach(component => { 
		Vue.component(component.name, component) 
	}) 
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use() 
if (typeof window !== 'undefined' && window.Vue) { 
	install(window.Vue) 
}

export default {
	install
}