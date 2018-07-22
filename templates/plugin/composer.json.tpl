{
    "name": "<%- @project_slug %>",
    "description": "<%- @project_description %>",
    "keywords": [
      "wordpress",
      "plugin"
    ],
    "license": "GPL-2.0+",
    "authors": [
      {
        "name": "<%- @author_name %>",
        "email": "<%- @author_email %>"
      }
    ],
    "type": "wordpress-plugin",
    "support": {
        "issues": "<%- @git_url %>/issues",
        "source": "<%- @git_url %>"
    },
    "require": {
        "sentry/sentry": "^1.8",
        "monolog/monolog": "^1.23",
        "guzzlehttp/guzzle": "^6.3",
        "knplabs/github-api": "^2.8",
        "php-http/guzzle6-adapter": "^1.1"
    },
    "require-dev": {
        "phpmd/phpmd": "^2.6",
        "squizlabs/php_codesniffer": "3.*",
        "dealerdirect/phpcodesniffer-composer-installer": "^0.4.4",
        "wp-coding-standards/wpcs": "^0.14.1",
        "phpunit/phpunit": "5.7.9"
    }
}
