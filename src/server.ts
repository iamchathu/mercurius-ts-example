import Fastify from 'fastify';
import mercurius, { IResolvers } from 'mercurius';

export const app = Fastify();

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`;

const resolvers: IResolvers = {
  Query: {
    add: async (_, { x, y }) => x + y,
  },
};

app.register(mercurius, {
  schema,
  resolvers,
});

app.get('/', async function (req, reply) {
  const query = '{ add(x: 2, y: 2) }';
  return reply.graphql(query);
});

app.listen({ port: 3000 });
