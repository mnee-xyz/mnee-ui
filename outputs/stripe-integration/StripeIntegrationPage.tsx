"use client";

import { useState } from "react";
import {
  ChevronRight,
  ExternalLink,
  CircleCheckBig,
  Download,
  ChevronDown,
  ArrowRight,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import { CodeBlock } from "@/components/ui/code-block";
import { Banner } from "@/components/ui/banner";
import { CardContainer } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from "@/components/ui/table";

// ── Code strings ─────────────────────────────────────────────────────────────

const codeElementsConfig = `customPaymentMethods: [
  {
    id: 'YOUR_CPMT_ID',
    options: { type: 'static', subtitle: 'USDC, USDT, and more' }
  }
]`;

const codeHandleSubmit = `async function handleSubmit() {
  event.preventDefault();

  const { submittedEl } = await elements.submit();

  if (
    submittedEl.selectedPaymentMethod &&
    submittedEl.selectedPaymentMethod !== "YOUR_CPMT_ID"
  ) {
    // is a redirect to MNEE Pay checkout
    const checkoutUrl = await fetchMNEEPayCheckout(submittedEl);
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
    return;
  }
  // Handle other Stripe payment methods
}`;

const codeServerSession = `// POST /api/create-checkout
app.post("/api/create-checkout", async (req, res) => {
  const { amount, currency } = req.body;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      { price_data: { currency, unit_amount: amount } },
    ],
    payment_method_types: ["card", "YOUR_CPMT_ID"],
    success_url: \`\${process.env.DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}\`,
    cancel_url: \`\${process.env.DOMAIN}/cancel\`,
  });

  res.json({ url: session.url });
});`;

const codeWebhook = `// POST /webhooks/mnee
app.post('/webhooks/mnee', (req, res) => {
  const signature = req.headers['x-mnee-signature'];

  if (!verifySignature(req.body, signature)) {
    return res.status(401).send('Invalid signature');
  }

  const { reference, status, txHash } = req.body;

  if (status === 'confirmed') {
    await markOrderPaid(reference, txHash);
  }

  res.status(200).send('OK');
});`;

const webhookFields = [
  { field: "reference", type: "string", desc: "Your order ID from checkout" },
  { field: "status",    type: "string", desc: '"confirmed" or "failed"' },
  { field: "txHash",    type: "string", desc: "Blockchain transaction hash" },
  { field: "amount",    type: "number", desc: "Amount paid in cents" },
  { field: "token",     type: "string", desc: "Token used (USDC, USDT)" },
  { field: "network",   type: "string", desc: "Network used (Base, Ethereum)" },
];

// ── Main page ─────────────────────────────────────────────────────────────────

interface StripeIntegrationPageProps {
  onCreateIntegration?: (data: { name: string; stripeCmptId: string; webhookUrl: string }) => void;
  onNavigateToModules?: () => void;
}

interface FormData {
  name: string;
  stripeCmptId: string;
  webhookUrl: string;
}

interface FormErrors {
  name?: string;
  stripeCmptId?: string;
  webhookUrl?: string;
}

export function StripeIntegrationPage({
  onCreateIntegration,
  onNavigateToModules,
}: StripeIntegrationPageProps) {
  const [showCheckoutExamples, setShowCheckoutExamples] = useState(false);
  const [showWebhookExamples, setShowWebhookExamples] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    stripeCmptId: "",
    webhookUrl: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const name = formData.name.trim();
    const stripeCmptId = formData.stripeCmptId.trim();
    const webhookUrl = formData.webhookUrl.trim();

    if (!name) newErrors.name = "Integration name is required";
    if (!stripeCmptId) {
      newErrors.stripeCmptId = "CPMT_ID is required";
    } else if (!stripeCmptId.startsWith("cpmt_")) {
      newErrors.stripeCmptId = "CPMT_ID must start with cpmt_";
    }
    if (!webhookUrl || webhookUrl === "https://") {
      newErrors.webhookUrl = "Webhook URL is required";
    } else if (!webhookUrl.startsWith("https://") && !webhookUrl.startsWith("http://")) {
      newErrors.webhookUrl = "Please enter a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onCreateIntegration?.({
        name: formData.name,
        stripeCmptId: formData.stripeCmptId,
        webhookUrl: formData.webhookUrl,
      });
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="px-6 py-6 bg-white overflow-y-auto w-full text-gray-800">

      {/* Breadcrumb */}
      <div className="flex items-center pt-1 pb-12">
        <div className="flex items-center gap-6">
          <Wrench className="text-gray-900 h-5 w-5" />
          <div className="h-4 w-px bg-gray-300" />
        </div>
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm font-normal text-gray-500">Merchant tools</span>
          <ChevronRight size={20} className="text-gray-500" />
          <span className="text-sm font-normal text-gray-900">Stripe Integration</span>
        </div>
      </div>

      {/* Header */}
      <h1 className="text-lg font-bold mb-1">Stripe integration</h1>
      <p className="text-[#737373] mb-6">
        Accept stablecoin payments through your existing Stripe checkout.
      </p>

      {/* How it works */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">How it works</h2>
        <p className="text-gray-800 mb-4 text-sm">
          MNEE Pay works as a Stripe Custom Payment Method. When a customer chooses to pay
          with stablecoins at checkout, they&apos;re redirected to MNEE Pay to complete their
          payment via QR code. Funds land in your MNEE account instantly.
        </p>
        <div className="flex items-center justify-center gap-3 bg-[#F9FAFB] w-full min-h-[80px] px-10 py-5 rounded-xl border border-gray-100 flex-wrap">
          <span className="inline-flex items-center px-3 py-2 rounded-[4px] text-[14px] font-medium bg-[#374151] text-white shadow-sm">Stripe Checkout</span>
          <span className="text-gray-400 text-sm">&rarr;</span>
          <span className="inline-flex items-center px-3 py-2 rounded-[4px] text-[14px] font-medium bg-[#D97706] text-white shadow-sm">Customer selects MNEE Pay</span>
          <span className="text-gray-400 text-sm">&rarr;</span>
          <span className="inline-flex items-center px-3 py-2 rounded-[4px] text-[14px] font-medium bg-[#374151] text-white shadow-sm">Scans QR &amp; pays</span>
          <span className="text-gray-400 text-sm">&rarr;</span>
          <span className="inline-flex items-center px-3 py-2 rounded-[4px] text-[14px] font-medium bg-[#374151] text-white shadow-sm">You receive MNEE</span>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Before you begin, make sure you have:</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Icon icon={CircleCheckBig} size="sm" className="text-green-600" />
            <span className="text-sm text-gray-800">A Stripe account with dashboard access</span>
          </li>
          <li className="flex items-center gap-2">
            <Icon icon={CircleCheckBig} size="sm" className="text-green-600" />
            <span className="text-sm text-gray-800">An existing Stripe Payment Element integration</span>
          </li>
          <li className="flex items-center gap-2">
            <Icon icon={CircleCheckBig} size="sm" className="text-green-600" />
            <span className="text-sm text-gray-800">A verified MNEE Pay merchant account</span>
          </li>
          <li className="flex items-center gap-2">
            <Icon icon={CircleCheckBig} size="sm" className="text-green-600" />
            <span className="text-sm text-gray-800">Your webhook endpoint URL</span>
          </li>
        </ul>
        <span className="flex items-center text-[#D97706] mt-1.5 text-[12px] gap-1">
          Don&apos;t have a URL yet?{" "}
          <a
            href="https://docs.stripe.com/webhooks/quickstart"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 underline"
          >
            View Stripe webhook quickstart
            <ExternalLink className="w-3 h-3" />
          </a>
        </span>
      </section>

      {/* Step 1 */}
      <section className="mb-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold mt-2 mb-3">Step 1: Create your custom payment method in Stripe</h2>
        <p className="text-gray-800 mb-3 text-sm">
          This generates a unique identifier (CPMT_ID) that connects your Stripe checkout to MNEE Pay.
        </p>

        <CardContainer className="p-5 bg-[#F9FAFB] mb-4">
          <p className="text-md text-gray-900 mb-3">
            Log in to your <span className="text-[#D97706]">Stripe Dashboard</span>
          </p>
          <div className="text-gray-900 mb-3 space-y-2 text-sm">
            <p>Go to <strong>Settings &rarr; Payments &rarr; Custom Payment Methods</strong></p>
            <p>Click &quot;Create custom payment method&quot;</p>
            <p>Click &quot;Provide custom name and icon&quot;</p>
            <p>Enter the following details:</p>
          </div>

          <Table className="w-[500px] max-w-full">
            <TableHead>
              <TableRow>
                <TableHeader className="w-32 py-2">Field</TableHeader>
                <TableHeader className="py-2">Value</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="py-2 text-[#737373]">Display name</TableCell>
                <TableCell className="py-2">Pay with stablecoin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2 text-[#737373]">Logo</TableCell>
                <TableCell className="py-2">
                  <a href="/MNEE-Icon-16x16.png" download="MNEE-Icon-16x16.png" className="flex items-center gap-1 text-[#D97706] cursor-pointer hover:underline">
                    Download MNEE Pay logo (16&times;16px)
                    <Download className="w-4 h-4" />
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="text-gray-900 mt-4 mb-1 text-sm">Click <strong>Create</strong></p>
          <p className="text-gray-900 mb-0 text-sm">
            Copy the generated <strong>CPMT_ID</strong> (starts with <em>cpmt_</em>)
          </p>
        </CardContainer>

        <Alert variant="tip" className="mb-6">
          Save your CPMT_ID somewhere secure. You&apos;ll need it for your frontend code and when
          configuring your MNEE Pay and Stripe integration.
        </Alert>
      </section>

      {/* Step 2 */}
      <section className="mb-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold mt-2 mb-3">Step 2: Register your Stripe custom payment method in MNEE Pay</h2>
        <p className="text-gray-800 mb-3 text-sm">
          This creates the connection between your Stripe checkout and MNEE Pay&apos;s payment processing.
        </p>

        <CardContainer className="p-5 bg-[#F9FAFB] mb-4">
          <div className="space-y-3">
            <Input
              label="Module name"
              placeholder="My Store Stripe Integration"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              error={errors.name}
            />
            <Input
              label="CPMT_ID"
              placeholder="cpmt_..."
              value={formData.stripeCmptId}
              onChange={(e) => handleInputChange("stripeCmptId", e.target.value)}
              error={errors.stripeCmptId}
            />
            <Input
              label="Webhook URL"
              placeholder="https://yourdomain.com/webhooks/mnee"
              value={formData.webhookUrl}
              onChange={(e) => handleInputChange("webhookUrl", e.target.value)}
              error={errors.webhookUrl}
            />
            <div className="flex items-center gap-4 pt-3">
              <Button onClick={handleSave} className="whitespace-nowrap">Create integration</Button>
              <p className="text-sm text-[#737373]">
                After creating, you&apos;ll receive a Module ID to use in your redirect URL.
              </p>
            </div>
          </div>
        </CardContainer>

        <p className="text-sm text-[#737373] mt-3">
          Or if you already have an integration, go to{" "}
          <span className="text-gray-900 font-medium">Merchant tools &rarr; Modules</span> to manage it.
        </p>
      </section>

      {/* Step 3 */}
      <section className="mb-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold mt-2 mb-3">Step 3: Update your checkout code</h2>
        <p className="text-gray-800 mb-3 text-sm">
          Add the custom payment method to your Stripe Elements configuration.
        </p>

        <CodeBlock
          title="Add to your Stripe Elements config"
          code={codeElementsConfig}
          language="javascript"
        />

        {showCheckoutExamples && (
          <div className="mt-4 space-y-4">
            <CodeBlock
              title="Handle payment submission:"
              code={codeHandleSubmit}
              language="javascript"
            />
            <CodeBlock
              title="Create session on server-side:"
              code={codeServerSession}
              language="javascript"
            />
          </div>
        )}

        <p
          onClick={() => setShowCheckoutExamples((prev) => !prev)}
          className="mt-3 flex items-center gap-1 text-sm text-[#D97706] cursor-pointer select-none"
        >
          <span>{showCheckoutExamples ? "Hide examples" : "View full integration examples"}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${showCheckoutExamples ? "rotate-180" : ""}`}
          />
        </p>
      </section>

      {/* Step 4 */}
      <section className="mb-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold mt-2 mb-3">Step 4: Configure your webhook endpoint</h2>
        <p className="text-gray-800 mb-3 text-sm">
          This lets your webhook endpoint receive payment confirmations at the URL you specified in Step 2.
        </p>

        <div className="mt-4 space-y-4 mb-4">
          <CodeBlock
            title="Webhook handling"
            code={codeWebhook}
            language="javascript"
          />
        </div>

        {showWebhookExamples && (
          <Table className="mb-4">
            <TableHead>
              <TableRow>
                <TableHeader>Field</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Description</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {webhookFields.map((row) => (
                <TableRow key={row.field}>
                  <TableCell className="text-[#D97706]">{row.field}</TableCell>
                  <TableCell className="text-[#737373]">{row.type}</TableCell>
                  <TableCell className="font-medium">{row.desc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        <p
          onClick={() => setShowWebhookExamples((prev) => !prev)}
          className="mt-3 flex items-center gap-1 text-sm text-[#D97706] cursor-pointer select-none"
        >
          <span>{showWebhookExamples ? "Hide example" : "View webhook handler example"}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${showWebhookExamples ? "rotate-180" : ""}`}
          />
        </p>
      </section>

      {/* Start receiving payments section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Start receiving payments in stablecoins!</h2>
        <p className="text-gray-800 text-sm">
          Once you completed all steps sucesfully you will be set to allow your client to pay in crypto.
        </p>
        <img
          src="/mnee-pay-mockup.jpg"
          alt="MNEE Pay QR code mockup"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Additional resources */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Additional resources</h2>
        <div className="grid grid-cols-2 gap-3">
          <CardContainer
            className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() =>
              window.open(
                "https://docs.stripe.com/payments/payment-methods/custom-payment-methods",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <span className="text-sm text-gray-900 font-medium">Stripe Custom Payment Methods Documentation</span>
            <Icon icon={ExternalLink} size="sm" className="text-gray-500" />
          </CardContainer>
          <CardContainer
            className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() =>
              window.open(
                "https://docs.stripe.com/payments/mobile/embedded",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <span className="text-sm text-gray-900 font-medium">Stripe Payment Element Guide</span>
            <Icon icon={ExternalLink} size="sm" className="text-gray-500" />
          </CardContainer>
          <CardContainer
            className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={onNavigateToModules}
          >
            <span className="text-sm text-gray-900 font-medium">MNEE Pay API Reference</span>
            <Icon icon={ArrowRight} size="sm" className="text-gray-500" />
          </CardContainer>
          <CardContainer className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
            <span className="text-sm text-gray-900 font-medium">Webhook Configuration Guide</span>
            <Icon icon={ArrowRight} size="sm" className="text-gray-500" />
          </CardContainer>
        </div>
      </section>

      {/* Ready CTA */}
      <Banner
        variant="gradient"
        title="Ready to get started?"
        description="Create your Stripe integration now and start accepting stablecoin payments in minutes."
        action={<Button onClick={handleSave}>Create integration</Button>}
        className="mb-8"
      />

      {/* Need help */}
      <p className="text-sm text-[#737373]">
        Need help?{" "}
        <a
          href="mailto:support@mneepay.com"
          className="text-[#D97706] underline"
        >
          support@mneepay.com
        </a>
      </p>
    </div>
  );
}

export default StripeIntegrationPage;
