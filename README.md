# Use Redux to Manage Authenticated State in a React App

This repo is a React app using TypeScript and State Management. It uses Okta's redirect model to manage authenticated state and user profile information. The project includes examples on when to use [Redux](https://redux.js.org/), local state using React's `useState` hook, or React Context. 

Please read [Use Redux to Manage Authenticated State in a React App][blog] to see how it was created.

**Prerequisites:**

- [Node.js](https://nodejs.org/en/)
- [Okta CLI](https://cli.okta.com)
> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.
- [Visual Studio Code](https://code.visualstudio.com/) or an IDE of your choice

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To pull this example, first create an empty github repo.  Next run the following commands:

```bash
git clone --bare https://github.com/oktadev/okta-react-typescript-redux-example.git
cd okta-react-typescript-redux-example
npm ci
```

### Create an OIDC Application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI. 
Create a client application in Okta with the following command:

```shell
okta apps create
```

You will be prompted to select the following options:
- Application name: Okta Firebase Demo
- Type of Application: **2: SPA**
- Callback: `http://localhost:3000/login/callback`
- Post Logout Redirect URI: `http://localhost:3000`

The application configuration will be printed in the terminal. You will see output like the following when it's finished:

```console
Okta application configuration:
Issuer:    https://{yourOktaDomain}/oauth2/default
Client ID: {yourClientID}
```

Replace all instances of {yourOktaDomain} and {yourClientID} in the project.

## Links

This example uses the following open source libraries from Okta:


* [Okta with React](https://developer.okta.com/code/react/)
* [Okta AuthJS](https://developer.okta.com/code/javascript/)
* [Okta CLI](https://github.com/okta/okta-cli)

## Help

Please post any questions as comments on the [blog post][blog], or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).

[blog]: https://developer.okta.com/blog/2022/08/29/react-typescript-redux
