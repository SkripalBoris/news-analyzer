import { Subscription, SubscriptionStatus } from '@/types/subcription';
import { PrismaClient, Subscription as RawSubscription } from '@prisma/client';

function prepareSubscription(rawSubscription: RawSubscription): Subscription {
    return {
        ...rawSubscription,
        status: rawSubscription.status as SubscriptionStatus,
        tags: rawSubscription.tags.split(';')
    }
}

export async function getSubscriptions(prisma: PrismaClient): Promise<Subscription[]> {
    const rawSubscriptions = await prisma.subscription.findMany()
    return rawSubscriptions.map(prepareSubscription)
}

export async function getSubscription(id: number, prisma: PrismaClient): Promise<Subscription> {
    const rawSubscription = await prisma.subscription.findFirstOrThrow({
        where: {
            id: id
        }
    });

    return prepareSubscription(rawSubscription)
}

export async function createSubscription(data: Omit<Subscription, 'id'>, prisma: PrismaClient): Promise<Subscription> {
    const item = await prisma.subscription.create({
        data: {
            title: data.title,
            status: data.status,
            tags: data.tags.join(';')
        }
    })

    return prepareSubscription(item);
}