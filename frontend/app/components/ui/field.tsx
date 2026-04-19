import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"label">;

export function InputGroup({ children }: Props) {
    return <div className="flex items-stretch">{children}</div>;
}

export function Field({ children }: Props) {
    return <div className="space-y-2">{children}</div>;
}

export function FieldLabel({ children, ...props }: Props) {
    return (
        <label className="text-sm font-medium" {...props}>
            {children}
        </label>
    );
}

export function FieldDescription({ children }: Props) {
    return <p className="text-sm text-muted-foreground">{children}</p>;
}

export function FieldError({ children }: React.ComponentPropsWithoutRef<"p">) {
    return <p className="text-sm text-red-500">{children}</p>;
}

export function FieldGroup({ children }: Props) {
    return <div className="space-y-4">{children}</div>;
}
