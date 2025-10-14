// src/data/pricingData.js

export const pricingPlans = [
  {
    type: 'Starter',
    priceMonthly: 19.99,
    priceAnnually: 199.99,
    duration: '/ month',
    buttonText: 'Start Free Trial',
    features: [
      { text: 'Cras justo odio.', included: true },
      { text: 'Dapibus ac facilisis in.', included: true },
      { text: 'Morbi leo risus.', included: false },
      { text: 'Porta ac consectetur ac.', included: false },
      { text: 'Vestibulum at eros.', included: false },
    ],
  },
  {
    type: 'Business',
    priceMonthly: 39.99,
    priceAnnually: 399.99,
    duration: '/ month',
    buttonText: 'Get Started',
    featured: true, // Це буде рекомендований план
    features: [
      { text: 'Cras justo odio.', included: true },
      { text: 'Dapibus ac facilisis in.', included: true },
      { text: 'Morbi leo risus.', included: true },
      { text: 'Porta ac consectetur ac.', included: false },
      { text: 'Vestibulum at eros.', included: false },
    ],
  },
  {
    type: 'Premium',
    priceMonthly: 59.99,
    priceAnnually: 599.99,
    duration: '/ month',
    buttonText: 'Get Started',
    features: [
      { text: 'Cras justo odio.', included: true },
      { text: 'Dapibus ac facilisis in.', included: true },
      { text: 'Morbi leo risus.', included: true },
      { text: 'Porta ac consectetur ac.', included: true },
      { text: 'Vestibulum at eros.', included: true },
    ],
  },
];
