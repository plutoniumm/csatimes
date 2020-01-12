/**
 *  google-signin.js
 *  This js file authenticates the user using their google account.
 *  
 *  Sign In button must have the id = "google-signin-button" 
 *  Sign Out button must have the id = "google-signout-button"
 *  
 *  To display the contents received via auth refer below.
 *  Add the following calss to respective element.
 *  SNo.        class                   Detail
 *   1.       _profileImg_            must be applied to tag, 'img'. will set src to user's profile image
 *   2.       _displayName_           set inner text as profile name of the user
 *   3.       _email_                  '    '     '   ' email         '  '    '
 *   4.       _phone_                  '    '     '   ' phone number  '  '    ' if available 
 *   5.       _uid_                    '    '     '   ' uid           '  '    '
 *   6.       _signedIn_               display all elements under this class if user signed in  
 *   7.       _signedOut_              display all elements under this class if user signed out
 */

var provider = new firebase.auth.GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().languageCode = 'en';

//On Page load check if user is signed in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      setProfileData(user.photoURL,user.displayName,user.email,user.phoneNumber,user.uid )
      displaySignIn(true)  
    }
    else
    {
        setProfileData("","","","","" );
        displaySignIn(false)
    }
});

$("#google-signin-button").on('click',function()
{
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
       
        //User Signed in
        setProfileData(user.photoURL,user.displayName,user.email,user.phoneNumber,user.uid )
        displaySignIn(true)
      }).catch(function(error) {

        console.log("Error",error.code)
      });
});

$("#google-signout-button").on('click',function()
{
    firebase.auth().signOut().then(function() {

        // Sign-out successful.
        setProfileData("","","","","");
        displaySignIn(false)

      }).catch(function(error) {

        console.log(error);
      });      
});

function setProfileData(photoURL,displayName,email,phoneNumber,uid)
{
    $("._profileImg_").attr("src",photoURL);
    $("._displayName_").html(displayName );
    $("._email_").html(email );
    $("._phone_").html(phoneNumber);
    $("._uid_").html(uid);       
}

function displaySignIn(isSignedIn)
{
    if(isSignedIn)
    {
        $("._signedIn_").show();
        $("._signedOut_").hide();
    }
    else
    {
        $("._signedIn_").hide();
        $("._signedOut_").show();
    }
}