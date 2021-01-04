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
	  <zdDialog title="温馨提示" width="40%" top="100px"></zdDialog>
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
</style>
