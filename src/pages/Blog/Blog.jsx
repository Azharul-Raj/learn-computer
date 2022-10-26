import React from "react";

const Blog = () => {
  return (
    <div className="my-20 mx-5 lg:mx-20">
      <h2 className="text-4xl font-bold mb-3">What is Cors?</h2>
      <p className="mb-10">
        Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism
        controlled and enforced by the client (web browser). It allows a service
        (API) to indicate any origin other than its own from which the client
        can request resources. It has been designed in response to the
        same-origin policy (SOP) that restricts how a website (HTML document or
        JS script) loaded by one origin can interact with a resource from
        another origin. CORS is used to explicitly allow some cross-origin
        requests while rejecting others. CORS is implemented primarily in web
        browsers, but it can also be used in API clients as an option. It's
        present in all popular web browsers like Google Chrome, Firefox, Opera,
        and Safari. The standard has been accepted as a W3C Recommendation in
        January 2014. Based on that, we can assume that it is implemented in all
        currently available and other than listed web browsers.Everything starts
        on the client side, before sending the main request. The client sends a
        CORS preflight request to a service for resources with parameters in
        HTTP headers (CORS headers). The service responses using the same
        headers with different or the same values. The client decides, based on
        a CORS preflight response, if he can or cannot send the main request to
        the service. The web browser (client) will throw an error if the
        response does not meet the requirements of CORS preflight. CORS
        preflight requests are sent regardless of the used libraries or
        frameworks to send requests from web browser. That's why you won't need
        to conform CORS requirements when working with API from your backend
        application.
      </p>
      <h2 className="text-4xl font-bold mb-3">
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h2>
      <p className="mb-10">
        Google Firebase is a Google-backed application development software that
        enables developers to develop iOS, Android and Web apps. Firebase
        provides tools for tracking analytics, reporting and fixing app crashes,
        creating marketing and product experiment.Firebase use cases include:
        Create onboarding flows  developers can give users a quick, intuitive
        sign-in process using Firebase Authentication. They allow users to sign
        into their apps via their Google, Twitter, Facebook or GitHub accounts
        in less than five minutes. Developers can also track each step of their
        onboarding flows to enhance the user experience. Additionally,
        developers can use Google Analytics for Firebase to log events at each
        step of their onboarding flows, create funnels to determine where users
        are dropping off and use remote configuration to make changes to their
        apps to see how those changes affect conversions. Customize a “welcome
        back” screen  developers can use personalization to give every user the
        best experience by customizing the initial screen based on a users
        preferences, usage history, location or language. Developers can define
        audiences based, in part, on user behaviors and show targeted content to
        each audience. Progressively roll out new features  developers can
        launch new features with minimal risk by first testing those features on
        a few users to see how they work and how users respond. Then, when
        developers are satisfied, they can roll out their apps to the rest of
        their users. Security leak In June 2018, mobile security firm Appthority
        reported that thousands of iOS and Android mobile apps were exposing
        more than 113 GBs of data via 2,271 misconfigured Firebase databases.
        Beginning in January 2018, Appthority researchers scanned mobile apps
        that used Firebase systems to store user data and analyzed
        communications pattern for requests made to Firebase domains. After
        scanning over 2.7 million Android and iOS apps, researchers identified
        28,502 mobile apps (1,275 iOS and 27,227 Android) that connected and
        stored data inside Firebase backends. Of these, 3,046 apps (600 iOS and
        2,446 Android) saved data inside 2,271 misconfigured Firebase databases
        that enabled anyone to view their content.
        There are some other platforms aviailable as well those are given below
        1.Parse 2.Back4App 3.AWS Amplify 4. Kuzzle 5.Couchbase and so on.
      </p>
      <h2 className="text-4xl font-bold mb-3">
        How does the private route work?
      </h2>
      <p className="mb-10">The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.The App component is the root component of the example app, it contains the outer html, main nav and routes for the application</p>
      <h2 className="text-4xl font-bold mb-3">
      What is Node? How does Node work?
      </h2>
      <p className="mb-10">Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.While spawning threads incurs less memory and CPU overhead than forking processes, it can still be inefficient. The presence of a large number of threads can cause a heavily loaded system to spend precious cycles on thread scheduling and context switching, which adds latency and imposes limits on scalability and throughput.</p>
    </div>
  );
};

export default Blog;
