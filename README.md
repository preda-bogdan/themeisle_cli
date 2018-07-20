# ThemeIsle CLI


**Installation**
```$bash
npm install -g themeisle/ticli
```

**New Project**
```$bash
mkdir <project_name>

cd <project_name>

ticli
```

**Existing Project from GitHub**
```$bash
ticli git@github.com:<owner>/<repo>.git
```

**Run Project**
```$bash
ticli serve
```

## Todo | Road map

- Add auth for GitHub
- GitHub Integration
- Generator for new project ( WordPress Theme, WordPress Plugin, PHP Generic Project )
- Clone Existing Project from GitHub add minimum required options + user specified.
- Serve a Docker nginx PHP-mySql instance with the project.

### Author

Bogdan Preda -- <bogdan.preda@themeisle.com> -- @bogdan.preda

### Contributing

```$bash
git clone

npm install

npm link # to have the command available globaly

npm run watch # to have automatic compilation
```
**Note:** All PR should pass the automatic available testing and have jest tests.