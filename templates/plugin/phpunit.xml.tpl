<phpunit
        bootstrap="tests/bootstrap.php"
        backupGlobals="false"
        colors="true"
        convertErrorsToExceptions="true"
        convertNoticesToExceptions="true"
        convertWarningsToExceptions="true"
>

    <testsuites>
        <testsuite>
            <directory prefix="test-" suffix=".php">./tests</directory>
        </testsuite>
    </testsuites>

    <filter>
        <whitelist processUncoveredFilesFromWhitelist="true">
            <directory suffix=".php">./core</directory>
            <exclude>
                <directory suffix=".php">./bin</directory>
                <directory suffix=".php">./vendor</directory>
            </exclude>
        </whitelist>
    </filter>

    <testsuites>
        <testsuite name="Default">
            <directory suffix=".php">tests/default/</directory>
        </testsuite>
    </testsuites>
</phpunit>