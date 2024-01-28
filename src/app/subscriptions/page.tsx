"use client";
import { Button, List, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import React, { FC } from 'react';
import NextLink from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_SUBSCRIPTIONS } from '@/graphql/queries/subscription';

const Subscriptions: FC = () => {
    const { data, loading, error } = useQuery(GET_SUBSCRIPTIONS)

    console.log(data)

    return <List>
        <ListItem>
            <ListItemText>1</ListItemText>
            <ListItemSecondaryAction>
                <Button href='/subscriptions/1' LinkComponent={NextLink}>Show</Button>
            </ListItemSecondaryAction>
        </ListItem>
    </List>
}

export default Subscriptions;