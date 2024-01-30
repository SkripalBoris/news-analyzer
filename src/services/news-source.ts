import { NewsSource, PrismaClient } from '@prisma/client'

export function getNewsSources(prisma: PrismaClient): Promise<NewsSource[]> {
    return prisma.newsSource.findMany()
}

export async function addNewsSource(data: Omit<NewsSource, 'id'>, prisma: PrismaClient): Promise<NewsSource> {
    const result = await prisma.newsSource.create({
        data
    })

    return result;
}