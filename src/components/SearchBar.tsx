import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

function SearchBar() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 0 }}
      paddingTop={{ xs: 3, sm: 6, md: 6, lg: 8 }}
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
          minWidth: '33%',
        }}
      />

      <Button variant='contained' sx={{ borderRadius: 0 }}>
        Search
      </Button>
    </Stack>
  )
}

export default SearchBar
