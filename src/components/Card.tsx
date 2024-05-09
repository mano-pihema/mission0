import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Card({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <>
      <Box
        color={'white'}
        sx={{
          backgroundColor: 'primary.main',
          maxWidth: '100%',
          width: '100%',
        }}
      >
        <img
          src='./download.jpg'
          alt=''
          style={{ width: '100%', height: 'auto' }}
        />
        <Box padding={1}>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='body2'>{subtitle}</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Card
