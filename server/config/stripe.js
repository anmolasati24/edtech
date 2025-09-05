// config/stripe.js
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET); // STRIPE_SECRET = "sk_test_..."

module.exports = { stripe };
