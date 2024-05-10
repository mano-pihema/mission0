import Container from '@mui/material/Container'
import Nav from './Nav'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import SearchBar from './SearchBar'
import Title from './Title'
import CardRow from './Cards'

function App() {
  return (
    <>
      <Nav />
      <Container maxWidth={false} disableGutters={true}>
        <Stack direction={'column'} spacing={1}>
          <Box
            padding={4}
            sx={{
              backgroundImage: `url('./download.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Title />
            <SearchBar />
          </Box>
          <CardRow />
        </Stack>
      </Container>
    </>
  )
}

export default App
