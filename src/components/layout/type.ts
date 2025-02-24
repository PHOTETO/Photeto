export type LayoutProps = {
    children: React.ReactNode;
    theme: string;
    toggleTheme: () => void
};

export interface IHeaderProps {
    theme: string;
    toggleTheme: () => void
}