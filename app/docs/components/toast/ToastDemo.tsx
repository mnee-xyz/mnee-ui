"use client";
import { ToastProvider, useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/site/ComponentPreview";

function LiveDemo() {
  const { showToast } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="outline" onClick={() => showToast("Payment processed successfully.", "success")}>Success</Button>
      <Button size="sm" variant="outline" onClick={() => showToast("Something went wrong. Please try again.", "error")}>Error</Button>
      <Button size="sm" variant="outline" onClick={() => showToast("Your session will expire in 5 minutes.", "warning")}>Warning</Button>
      <Button size="sm" variant="outline" onClick={() => showToast("A new version is available.", "info")}>Info</Button>
      <Button size="sm" variant="outline" onClick={() => showToast("Changes saved.")}>Default</Button>
    </div>
  );
}

export function ToastLiveDemo({ code }: { code: string }) {
  return (
    <ToastProvider>
      <ComponentPreview code={code}>
        <LiveDemo />
      </ComponentPreview>
    </ToastProvider>
  );
}
