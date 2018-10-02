# diffString

Stringify the differences of two objects for a GraphQL mutation.

`yarn install`

`import diffString from 'diffString'`

By passing in two object, you can check for the differences and return a string that can be used for a mutation in a GraphQL mutation.

Example:

```
const obj1 = {
    name: 'Mark',
    role: 'Builder',
    available: false,
    jobs: 3
}

const obj2 = {
    name: 'Steve',
    role: 'Builder',
    available: true,
    jobs: 2
}

const string = diffString(obj1, obj2)
```

Will return: 

`name: "Steve", available: true`