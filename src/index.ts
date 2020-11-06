import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import util from "util";

const getPort = (): number => {
  if (typeof process.env.PORT === "string") {
    return parseInt(process.env.PORT);
  }
  return 5120;
};
const PORT = getPort();

const server: FastifyInstance = Fastify({});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          response: {
            type: "object",
            properties: {
              outputSpeech: {
                type: "object",
                properties: {
                  type: {
                    type: "string",
                  },
                  text: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// server.all("/", opts, async (request, reply) => {
server.all("/", async (request, reply) => {
  console.log("Request #lDH4ct", util.inspect(request.body, false, null));
  // console.log("Returning fist round #2jJAjn");
  return {
    response: {
      outputSpeech: {
        type: "PlainText",
        text: "Si. I will obey.",
      },
    },
  };
  return { pong: "it worked!" };
});

const start = async () => {
  try {
    await server.listen(PORT, "0.0.0.0");

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;

    server.log.info(`server listening on ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
