<template>
	<div class="zd-radio-group">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'zdRadioGroup',
		provide(){
			RadioGroup: this
		},
		props:{
			value:null
		}
	}
</script>

<style>
</style>
