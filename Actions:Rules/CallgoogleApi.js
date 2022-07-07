function (user, context, callback) {
  
    // only do this for users from Google connection
    // or maybe for a specific connection
    if (user.identities[0].provider !== 'google-oauth2')
      return callback(null, user, context);
  
    // To call Google Public API we need an access token
    //  - The access token given to the logged in user by the IdP (provided that it has
    //    the necessary permissions)
  
    // for simplicity, we will use the user's IdP access token
    var google_access_token = user.identities[0].access_token;
  
    console.log(google_access_token);
    // call Googles  public api to get information about the user
    var baseUrl = 'https://people.googleapis.com/v1/people/me?personFields=genders';
    
    console.log('baseUrl:' + baseUrl);
    var getAADProfile = (callback) => {
      var options = {
        url: baseUrl,
        headers: {
          'Authorization': 'Bearer ' + google_access_token
        }
      };
      console.log('Requesting to '+ options.url);
      request(options, (err, response, body) => {
        if(err) {
          console.log("Error when calling "+ options.url);
          console.log(err);
              callback(err, null);
        } else {
              const profile = JSON.parse(body);
                 console.log(profile);
              callback(null, profile);
        }
      });
    };
  
    getAADProfile((err, profile) => {
      if(err) {
        callback(err);
      } else {
        const namespace = 'https://quickstarts/api/';
        user.user_metadata = user.user_metadata || {};
        user.user_metadata.gender = profile.genders[0].value;
        context.idToken['Gender from Google API'] = user.user_metadata.gender;
         //You can fill other values also
        auth0.users.updateUserMetadata(user.user_id, user.user_metadata).then(() => {
          callback(null, user, context);
        }).catch((err) => {
          callback(err);
        });
      }
    });
  } 