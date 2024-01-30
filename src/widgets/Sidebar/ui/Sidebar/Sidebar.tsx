import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.css';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
