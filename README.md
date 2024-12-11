# Silent Crash: Unhandled Asynchronous Errors in Express.js

This repository demonstrates a common yet subtle bug in Express.js applications:  silent crashes due to unhandled errors within asynchronous request handlers.  The server unexpectedly terminates without providing clear error messages, making debugging difficult.

## The Problem

The `bug.js` file contains an Express.js server with an asynchronous request handler. This handler performs an operation that might fail.  Crucially, it lacks proper error handling, causing the server to crash silently if the asynchronous operation throws an error.

## The Solution

The `bugSolution.js` file provides a corrected version of the server.  It includes comprehensive error handling within the asynchronous request handler using a `try...catch` block to manage potential errors gracefully.  The solution ensures that any errors are logged and that a meaningful error response is sent to the client, preventing a server crash.