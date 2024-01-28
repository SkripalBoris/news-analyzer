export const resolvers = {
    Query: {
        subscriptions: async () => {
            return [
                {id: '1', title: 'asd'},
                {id: '2', title: '1232'}
            ]
        }
    }
}