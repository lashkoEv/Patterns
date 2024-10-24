class Player {
  constructor(tracks) {
    this.tracks = tracks;
    this.position = 0;
  }

  skipTracks(number) {
    this.position += number;

    if (this.position >= this.tracks.length) {
      this.position -= this.tracks.length;
    }

    return this.getTrack();
  }

  getTrack() {
    console.log(`Currently playing: ${this.tracks[this.position]}.`);
  }
}

class Command {
  execute() {}
}

class TurnOnPlayerCommand extends Command {
  execute() {
    console.log('Player is turned on.');
  }
}

class TurnOffPlayerCommand extends Command {
  execute() {
    console.log('Player is turned off.');
  }
}

class PlayCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.getTrack();
  }
}

class SkipTracksCommand extends Command {
  constructor(receiver, numberToSkip) {
    super();
    this.receiver = receiver;
    this.numberToSkip = numberToSkip;
  }

  execute() {
    return this.receiver.skipTracks(this.numberToSkip);
  }
}

class RemoteControl {
  constructor(command) {
    this.command = command;
  }

  setCommand(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}

const player = new Player([
  'First Track',
  'Second Track',
  'Third Track',
  'Fourth Track',
]);

const turnOnPlayerCommand = new TurnOnPlayerCommand();
const turnOffPlayerCommand = new TurnOffPlayerCommand();
const playCommand = new PlayCommand(player);
const skipOneCommand = new SkipTracksCommand(player, 1);
const skipSixCommand = new SkipTracksCommand(player, 6);

const remoteControl = new RemoteControl(turnOnPlayerCommand);
remoteControl.execute();

remoteControl.setCommand(playCommand);
remoteControl.execute();

remoteControl.setCommand(skipOneCommand);
remoteControl.execute();

remoteControl.setCommand(skipSixCommand);
remoteControl.execute();

remoteControl.setCommand(turnOffPlayerCommand);
remoteControl.execute();
