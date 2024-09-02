import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

export default function CircularIndeterminate({ color }: { color?: string }) {
  return (
    <figure
      className='
        w-6
        h-5
        grid
        place-content-center
        scale-50
      '>
      <Stack sx={{ color }} spacing={2} direction='row'>
        <CircularProgress color='inherit' />
      </Stack>
    </figure>
  )
}
