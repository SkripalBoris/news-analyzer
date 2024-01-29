export const enum SubscriptionStatus {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}

export type Subscription = {
    id: number
    title: string
    status: SubscriptionStatus
    tags: string[]
}