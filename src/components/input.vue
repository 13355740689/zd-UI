<template>
	<div class="zd-input" :class="{'zd-input--suffix': showSuffix}">
		<input 
			type="text"
			class="zd-input__inner"
			:class="{'is-disabled':disabled}"
			:placeholder="placeholder"
			:type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
			:name="name"
			:disabled="disabled"
			:value="value"
			@input="handleInput"
			/>
			
			<span class="zd-input__suffix" v-if="showSuffix">
				<i class="zd-input__icon zd-icon-guanbi" v-if="clearable && value" @click="clear"></i>
				<i class="zd-input__icon zd-icon-view" :class="{'zd-icon-view-active': passwordVisible}" v-if="showPassword" @click="handlePassword"></i>
			</span>
	</div>
</template>

<script>
	export default {
		 name:'zdInput',
		 data(){
			 return{
				 passwordVisible:false
			 }
		 },
		 props:{
			 placeholder:{
				 type:String,
				 default:''
			 },
			 type:{
				 type:String,
				 default:'text'
			 },
			 name:{
				 type:String,
				 default:''
			 },
			 disabled:{
				 type:Boolean,
				 default:false
			 },
			 value:{
				 type:String,
				 default:''
			 },
			 clearable:{
				 type:Boolean,
				 default:false
			 },
			 showPassword:{
				 type:Boolean,
				 default:false
			 }
		 },
		 
		 computed:{
			showSuffix(){
				return this.clearable || this.showPassword
			} 
		 },
		 methods:{
			 handleInput(e){
				 this.$emit('input', e.target.value)
			 },
			 
			 clear(){
				 this.$emit('input', '')
			 },
			 handlePassword(){
				 this.passwordVisible = !this.passwordVisible
			 }
		 }
	}
</script>

<style lang="scss">
	.zd-input {
	  width: 100%;
	  position: relative;
	  font-size: 14px;
	  display: inline-block;
	  .zd-input__inner {
	    -webkit-appearance: none;
	    background-color: #fff;
	    background-image: none;
	    border-radius: 4px;
	    border: 1px solid #dcdfe6;
	    box-sizing: border-box;
	    color: #606266;
	    display: inline-block;
	    font-size: inherit;
	    height: 40px;
	    line-height: 40px;
	    outline: none;
	    padding: 0 15px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    width: 100%;
	
	    &:focus {
	      outline: none;
	      border-color: #409eff;
	    }
	  }
	}
	
	
	.zd-input--suffix{
	  .zd-input__inner {
	    padding-right: 30px;
	  }
	  .zd-input__suffix {
	    position: absolute;
	    height: 100%;
	    right: 10px;
	    top: 0;
	    line-height: 40px;
	    text-align: center;
	    color: #c0c4cc;
	    transition: all .3s;
	    z-index: 900;
	    i {
	      color: #c0c4cc;
	      font-size: 14px;
	      cursor: pointer;
	      transition: color .2s cubic-bezier(.645,.045,.355,1);
	    }
		.zd-icon-view-active{
			color:blue;
		}
	  }
	}
</style>
