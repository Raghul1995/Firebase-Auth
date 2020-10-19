const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info('Hello logs!', { structuredData: true });
	response.send('Hello cloud9!');
}); //runs in the firebase server
//the cloud function is a https request.

//the below function is not a https request 
const createNotification =(notification)=>{
  return admin.firestore().collection("notifications")
  .add(notification).then(doc=>console.log("notification added", doc))
}

exports.projectCreated = functions.firestore.document('proj/{projectId}')
.onCreate((doc) => {
  const project = doc.data();//we grab the callback data by this way that has title, createdby, content etc.
  const notification = {
    content : "Added a new project",
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }
  return createNotification(notification) // this function triggers to changes and 
  //call the notification from projectCreated
});
//no firebase or https type requests but here we use auth for get data
exports.userJoined = functions.auth.user().onCreate( user=>{

  return admin.firestore().collection("users").doc(user.uid) //doc is for user who signs in and has separate data stored in collection "users"
.get().then(doc =>{
  const newUser = doc.data();//we grab the callback data by this way that has title, createdby, content etc.
  const notification = {
    content : "Joined the party",
    user: `${newUser.firstName} ${newUser.lastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()

  }
  return createNotification(notification) // this function triggers to changes and call the notification  
  // NOte: both the export accesses the same  "createNotification" function
})
})