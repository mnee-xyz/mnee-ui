import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["components/ui/index.ts"],
  format: ["esm", "cjs"],
  dts: false,
  external: ["react", "react-dom", "lucide-react"],
  clean: true,
  outDir: "dist",
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
