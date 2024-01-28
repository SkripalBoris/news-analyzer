"use client";
import { GET_SUBSCRIPTION_DETAILS, GetSubscriptionDetailsQueryType } from '@/graphql/queries/subscription';
import { useQuery } from '@apollo/client';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React, { FC } from 'react';
import NextLink from 'next/link';

type SubscriptionProps = {
    params: {
        id: string
    }
}

const Subscription: FC<SubscriptionProps> = ({ params: { id } }) => {
    const { data, loading, error } = useQuery<GetSubscriptionDetailsQueryType>(GET_SUBSCRIPTION_DETAILS, { variables: { id } })

    if (loading) {
        return "loading"
    }

    if (error) {
        return error.message
    }

    return <Grid2 container margin={4} direction='column' spacing={2}>
        <Grid2 xs={12}>
            <Button href='/subscriptions' LinkComponent={NextLink}>Back to list</Button>
        </Grid2>
        <Grid2 xs={12}>
            <Typography variant='h2' component='h1'>Subscription {data?.subscriptionDetails.title}</Typography>
        </Grid2>
        <Grid2 direction='row' container alignItems='center' spacing={2}>
            <Grid2>
                <Typography>Status:</Typography>
            </Grid2>
            <Grid2>
                <Chip label={data?.subscriptionDetails.status} color={data?.subscriptionDetails.status === 'enabled' ? 'success' : 'default'} />
            </Grid2>
        </Grid2>
        <Grid2 container alignItems='center' spacing={2}>
            <Grid2>
                <Typography>Tags:</Typography>
            </Grid2>
            <Grid2>
                <Stack direction="row" spacing={1}>
                    {data?.subscriptionDetails.tags.map(tag => <Chip label={tag} variant='filled' />)}
                </Stack>
            </Grid2>
        </Grid2>
        <Grid2 container xs={12}>
            {data?.subscriptionDetails.articles.map(article => <Grid2 m={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        {
                            Boolean(article.image) && <CardMedia
                                component="img"
                                height="140"
                                image={article.image}
                                alt="green iguana"
                            />
                        }
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {article.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {article.content.slice(0, 400)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href={article.url} target='_blank' fullWidth>
                            Open
                        </Button>
                    </CardActions>
                </Card>
            </Grid2>
            )}
        </Grid2>
    </Grid2>
}

export default Subscription;
