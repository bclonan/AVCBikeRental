<template>
<div class="avComponentWrapper">

   <!--content-->
   <div class="boxContainer">
      <div class="text-container shadow-xl py-2 px-4">
         <span class="formLine"></span>
         <h1 class="title"><span class="underline--magical">Bike</span> Rental</h1>
         <p class="subTitle">Get the around the city in the <span class="underline--magical">latest</span> and greatest way, who needs a ride when you can take a bike.
         </p>
         <div class="avButtonGroup">
            <button class="btnRounded" @click="$emit('nextStep', id + 1)">
               <span>Get Started</span>
            </button>

         </div>

         <span class="formLine"></span>
      </div>

   </div>
</div>
</template>

<script>
export default {
   name: 'Introduction',
   props: {
      text: {
         type: String,
         default: 'Introduction'
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
