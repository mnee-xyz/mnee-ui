/**
 * Pages (outputs) need full-width layout — no max-width constraint.
 * This layout cancels the px-8 py-10 applied by the parent docs layout
 * so output pages can fill the available viewport width.
 */
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="-mx-8 -my-10 h-full">{children}</div>;
}
