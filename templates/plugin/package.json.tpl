{
  "name": "<%- @project_slug %>",
  "version": "<%- @project_version %>",
  "description": "<%- @project_description %>",
  "scripts": {
    "commitmsg": "commitlint -e .git/COMMIT_EDITMSG",
    "phpcbf": "./vendor/bin/phpcbf",
    "phpcs": "./vendor/bin/phpcs",
    "phpmd": "./vendor/phpmd/phpmd/src/bin/phpmd core,rest text phpmd.xml",
    "phpunit": "/usr/bin/php7.0 ./vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --coverage-text"
  },
  "pre-commit": [
    "phpcbf",
    "phpcs",
    "phpmd"
  ],
  "repository": {
    "type": "git",
    "url": "git+<%- @git_url %>.git"
  },
  "keywords": [
    "plugin",
    "wordpress"
  ],
  "author": "<%- @author_name %>",
  "license": "GPL-2.0+",
  "bugs": {
    "url": "<%- @git_url %>/issues"
  },
  "homepage": "<%- @git_url %>#readme",
  "devDependencies": {
    "@commitlint/cli": "^7.0.0",
    "@commitlint/config-conventional": "^7.0.1",
    "pre-commit": "^1.2.2",
    "husky": "^0.14.3"
  }
}
