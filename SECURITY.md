# Security Policy

## Supported Versions

This is a template repository, not a versioned library, there are no long-term support
branches. Security fixes are applied to the `main` branch only. If you generated a project
from this template, you are responsible for pulling in fixes yourself.

| Version | Supported |
| ------- | --------- |
| `main`  | ✅        |

## Reporting a Vulnerability

If you discover a security vulnerability in this template, please **do not open a public
issue**. Instead, report it privately by emailing:

**elhammemi001@gmail.com**

Please include as much of the following as you can:

- A description of the vulnerability and its potential impact
- Steps to reproduce it, or a proof of concept
- Any relevant logs, stack traces, or screenshots
- The affected file(s) or dependency (if known)

You should expect an initial response within **5 business days**. Once the issue is
confirmed, a fix will be prioritized and a patch released as soon as reasonably possible.
Reporters will be credited (unless they prefer to remain anonymous) once the fix is public.

## Scope

Given this is a frontend template, common areas of concern include:

- XSS via unsafe DOM/HTML binding (e.g. bypassing Angular's built-in sanitization)
- Dependency vulnerabilities in `package.json`
- Insecure handling of tokens/credentials in HTTP interceptors
- CI workflow permissions and secret handling

Thank you for helping keep this project and its users safe.
