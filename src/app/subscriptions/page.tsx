"use client";
import { Badge, Button, Chip, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { FC } from 'react';
import NextLink from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_SUBSCRIPTIONS, GetSubscriptionsQueryType } from '@/graphql/queries/subscription';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Subscriptions: FC = () => {
    const { data, loading, error } = useQuery<GetSubscriptionsQueryType>(GET_SUBSCRIPTIONS)

    if (loading) {
        return <Container>
            <Typography>Loading subscriptions list...</Typography>
        </Container>
    }

    if (error || !data) {
        return <Container>
            <Typography>Something went wrong...</Typography>
        </Container>
    }

    return (
        <Grid2 container direction='column' gap={2} margin={4}>
            <Grid2 container direction='row'>
                <Grid2 xs={10}>
                    <Typography variant='h2' component='h1'>Subscriptions list</Typography>
                </Grid2>
                <Grid2 xs={2} container alignContent='end' alignItems='end'>
                    <Button>Add subscription</Button>
                </Grid2>
            </Grid2>
            <Grid2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="Subscriptions list">
                        <TableHead>
                            <TableRow>
                                <TableCell>Subscription Title</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.subscriptions.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell>
                                        <Chip color={item.status === 'enabled' ? 'success' : 'default'} label={item.status} />
                                    </TableCell>
                                    <TableCell align="right"><Button LinkComponent={NextLink} href={`/subscriptions/${item.id}/`}>Open</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid2>
        </Grid2>
    );
}

export default Subscriptions;