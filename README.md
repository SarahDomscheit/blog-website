# Create a Blog Website

A simple Express.js application using Nunjucks templating engine with Typescript

# Description

This project demonstrates how to set up and use Nunjucks templating engine.

#### Install dependencies

```
npm init -y
npm i express
npm install cors
npm install --save @types/cors
npm install dotenv --save
npm install nodemon --save-dev
npm install --save-dev typescript @types/node @types/express
npm install -D ts-node
npm install nunjucks
npm install --save @types/nunjucks
npm install --save-dev prettier prettier-plugin-jinja-template
```

### Add `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*.ts",
    "src/templates/*"
  ],
  "exclude": ["node_modules", "dist"]
}

```

### Add `.prettierrc`

```
{
  "plugins": ["prettier-plugin-jinja-template"],
  "overrides": [
    {
      "files": ["*.html"],
      "options": {
        "parser": "jinja-template"
      }
    }
  ]
}
```

## Template System

### Configure Nunjucks

Add this configuration to your `index.ts`:

```
import nunjucks from "nunjucks";

nunjucks.configure("src/templates", {
  autoescape: true,
  express: app,
});
```

### Create a Base Layout Template (`_baseLayout.html`)

Create a reusable base layout:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{title}}</title>
  </head>
  <body>
    {% block body %} {% endblock body %}
  </body>
</html>

```

### Page Template (`home.html`)

```
{% extends "_baseLayout.html" %} {% block body %}
<h1>Hello World!</h1>
<p>Enjoy coding!</p>
<p>This is a Nunjuck template</p>
{% endblock %}

```

### Render Template in Route

```
app.get("/", (req: Request, res: Response) => {
  res.render("home.html", {
    title: "Nunjucks Example",
  });
});
```

### Add template to home.html

This can be applied to any page, and only the body will be adjusted accordingly.

```
{% extends "_baseLayout.html" %} {% block body %}
<h1>Hello World!</h1>
<p>Enjoy coding!</p>
<p>This is a Nunjuck template</p>
{% endblock %}

```

### Import json.data

```
import fruitsData from "./data/fruits.json";

app.get("/fruits", (req: Request, res: Response) => {
  res.render("fruits.html", {
    title: "List of fruits",
    fruitsData,
  });
});
```

### Create fruits.html with template and for loop

```
{% extends "_baseLayout.html" %}
{% block body %}
  <h1>Fruits</h1>
  <table>
    <thead>
      <th>Name</th>
      <th>Emoji</th>
    </thead>
    <tbody>
      {% for item in fruitsData %}
        <tr>
          <td>{{ item.fruit }}</td>
          <td>{{ item.emoji }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
{% endblock %}

```

**Note**: This is a learning project for understanding Nunjucks templating with Express.js and TypeScript.
