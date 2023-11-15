'use client'
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import messageEn from "../locales/en/messages.json";
import messageVi from "../locales/vi/messages.json";
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '../../i18nConfig';
i18n.load({
    en: messageEn,
    vi: messageVi
});

i18n.activate('en')

export const ExampleClientComponent = () => {
    const locale = useCurrentLocale(i18nConfig) as string;
    i18n.activate(locale)
}



export const I18n = ({ children }: { children: React.ReactNode }) => {
    ExampleClientComponent()
    return (
        <I18nProvider i18n={i18n}>
            {children}
        </I18nProvider>
    )
};

