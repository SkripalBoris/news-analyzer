"use client";
import {  Button, Chip, Container, Skeleton, Typography } from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_SUBSCRIPTIONS, GetSubscriptionsQueryType } from '@/graphql/queries/subscription';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { SubscriptionsList } from './subscriptions-list';
import { AddSubscriptionModal } from './add-subscription-modal';

const Subscriptions: FC = () => {
    const { data, loading, error } = useQuery<GetSubscriptionsQueryType>(GET_SUBSCRIPTIONS)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const preparedData = useMemo(() => {
        if (error) {
            return undefined;
        }

        if (loading) {
            return new Array(5).fill(0).map((_, index) => ({
                id: index.toString(),
                title: <Skeleton variant='rounded' height={20} width={200} />,
                status: <Skeleton variant='rounded' height={20} width={80} />,
                actions: <Skeleton variant='rounded' height={20} width={120} />
            }))
        }

        return data?.subscriptions.map((item) => ({
            id: item.id,
            title: item.title,
            status: <Chip color={item.status === 'enabled' ? 'success' : 'default'} label={item.status} />,
            actions: <Button LinkComponent={NextLink} href={`/subscriptions/${item.id}/`}>Open</Button>
        }))
    }, [data, loading, error])

    if (!preparedData) {
        return <Container>
            <Typography>Something went wrong...</Typography>
        </Container>
    }

    return (
        <>
        <Grid2 container direction='column' gap={2} margin={4}>
            <Grid2 container direction='row'>
                <Grid2 xs={10}>
                    <Typography variant='h2' component='h1'>Subscriptions list</Typography>
                </Grid2>
                <Grid2 xs={2} container alignContent='end' alignItems='end'>
                    <Button onClick={() => setIsModalOpen(true)}>Add subscription</Button>
                </Grid2>
            </Grid2>
            <Grid2>
                <SubscriptionsList items={preparedData} />
            </Grid2>
        </Grid2>
        <AddSubscriptionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

export default Subscriptions;