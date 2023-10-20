import { Box, Container, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Logo from './components/Logo';
import NavigationBtn from './components/Navigation-button';
import { NAVIGATION } from './constants/constants';

function Header() {
  const nav = NAVIGATION;
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ pl: 6, pr: 6 }}>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {nav.map((item, i) => (
              <NavigationBtn key={i} navItem={item} />
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>Test User</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
