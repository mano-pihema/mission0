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
          src={`https://placehold.co/300x200?text=${title}`}
          alt=''
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
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
