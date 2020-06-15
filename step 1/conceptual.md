### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  * JSON Web Token is a standard used to create access tokens for an application. The server generates a token that certifies the user's identity and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.

- What is the signature portion of the JWT?  What does it do?
  * When "signing" a JWT, the token is made of an encoded string comprising of three parts: Header, Payload, and Signature. This token validates the user's identity.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  * The Header and Payload of a JWT can be decoded, but the Signature requires a secret key and "signed" token value to validate.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  * Using middleware, we can verify the user's identity when attempting to access certain routes.

- Compare and contrast unit, integration and end-to-end tests.
  *  Unit testing is used to validate that separate units of source code work properly. Ex. testing a function and it's output.
  * Integration testing is the phase in software testing in which individual software modules are combined and tested as a group. 
  * End-to-end testing is where you go from start to end. Ex. application to register. 

- What is a mock? What are some things you would mock?
  * "Mocking" is creating an object that resembles a response from an API that can be used for testing. 

- What is continuous integration?
  * Continuous integration is the practice of merging all developers' working copies to a shared mainline several times a day.

- What is an environment variable and what are they used for?
  * An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. They can be used to help programs know what directory to install files in, where to store temporary files, and where to find user profile settings. 

- What is TDD? What are some benefits and drawbacks?
  * Benefits: Write tests first and can be used to help ensure code is passing during development.
  * Cons: Can take a lot of time and slow down development.

- What is the value of using JSONSchema for validation?
  * Make sure the data the user is inputting is valid.

- What are some ways to decide which code to test?
  * Anything that returns an output or value.

- What are some differences between Web Sockets and HTTP?
  * Websockets return live information so you don't have to refresh your page. HTTP is stateless, so you would have to refresh your web page to get most recent information.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
  * I enjoyed working with python and flask in general more than javascript, but I also think npm makes developing a lot easier to install dependencies and manage project information.