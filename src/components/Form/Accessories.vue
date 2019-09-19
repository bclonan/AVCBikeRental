<template>
<div class="accessoryPage">
   <div class="accesoryTitle">
      <span>Gear & Extras</span>
   </div>
   <!--content-->
   <div class="formArea">
      <div class="formWrap">
         <div class='row'>

            <div v-for="(item, index) in filteredData" :key="index" :class="getProductBackground(index)">
               <p>{{item.type}}</p>
               <div class='product_inner'>
                  <img :src='item.image' width='300'>
                  <p>{{item.name}}</p>

                  <p>Price ${{item.price}}</p>
                  <button @click="navigateNext(id + 1, item)">Add to Rental</button>
               </div>

            </div>
         </div>

      </div>

   </div>
</div>
</template>

<script>
export default {
   name: 'Accessories',
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
      },
      products: {
         type: Array,
         default: function () {
            return []
         }
      }
   },
   methods: {
      getProductBackground(index) {
         let backgroundClass = ['product--blue', 'product--orange', 'product--red', 'product--green', 'product--yellow', 'product--pink']
         return backgroundClass[index];
      },
     navigateNext(stepID, rentalItem){

         if(!rentalItem) {
            return this.feedback = "Please choose a bike"
         };


         let formData = {
            id: rentalItem['id'],
            name: rentalItem['name'],
            price : rentalItem['price'],
            image: rentalItem['image'],
            product_type : rentalItem['product_type']
         }
         let sentObj = {
            id : stepID,
            "formData" : formData
         }

         this.$emit('updateOrder', sentObj);
      }
   },
   computed: {
      filteredData() {
         const filtered = this.products.filter(product => product.product_type !== 'bike')
         return filtered
      }
   },
}
</script>

<style lang="scss" scoped>
@import '@/styles/_formPage.scss';
// Variables
$bg-color: #EEE5E9;

$blue-card: #92DCE5;
$orange-card: #EF6F6C;
$red-card: #E84855;
$green-card: #70C1B3;
$yellow-card: #E8DB7D;
$pink-card: #FF386D;

// Mixins
@mixin diagBg($color) {
   background: linear-gradient(-45deg, $color 50%, rgba(255, 255, 255, 0.5) 50%);
}

* {
   margin: 0;
   /* padding: 0; */
   /* -webkit-box-sizing: border-box; */
   /* box-sizing: border-box; */
   /* font-family: 'Open Sans Condensed', sans-serif; */
   /* font-weight: 700; */
}

html,
body {
   background: $bg-color;
}

header {
   width: 95%;
   display: flex;
   justify-content: flex-end;
   flex-flow: row wrap;

   ul {
      padding: 1.2em 0 0.5em;
   }

   span {
      padding: 0 0 0 0.5em;
   }

   span,
   i {
      color: #2B2D42;
   }

   i:nth-of-type(2) {
      cursor: pointer;
   }
}

.row {
   width: 100%;
   justify-content: flex-start;
   display: flex;
   flex-flow: row wrap;
}

.product {
   box-shadow: 1px 5px 15px #CCC;
   width: 15em;
   height: auto;
   border-radius: 3px;
   padding: 2em;
   margin: 1em;
   overflow: hidden;
   position: relative;
   flex: auto;

   &--blue {
      @extend .product;
      @include diagBg($blue-card);
   }

   &--orange {
      @extend .product;
      @include diagBg($orange-card);
   }

   &--red {
      @extend .product;
      @include diagBg($red-card);
   }

   &--green {
      @extend .product;
      @include diagBg($green-card);
   }

   &--yellow {
      @extend .product;
      @include diagBg($yellow-card);
   }

   &--pink {
      @extend .product;
      @include diagBg($pink-card);
   }

   img {
      max-width: 100%;
      height: auto !important;
      text-align: center;
      margin-bottom: 10%;
   }

   &_inner {
      display: flex;
      align-items: center;
      flex-flow: column wrap;

      p {
         color: rgba(255, 255, 255, 0.9);
      }

      button {
         border: 1px solid rgba(255, 255, 255, 0.5);
         color: #FFF;
         border-radius: 3px;
         padding: 1em 3em;
         margin: 1em 0 0 0;
         background: none;
         cursor: pointer;
         transition: background ease-in .25s;

         &:hover {
            background: rgba(255, 255, 255, 1);
            color: #2B2D42;
         }

         &:hover:before {
            color: #2B2D42;
         }
      }
   }

   &_overlay {
      background: rgba(255, 255, 255, 0.9);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      transform: translateY(-500px);
      opacity: 0;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;

      h2 {
         color: rgba(43, 45, 66, 0.7);
         font-size: 1.2em;
         margin: 1em 0;
      }

      i {
         color: rgba(43, 45, 66, 0.7);
         font-size: 1.5em;
      }
   }
}

.accessoryPage {

   height: 100%;
   overflow-x: scroll;
   max-height: 90vh;

   .accesoryTitle {
      display: flex;
      align-items: center;
      justify-items: center;

      span {
         margin-left: 1rem;
         margin: 2%;
         font-family: inherit;
         font-weight: 900;
         font-size: 3em;
      }
   }
}
</style>
