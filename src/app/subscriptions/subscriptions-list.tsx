import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, Button } from '@mui/material';
import React, { FC, ReactNode } from 'react';

type SubscriptionListProps = {
    items: {
        id: string,
        title: ReactNode,
        status: ReactNode,
        actions: ReactNode
    }[]
}

export const SubscriptionsList: FC<SubscriptionListProps> = ({items}) => {
    return <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="Subscriptions list">
        <TableHead>
            <TableRow>
                <TableCell>Subscription Title</TableCell>
                <TableCell width={120} align='center'>Status</TableCell>
                <TableCell width={200}></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {items.map((item) => (
                <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell scope="row" >
                        {item.title}
                    </TableCell>
                    <TableCell align='center'>
                        {item.status}
                    </TableCell>
                    <TableCell align="right">{item.actions}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
}