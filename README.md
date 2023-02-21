# react-node-robot
skeleton for a robot connected react UI

The wplib-client-js is a node module that talks to NetworkTables hosted on a FRC robot.
To get a UI talking to the Robot requires an HTTP to Node bridge, in this case websockets
Continuous communication is with websockets.

Routes
/ -> a jade template route to hello Express
/users -> from the stater a simple route to respond
/tables ->  shows an error for when the wpilib-client tries to connect to a non-existant robot

References
* https://masteringjs.io/tutorials/express/websockets
* https://medium.com/@dceddia/create-react-app-with-an-express-backend-9fbf7a2e0b59

