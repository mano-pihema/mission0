import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from './Card'

function CardRow({ search }: { search: string }) {
  const cards = [
    { title: 'Item 1', subtitle: 'subtitle 1' },
    { title: 'Item 2', subtitle: 'subtitle 2' },
    { title: 'Item 3', subtitle: 'subtitle 3' },
  ]

  return (
    <Box p={2}>
      <Stack
        paddingX={{ xs: 0, sm: 3, md: 4 }}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
        spacing={{ xs: 2, sm: 3, md: 4, xl: 8 }}
      >
        {search
          ? cards
              .filter((item) => item.title == search)
              .map((card) => (
                <Box>
                  <Card key={card.title} {...card} />
                </Box>
              ))
          : cards.map((card) => <Card key={card.title} {...card} />)}
      </Stack>
    </Box>
  )
}
export default CardRow
