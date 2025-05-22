const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: June 06, 2018</p>

      <section className="mb-10">
        <p className="mb-4">
          FundNest (“we”, “us”, “our”) is committed to protecting and respecting
          your privacy and meeting its data protection obligations under the
          General Data Protection Regulation (“GDPR”) and the Data Protection
          Act 2018.
        </p>
        <p>
          This Privacy Policy describes how and why we collect, use, and share
          your personal data when you visit our website or use our services. It
          also outlines your rights and how you can access and control your
          data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Data Protection Principles
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Processed lawfully, fairly, and in a transparent manner</li>
          <li>Collected only for specified, legitimate purposes</li>
          <li>Adequate, relevant, and limited to what is necessary</li>
          <li>Accurate and kept up to date</li>
          <li>Stored only as long as necessary</li>
          <li>Processed securely to maintain integrity and confidentiality</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Data We Collect</h2>
        <p className="mb-4">
          We collect and process the following types of personal data:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact Information (name, email, address, phone number)</li>
          <li>Financial Information (bank details, crypto wallet, etc.)</li>
          <li>Biographic or Demographic Data (DOB, country of residence)</li>
          <li>Technical Data (IP address, browser type, device information)</li>
          <li>Usage and preference data collected via cookies</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">How We Collect Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Direct interactions (e.g., forms, emails, phone calls)</li>
          <li>Automated technologies (cookies, logs)</li>
          <li>Third parties (analytics providers, advertising networks)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to analyze trends and
          administer the site. You can control cookie preferences in your
          browser settings.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To send newsletters, promotional emails, and updates</li>
          <li>To process payments and complete transactions</li>
          <li>To manage accounts and provide customer support</li>
          <li>To improve user experience and service offerings</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p>
          We retain personal data only as long as necessary to fulfill the
          purposes we collected it for, including legal, accounting, or
          reporting requirements. Marketing data is retained for 6 months after
          opting out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your data and receive a copy</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion or restriction of your data</li>
          <li>Object to processing for direct marketing</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us at:{" "}
          <a
            href="mailto:support@fundnest.com"
            className="text-blue-600 underline"
          >
            support@fundnest.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
