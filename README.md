## Introduction

This repo provide design and sourcecode for learning-journey module.

## UX design
UX design can be found [here](https://www.figma.com/proto/txyROkbkONSYR34O68JvQk/Playground-Learning?page-id=560%3A18067&node-id=560-18279&viewport=-1774%2C271%2C0.19&t=EBj90R0DJnst632I-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=560%3A18279&show-proto-sidebar=1)

## Techonologies

- This is a SSR webapp build by NextJS
- Language: Typescript
- Database: Mongo DB

## Deployment

- The whole project will be packaged in a Docker image. It needs to connect to an external MongoDB.
- This web app is designed to be served in two ways:

  1. Standalone web app; it can be hosted for public or internal use.
  2. Embedded in the playground.digital.auto platform as a built-in learning tool.

### Considerations 
- Package and deploy by npm, npx