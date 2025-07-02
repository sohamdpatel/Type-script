# Type-script


## About TypeScript

- Typescript is a superset of Javascript.
- It adds optional static typing and other features to improve the development experience in a way that is familiar to developers who know Javascript.
- Typescript is compiled to Javascript, so it can run in any browser or environment that supports Javascript 
- Typescript has been compiled by Typescript compiler and We can install that with node
- for compile ts file we can use tsc "File name" command and after that compile that in to javascript and using node we can run that file
- Typescript is Devlopment Tool.



## Typscript Types

- In this, every value has a Type.
Typescript is statically typed, which means that it checks the types at compile time.
# Types in Typescript
1. Primitive types
2. Object types
3. Union Types
4. Interection Types


   ## 1. Primitive types
   - number
   - string
   - boolean
   - symbol
   - null
   - undefined

   ## 2. Object Types
   - Object
   - Array
   - Tuple
   - Enum
   - Class
   - Any
   - Void
   - Never

   ## 3. Union Types
   - | (number | string)

   ## 4. Interection Types
   - & (User & Product)

   ## 5. Type Aliases
   - type (type User = {name: string, age: number, mobileNo: number})


<br/>

# Typescript configuration
- We can configure typescript with tsconfig.json file and get that file using " tsc --init "
- in this file we can change destination of compiled js file using " outDir ": " ./dist "
- And using " tsc -w " it reruns a ts file automaticaly when change anythings in file 