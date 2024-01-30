import { Container, Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={2} margin={2}>
        <Grid2 width={200}>
        <Card>
          <CardContent>
            <Typography>
              Subscriptions list
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" href="/subscriptions" LinkComponent={NextLink} fullWidth>
              Open
            </Button>
          </CardActions>
        </Card>
        </Grid2>
        <Grid2 width={200}>
        <Card>
          <CardContent>
            <Typography>
              News sources
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" href="/news-sources" LinkComponent={NextLink} fullWidth>
              Open
            </Button>
          </CardActions>
        </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}
