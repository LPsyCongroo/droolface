const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const CognitoUser = AmazonCognitoIdentity.CognitoUser;
const clientId = '3utdo6191dab6nmt48954adl3i';
const UserPoolId = 'us-east-2_0OPtPekr3';

function signin() {
  const email = document.querySelector('#email').value;
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const given_name = document.querySelector('#given_name').value;
  const family_name = document.querySelector('#family_name').value;
  const zipCode = document.querySelector('#zipCode').value;
  register(username, password, email, given_name, family_name, zipCode);
}

function verification() {
  const username = document.querySelector('#username').value;
  const verificationNumber = document.querySelector('#verificationNumber').value;
  verify(username, verificationNumber);
}

// # =============== Info ==================
// # Pool_Id = us-east-2_0OPtPekr3
// # Pool_ARN = arn:aws:cognito-idp:us-east-2:211447038426:userpool/us-east-2_0OPtPekr3
// # Client_Id = 3utdo6191dab6nmt48954adl3i

// -------------------------------------------------------------------------------------
var poolData = {
  UserPoolId: 'us-east-2_0OPtPekr3',
  ClientId: '3utdo6191dab6nmt48954adl3i'
};

function register(username, password, email, given_name, family_name, zipCode) {
  var userPool = new CognitoUserPool(poolData);

  var attributeList = [
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: 'given_name',
      Value: given_name
    }), 
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: 'family_name',
      Value: family_name
    }),
    // new AmazonCognitoIdentity.CognitoUserAttribute({
    //   Name: 'zipCode',
    //   Value: zipCode
    // }),
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: 'email',
      Value: email
    })
  ];

  userPool.signUp(username, password, attributeList, null, function (err, result) {
    if (err) {
      console.log(err.message);
      return;
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
  });
}

function verify(username, verificationNumber) {
  var userPool = new CognitoUserPool(poolData);

  var userData = {
    Username: username,
    Pool: userPool
  }
  var cognitoUser = new CognitoUser(userData);
  cognitoUser.confirmRegistration(verificationNumber, true, function(err, result) {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(`call result: ${result}`)
  });
}