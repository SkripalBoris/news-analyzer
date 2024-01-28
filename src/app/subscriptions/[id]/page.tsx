import React, { FC } from 'react';

type SubscriptionProps = {
    params: {
        id: string
    }
}

const Subscription: FC<SubscriptionProps> = ({params: {id}}) => {

    return <div>Subscription {id}</div>
}

export default Subscription;
