Launch 3 code-reviewer subagents in parallel to review the codebase from different angles.

Use the Agent tool with subagent_type="code-reviewer" to launch all 3 agents simultaneously in a single message:

1. **Security review**: Focus on security vulnerabilities, injection risks, hardcoded secrets, OWASP top 10
2. **Quality review**: Focus on naming conventions, code structure, error handling, dead code
3. **Style review**: Focus on consistency, formatting, patterns, and adherence to project conventions

Pass each agent a specific prompt describing its focus area and ask it to review the current working directory.

After all 3 agents complete, summarize their findings in a combined report grouped by severity: Critical, High, Medium, Low.
