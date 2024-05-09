import Container from '@mui/material/Container'
import Nav from './Nav'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import Item from './Item'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function App() {
  const items = [
    { title: 'Item 1 ', subtitle: 'subtitle 1' },
    { title: 'Item 2 ', subtitle: 'subtitle 2' },
    { title: 'Item 3 ', subtitle: 'subtitle 3' },
  ]
  return (
    <>
      <Nav />
      <Container maxWidth={false} disableGutters={true}>
        <Stack direction={'column'} spacing={1}>
          <Box
            height={{ xs: '45vh', sm: '50vh', md: '65vh', lg: '60vh' }}
            sx={{
              backgroundImage: `url('./download.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* ---Title--- */}
            <Box p={{ sm: 1, md: 4 }}>
              <Typography
                align='left'
                padding={2}
                sx={{
                  color: 'white',
                  typography: { xs: 'h4', sm: 'h3', md: 'h2', lg: 'h2' },
                }}
              >
                <strong>
                  Lorem ipsum
                  <br />
                  dolor sit amet
                </strong>
              </Typography>
            </Box>
            {/* ---Search Bar--- */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 0 }}
              paddingTop={{ xs: 3, sm: 6, md: 6, lg: 9 }}
              padding={2}
              display={'flex'}
              justifyContent={'center'}
              minWidth={'50vw'}
            >
              <input
                type='text'
                style={{
                  borderRadius: 0,
                  border: 'none',
                  padding: 8,
                  minWidth: '36%',
                }}
              />

              <Button variant='contained' sx={{ borderRadius: 0 }}>
                Search
              </Button>
            </Stack>
          </Box>
          {/* ---Bottom row--- */}
          <Box p={2}>
            <Stack
              paddingX={{ xs: 0, sm: 3, md: 4 }}
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent='space-between'
              spacing={{ xs: 2, sm: 3, md: 4, xl: 8 }}
            >
              {items.map((item) => (
                <Item {...item} />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default App
