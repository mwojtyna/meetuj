import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function InputGroup({ children }: Props) {
    return <div className="flex items-stretch">{children}</div>;
}

export function InputGroupAddon({ children }: Props) {
    return (
        <div className="flex items-center rounded-l-md border border-r-0 bg-muted px-3">
            {children}
        </div>
    );
}

export function InputGroupText({ children }: Props) {
    return <span className="text-sm text-muted-foreground">{children}</span>;
}

export function InputGroupTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return <textarea className="flex-1 rounded-r-md border px-3 py-2" {...props} />;
}
