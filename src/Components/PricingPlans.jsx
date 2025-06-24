const plans = [
  {
    name: "Free",
    price: "₹0",
    features: ["Access Free Courses", "Limited Notes", "No Support"],
  },
  {
    name: "Pro",
    price: "₹499/month",
    features: ["All Free Features", "Download Notes", "Priority Support"],
  },
  {
    name: "Premium",
    price: "₹999/month",
    features: ["All Pro Features", "Live Sessions", "1-on-1 Mentorship"],
  },
];

const PricingPlans = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-10">Choose a Plan</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((f, idx) => (
                <li key={idx} className="text-gray-700">✔ {f}</li>
              ))}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
              Select
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
