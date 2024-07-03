'use client';

import NavBar from '@/components/NavBar/NavBar';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
    return (
        <div>
            <Theme theme="g100">
                <NavBar />
            </Theme>
            <Content>{children}</Content>
        </div>
    );
}