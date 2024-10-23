class Person {
  constructor(nickname) {
    this.nickname = nickname;
  }
}

class Blogger extends Person {
  constructor(nickname) {
    super(nickname);
    this.observers = [];
    this.posts = [];
  }

  subscribe(observer) {
    const isExist = this.observers.includes(observer);

    if (isExist) {
      return console.log(
        `User ${observer.nickname} already subscribed to blogger ${this.nickname}!`
      );
    }

    this.observers.push(observer);

    console.log(
      `User ${observer.nickname} subscribed to blogger ${this.nickname}!`
    );
  }

  unsubscribe(observer) {
    const index = this.observers.indexOf(observer);

    if (index === -1) {
      return console.log(
        `User ${observer.nickname} was not subscribed to blogger ${this.nickname}!`
      );
    }

    this.observers.splice(index, 1);

    console.log(
      `User ${observer.nickname} unsubscribed from blogger ${this.nickname}!`
    );
  }

  notify() {
    this.observers.forEach((observer) => {
      const lastPostTitle = this.posts[this.posts.length - 1];

      observer.getNotified(this.nickname, lastPostTitle);
    });
  }

  createNewPost(title) {
    this.posts.push(title);

    console.log(`Blogger ${this.nickname} added new post ${title}!`);

    this.notify();
  }
}

class Subscriber extends Person {
  constructor(nickname) {
    super(nickname);
  }

  getNotified(nickname, title) {
    console.log(
      `Hey, ${this.nickname}. Check out the new post '${title}' from ${nickname}!`
    );
  }
}

const firstBlogger = new Blogger('First Blogger');
const secondBlogger = new Blogger('Second Blogger');

const firstSubscriber = new Subscriber('First Subscriber');
const secondSubscriber = new Subscriber('Second Subscriber');

firstBlogger.subscribe(firstSubscriber);
secondBlogger.subscribe(firstSubscriber);

firstBlogger.subscribe(secondSubscriber);
secondBlogger.subscribe(secondSubscriber);

firstBlogger.createNewPost('Post 1');
secondBlogger.createNewPost('Post 1');

firstBlogger.unsubscribe(firstSubscriber);

firstBlogger.createNewPost('Post 2');
secondBlogger.createNewPost('Post 2');

firstBlogger.unsubscribe(secondSubscriber);

firstBlogger.createNewPost('Post 3');
secondBlogger.createNewPost('Post 3');
