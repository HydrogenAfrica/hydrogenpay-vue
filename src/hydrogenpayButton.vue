<script>
export default {
  name:"HydrogenpayButton",
  props: {
    buttonText: {
      type: String,
      required: false,
      default: "Pay With Hydrogen"
    },
  },
}
</script>

<template>
  <button class="hydrogenButton">{{buttonText}}</button>
</template>

<style>
  .hydrogentButton {
    align-self: center;
    background-color: #263a81ee;
    color: #ffffff;
    width: 200px;
    height: 50px; 
    font-weight: 800; 
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 0 transparent;
    font-size: 16px;
  }
</style>