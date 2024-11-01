<script lang="ts" type="text/javascript">
import HydrogenPay from '../../src/hydrogenpay.vue'
export default {
  components: {
    HydrogenPay,
  },
  data() {
    return {
      amount: 500, // REQUIRED
      email: 'test@mail.com', // REQUIRED
      customerName: 'John Doe', // REQUIRED
      meta: 'ewr34we4w', // OPTIONAL
      apiKey: 'PK_TEST_cca53e0b3bc7847aff94502b8a585f84', // REQUIRED
      description: 'Test description', // OPTIONAL
      currency: 'NGN', // REQUIRED
      frequency: 1, // OPTIONAL
      isRecurring: false, // OPTIONAL
      endDate: '2025-10-02', // OPTIONAL but (REQUIRED when isRecurring: true)
      buttonText: 'Pay With Hydrogen',
      autoOpenCheckout: false,
    }
  },
  methods: {
    onSucess: function (response) {
      console.log(response)
    },
    onClose: function () {
      console.log('checkout closed')
    },
  },
}
</script>

<template>
  <div class="container">
    <HydrogenPay
      :amount="amount"
      :email="email"
      :apiKey="apiKey"
      :customerName="customerName"
      :onSuccess="onSuccess"
      :onClose="onClose"
      :meta="meta"
      :description="description"
      :pocketRef="pocketRef"
      :callbackurl="callbackurl"
      :currency="currency"
      :frequency="frequency"
      :isRecurring="isRecurring"
      :endDate="endDate"
      :buttonText="buttonText"
      :autoOpenCheckout="autoOpenCheckout"
    />
  </div>
</template>

<style></style>
