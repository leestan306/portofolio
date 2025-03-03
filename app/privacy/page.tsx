import React from 'react';

const PrivacyPolicyPage = () => {
  // Dynamically generate today's date
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Last Updated: <span className="font-medium">{lastUpdatedDate}</span>
        </p>

        <div className="space-y-6">
          <p>
            At [Your App Name], we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share information when you interact with our app during testing. Please read this policy carefully to understand our practices regarding your personal data.
          </p>

          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We may collect the following types of information during the testing phase:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Contact Information:</strong> Phone numbers or other contact details provided by you for testing purposes.
            </li>
            <li>
              <strong>Message Content:</strong> Text messages sent or received through the app during testing.
            </li>
            <li>
              <strong>Metadata:</strong> Information about interactions, such as timestamps, message IDs, and phone number IDs.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>
            The information collected is used solely for testing and development purposes. Specifically:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>To test the functionality of our app.</li>
            <li>To analyze and improve the performance of our app.</li>
            <li>To ensure compliance with WhatsApp Business API policies.</li>
          </ul>
          <p>
            We do not use your information for any commercial purposes or share it with third parties outside of the testing environment.
          </p>

          <h2 className="text-2xl font-semibold mb-2">3. Data Storage</h2>
          <p>
            All data collected during testing is stored securely in our internal systems. After the testing period concludes, all collected data will be deleted unless explicitly retained for debugging or regulatory compliance purposes.
          </p>

          <h2 className="text-2xl font-semibold mb-2">4. Data Sharing</h2>
          <p>
            We do not share your personal information with third parties unless required by law or to comply with legal obligations. During testing, your data may be accessed by authorized developers and testers within our organization.
          </p>

          <h2 className="text-2xl font-semibold mb-2">5. Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and secure storage practices.
          </p>

          <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of the app after such changes constitutes your acceptance of the revised policy.
          </p>

          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
            <a
              href="mailto:your-email@example.com"
              className="text-blue-500 hover:underline"
            >
              {{"stanleykariuki805@gmail.com"}}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;