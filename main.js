//HELLO BOOTCAMPER, FANCY SEEING YOU HERE.
//HOPE YOU CAN HELP ME WITH MY BIRTHDAY PARTY. I FORGOT HOW MANY FRIENDS I HAVE BUT I HAVE
//A LIST WITH SOME NAMES. I NEED TO BUY A BIRTHDAY CAKE BUT NOT SURE HOW MANY PIECES I NEED.
//I REMEMBER NONE OF MY FRIEND'S NAMES IS  not LONGER THAN 6 CHARACTERES.

export function findMyFriends(friends) {
  let friendsToNumbers = 0;
  // need to count how many letters is each index of friends
  for (let i = 0; i < friends.length; i++) {
    // check if those letters are <5 then add them as friends
    if (friends[i].length <= 5) {
      //count amount of friends and add them as friends
      friendsToNumbers++;
    }
  }
  return friendsToNumbers;
}
