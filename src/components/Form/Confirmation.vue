<template>
<div class="avComponentWrapper">

   <!--content-->
   <div class="boxContainer">
      <div class="text-container shadow-xl py-2 px-4">
         <span class="formLine"></span>
         <h1 class="title"><span class="underline--magical">Congrats!</span></h1>
         <p>Your rental is complete make sure to<span class="underline--magical"> tell</span> a friend, so that you have somebody to ride with!
         </p>
         <div class="avButtonGroup">
            <button class=" text-white btnRounded" @click="$emit('nextStep', 1)">
               <span>Rent another</span>
            </button>
            <button class=" text-white btnRounded" @click="$emit('alertData')">
               <span>View Data</span>
            </button>


         </div>

         <span class="formLine"></span>
      </div>

   </div>
</div>
</template>

<script>
export default {
   name: 'Confirmation',
   props: {
      text: {
         type: String,
         default: 'Confirmation'
      },
      id: {
         type: Number,
         default: null
      },
      complete: {
         type: Boolean,
         default: false
      }
   }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_formPage.scss';
</style>
