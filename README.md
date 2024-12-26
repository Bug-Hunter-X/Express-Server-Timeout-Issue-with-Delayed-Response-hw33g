# Node.js Express Server Timeout Issue
This repository demonstrates a common issue in Node.js Express servers where client requests time out if the server takes too long to respond.  The example uses `setTimeout` to simulate a long-running operation.
The solution shows how to use appropriate techniques to handle these situations.
## Bug
The `server.js` file showcases a server that introduces a 5-second delay before responding.  This can lead to client-side timeouts depending on client configuration. 
## Solution
The `server-solution.js` file demonstrates a solution using request timeouts and other best practice techniques to handle delayed responses and avoid client timeouts.