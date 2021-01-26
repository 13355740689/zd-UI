<template>
  <div class="zd-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zdCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
