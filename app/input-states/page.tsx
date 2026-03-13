"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Search, Eye, AlertCircle, Lock, AtSign } from "lucide-react";

interface StateCardProps {
  title: string;
  props: string;
  children: React.ReactNode;
}

function StateCard({ title, props, children }: StateCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
          State
        </p>
        <p className="text-sm font-bold text-gray-900">{title}</p>
      </div>
      <div className="bg-gray-50 rounded-lg border border-gray-100 px-4 py-2.5">
        <p className="text-[11px] font-mono text-gray-500 leading-relaxed whitespace-pre-wrap">{props}</p>
      </div>
      <div className="pt-1">{children}</div>
    </div>
  );
}

export default function InputStatesPage() {
  const states = [
    {
      title: "Default",
      props: `<Input placeholder="Email" />`,
      render: <Input placeholder="Email" />,
    },
    {
      title: "Disabled",
      props: `<Input disabled placeholder="Email" />`,
      render: <Input disabled placeholder="Email" />,
    },
    {
      title: "Disabled with value",
      props: `<Input disabled value="user@example.com" readOnly />`,
      render: <Input disabled value="user@example.com" readOnly />,
    },
    {
      title: "With Label",
      props: `<Input\n  label="Email"\n  placeholder="Email"\n/>`,
      render: <Input label="Email" placeholder="Email" />,
    },
    {
      title: "Required (Label + asterisk)",
      props: `<Input\n  label="Email"\n  required\n  placeholder="Email"\n/>`,
      render: <Input label="Email" required placeholder="Email" />,
    },
    {
      title: "With Hint text",
      props: `<Input\n  label="Email"\n  hint="We'll never share your email."\n  placeholder="Email"\n/>`,
      render: (
        <Input
          label="Email"
          hint="We'll never share your email."
          placeholder="Email"
        />
      ),
    },
    {
      title: "Error state",
      props: `<Input\n  label="Email"\n  error="Please enter a valid email address."\n  placeholder="Email"\n/>`,
      render: (
        <Input
          label="Email"
          error="Please enter a valid email address."
          placeholder="Email"
        />
      ),
    },
    {
      title: "Error (no label)",
      props: `<Input\n  error="This field is required."\n  placeholder="Email"\n/>`,
      render: <Input error="This field is required." placeholder="Email" />,
    },
    {
      title: "Size: sm",
      props: `<Input size="sm" placeholder="Small input" />`,
      render: <Input size="sm" placeholder="Small input" />,
    },
    {
      title: "Size: md (default)",
      props: `<Input size="md" placeholder="Medium input" />\n// "md" is the default — no need to pass it`,
      render: <Input size="md" placeholder="Medium input" />,
    },
    {
      title: "Size: lg",
      props: `<Input size="lg" placeholder="Large input" />`,
      render: <Input size="lg" placeholder="Large input" />,
    },
    {
      title: "Leading Icon",
      props: `<Input\n  leadingIcon={<Mail />}\n  placeholder="Email"\n/>`,
      render: <Input leadingIcon={<Mail />} placeholder="Email" />,
    },
    {
      title: "Trailing Icon",
      props: `<Input\n  trailingIcon={<Eye />}\n  placeholder="Password"\n  type="password"\n/>`,
      render: (
        <Input trailingIcon={<Eye />} placeholder="Password" type="password" />
      ),
    },
    {
      title: "Leading + Trailing Icon",
      props: `<Input\n  leadingIcon={<Mail />}\n  trailingIcon={<AlertCircle />}\n  placeholder="Email"\n/>`,
      render: (
        <Input
          leadingIcon={<Mail />}
          trailingIcon={<AlertCircle />}
          placeholder="Email"
        />
      ),
    },
    {
      title: "Prefix text",
      props: `<Input\n  prefix="https://"\n  placeholder="yoursite.com"\n/>`,
      render: <Input prefix="https://" placeholder="yoursite.com" />,
    },
    {
      title: "Suffix text",
      props: `<Input\n  suffix=".com"\n  placeholder="yoursite"\n/>`,
      render: <Input suffix=".com" placeholder="yoursite" />,
    },
    {
      title: "Prefix + Suffix",
      props: `<Input\n  prefix="$"\n  suffix="USD"\n  placeholder="0.00"\n/>`,
      render: <Input prefix="$" suffix="USD" placeholder="0.00" />,
    },
    {
      title: "Full combo: Label + Icon + Hint",
      props: `<Input\n  label="Email address"\n  leadingIcon={<Mail />}\n  hint="Enter your work email."\n  placeholder="you@company.com"\n/>`,
      render: (
        <Input
          label="Email address"
          leadingIcon={<Mail />}
          hint="Enter your work email."
          placeholder="you@company.com"
        />
      ),
    },
    {
      title: "Full combo: Label + Icon + Error",
      props: `<Input\n  label="Username"\n  leadingIcon={<AtSign />}\n  trailingIcon={<AlertCircle />}\n  error="Username is already taken."\n  placeholder="shadcn"\n/>`,
      render: (
        <Input
          label="Username"
          leadingIcon={<AtSign />}
          trailingIcon={<AlertCircle />}
          error="Username is already taken."
          placeholder="shadcn"
        />
      ),
    },
    {
      title: "Full combo: sm + Icon + Hint + Required",
      props: `<Input\n  label="Search"\n  size="sm"\n  leadingIcon={<Search />}\n  hint="Press Enter to search."\n  required\n  placeholder="Search..."\n/>`,
      render: (
        <Input
          label="Search"
          size="sm"
          leadingIcon={<Search />}
          hint="Press Enter to search."
          required
          placeholder="Search..."
        />
      ),
    },
    {
      title: "Full combo: lg + Icon + Disabled + Required",
      props: `<Input\n  label="Password"\n  size="lg"\n  leadingIcon={<Lock />}\n  disabled\n  required\n  placeholder="Enter password"\n/>`,
      render: (
        <Input
          label="Password"
          size="lg"
          leadingIcon={<Lock />}
          disabled
          required
          placeholder="Enter password"
        />
      ),
    },
    {
      title: "Layout: stacked",
      props: `<Input\n  layout="stacked"\n  label="Email"\n  hint="We'll never share your email."\n  action={<Button variant="primary" size="md">Submit</Button>}\n  placeholder="Email"\n/>`,
      render: (
        <Input layout="stacked" label="Email" hint="We'll never share your email."
          action={<Button variant="primary" size="md">Submit</Button>} placeholder="Email" />
      ),
    },
    {
      title: "Layout: inline",
      props: `<Input\n  layout="inline"\n  label="Subscribe"\n  action={<Button variant="primary" size="md">Join</Button>}\n  placeholder="you@example.com"\n/>`,
      render: (
        <Input layout="inline" label="Subscribe"
          action={<Button variant="primary" size="md">Join</Button>} placeholder="you@example.com" />
      ),
    },
    {
      title: "Layout: inline + error",
      props: `<Input\n  layout="inline"\n  label="Subscribe"\n  error="Please enter a valid email."\n  action={<Button variant="primary" size="md">Join</Button>}\n  placeholder="you@example.com"\n/>`,
      render: (
        <Input layout="inline" label="Subscribe" error="Please enter a valid email."
          action={<Button variant="primary" size="md">Join</Button>} placeholder="you@example.com" />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Input — All States</h1>
        <p className="text-sm text-gray-500 mt-1">
          Component:{" "}
          <code className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-xs">
            @mnee-ui/ui → &lt;Input /&gt;
          </code>
          &nbsp;·&nbsp; Each card: state name · props used · live component
        </p>
      </div>

      {/* Props reference table */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Props Reference
        </p>
        <div className="grid grid-cols-1 gap-y-2">
          {[
            ["label", "string", "Label shown above the input"],
            ["hint", "string", "Helper text below (gray). Hidden when error is set"],
            ["error", "string", "Error message below (red). Overrides hint. Turns border red"],
            ["size", '"sm" | "md" | "lg"', 'Controls height & font. Default: "md"'],
            ["prefix", "string", 'Text inside left edge — e.g. "$", "https://"'],
            ["suffix", "string", 'Text inside right edge — e.g. ".com", "USD"'],
            ["leadingIcon", "ReactNode", "Icon inside left edge (before text)"],
            ["trailingIcon", "ReactNode", "Icon inside right edge (after text)"],
            ["disabled", "boolean", "Dims field, disables interaction. Via HTML attr"],
            ["required", "boolean", "Adds red * after label text. Via HTML attr"],
            ["placeholder", "string", "Native placeholder (gray ghost text)"],
            ["value / defaultValue", "string", "Controlled / uncontrolled value. Native HTML"],
            ["type", "string", '"email", "password", "text", etc. Native HTML'],
            ["id", "string", "Auto-generated from label if not provided"],
            ["layout", '"stacked" | "inline"', 'Places action slot below (stacked) or beside (inline) the field'],
            ["action", "ReactNode", "Action element (e.g. Button) rendered via the layout slot"],
          ].map(([prop, type, desc]) => (
            <div key={prop} className="flex gap-3 items-start text-xs">
              <span className="font-mono text-amber-700 font-semibold w-36 shrink-0">
                {prop}
              </span>
              <span className="font-mono text-blue-600 w-44 shrink-0">{type}</span>
              <span className="text-gray-500">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* State cards */}
      <div className="grid grid-cols-3 gap-5">
        {states.map((s) => (
          <StateCard key={s.title} title={s.title} props={s.props}>
            {s.render}
          </StateCard>
        ))}
      </div>
    </div>
  );
}
