import { ReactElement } from "react";

export interface DashboardSidebarItem {
    title: string,
    href: string,
    disabled?: boolean,
    icon: ReactElement,
}