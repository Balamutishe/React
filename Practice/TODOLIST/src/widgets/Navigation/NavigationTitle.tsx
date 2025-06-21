import c from "./Navigation.module.css";

interface NavigationTitleProps {
  title: string;
}

export const NavigationTitle = ({ title }: NavigationTitleProps) => {
  return <h1 className={c.title}>{title}</h1>;
};
