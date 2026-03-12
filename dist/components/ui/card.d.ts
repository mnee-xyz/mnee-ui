type BalanceCardProps = {
    variant: "balance";
    title: string;
    description?: string;
    amount: string;
    action?: React.ReactNode;
    loading?: boolean;
    className?: string;
};
type ModuleCardProps = {
    variant: "module";
    title: string;
    description?: string;
    status?: "success" | "warning" | "error" | "info" | "default";
    statusLabel?: string;
    onEdit?: () => void;
    onView?: () => void;
    loading?: boolean;
    className?: string;
};
export type CardProps = BalanceCardProps | ModuleCardProps;
export interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function CardContainer({ className, children, ...props }: CardContainerProps): import("react/jsx-runtime").JSX.Element;
export declare function Card(props: CardProps): import("react/jsx-runtime").JSX.Element;
export {};
