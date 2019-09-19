<template>
<div id="app">
   <div class="stepContainer ">

      <div class="stepperProgress shadow-xl" :style="progressStyle">
      </div>
   </div>
   <main>
      <form-wrapper>
         <component v-if="stepObject['text']" :is="stepObject['component']" v-bind="stepObject" 
          @updateOrder="updateFormData($event)" :formStep="stepObject" @nextStep="changeStep($event)" :products="productData['products']"
          @alertData="showData"
          ></component>
      </form-wrapper>

   </main>
</div>
</template>

<script>
import productData from '@/data/bikerentals.json';
import formConfig from '@/data/formConfig.json';
import FormWrapper from '@/layout/FormWrapper';
export default {
   name: "app",
   data() {
      return {
         form: 'Payment',
         progress: 0,
         step: 1,
         customerData: [],

      }
   },
   components: {
      "form-wrapper": FormWrapper,
   },
   methods: {
      changeStep(stepTo) {
         this.step = stepTo;
      },
      updateFormData (dataObject) {
         console.log(dataObject)
         if(!dataObject.formData) {return console.log('oops')}


         this.customerData.push(dataObject.formData);
         this.step = dataObject['id']
      },
      showData(){
         window.alert('Check the console')
         console.table(this.customerData)
      }
   },
   computed: {
      productData() {
         return productData;
      },
      formConfigData() {
         return formConfig;
      },
      activeFormComponent() {
         return this.form;
      },
      progressStyle() {
         let style = {
            width: `${this.step * 20}%`,
            background: this.stepObject['barColor']
         };
         return style;
      },
      stepObject() {

         if (formConfig['BookingSteps'].length <= 0) {
            return
         }
         const currentStepConfig = formConfig['BookingSteps'].filter(config => config.id === this.step)[0];
         return currentStepConfig;
      },

   }
};
</script>

<style lang="scss">
@import './styles/app.scss';
@import './styles/colors.scss';

html,
body {
   font-family: 'Roboto', Helvetica, Arial, sans-serif;
   color: $black;
   background: $appBackground;
}
</style>

<style lang="scss" scoped>
@import './styles/colors.scss';

@import './styles/app.scss';
</style>
