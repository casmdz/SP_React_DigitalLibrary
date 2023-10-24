# React Project: Building the Front End of our Flask Project

Create a react application using the Flask API you created a few weeks back. 
 
Your project should include:

- 4-5 Components (Home, Dashboard, etc)
- A custom hook which should demonstrate understanding of the useEffect and useState hooks
- Fetch data from your API
- CRUD operations
- Login/Logout Functionality via Firebase
- Hosting via Netlify or Firebase
- Routing via react-router-dom
- Forms to Create/Update your data via react-hook-form

<!-- - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

NOTE: while developing, you can use the local version of your API

<br />

Once completed, you should then host your application on firebase hosting ensuring proper data fetching happens there as well. This should be attached to the render/glitch-based API so that users can interact with your data on their own devices - imagine you're going to share the site with your grandma who lives over the river and through the woods.

## Notes about my project

Stuff i'm using, references, and some notes to myself: 

- My Digital Library app hosted on [render](https://check-meowt.onrender.com/) and the [github](https://github.com/casmdz/DigitalLibrary_Render) ([og](https://github.com/casmdz/SP_DigitalLibrary))
- [React-hook-form](https://react-hook-form.com/get-started#Quickstart) for forms and login, register 
- [Tailwindcss](https://tailwindcss.com/docs/installation/using-postcss) it's sometimes easier 
- [MUI components ](https://mui.com/material-ui/getting-started/)
- [Carousel UI Component](https://www.npmjs.com/package/react-material-ui-carousel) using MUI made by Learus 
- [Redux](https://redux.js.org/introduction/getting-started) state management library. [info](#redux) 
- "My JSON Server" - Helpful [site](https://my-json-server.typicode.com/casmdz/fakelibrarydata) that i can pretend to be getting data from a server
-  React [Lifecycle methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) diagram 


Thunk: a piece of code that does some delayed work
React 


***
<!-- 
```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
``` -->

```json
	{
		"title": "",
		"author": "",
		"format": "",
		"genre": "",
		"isbn": "",
		"publishing": "",
		"imageSrc": null
	}
```


```typescript
import expect from 'expect';
import reducers from '../../reducers';

describe('reducers', () => {
  it('should handle actions', () => {
    let state;
    state = reducers({books:{books:[]}}, {type:'books/addBook',payload:{title:'title redux4',author:'a',publishing:'a',format:'a',isbn:'a1',genre:'a'}});
    expect(state).toEqual({books:{books:[{title:'title redux4',author:'a',publishing:'a',format:'a',isbn:'a1',genre:'a'}]}});
  });
});
```

<a name="redux" />

##### > Redux helps you deal with shared state management, but like any tool, it has tradeoffs. It's not designed to be the shortest or fastest way to write code. It's intended to help answer the question "When did a certain slice of state change, and where did the data come from?", with predictable behavior. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.
