---
layout: "@layouts/Tutorial"
title: "Declaring routes"
---

A web browser, in his simplest form, its an HTTP Client, but shows a decorated content and offers another features.
Each content who is `fetched`, is accessed through an `endpoint` which is the part of an URI
where the content reachs to an HTTP server.

Showing it as an abstraction: think in a HTTP server as a very big forest and the endpoints are roads already defined
through which you can reach to a final destination.

> When talking about servers, endpoints are sometimes called routes and vice versa

Before continue with the code, you must understand what is an [HTTP method](https://developer.mozilla.org/es/docs/Web/HTTP/Methods) (sometimes called HTTP verb).

An HTTP says what type of treatment must be given to the data, either sended or received.
With this in mind you should know that there are several standarized methods by the HTTP protocol, but there are
some methods more used than others and every application that works over the HTTP protocol, some of them are:

- GET
- POST
- PUT
- DELETE
- OPTION

> There are more HTTP methods, so I sugguest you to investigate more about them. Its a simple and enjoyable topic to learn about it.

Once understanded HTTP methods, let's see the code!

Here, we can see the simplest route that can be builded and it works over HTTP `GET` method:

```js
import { Halley } from "@laniakeajs/halley.http"

const app = new Halley()

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>")
})

app.ready(5000)
```

In this code we can see the use of a new method: `app.get`. Through this method we can declare a method
that sends data when an HTTP request reach the server endpint `/` using `GET` HTTP verb.
Finally, when that request reach to the server, it will respond with the HTML content: \<h1\>Hello World!\</h1\>

To see how it works, we can use an HTTP client as Thunder Client to check the response from the router

![http client api](/images/sending-the-request.png)
*1. The figure show how a can get a response based on a request to a previos declared endpoint*

The next step u need to ask yourself is: "What appends when I use `get` method?" or "What does `send` method?"

We will discuss this in [the next chapter](/tutorial/router). Do not miss it!
