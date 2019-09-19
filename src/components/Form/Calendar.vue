<template>
<div class="avComponentWrapper">

   <!--content-->

   <div class="text-container shadow-xl py-2 px-4">
      <span class="formLine"></span>
      <h1 class="title"><span class="underline--magical">Rental Date & Time</span> </h1>
      <p v-if="feedback">{{feedback}}</p>
      <AppInputControl placeholder="Date" class="py-2" type="date" v-model="rentalDate">

      </AppInputControl>

      <AppInputControl class="py-2" placeholder="Time" type="text" v-model="timeStart">

      </AppInputControl>

      <span class="formLine"></span>
   </div>

   <div class="avButtonGroup">
      <button type="submit" value="Back" @click="$emit('nextStep', id - 1)" class="btnRounded"><span>Back</span></button>
      <button type="submit" value="Back" @click="navigateNext( id + 1)" class="btnRounded"><span>Next</span></button></div>

</div>
</template>

<script>
export default {
   name: 'Calendar',
   props: {
      text: {
         type: String,
         default: 'Calendar'
      },
      id: {
         type: Number,
         default: null
      },
      complete: {
         type: Boolean,
         default: false
      }
   },
   data() {
      return {
         rentalDate: null,
         timeStart: null,
         feedback : null
      }
   },
   methods: {
      navigateNext(stepID){

         if(!this.rentalDate || !this.timeStart ) {
            return this.feedback = "Please fill out the whole form"
         };

         let formData = {
            rentalDate: this.rentalDate,
            timeStart: this.timeStart
         }

         let sentObj = {
            id : stepID,
            "formData" : formData
         }

         this.$emit('updateOrder', sentObj);
      }
   },
}
</script>

<style lang="scss" scoped>
@import '@/styles/_formPage.scss';
</style>
