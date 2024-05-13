import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { ChangeEvent, useState } from 'react'

function SearchBar({ state }: { state: (value: string) => void }) {
  const [input, setInput] = useState('')

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
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInput(event.target.value)
        }
        type='text'
        style={{
          borderRadius: 0,
          border: 'none',
          padding: 8,
          minWidth: '33%',
        }}
      />

      <Button
        variant='contained'
        sx={{ borderRadius: 0 }}
        onClick={() => state(input)}
      >
        Search
      </Button>
    </Stack>
  )
}

export default SearchBar
