<template>
<div class="avComponentWrapper">

   <!--content-->

   <div class="text-container shadow-xl py-2 px-4">
      <span class="formLine" style="#34ffce"></span>
      <h1 class="title"><span class="underline--magical">Payment Information</span> </h1>
      <p v-if="feedback">{{feedback}}</p>
      <AppInputControl placeholder="Name" type="input" v-model="cardholderName" class="py-2" required>

      </AppInputControl>

      <AppInputControl class="py-2" placeholder="Zip" type="text" v-model="cardZip" required>

      </AppInputControl>

      <AppInputControl class=" w-3-4 py-2" placeholder="Credit Card" type="text" v-model="cardNumber" required>

      </AppInputControl>

      <AppInputControl class="py-2 w-1-4" placeholder="Expiration Date" type="text" v-model="cardExp" required>

      </AppInputControl>

      <AppInputControl class="w-1-2 py-2" placeholder="State" type="text" v-model="state" required>

      </AppInputControl>
      <AppInputControl class="w-1-2 py-2" placeholder="08831" type="text" v-model="zip" required>

      </AppInputControl>

      <span class="formLine" style="#34ffce"></span>
   </div>

   <div class="avButtonGroup"><button type="submit" value="Back" @click="$emit('nextStep', id - 1)" class=" btnRounded" style="background: #8d80f0;"><span>Back</span></button>
      <button style="background: #8d80f0;" type="submit" value="Back" @click="navigateNext( id + 1)" class="  btnRounded"><span>Finish</span></button></div>
</div>
</template>

<script>
export default {
   name: 'Payment',
   props: {
      text: {
         type: String,
         default: 'Payment'
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
         zip: null,
         state: null,
         cardExp: null,
         cardNumber: null,
         cardZip: null,
         cardholderName: null,
         feedback : null
      }
   },
   methods : {
      navigateNext(stepID){

         if(!this.zip || !this.state || !this.cardExp || !this.cardNumber || !this.cardZip || !this.cardholderName) {
            return this.feedback = "Please fill out the whole form"
         };

         let formData = {
            zip: this.zip,
            state: this.state,
            cardExp: this.cardExp,
            cardNumber: this.cardNumber,
            cardZip: this.cardZip,
            cardholderName: this.cardholderName
         }

          let sentObj = {
            id : stepID,
            "formData" : formData
         }

         this.$emit('updateOrder', sentObj);
      }
   }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_formPage.scss';
</style>
