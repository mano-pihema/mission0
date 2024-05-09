import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useState } from 'react'

function Nav() {
  const pages = ['mock1', 'mock2', 'mock3']
  const [menuOpen, setMenuOpen] = useState<null | HTMLElement>(null)

  return (
    <>
      <AppBar position='static' color='inherit'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box display={'flex'} alignItems={'center'}>
              <Avatar>MP</Avatar>
              <Typography marginLeft={1}>My Company</Typography>
            </Box>
            {/* HamBurger */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', sm: 'none', md: 'none' },
              }}
              justifyContent={'flex-end'}
            >
              <IconButton
                size='large'
                color='inherit'
                onClick={(event) => setMenuOpen(event.currentTarget)}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={menuOpen}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(menuOpen)}
                onClose={() => setMenuOpen(null)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  minWidth: menuOpen ? '100%' : 'auto',
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} sx={{ minWidth: '100%' }}>
                    <Box>
                      <Typography textAlign='center'>{page}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* No Burger */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'flex', md: 'flex' },
              }}
              justifyContent={'flex-end'}
            >
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                {pages.map((page) => (
                  <Button key={page} sx={{ my: 2, display: 'block' }}>
                    {page}
                  </Button>
                ))}
                <Button variant='outlined' size='small' sx={{ maxHeight: 30 }}>
                  Login
                </Button>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Nav
