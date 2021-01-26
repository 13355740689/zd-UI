<template>
	<div class="zd-switch" :class="{'is-checked':value}" @click="handleClick">
		<span class="zd-switch__core" ref="core">
			<span class="zd-switch__button"></span>
		</span>
		<input class="zd-switch__input" type="checkbox" :name="name" ref="input">
	</div>
</template>

<script>
export default {
	name: 'zdSwitch',
	props:{
		value:{
			type:Boolean,
			default:false
		},
		activeColor:{
			type:String,
			default:''
		},
		inactiveColor:{
			type:String,
			default:''
		},
		name:{
			type:String,
			default:''
		}
	},
	methods:{
		async handleClick(){
			this.$emit('input', !this.value)
			//等待value值发生改变 再setColor
			//数据修改后，等待DOM更新
			await this.$nextTick()
			this.setColor()
		},
		setColor(){
			if(this.activeColor || this.inactiveColor){
				let color = this.value ? this.activeColor : this.inactiveColor
				this.$refs.core.style.borderColor = color
				this.$refs.core.style.backgroundColor = color
				this.$refs.input.checked = this.value
			}
		}
	},
	mounted(){
		//修改开关的颜色
		this.setColor()
		//控制checkbox的值
		this.$refs.input.checked = this.value
	}
};
</script>

<style lang="scss">
.zd-switch {
	display: inline-flex;
	align-items: center;
	position: relative;
	font-size: 14px;
	line-height: 20px;
	height: 20px;
	vertical-align: middle;
	.zd-switch__core {
		margin: 0;
		display: inline-block;
		position: relative;
		width: 40px;
		height: 20px;
		border: 1px solid #dcdfe6;
		outline: none;
		border-radius: 10px;
		box-sizing: border-box;
		background: #dcdfe6;
		cursor: pointer;
		transition: border-color 0.3s, background-color 0.3s;
		vertical-align: middle;
		.zd-switch__button {
			position: absolute;
			top: 1px;
			left: 1px;
			border-radius: 100%;
			transition: all 0.3s;
			width: 16px;
			height: 16px;
			background-color: #fff;
		}
	}
}

.zd-switch.is-checked { 
	.zd-switch__core { 
		border-color: #409eff; 
		background-color: #409eff; 
		.zd-switch__button { 
			transform: translateX(20px); 
		} 
	} 
}

.zd-switch__input { position: absolute; width: 0; height: 0; opacity: 0; margin: 0; }
</style>
