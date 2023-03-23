# Basic DOM Manipulation
This is a challenge from **MDN Web Docs** to create a simple shopping list example that allows one to dynamically add items to the list using a form input and button. 

When one adds an item to the input and press the button:
* The item appears on the list
* Each item has a button that can be pressed to delete that item off the list
* The input is emptied and focused ready for the user to enter another item

Write your online shopping list now at [Shopping List](https://splendorous-fenglisu-dbaf88.netlify.app "Online Shopping List")

The finished demo appears similar to this: 

<img width="50%" alt="Shopping List " src="https://user-images.githubusercontent.com/83452606/180938091-0c54b25a-7c4d-45b4-998f-8d16e778c121.png">

### Desired Settings of the tsconfig.json File
```md
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "ES2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library
    
    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "removeComments": true,                           /* Disable emitting comments. */
    "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```


