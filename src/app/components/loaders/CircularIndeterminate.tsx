import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function CircularIndeterminate() {
  return (
    <figure
      className='
        w-6
        h-6
        grid
        place-content-center
      '>
      <Box color='#fff' sx={{ transform: 'scale(0.5)' }}>
        <CircularProgress />
      </Box>
    </figure>
  )
}
