<template>
<div class="avInputWrapper">
   <input class="avInput foo" v-if="controlType === 'input'" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)" />

   <input v-if="controlType === 'date'" class="avInput foo" type="date" :value="value" @input="$emit('input', $event.target.value)" min="2018-01-01" max="2099-12-31">
</div>
</template>

<script>
export default {
   name: "AppInputControl",
   props: {
      controlType: {
         type: String,
         default: "input"
      },
      value: {
         type: String,
         default: ""
      },
      inputClass: {
         type: String,
         default: "input"
      }
   }
};
</script>
