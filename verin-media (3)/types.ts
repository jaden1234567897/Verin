import React from 'react';

export interface NavLink {
    label: string;
    href: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    link: string;
}

export interface FeatureItem {
    icon: React.ReactNode;
    title: string;
}
