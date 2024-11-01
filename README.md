<p align="center">
<img width="400" valign="top" src="https://hydrogenpay.com/wp-content/uploads/2023/05/logo.png" data-canonical-src="https://hydrogenpay.com/wp-content/uploads/2023/05/logo.png" style="max-width:100%; ">
</p>
<br/>

# Hydrogen VueJS SDK

Hydrogen VueJS SDK allows you to accept payment using in your vue application

## Installation

Register for a merchant account on [Hydrogen Merchant Dashboard](https://dashboard.hydrogenpay.com) to get started.

```bash
npm install --save hydrogenpay-vue
```

```bash
yarn add hydrogenpay-vue
```

```bash
pnpm add hydrogenpay-vue
```

## Support

If you have any problems, questions or suggestions, create an issue here or send your inquiry to support@hydrogenpay.com

## Implementation

You should already have your api key, If not, go to [Profile & Settings](https://dashboard.hydrogenpay.com).

### Usage 

```jsx
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
      buttonText: 'Pay With Hydrogen', // OPTIONAL
      autoOpenCheckout: false, // OPTIONAL
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
```

## Options Type

| Name         | Type       | Required | Desc                                                                        |
| ------------ | ---------- | -------- | --------------------------------------------------------------------------- |
| currency     | `String`   | Required | The currency for the transaction e.g NGN, USD                               |
| email        | `String`   | Required | The email of the user to be charged                                         |
| description  | `String`   | Optional | The transaction description                                                 |
| customerName | `String`   | Required | The fullname of the user to be charged                                      |
| amount       | `Number`   | Required | The transaction amount                                                      |
| apiKey       | `String`   | Required | Your LIVE or TEST apiKey or see above step to get yours                                   |
| onSuccess    | `Function` | Optional | Callback when transaction is successful                                     |
| onClose      | `Function` | Optional | Callback when transaction is closed of cancel                               |
| buttonText   | `String`   | Optional | Payment Button Text. Default: Hydrogen Pay                                  |
| autoOpenCheckout    | `String`   | Optional | Auto start payment                                                      |
| isRecurring  | `boolean`  | Optional | Recurring Payment                                                           |
| frequency    | `String`   | Optional | Recurring Payment frequency                                                 |
| endDate      | `String`   | Optional | Recurring Payment End Date. OPTIONAL but (REQUIRED when isRecurring = true) |