import { fakeUsers } from '../dummy-data';

export function UsernameException() {
  this.message = 'Please enter a valid username';
  this.name = 'UsernameException';
}

export function PasswordException() {
  this.message = 'Username and Password do not match';
  this.name = 'PasswordException';
}

// Simulate server side authentication with password and username errors
export const fakeAuthenticate = request => new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = fakeUsers.find(fakeUser => fakeUser.name === request.username);
    try {
      if (user) {
        if (user.password === request.password) {
          resolve(user);
        } else {
          throw new PasswordException();
        }
      } else {
        throw new UsernameException();
      }
    } catch (err) {
      reject(err);
    }
  }, 250);
});

export const addStylesToTypes = arr => {
  const styles = ['type-green', 'type-purple', 'type-pink'];

  const uniqueTypes = [...arr.reduce(
    (acc, val) => acc.add(val.type),
    new Set(),
  )];

  return arr.map(item => ({
    ...item,
    style: styles[uniqueTypes.indexOf(item.type) % styles.length],
  }));
};
