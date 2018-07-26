## RSVP Management
The `firebase` branch is different from `master` in the way how data is stored.
Rather than performing CRUD operations directly on the state, these operations are performed
on the Firebase database.

### Usage
- Create [Firebase](https://firebase.google.com/) database.
- Pull down code `git clone git@github.com:mmenavas/rsvp-management.git`.
- Install dependencies `yarn install`.
- Rename `src/sample.firebase.js` to `firebase.js` and enter Firebase API keys.
- Run site locally `yarn start`.
- Customize app as needed.
- Prepare files for deployment `yarn build`.
- Install [Firebase CLI](https://firebase.google.com/docs/cli/) `npm install -g firebase-tools`.
- Authenticate with Firebase `firebase login`.
- Set up Firebase integration `firebase init`
- Deploy `firebase deploy`.

### TODO:
- Make client app for people to RSVP.