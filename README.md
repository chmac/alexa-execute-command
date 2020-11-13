# alexa-execute-command

> This is an experiment, it doesn't actually work (yet).

Simple alexa skill that executes commands. Runs on your own server.

Here's the concept:

- A specific custom skill (inspired by echo-sonos)
- Named commands are mapped to actions
  - Potentially a mapping of command names to URLs
  - Would keep things more generic

Examples of interesting commands

- Save the state of lights, then turn them off
- Save the playing state of some sonos speakers, then pause them
- Save the state of smart switches, then turn them off if necessary
- Undo all of the above
- Trigger actions in other systems related to home automation

This would make it possible to do more than is currently possible with
alexa's routines. For example, there's no way to stop music via a routine.
