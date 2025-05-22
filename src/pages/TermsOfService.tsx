const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-sm md:text-base text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-teal-700">
        Terms and Conditions
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Objectives</h2>
        <p>
          Fundnest aims to help users enter and navigate the cryptocurrency
          space, providing tools to support sound wealth-growing decisions.
          Services are tailored for medium- and long-term investors.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Activities</h2>
        <h3 className="font-semibold">2.1 Account creation</h3>
        <p>
          Fundnest creates crypto exchange accounts on behalf of users. Once set
          up, users receive credentials and password instructions. Users hold
          full responsibility and ownership of their accounts.
        </p>

        <h3 className="font-semibold mt-2">2.2 Asset allocation</h3>
        <p>
          Proprietary algorithms allocate assets based on user input. Manual
          trades may limit monitoring/reporting.
        </p>

        <h3 className="font-semibold mt-2">
          2.3 Fund deposits and withdrawals
        </h3>
        <p>
          Users handle deposits and withdrawals, with guidance from Fundnest.
        </p>

        <h3 className="font-semibold mt-2">
          2.4 Account monitoring and reporting
        </h3>
        <p>
          Fundnest provides monthly portfolio dashboards while monitoring
          accounts.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Fees</h2>
        <h3 className="font-semibold">3.1 Fee structure</h3>
        <p>
          Plans include freemium (limited functionality) and performance-based.
          Fundnest earns only if the customer profits.
        </p>

        <h3 className="font-semibold mt-2">3.2 Promotions</h3>
        <p>Fundnest may apply promotional discounts at its discretion.</p>

        <h3 className="font-semibold mt-2">3.3 Other fees</h3>
        <p>
          Fundnest charges no hidden fees. Users are responsible for
          exchange/bank charges.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Security</h2>
        <h3 className="font-semibold">4.1 Infrastructure</h3>
        <p>
          Fundnest uses Google Cloud to reduce security and compliance risks.
        </p>

        <h3 className="font-semibold mt-2">4.2 Exchanges</h3>
        <p>
          Only vetted top-10 exchanges are used. API keys limit access and
          cannot perform fund withdrawals.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
        <h3 className="font-semibold">5.1 Financial advice</h3>
        <p>
          Fundnest does not offer financial advice and urges users to consult
          qualified professionals.
        </p>

        <h3 className="font-semibold mt-2">5.2 Warranties</h3>
        <p>
          Services are provided as-is. No guarantees are made regarding
          performance or reliability.
        </p>

        <h3 className="font-semibold mt-2">5.3 Liability</h3>
        <p>
          Fundnest liability is limited to the amount paid for its services. No
          responsibility is accepted for indirect damages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Risks</h2>
        <p>
          Crypto investing carries risks, including loss of capital. Users
          should invest only what they can afford to lose. Loss-limiting
          strategies may fail under certain conditions. Fundnest is not liable
          for losses.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Privacy</h2>
        <p>
          Fundnest is GDPR-compliant. It stores minimal, essential user data and
          does not share it without user consent. Users can request deletion via
          email.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Communication</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>User accepts full responsibility for trading losses.</li>
          <li>User can stop using Fundnest anytime.</li>
          <li>User warrants all provided information is accurate.</li>
          <li>
            Fundnest acts as a SaaS provider, not affiliated with exchanges.
          </li>
          <li>User is responsible for all taxes from trading or services.</li>
          <li>Governed by Dutch law. Disputes go to Netherlands court.</li>
          <li>Fundnest may deny or terminate service at any time.</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsAndConditions;
