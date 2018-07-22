<?xml version="1.0"?>
<ruleset name="WordPress Plugin CS">
    <description>WordPress Plugin rules for PHP_CodeSnifferr</description>

    <file>.</file>

    <exclude-pattern>node_modules/*</exclude-pattern>
    <exclude-pattern>vendor/*</exclude-pattern>
    <exclude-pattern>tests/*</exclude-pattern>
    <exclude-pattern>*index.php</exclude-pattern>
    <!--<exclude-pattern>*</exclude-pattern>-->
    <rule ref="WordPress-Core">
        <exclude name="Squiz.Commenting.FileComment.SpacingAfterComment" />
        <exclude name="Generic.Files.LowercasedFilename" />
        <exclude name="Generic.NamingConventions.UpperCaseConstantName" />
        <exclude name="Generic.Formatting.MultipleStatementAlignment.IncorrectWarning" />
        <exclude name="Generic.Formatting.MultipleStatementAlignment.NotSameWarning" />
        <exclude name="Squiz.Commenting.FunctionComment.MissingParamTag" />
        <exclude name="Squiz.Commenting.InlineComment.InvalidEndChar" />
        <exclude name="Squiz.Commenting.InlineComment.NotCapital" />
        <exclude name="Squiz.Commenting.FileComment" />
        <exclude name="WordPress.PHP.YodaConditions.NotYoda" />
        <exclude name="Squiz.PHP.DisallowMultipleAssignments" />
        <exclude name="WordPress.NamingConvention.ValidVariableName.StringNotSnakeCase" />
        <exclude name="WordPress.NamingConventions.ValidVariableName.NotSnakeCase" />
        <exclude name="WordPress.NamingConventions.ValidFunctionName.MethodNameInvalid" />
        <exclude name="WordPress.NamingConventions.ValidVariableName.MemberNotSnakeCase" />
        <exclude name="WordPress.NamingConventions.ValidVariableName.NotSnakeCaseMemberVar" />
        <exclude name="WordPress.Arrays.MultipleStatementAlignment.DoubleArrowNotAligned" />
        <exclude name="WordPress.Files.FileName.InvalidClassFileName" />
        <exclude name="WordPress.Files.FileName.NotHyphenatedLowercase" />
        <exclude name="WordPress.Arrays.ArrayDeclarationSpacing" />
        <exclude name="WordPress.WhiteSpace.PrecisionAlignment.Found" />
        <exclude name="Squiz.PHP.CommentedOutCode" />
        <exclude name="WordPress.WP.I18n.MissingTranslatorsComment" />
        <exclude name="WordPress.PHP.YodaConditions.NotYoda" />
        <exclude name="WordPress.WhiteSpace.PrecisionAlignment.Found" />
        <exclude name="WordPress.WP.PreparedSQL.NotPrepared" />
    </rule>
    <rule ref="WordPress-Docs">

    </rule>

    <rule ref="Squiz.Commenting.FunctionComment.ScalarTypeHintMissing">
        <severity>0</severity>
    </rule>

</ruleset>