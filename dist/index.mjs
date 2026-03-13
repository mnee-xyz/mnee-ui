var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// components/ui/button.tsx
import { Loader2 } from "lucide-react";

// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// components/ui/button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var variantStyles = {
  primary: "bg-brand text-white hover:bg-brand-dark active:bg-brand-dark shadow-sm",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-200",
  destructive: "bg-error text-white hover:opacity-90 active:opacity-90 shadow-sm",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-100",
  outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 shadow-sm"
};
var sizeStyles = {
  sm: "h-7 px-3 text-xs rounded-md gap-1.5",
  md: "h-9 px-4 text-sm rounded-lg gap-2",
  lg: "h-11 px-6 text-base rounded-lg gap-2.5"
};
function Button(_a) {
  var _b = _a, {
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    className,
    children
  } = _b, props = __objRest(_b, [
    "variant",
    "size",
    "loading",
    "disabled",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxs(
    "button",
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center justify-center font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
      ),
      disabled: disabled || loading
    }, props), {
      children: [
        loading && /* @__PURE__ */ jsx(Loader2, { className: "animate-spin", size: size === "lg" ? 18 : 14 }),
        children
      ]
    })
  );
}

// components/ui/button-icon.tsx
import { LoaderCircle } from "lucide-react";
import { jsx as jsx2 } from "react/jsx-runtime";
var variantStyles2 = {
  primary: "bg-brand text-white hover:opacity-80 disabled:bg-[#fdba74]",
  secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 hover:opacity-80 disabled:bg-[#cecece]",
  destructive: "bg-error text-white hover:opacity-80 disabled:bg-[#fca5a5]",
  outline: "bg-white border border-surface-border shadow-sm hover:bg-[#f5f5f5] hover:opacity-80 disabled:bg-[#cecece]",
  ghost: "hover:bg-[#f5f5f5] hover:shadow-sm hover:opacity-80 disabled:bg-[#cecece] disabled:shadow-sm"
};
function ButtonIcon(_a) {
  var _b = _a, {
    variant = "primary",
    loading = false,
    disabled,
    icon,
    className
  } = _b, props = __objRest(_b, [
    "variant",
    "loading",
    "disabled",
    "icon",
    "className"
  ]);
  return /* @__PURE__ */ jsx2(
    "button",
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center justify-center rounded-lg size-8 transition-opacity",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50",
        "disabled:pointer-events-none disabled:opacity-80",
        variantStyles2[variant],
        className
      ),
      disabled: disabled || loading
    }, props), {
      children: loading ? /* @__PURE__ */ jsx2(LoaderCircle, { className: "animate-spin", size: 14 }) : icon
    })
  );
}

// components/ui/badge.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var variantStyles3 = {
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-red-600 text-white",
  info: "bg-info text-white",
  default: "bg-gray-600 text-white",
  brand: "bg-brand text-white"
};
function Badge(_a) {
  var _b = _a, {
    variant = "default",
    className,
    children
  } = _b, props = __objRest(_b, [
    "variant",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsx3(
    "span",
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center justify-center px-2.5 py-0.5 rounded-lg",
        "text-xs font-medium leading-4 whitespace-nowrap",
        variantStyles3[variant],
        className
      )
    }, props), {
      children
    })
  );
}

// components/ui/card.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function CardContainer(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx4(
    "div",
    __spreadProps(__spreadValues({
      className: cn("bg-white rounded-lg border border-[#E5E5E5] shadow-sm", className)
    }, props), {
      children
    })
  );
}
function Card(props) {
  if (props.variant === "balance") {
    return /* @__PURE__ */ jsx4(BalanceCard, __spreadValues({}, props));
  }
  return /* @__PURE__ */ jsx4(ModuleCard, __spreadValues({}, props));
}
function CardShell({ className, children }) {
  return /* @__PURE__ */ jsx4("div", { className: cn("bg-white rounded-lg border border-[#E5E5E5] shadow-sm", className), children });
}
function Skeleton({ className }) {
  return /* @__PURE__ */ jsx4("div", { className: cn("animate-pulse rounded bg-gray-200", className) });
}
function BalanceCard({ title, description, amount, action, loading, className }) {
  return /* @__PURE__ */ jsxs2(CardShell, { className, children: [
    /* @__PURE__ */ jsx4("div", { className: "px-6 pt-6 pb-4", children: loading ? /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx4(Skeleton, { className: "h-4 w-32" }),
      description !== void 0 && /* @__PURE__ */ jsx4(Skeleton, { className: "mt-2 h-3 w-48" })
    ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx4("h3", { className: "text-base font-semibold text-gray-900 leading-tight", children: title }),
      description && /* @__PURE__ */ jsx4("p", { className: "mt-1 text-sm text-gray-500 leading-normal", children: description })
    ] }) }),
    /* @__PURE__ */ jsx4("div", { className: "px-6 pb-4", children: loading ? /* @__PURE__ */ jsx4(Skeleton, { className: "h-9 w-36" }) : /* @__PURE__ */ jsx4("p", { className: "text-3xl font-bold text-gray-900", children: amount }) }),
    action && /* @__PURE__ */ jsx4("div", { className: "flex items-center px-6 py-4 border-t border-[#E5E5E5] bg-gray-50 rounded-b-lg", children: action })
  ] });
}
function ModuleCard({ title, description, status, statusLabel, onEdit, onView, loading, className }) {
  return /* @__PURE__ */ jsxs2(CardShell, { className, children: [
    /* @__PURE__ */ jsx4("div", { className: "px-6 pt-6 pb-4", children: loading ? /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx4(Skeleton, { className: "h-4 w-36" }),
        /* @__PURE__ */ jsx4(Skeleton, { className: "h-5 w-16 rounded-full" })
      ] }),
      description !== void 0 && /* @__PURE__ */ jsx4(Skeleton, { className: "mt-2 h-3 w-52" })
    ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx4("h3", { className: "text-base font-semibold text-gray-900 leading-tight", children: title }),
        status && statusLabel && /* @__PURE__ */ jsx4(Badge, { variant: status, children: statusLabel })
      ] }),
      description && /* @__PURE__ */ jsx4("p", { className: "mt-1 text-sm text-gray-500 leading-normal", children: description })
    ] }) }),
    (onEdit || onView) && /* @__PURE__ */ jsx4("div", { className: "flex items-center justify-end gap-2 px-6 py-4 border-t border-[#E5E5E5] bg-gray-50 rounded-b-lg", children: loading ? /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx4(Skeleton, { className: "h-7 w-12" }),
      /* @__PURE__ */ jsx4(Skeleton, { className: "h-7 w-12" })
    ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
      onEdit && /* @__PURE__ */ jsx4(Button, { variant: "ghost", size: "sm", onClick: onEdit, children: "Edit" }),
      onView && /* @__PURE__ */ jsx4(Button, { variant: "primary", size: "sm", onClick: onView, children: "View" })
    ] }) })
  ] });
}

// components/ui/input.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var sizeStyles2 = {
  sm: "rounded-md text-xs",
  md: "rounded-lg text-sm",
  lg: "rounded-lg text-base"
};
var inputPaddingStyles = {
  sm: "py-1.5 px-2.5",
  md: "py-2 px-3",
  lg: "py-2.5 px-4"
};
var addonPaddingStyles = {
  sm: "px-2",
  md: "px-2.5",
  lg: "px-3"
};
var iconSizeStyles = {
  sm: "[&>svg]:size-3.5",
  md: "[&>svg]:size-4",
  lg: "[&>svg]:size-5"
};
function Input(_a) {
  var _b = _a, {
    label,
    hint,
    error,
    size = "md",
    className,
    id,
    disabled,
    required,
    prefix,
    suffix,
    leadingIcon,
    trailingIcon
  } = _b, props = __objRest(_b, [
    "label",
    "hint",
    "error",
    "size",
    "className",
    "id",
    "disabled",
    "required",
    "prefix",
    "suffix",
    "leadingIcon",
    "trailingIcon"
  ]);
  const inputId = id != null ? id : label ? label.toLowerCase().replace(/\s+/g, "-") : void 0;
  const hasLeading = leadingIcon != null || prefix != null;
  const hasTrailing = trailingIcon != null || suffix != null;
  return /* @__PURE__ */ jsxs3("div", { className: cn("w-full flex flex-col gap-1", className), children: [
    label && /* @__PURE__ */ jsxs3(
      "label",
      {
        htmlFor: inputId,
        className: "text-sm font-medium text-gray-900",
        children: [
          label,
          required && /* @__PURE__ */ jsx5("span", { "aria-hidden": "true", className: "text-error ml-0.5", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs3(
      "div",
      {
        className: cn(
          "flex items-center w-full border bg-white transition-colors",
          "focus-within:ring-2 focus-within:ring-brand/50",
          "has-[input:disabled]:pointer-events-none has-[input:disabled]:opacity-50",
          error ? "border-error focus-within:border-error focus-within:ring-error/30" : "border-gray-300 focus-within:border-brand",
          sizeStyles2[size]
        ),
        children: [
          leadingIcon && /* @__PURE__ */ jsx5("span", { className: cn("flex items-center pointer-events-none text-gray-400", addonPaddingStyles[size], iconSizeStyles[size]), children: leadingIcon }),
          prefix && /* @__PURE__ */ jsx5("span", { className: cn("flex items-center pointer-events-none text-gray-400 select-none", addonPaddingStyles[size]), children: prefix }),
          /* @__PURE__ */ jsx5(
            "input",
            __spreadValues({
              id: inputId,
              disabled,
              required,
              "aria-invalid": !!error,
              "aria-describedby": error ? `${inputId}-error` : hint ? `${inputId}-hint` : void 0,
              className: cn(
                "flex-1 min-w-0 bg-transparent outline-none placeholder:text-gray-400",
                inputPaddingStyles[size],
                hasLeading && "pl-1.5",
                hasTrailing && "pr-1.5"
              )
            }, props)
          ),
          suffix && /* @__PURE__ */ jsx5("span", { className: cn("flex items-center pointer-events-none text-gray-400 select-none", addonPaddingStyles[size]), children: suffix }),
          trailingIcon && /* @__PURE__ */ jsx5("span", { className: cn("flex items-center pointer-events-none text-gray-400", addonPaddingStyles[size], iconSizeStyles[size]), children: trailingIcon })
        ]
      }
    ),
    error ? /* @__PURE__ */ jsx5("p", { id: `${inputId}-error`, className: "text-xs text-error", children: error }) : hint ? /* @__PURE__ */ jsx5("p", { id: `${inputId}-hint`, className: "text-xs text-muted", children: hint }) : null
  ] });
}

// components/ui/toast.tsx
import { createContext, useContext, useRef, useState } from "react";
import { X, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var ToastContext = createContext(null);
function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside <ToastProvider>");
  }
  return ctx;
}
var toastStyles = {
  success: {
    bg: "bg-success-bg",
    text: "text-success",
    icon: /* @__PURE__ */ jsx6(CheckCircle, { size: 18, className: "text-success shrink-0" })
  },
  error: {
    bg: "bg-error-bg",
    text: "text-error",
    icon: /* @__PURE__ */ jsx6(AlertTriangle, { size: 18, className: "text-error shrink-0" })
  },
  warning: {
    bg: "bg-warning-bg",
    text: "text-warning",
    icon: /* @__PURE__ */ jsx6(AlertTriangle, { size: 18, className: "text-warning shrink-0" })
  },
  info: {
    bg: "bg-info-bg",
    text: "text-info",
    icon: /* @__PURE__ */ jsx6(Info, { size: 18, className: "text-info shrink-0" })
  },
  default: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    icon: /* @__PURE__ */ jsx6(CheckCircle, { size: 18, className: "text-gray-500 shrink-0" })
  }
};
function Toast({ message, type, onClose = () => {
}, className }) {
  const { bg, text, icon } = toastStyles[type];
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      role: "alert",
      "aria-live": "polite",
      className: cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg w-[380px]",
        bg,
        text,
        className
      ),
      children: [
        icon,
        /* @__PURE__ */ jsx6("span", { className: "flex-1 text-sm font-medium", children: message }),
        /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: onClose,
            "aria-label": "Dismiss notification",
            className: "opacity-60 hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ jsx6(X, { size: 16 })
          }
        )
      ]
    }
  );
}
function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef(null);
  const dismiss = () => {
    setIsExiting(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setToast(null);
      setIsExiting(false);
    }, 300);
  };
  const showToast = (message, type = "default") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsExiting(false);
    setToast({ message, type });
    timerRef.current = setTimeout(dismiss, 4e3);
  };
  return /* @__PURE__ */ jsxs4(ToastContext.Provider, { value: { showToast }, children: [
    children,
    toast && /* @__PURE__ */ jsx6(
      "div",
      {
        className: "fixed top-6 right-6",
        style: {
          zIndex: 9999,
          animation: isExiting ? "slideOutToast 0.3s ease-in forwards" : "slideInToast 0.3s ease-out"
        },
        children: /* @__PURE__ */ jsx6(Toast, { message: toast.message, type: toast.type, onClose: dismiss })
      }
    )
  ] });
}

// components/ui/icons.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var sizeMap = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24
};
function Icon(_a) {
  var _b = _a, { icon: LucideComponent, size = "md", className } = _b, props = __objRest(_b, ["icon", "size", "className"]);
  return /* @__PURE__ */ jsx7(
    LucideComponent,
    __spreadValues({
      size: sizeMap[size],
      className: cn("shrink-0", className)
    }, props)
  );
}
function MneeIcon(props) {
  return /* @__PURE__ */ jsxs5(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 797 797"
    }, props), {
      children: [
        /* @__PURE__ */ jsxs5("g", { filter: "url(#MneeIcon_a)", children: [
          /* @__PURE__ */ jsx7(
            "path",
            {
              fill: "url(#MneeIcon_b)",
              d: "M148.438 398.438c0-138.072 111.928-250 250-250 138.071 0 250 111.928 250 250 0 138.071-111.929 250-250 250-138.072 0-250-111.929-250-250",
              shapeRendering: "crispEdges"
            }
          ),
          /* @__PURE__ */ jsx7(
            "path",
            {
              fill: "#05121F",
              d: "M148.438 398.438c0-138.072 111.928-250 250-250 138.071 0 250 111.928 250 250 0 138.071-111.929 250-250 250-138.072 0-250-111.929-250-250",
              shapeRendering: "crispEdges"
            }
          ),
          /* @__PURE__ */ jsx7(
            "path",
            {
              fill: "url(#MneeIcon_c)",
              d: "M164.062 398.438c0-129.442 104.934-234.376 234.376-234.376 129.441 0 234.374 104.934 234.374 234.376 0 129.441-104.933 234.374-234.374 234.374-129.442 0-234.376-104.933-234.376-234.374"
            }
          ),
          /* @__PURE__ */ jsx7(
            "path",
            {
              fill: "url(#MneeIcon_d)",
              fillRule: "evenodd",
              d: "m482.765 413.641-.381-88.048a17.06 17.06 0 0 0-5.028-12.031c-3.206-3.205-7.505-5.027-12.043-5.027-4.539 0-8.838 1.822-12.043 5.027s-5.029 7.5-5.029 12.038v145.674c0 13.255-5.267 25.861-14.637 35.227-9.371 9.369-21.982 14.634-35.237 14.634-13.257 0-25.87-5.265-35.238-14.634-9.371-9.366-14.638-21.972-14.638-35.227V325.6c0-4.538-1.823-8.834-5.028-12.038-3.206-3.205-7.505-5.027-12.043-5.027-4.539 0-8.838 1.822-12.043 5.027a17.06 17.06 0 0 0-5.026 12.031l-.383 88.048c-1.37 11.023-6.398 21.223-14.255 29.082-9.37 9.367-21.982 14.634-35.24 14.634-13.256 0-25.869-5.267-35.237-14.634-7.86-7.859-12.888-18.064-14.258-29.09l-.405-24.216-45.026-.008h-21.109l.168-3.435c3.049-62.067 28.993-120.38 72.935-164.313 47.048-47.036 110.287-73.223 176.823-73.223 66.538 0 129.774 26.187 176.822 73.223 30.786 30.78 53.107 69.091 64.523 111.106l1.121 4.13h-34.039l-.709-2.312c-10.404-33.867-29.041-64.69-54.092-89.735-40.88-40.868-95.814-63.618-153.627-63.618s-112.749 22.75-153.63 63.618c-30.057 30.051-50.697 68.188-59.218 109.832l-.397 1.94h62.284v50.872c0 4.536 1.823 8.836 5.028 12.04s7.505 5.028 12.043 5.028 8.838-1.824 12.043-5.028 5.029-7.501 5.029-12.04v-81.893c0-13.252 5.267-25.861 14.637-35.227 9.368-9.369 21.981-14.635 35.238-14.635 13.258 0 25.866 5.266 35.237 14.635 9.371 9.365 14.638 21.975 14.638 35.227v145.674c0 4.538 1.823 8.836 5.028 12.041s7.505 5.024 12.044 5.024c4.537 0 8.837-1.82 12.042-5.024 3.205-3.205 5.027-7.503 5.027-12.041V325.601c0-13.252 5.267-25.861 14.638-35.227 9.369-9.369 21.981-14.635 35.239-14.635s25.868 5.266 35.237 14.635c9.371 9.365 14.638 21.975 14.638 35.227v81.893c0 4.536 1.823 8.836 5.027 12.04s7.504 5.028 12.042 5.028 8.838-1.824 12.044-5.028c3.205-3.204 5.028-7.501 5.028-12.04v-50.872h62.279l-.004-.025h33.355l.435 2.765a252 252 0 0 1 3.044 39.074c0 66.52-26.198 129.742-73.245 176.778-47.049 47.036-110.286 73.224-176.822 73.224-66.538 0-129.776-26.188-176.824-73.224-43.53-43.519-69.423-101.186-72.845-162.651l-.193-3.457h32.838l.192 3.071c3.302 52.872 25.745 102.398 63.205 139.849 40.878 40.87 95.815 63.616 153.628 63.616s112.747-22.746 153.627-63.616c40.881-40.869 63.635-95.789 63.635-153.587q.001-3.73-.125-7.458l-.053-1.561h-33.291l-.408 24.213c-1.37 11.026-6.398 21.231-14.258 29.09-9.37 9.367-21.981 14.634-35.239 14.634-13.256 0-25.87-5.267-35.238-14.634-7.857-7.856-12.887-18.056-14.257-29.082",
              clipRule: "evenodd"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs5("defs", { children: [
          /* @__PURE__ */ jsxs5("linearGradient", { id: "MneeIcon_b", x1: 148.438, x2: 648.438, y1: 148.438, y2: 648.438, gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsx7("stop", { stopColor: "#FF6900" }),
            /* @__PURE__ */ jsx7("stop", { offset: 0.5, stopColor: "#FE9A00" }),
            /* @__PURE__ */ jsx7("stop", { offset: 1, stopColor: "#FDC700" })
          ] }),
          /* @__PURE__ */ jsxs5("linearGradient", { id: "MneeIcon_c", x1: 450.422, x2: 558.798, y1: 592.492, y2: 90.982, gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsx7("stop", { stopColor: "#05121F" }),
            /* @__PURE__ */ jsx7("stop", { offset: 1, stopColor: "#05121F" })
          ] }),
          /* @__PURE__ */ jsxs5("linearGradient", { id: "MneeIcon_d", x1: 253.85, x2: 537.261, y1: 576.276, y2: 231.407, gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsx7("stop", { stopColor: "#E88C1F" }),
            /* @__PURE__ */ jsx7("stop", { offset: 1, stopColor: "#FFDC46" })
          ] }),
          /* @__PURE__ */ jsxs5("filter", { id: "MneeIcon_a", width: 796.875, height: 796.875, x: 0, y: 0, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsx7("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            /* @__PURE__ */ jsx7("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            /* @__PURE__ */ jsx7("feMorphology", { in: "SourceAlpha", radius: 46.875, result: "effect1_dropShadow_3676_2343" }),
            /* @__PURE__ */ jsx7("feOffset", {}),
            /* @__PURE__ */ jsx7("feGaussianBlur", { stdDeviation: 97.656 }),
            /* @__PURE__ */ jsx7("feComposite", { in2: "hardAlpha", operator: "out" }),
            /* @__PURE__ */ jsx7("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 0.410735 0 0 0 0 0 0 0 0 0.3 0" }),
            /* @__PURE__ */ jsx7("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_3676_2343" }),
            /* @__PURE__ */ jsx7("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_3676_2343", result: "shape" })
          ] })
        ] })
      ]
    })
  );
}

// components/ui/banner.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var variantStyles4 = {
  gradient: {
    wrapper: "border border-[var(--color-surface-border)]",
    title: "text-gray-800",
    desc: "text-gray-600"
  },
  info: {
    wrapper: "bg-info-bg border border-info/20",
    title: "text-info",
    desc: "text-info/80"
  },
  success: {
    wrapper: "bg-success-bg border border-success/20",
    title: "text-success",
    desc: "text-success/80"
  },
  warning: {
    wrapper: "bg-warning-bg border border-warning/20",
    title: "text-warning",
    desc: "text-warning/80"
  },
  error: {
    wrapper: "bg-error-bg border border-error/20",
    title: "text-error",
    desc: "text-error/80"
  }
};
function Banner(_a) {
  var _b = _a, {
    title,
    description,
    variant = "gradient",
    action,
    className
  } = _b, props = __objRest(_b, [
    "title",
    "description",
    "variant",
    "action",
    "className"
  ]);
  const styles = variantStyles4[variant];
  return /* @__PURE__ */ jsxs6(
    "div",
    __spreadProps(__spreadValues({
      className: cn(
        "rounded-lg p-4 flex items-center justify-between gap-4 shadow-sm",
        styles.wrapper,
        className
      ),
      style: variant === "gradient" ? { background: "linear-gradient(90deg, #F0FDFA 0%, #FFF7ED 100%)" } : void 0
    }, props), {
      children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ jsx8("p", { className: cn("font-semibold text-sm", styles.title), children: title }),
          description && /* @__PURE__ */ jsx8("p", { className: cn("text-sm", styles.desc), children: description })
        ] }),
        action && /* @__PURE__ */ jsx8("div", { className: "shrink-0", children: action })
      ]
    })
  );
}

// components/ui/table.tsx
import { ChevronLeft, ChevronRight, Loader2 as Loader22 } from "lucide-react";
import { Fragment as Fragment2, jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
function Table(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx9("div", { className: "w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm", children: /* @__PURE__ */ jsx9("table", __spreadProps(__spreadValues({ className: cn("w-full border-collapse text-sm", className) }, props), { children })) });
}
function TableHead(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx9("thead", __spreadProps(__spreadValues({ className: cn("bg-gray-50 border-b border-gray-200", className) }, props), { children }));
}
function TableBody(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx9("tbody", __spreadProps(__spreadValues({ className: cn("divide-y divide-gray-100", className) }, props), { children }));
}
function TableRow(_a) {
  var _b = _a, { className, children, onClick } = _b, props = __objRest(_b, ["className", "children", "onClick"]);
  return /* @__PURE__ */ jsx9(
    "tr",
    __spreadProps(__spreadValues({
      className: cn(
        "transition-colors",
        onClick ? "cursor-pointer hover:bg-gray-50" : "hover:bg-gray-50/50",
        className
      ),
      onClick
    }, props), {
      children
    })
  );
}
function TableHeader(_a) {
  var _b = _a, {
    className,
    children,
    sortable,
    sortDirection,
    onSort
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "sortable",
    "sortDirection",
    "onSort"
  ]);
  return /* @__PURE__ */ jsx9(
    "th",
    __spreadProps(__spreadValues({
      className: cn(
        "px-4 py-3 text-left text-xs font-semibold text-gray-600 whitespace-nowrap",
        sortable && "select-none",
        className
      )
    }, props), {
      children: sortable ? /* @__PURE__ */ jsxs7(
        "button",
        {
          type: "button",
          onClick: onSort,
          className: "inline-flex items-center gap-1 hover:text-gray-900 transition-colors",
          children: [
            children,
            /* @__PURE__ */ jsx9("span", { className: "text-gray-400", children: sortDirection === "asc" ? "\u2191" : sortDirection === "desc" ? "\u2193" : "\u2195" })
          ]
        }
      ) : children
    })
  );
}
function TableCell(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx9("td", __spreadProps(__spreadValues({ className: cn("px-4 py-3 text-sm text-gray-700", className) }, props), { children }));
}
function TableEmpty({
  message = "No data",
  description
}) {
  return /* @__PURE__ */ jsx9("tr", { children: /* @__PURE__ */ jsx9("td", { colSpan: 999, children: /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center justify-center gap-2 py-16 text-center", children: [
    /* @__PURE__ */ jsx9("p", { className: "text-sm font-medium text-gray-700", children: message }),
    description && /* @__PURE__ */ jsx9("p", { className: "text-xs text-gray-400 max-w-xs", children: description })
  ] }) }) });
}
function TableLoading({ cols = 4 }) {
  return /* @__PURE__ */ jsx9(Fragment2, { children: Array.from({ length: 4 }).map((_, r) => /* @__PURE__ */ jsx9(TableRow, { children: Array.from({ length: cols }).map((_2, c) => /* @__PURE__ */ jsx9(TableCell, { children: /* @__PURE__ */ jsx9("div", { className: "h-3.5 bg-gray-100 rounded animate-pulse", style: { width: `${60 + (r + c) % 3 * 15}%` } }) }, c)) }, r)) });
}
function Pagination({ page, totalPages, totalItems, onPageChange, className }) {
  return /* @__PURE__ */ jsxs7("div", { className: cn("flex items-center justify-between px-4 py-3 border-t border-gray-200 text-sm text-gray-600", className), children: [
    /* @__PURE__ */ jsx9("span", { children: totalItems !== void 0 ? `Page ${page} of ${totalPages} (${totalItems} items)` : `Page ${page} of ${totalPages}` }),
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxs7(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(page - 1),
          disabled: page <= 1,
          className: "flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-gray-100 disabled:opacity-40 disabled:pointer-events-none transition-colors",
          children: [
            /* @__PURE__ */ jsx9(ChevronLeft, { size: 14 }),
            "Previous"
          ]
        }
      ),
      /* @__PURE__ */ jsx9("span", { className: "px-3 py-1.5 border border-gray-200 rounded text-xs font-medium min-w-[2rem] text-center", children: page }),
      /* @__PURE__ */ jsxs7(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(page + 1),
          disabled: page >= totalPages,
          className: "flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-gray-100 disabled:opacity-40 disabled:pointer-events-none transition-colors",
          children: [
            "Next",
            /* @__PURE__ */ jsx9(ChevronRight, { size: 14 })
          ]
        }
      )
    ] })
  ] });
}

// components/ui/drawer.tsx
import { useEffect, useId, useRef as useRef2 } from "react";
import { X as X2 } from "lucide-react";
import { Fragment as Fragment3, jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var widthStyles = {
  sm: "w-80",
  md: "w-[480px]",
  lg: "w-[600px]",
  xl: "w-[800px]"
};
var sideStyles = {
  right: { position: "right-0", translate: "translate-x-full" },
  left: { position: "left-0", translate: "-translate-x-full" }
};
function Drawer({
  isOpen,
  onClose,
  title,
  children,
  footer,
  width = "md",
  side = "right",
  className
}) {
  const headingId = useId();
  const panelRef = useRef2(null);
  const previousFocusRef = useRef2(null);
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);
  useEffect(() => {
    var _a;
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      requestAnimationFrame(() => {
        var _a2;
        return (_a2 = panelRef.current) == null ? void 0 : _a2.focus();
      });
    } else {
      (_a = previousFocusRef.current) == null ? void 0 : _a.focus();
    }
  }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);
  const { position, translate } = sideStyles[side];
  return /* @__PURE__ */ jsxs8(Fragment3, { children: [
    /* @__PURE__ */ jsx10(
      "div",
      {
        "aria-hidden": "true",
        onClick: onClose,
        className: cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )
      }
    ),
    /* @__PURE__ */ jsxs8(
      "div",
      {
        ref: panelRef,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": title ? headingId : void 0,
        tabIndex: -1,
        className: cn(
          "fixed top-0 z-50 h-full bg-white shadow-2xl flex flex-col outline-none",
          "transition-transform duration-300 ease-in-out",
          position,
          widthStyles[width],
          isOpen ? "translate-x-0" : translate,
          className
        ),
        children: [
          /* @__PURE__ */ jsxs8(DrawerHeader, { children: [
            title && /* @__PURE__ */ jsx10("h2", { id: headingId, className: "text-lg font-semibold text-gray-900 flex-1", children: title }),
            /* @__PURE__ */ jsx10(
              "button",
              {
                onClick: onClose,
                "aria-label": "Close drawer",
                className: "text-gray-400 hover:text-gray-600 transition-colors ml-auto",
                children: /* @__PURE__ */ jsx10(X2, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ jsx10(DrawerBody, { children }),
          footer && /* @__PURE__ */ jsx10(DrawerFooter, { children: footer })
        ]
      }
    )
  ] });
}
function DrawerHeader(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx10(
    "div",
    __spreadProps(__spreadValues({
      className: cn("flex items-center gap-3 px-6 py-4 border-b border-gray-200 shrink-0", className)
    }, props), {
      children
    })
  );
}
function DrawerBody(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx10(
    "div",
    __spreadProps(__spreadValues({
      className: cn("flex-1 overflow-y-auto px-6 py-5", className)
    }, props), {
      children
    })
  );
}
function DrawerFooter(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx10(
    "div",
    __spreadProps(__spreadValues({
      className: cn("shrink-0 px-6 py-4 border-t border-gray-200 bg-white", className)
    }, props), {
      children
    })
  );
}

// components/ui/modal.tsx
import { useEffect as useEffect2 } from "react";
import { X as X3 } from "lucide-react";
import { Fragment as Fragment4, jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var sizeStyles3 = {
  sm: "w-[400px]",
  md: "w-[520px]",
  lg: "w-[640px]"
};
function Modal({ isOpen, onClose, title, children, footer, size = "sm", className }) {
  useEffect2(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);
  useEffect2(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxs9(Fragment4, { children: [
    /* @__PURE__ */ jsx11(
      "div",
      {
        "aria-hidden": "true",
        onClick: onClose,
        className: cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )
      }
    ),
    /* @__PURE__ */ jsx11(
      "div",
      {
        className: cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4",
          "pointer-events-none"
        ),
        children: /* @__PURE__ */ jsxs9(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": title,
            onClick: (e) => e.stopPropagation(),
            className: cn(
              "bg-white rounded-lg shadow-2xl flex flex-col max-h-[90vh] pointer-events-auto",
              "transition-all duration-200 ease-out",
              sizeStyles3[size],
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95",
              className
            ),
            children: [
              /* @__PURE__ */ jsxs9(ModalHeader, { children: [
                title && /* @__PURE__ */ jsx11("h2", { className: "text-lg font-semibold text-gray-900 flex-1", children: title }),
                /* @__PURE__ */ jsx11(
                  "button",
                  {
                    onClick: onClose,
                    "aria-label": "Close modal",
                    className: "text-gray-400 hover:text-gray-600 transition-colors ml-auto",
                    children: /* @__PURE__ */ jsx11(X3, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx11(ModalBody, { children }),
              footer && /* @__PURE__ */ jsx11(ModalFooter, { children: footer })
            ]
          }
        )
      }
    )
  ] });
}
function ModalHeader(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx11(
    "div",
    __spreadProps(__spreadValues({
      className: cn("flex items-center gap-3 px-6 py-4 border-b border-gray-200 shrink-0", className)
    }, props), {
      children
    })
  );
}
function ModalBody(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx11(
    "div",
    __spreadProps(__spreadValues({
      className: cn("flex-1 overflow-y-auto px-6 py-5", className)
    }, props), {
      children
    })
  );
}
function ModalFooter(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx11(
    "div",
    __spreadProps(__spreadValues({
      className: cn("shrink-0 px-6 py-4 border-t border-gray-200 bg-white rounded-b-lg", className)
    }, props), {
      children
    })
  );
}

// components/ui/alert.tsx
import { Info as Info2, AlertTriangle as AlertTriangle2, Lightbulb, CheckCircle as CheckCircle2 } from "lucide-react";
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var variantStyles5 = {
  info: {
    wrapper: "border-blue-800 bg-blue-50",
    text: "text-blue-800"
  },
  warning: {
    wrapper: "border-[#FFF085] bg-[#FEFCE8]",
    text: "text-[#A65F00]"
  },
  tip: {
    wrapper: "border-[#FFF085] bg-[#FEFCE8]",
    text: "text-[#A65F00]"
  },
  error: {
    wrapper: "border-error/40 bg-error-bg",
    text: "text-error"
  },
  success: {
    wrapper: "border-success/40 bg-success-bg",
    text: "text-success"
  }
};
var variantIcons = {
  info: Info2,
  warning: AlertTriangle2,
  tip: Lightbulb,
  error: AlertTriangle2,
  success: CheckCircle2
};
var variantLabels = {
  info: "Note",
  warning: "Warning",
  tip: "Tip",
  error: "Error",
  success: "Success"
};
function Alert(_a) {
  var _b = _a, {
    variant = "info",
    title,
    children,
    action,
    className
  } = _b, props = __objRest(_b, [
    "variant",
    "title",
    "children",
    "action",
    "className"
  ]);
  const styles = variantStyles5[variant];
  const Icon2 = variantIcons[variant];
  const label = title != null ? title : variantLabels[variant];
  return /* @__PURE__ */ jsx12(
    "div",
    __spreadProps(__spreadValues({
      className: cn(
        "rounded-lg border px-4 py-2",
        styles.wrapper,
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxs10("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs10("div", { className: cn("flex items-center gap-2 font-medium text-[12px]", styles.text), children: [
            /* @__PURE__ */ jsx12(Icon2, { size: 15 }),
            /* @__PURE__ */ jsx12("span", { children: label })
          ] }),
          children && /* @__PURE__ */ jsx12("div", { className: cn("pl-6 font-light text-[12px]", styles.text), children })
        ] }),
        action && /* @__PURE__ */ jsx12("div", { className: "shrink-0", children: action })
      ] })
    })
  );
}

// components/ui/skeleton.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function Skeleton2({
  variant = "line",
  width,
  height,
  className
}) {
  return /* @__PURE__ */ jsx13(
    "div",
    {
      className: cn(
        "animate-pulse bg-muted-bg",
        variant === "circle" ? "rounded-full" : "rounded",
        className
      ),
      style: {
        width: width !== void 0 ? typeof width === "number" ? `${width}px` : width : void 0,
        height: height !== void 0 ? typeof height === "number" ? `${height}px` : height : void 0
      }
    }
  );
}

// components/ui/code-block.tsx
import { useState as useState2, useEffect as useEffect3 } from "react";
import { Copy } from "lucide-react";
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
function CodeBlock({
  code,
  language = "bash",
  title,
  className
}) {
  const [tokens, setTokens] = useState2(null);
  const [bg, setBg] = useState2("#000000");
  const [fg, setFg] = useState2("#d4d4d4");
  const [copied, setCopied] = useState2(false);
  const { showToast } = useToast();
  useEffect3(() => {
    const highlight = async () => {
      try {
        const { codeToTokens } = await import("shiki");
        const result = await codeToTokens(code.trim(), {
          lang: language,
          theme: "dark-plus"
        });
        setTokens(result.tokens);
        if (result.bg) setBg(result.bg);
        if (result.fg) setFg(result.fg);
      } catch (e) {
      }
    };
    highlight();
  }, [code, language]);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    showToast("Copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 1500);
  };
  const copyButton = /* @__PURE__ */ jsxs11(
    "button",
    {
      onClick: handleCopy,
      className: "flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2 py-1 rounded text-xs transition-colors",
      children: [
        /* @__PURE__ */ jsx14(Copy, { size: 13 }),
        copied ? "Copied!" : "Copy"
      ]
    }
  );
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      className: cn(
        "relative border border-gray-700 rounded-lg overflow-hidden",
        className
      ),
      children: [
        title ? /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between bg-[#161B22] px-4 py-2 text-sm text-gray-300 border-b border-gray-700", children: [
          /* @__PURE__ */ jsx14("span", { className: "truncate", children: title }),
          copyButton
        ] }) : /* @__PURE__ */ jsx14("div", { className: "absolute top-2 right-2 z-10", children: copyButton }),
        tokens === null ? /* @__PURE__ */ jsx14(
          "pre",
          {
            className: "p-4 overflow-x-auto text-sm font-mono",
            style: { background: bg, color: fg },
            children: /* @__PURE__ */ jsx14("code", { children: code })
          }
        ) : /* @__PURE__ */ jsx14(
          "pre",
          {
            className: "p-4 overflow-x-auto text-sm font-mono !m-0 !rounded-none",
            style: { background: bg, color: fg },
            children: /* @__PURE__ */ jsx14("code", { children: tokens.map((line, i) => /* @__PURE__ */ jsx14("span", { className: "block", children: line.map((token, j) => /* @__PURE__ */ jsx14("span", { style: { color: token.color }, children: token.content }, j)) }, i)) })
          }
        )
      ]
    }
  );
}
export {
  Alert,
  Badge,
  Banner,
  Button,
  ButtonIcon,
  Card,
  CardContainer,
  CodeBlock,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Icon,
  Input,
  Loader22 as Loader2,
  MneeIcon,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Pagination,
  Skeleton2 as Skeleton,
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableLoading,
  TableRow,
  Toast,
  ToastProvider,
  useToast
};
