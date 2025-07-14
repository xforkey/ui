'use client';

import React from 'react';
import { toast as sonnerToast } from 'sonner';
import { Alert, AlertTitle, AlertDescription } from '@/xfork-ui/alert'
import {
    BadgeAlertIcon,
    BadgeInfoIcon,
    BadgeCheckIcon,
    BadgeXIcon,
} from "lucide-react"

type Variant = 'default' | 'warning' | 'success' | 'info' | 'destructive';

const VariantIcon = ({ variant }: { variant: Variant }) => {
    switch (variant) {
        case 'warning':
            return <BadgeAlertIcon />;
        case 'success':
            return <BadgeCheckIcon />;
        case 'info':
            return <BadgeInfoIcon />;
        case 'destructive':
            return <BadgeXIcon />;
        default:
            return null;
    }
}


/** I recommend abstracting the toast function
 *  so that you can call it without having to use toast.custom everytime. */
export function toast(toast: Omit<ToastProps, 'id'>) {
    return sonnerToast.custom((id) => (
        <Toast
            id={id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
        />
    ));
}

/** A fully custom toast that still maintains the animations and interactions. */
function Toast({ title, description, variant = 'default' }: ToastProps) {

    return (
        <Alert variant={variant === 'warning' || variant === 'success' || variant === 'info' ? 'default' : variant} >
            <VariantIcon variant={variant} />
            <AlertTitle className="max-w-[calc(100%-4rem)] overflow-ellipsis">{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
            {/* <Button onClick={button.onClick}>{button.label}</Button> */}
        </Alert>
    );
}

interface ToastProps {
    id: string | number;
    title: string;
    description: string;
    variant?: 'default' | 'warning' | 'success' | 'info' | 'destructive';
    button?: {
        label: string;
        onClick: () => void;
    };
}