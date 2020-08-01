import { fakeUsers } from '../dummy-data';

// This file contains a number of utility functions for use in the app

// These are two simple exceptions for use in the Login Form to simulate
// two different failure conditions
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
    // A set of fake users are loaded from the dummy data file to check for "valid" users
    const user = fakeUsers.find(fakeUser => fakeUser.name === request.username);
    try {
      if (user) {
        // This uses our "hashed" password to compare to the stored one
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

// This was one rabbit hole I did allow myself to fall into that I could have
// solved much quicker but ended up building a probably too robust system for what I needed.
// This function allows for an arbitrary number of colors to be linked to an abritrary
// number of Types of skills/interests for styling purposes
// ie [Game] with a purple background vs [Sport] with green.
// Several refactors and optimizations later I ended up with this compact utility function
export const addStylesToTypes = arr => {
  // Additional style names can be added here as long as they exist in the SASS file
  const styles = ['type-green', 'type-purple', 'type-pink'];

  // All unique types are collected in a set and then spread into an array for mapping
  const uniqueTypes = [...arr.reduce(
    (acc, val) => acc.add(val.type),
    new Set(),
  )];

  // Then each skill/interest has the style class added to it by mapping its index
  // in the unique array to the styles array. If all existing styles are consumed it will
  // cycle through the list and reuse colors
  return arr.map(item => ({
    ...item,
    style: styles[uniqueTypes.indexOf(item.type) % styles.length],
  }));
};
