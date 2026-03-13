import Script from "next/script";

export default function InputStatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://mcp.figma.com/mcp/html-to-design/capture.js"
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
