import Container from '@mui/material/Container'
import Nav from './Nav'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import SearchBar from './SearchBar'
import Title from './Title'
import CardRow from './CardRow'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')

  return (
    <>
      <Nav />
      <Container maxWidth={false} disableGutters={true}>
        <Stack direction={'column'} spacing={1}>
          <Box
            padding={4}
            sx={{
              backgroundImage: `url('https://placehold.co/900x600?text=Background+Image')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Title />
            <SearchBar state={setSearch} />
          </Box>
          <CardRow search={search} />
        </Stack>
      </Container>
    </>
  )
}

export default App
