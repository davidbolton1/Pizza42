function addEmailToAccessToken(user, context, callback) {
    // This rule adds the authenticated user's email address to the access token.
  
    var namespace = 'https://quickstarts/api/';
      context.accessToken[namespace + 'email'] = user.email;
      context.accessToken[namespace + 'verified'] = user.email_verified;

    //Can also use this + RTW Logs to view the token
  //context.idToken[namespace + 'Order_History'] = user.user_metadata.Orders;
  //console.log("context.idToken after : " + JSON.stringify(context.idToken));

           
    return callback(null, user, context);
  }