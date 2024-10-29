<script type="text/javascript">
import HydrogenpayButton from './hydrogenpayButton.vue';
export default {
	name: 'HydrogenpayCheckout',
	components: {
		HydrogenpayButton,
	},
	props: {
		amount: {
			type: Number,
			required: true,
		},
		customerName: {
			type: String,
			required: true,
		},
		buttonText: {
			type: String,
			required: false,
		},
		apiKey: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		currency: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: true,
		},
		redirectUrl: {
			type: String,
			required: false,
		},
		isRecurring: {
			type: Boolean,
			default: false,
		},
		meta: {
			type: String,
			required: false,
		},
		frequency: {
			type: Number,
			required: false,
		},
		endDate: {
			type: String,
			required: false,
		},
		onSuccess: {
			type: Function,
			required: true,
			default: function () {},
		},
		onClose: {
			type: Function,
			required: true,
			default: function () {},
		},
		autoOpenCheckout: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	data() {
		return {
			scriptLoaded: null,
		};
	},
	created() {},
	mounted() {
		if (this.autoCheckout) {
			this.HydrogenpayCheckout();
		}

		this.scriptLoaded = new Promise((resolve) => {
			this.loadScript(() => {
				resolve();
			});
		});
	},
	methods: {
		loadScript(callback) {
			const script = document.createElement('script');
			script.src =
				'https://hydrogenshared.blob.core.windows.net/paymentgateway/paymentGatewayIntegration_v1PROD.js';
			document.head.appendChild(script);
			if (script.readyState) {
				// IE
				script.onreadystatechange = () => {
					if (
						script.readyState === 'loaded' ||
						script.readyState === 'complete'
					) {
						script.onreadystatechange = null;
						callback();
					}
				};
			} else {
				script.onload = () => {
					callback();
				};
				script.onerror = function () {
					console.error('Error loading ' + script.src);
				};
			}
		},
		HydrogenpayCheckout() {
			this.scriptLoaded &&
				this.scriptLoaded.then(async () => {
					let checkStatus;
					let apiKey = this.apiKey;
					if (window.handlePgData) {
						// @ts-ignore
						const getRef = window.handlePgData(
							{
								amount: this.amount,
								email: this.email,
								currency: this.currency,
								description: this.description,
								meta: this.meta,
								isAPI: false,
								isRecurring: this.isRecurring,
								frequency: this.frequency,
								CustomerName: this.customerName,
								...(this.isRecurring && this.endDate
									? { endDate: this.endDate }
									: {}),
							},
							this.apiKey,
							(e) => {
								this.onClose && this.onClose(e);
								clearInterval(checkStatus);
							}
						);

						//get payment reference
						const transactionRef = await getRef;

						//pooling transaction status

						if (
							transactionRef &&
							transactionRef !== 'Error in initiating payment'
						) {
							checkStatus = setInterval(async function () {
								console.log(this.apiKey);
								//@ts-ignore
								const checkPaymentStatus = await window.handlePaymentStatus(
									transactionRef,
									apiKey
								);

								if (checkPaymentStatus?.status === 'Paid') {
									this.onSuccess &&
										this.onSuccess(checkPaymentStatus, () =>
											//@ts-ignore
											window?.closeModal({ transactionRef })
										);
									clearInterval(checkStatus);
								}
							}, 2000);
						} else {
							console.error(`ERROR: ${transactionRef}`);
						}
					}
				});
		},
	},
};
</script>

<template>
	<HydrogenpayButton
		v-if="!autoCheckout"
		:buttonText="buttonText"
		v-on:click="HydrogenpayCheckout"
	/>
</template>
