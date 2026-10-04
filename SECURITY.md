# Security Policy

The POWER Standard is an active prototype. Please do not post credentials, private keys, access tokens, personal data, or other sensitive material in public issues or pull requests.

## Reporting a security issue

If you identify a potential secret exposure, authentication flaw, privacy issue, or other security vulnerability, contact the project maintainer privately through the maintainer's GitHub profile rather than opening a public issue containing exploit details or sensitive data.

When reporting, include:

- the affected file, route, or component;
- steps to reproduce;
- the expected and observed behavior;
- the potential impact;
- any safe remediation suggestion.

## Public-data caution

Civic records in the prototype may include demonstration data. A data-quality correction is not necessarily a security vulnerability; use the normal issue/correction workflow for sourcing, factual, methodological, or provenance problems unless disclosure itself creates a privacy or security risk.

## Secrets

The repository must not contain live API keys, tokens, private keys, passwords, or production credentials. Local environment files are ignored by Git; `.env.example` should contain placeholders only.
