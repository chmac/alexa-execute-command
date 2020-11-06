import { RouteShorthandOptions } from "fastify";

export const opts: RouteShorthandOptions = {
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
