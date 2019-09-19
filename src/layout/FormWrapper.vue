<template>
<div class="formWrapper shadow-xl">
   <div class="formView">
      <slot></slot>
   </div>

</div>
</template>

<script>
export default {
   name: 'FormWrapper',
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

.formWrapper {
   display: flex;
   flex-flow: row nowrap;
   height: 100%;
   overflow-x: scroll;
}

.formView {
   flex: 1;
   padding: 2em;
}
</style>
