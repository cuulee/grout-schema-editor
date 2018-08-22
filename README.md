# Grout Schema Editor

[![Build Status](https://travis-ci.org/azavea/grout-schema-editor.svg?branch=develop)](https://travis-ci.org/azavea/grout-schema-editor)

Grout Schema Editor is a simple, static admin portal providing a web interface to
a [Grout](https://github.com/azavea/grout) database server.

With Grout Schema Editor, you can **manage records and schemas for a Grout project**
entirely from the web -- no code required.

## Usage

### Installation

This guide covers installing and configuring a Grout Schema Editor instance
in your project. Note that Grout Schema Editor assumes that you already have
a Grout API server installed. For instructions on how to install a Grout
server, see the [Grout documentation](https://github.com/azavea/grout).

To incorporate the Grout Schema Editor into a project that uses Grout, clone
this repo into the directory containing your project:

```
# Run this command in your project directory.
$ git clone git@github.com:azavea/grout-server.git
```

Next, copy and edit the example config file to match the requirements of your project.

```bash
# Move the example config file into the app directory.
cp example/config.js app/scripts/config.js
```

### Configuration

The default config values in `app/scripts/config.js` should be fine for most applications, with
the exception of `config.api.hostname`, which will likely need to be changed in order
to match the URI of your Grout database server instance.

## Developing

### Requirements

The Grout Schema Editor is containerized with Docker to ensure similar
environments across platforms. In order to develop Grout Schema Editor with Docker, you need the
following dependencies:

- [Docker CE Engine](https://docs.docker.com/install/) >= 1.13.0 (must be
  compatible with [Docker Compose file v3
  syntax](https://docs.docker.com/compose/compose-file/#compose-and-docker-compatibility-matrix))
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

Clone the repo with git.

```bash
$ git clone git@github.com:azavea/grout.git
$ cd grout
```

Run the `update` script to set up your development environment.

```bash
$ ./scripts/update
```

### Testing

If you'd like to contribute to Grout Schema Editor, you can run tests using the
`test` script located in the `scripts` directory.

```bash
$ ./scripts/test
```

The test suite uses Karma to run tests using a headless Chrome browser. By
default, it will only run tests once before stopping the test server. If you
need to debug a test failure, you can keep the test server running by setting
the Karma `singleRun` flag to `false` in `Gruntfile.js`.

```javascript
// Gruntfile.js

karma: {
  unit: {
      configFile: 'test/karma.conf.js',
      singleRun: false
  }
}
```

Edit `docker-compose.yml` to expose the port that the test server is running
on.

```yml
# docker-compose.yml

services:
  editor:
    ...
    ports:
      - "9000:9000"
      - "35731:35731"
      - "9001:8080"  # Bind port 8080 in the container to port 9001 on your machine
```

Navigate to the host that is listening to the test server (in this case,
`localhost:9001`) and hit the `DEBUG` button in the top-right corner to run
the tests in a browser window. Then, you can use your browser's debug tools
to debug the tests.

For tips on debugging Karma tests, see Gleb Bahmutov's [Debugging
Karma Unit Tests](https://glebbahmutov.com/blog/debugging-karma-unit-tests/)
blog post.
