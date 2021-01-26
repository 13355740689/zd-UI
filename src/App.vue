<template>
  <div id="app">
<!-- 	  <div class="row">
		  <zdButton disabled @click="fn">按钮</zdButton>
		  <zdButton type="primary">默认</zdButton>
		  <zdButton type="success">按钮</zdButton>
		  <zdButton type="info">按钮</zdButton>
		  <zdButton type="warning">按钮</zdButton>
		  <zdButton type="danger">按钮</zdButton>
	  </div>
	  <div class="row">
		  <zdButton>按钮</zdButton>
		  <zdButton plain type="primary">默认</zdButton>
		  <zdButton plain type="success">按钮</zdButton>
		  <zdButton plain type="info">按钮</zdButton>
		  <zdButton plain type="warning">按钮</zdButton>
		  <zdButton plain type="danger">按钮</zdButton>
	  </div>
	  <div class="row">
		  <zdButton>按钮</zdButton>
		  <zdButton plain round type="primary">默认</zdButton>
		  <zdButton plain round type="success">按钮</zdButton>
		  <zdButton plain round type="info">按钮</zdButton>
		  <zdButton plain round type="warning">按钮</zdButton>
		  <zdButton plain round type="danger">按钮</zdButton>
	  </div>
	  
	  <div class="row">
	  	 <zdButton plain icon="zd-icon-check" circle type="primary"></zdButton>
	  </div> -->
	  <zd-button type="primary" @click="visible=true">点击</zd-button>
	  <zdDialog title="温馨提示" width="40%" top="100px" :visible.sync="visible">
		  <ul>
			  <li>1</li>
			  <li>2</li>
			  <li>3</li>
		  </ul>
		  <template v-slot="footer">
			  <zd-button type="primary" @click="visible=true">确定</zd-button>
			  <zd-button @click="visible=false">取消</zd-button>
		  </template>
	  </zdDialog>
	  <zd-input placeholder="请输入用户名" v-model="username" clearable></zd-input>
	  <zd-input placeholder="请输入用户名" v-model="username" show-password></zd-input>
	  
	  <div>
		   <zd-switch v-model="active" active-color="#13ce66" inactive-color="green" name="username"></zd-switch>
	  </div>
	  
	  <div>
			<zd-radio label="1" v-model="gender">男</zd-radio>
			<zd-radio label="0" v-model="gender">女</zd-radio>
	  </div>
	 <div>
		 <zdRadioGroup v-model="gender">
			 <zd-radio label="1">男</zd-radio>
			 <zd-radio label="0">女</zd-radio>
		 </zdRadioGroup>
	 </div>
	 <div>
		 <zdCheckbox v-model="active">是否选中</zdCheckbox>
		 <zdCheckboxGroup v-model="hobby">
			 <zdCheckbox label="抽烟"></zdCheckbox>
			 <zdCheckbox label="喝酒"></zdCheckbox>
			 <zdCheckbox label="烫头"></zdCheckbox>
		 </zdCheckboxGroup>
	 </div>
	 
	 <zdForm :model="model" label-width="100px">
		 <zdFormItem label="用户名">
			 <zd-input placeholder="请输入用户名"></zd-input>
		 </zdFormItem>
	 </zdForm>
	  <!-- <zdDialog>
		  <template v-slot:title>
			  <h3>我是标题</h3>
		  </template>
	  </zdDialog> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data(){
	  return{
		  visible:false,
		  username:'zd',
		  active:false,
		  gender:1,
		  active:false,
		  hobby:['抽烟', '喝酒', '烫头'],
		  model:{
			  
		  }
	  }
  },
  methods:{
	  fn(){
		  console.log("按钮被点击了、")
	  }
  }
}
</script>

<style lang="scss" scoped>
.row{
	margin-top: 20px;
	.zd-button {
		margin-right: 20px;
	}
}

.zd-input{
	width: 180px;
}
</style>
