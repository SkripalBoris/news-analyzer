import { Container, Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card>
          <CardContent>
            <Typography>
              Subscriptions list
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" href="/subscriptions" LinkComponent={NextLink}>
            Open
          </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
