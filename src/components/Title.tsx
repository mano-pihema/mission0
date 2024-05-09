import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Title() {
  return (
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
  )
}

export default Title
