import { Button, Theme as MaterialUITheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './styles.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const useStyles = makeStyles((theme: MaterialUITheme) => ({
  activeButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  disabled,
  size = 'medium',
  className,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Button
      variant={variant}
      disabled={disabled}
      size={size}
      className={className ? classes.activeButton : ''}
      onClick={onClick}>
      {children}
    </Button>
  );
};
