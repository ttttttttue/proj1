import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Day from 'shared/assets/icons/day.svg';
import Night from 'shared/assets/icons/night.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <Day /> : <Night />}
    </Button>
  );
};
