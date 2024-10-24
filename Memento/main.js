class Memento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

class Originator {
  constructor(content) {
    this.content = content;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  saveState() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.getContent();
  }
}

class Caretaker {
  constructor(originator) {
    this.originator = originator;
    this.history = [];
  }

  saveState() {
    this.history.push(this.originator.saveState());

    console.log('State saved!');
  }

  restore() {
    if (!this.history.length) {
      return console.log('History is empty!');
    }

    const memento = this.history.pop();

    this.originator.restore(memento);

    console.log('State restored!');
  }
}

const originator = new Originator();

const caretaker = new Caretaker(originator);

originator.setContent('First');
caretaker.saveState();

originator.setContent('Second');
caretaker.saveState();

originator.setContent('Third');

console.log('Current state: ', originator.getContent());

caretaker.restore();
console.log('First restoring: ', originator.getContent());

caretaker.restore();
console.log('Second restoring: ', originator.getContent());

caretaker.restore();
console.log('Third restoring: ', originator.getContent());
