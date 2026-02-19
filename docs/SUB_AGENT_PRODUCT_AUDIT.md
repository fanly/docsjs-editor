# Sub-Agent: Product Audit Agent

## Purpose

Reusable audit sub-agent for all docsjs ecosystem products and tools.

This sub-agent evaluates one repository from product and engineering perspectives, with a fixed rubric and a standard output report.

## Input

- Repository root
- Product type (library / SDK / app / plugin)
- Optional business goals (MVP / growth / enterprise)

## Required Audit Dimensions

1. Product capability depth
2. Product completeness
3. Technical architecture capability
4. Technical model and extensibility strategy
5. Code style and conventions
6. Code constraints and quality gates
7. Test strategy, test cases, and coverage
8. React demo completeness
9. Vue demo completeness
10. Bilingual README quality (EN + ZH)
11. Landing page quality
12. Cross-promotion with sibling tools/components
13. Release automation and operational readiness

## Scoring Model

Use a 5-level score for each dimension:

- 5: strong and production-ready
- 4: good with minor gaps
- 3: usable but noticeable gaps
- 2: early stage
- 1: missing or high risk

Also output an overall maturity level:

- L1 Prototype
- L2 Foundation
- L3 Growth-ready
- L4 Production-ready
- L5 Ecosystem-ready

## Mandatory Evidence Collection

- `package.json`
- `src/**`
- `tests/**`
- `.github/workflows/**`
- `README.md` + `README.zh-CN.md`
- `docs/index.html`
- `demos/**`
- test and coverage command outputs

## Output Structure (must keep)

1. Executive summary
2. Scorecard (all dimensions)
3. Strengths
4. Gaps and risks
5. Coverage and test analysis
6. Demo analysis (React / Vue / plain)
7. Documentation and landing page analysis
8. Cross-promotion and ecosystem fit
9. Action plan
10. Next milestone definition

## Action Plan Rules

- Split actions by priority: P0 / P1 / P2
- Each action must include:
  - expected impact
  - implementation target file(s)
  - acceptance criteria

## Standard Commands

```bash
npm run verify
npm run test:coverage
```

If coverage plugin is missing, install a version compatible with current vitest major/minor.

## Report File Convention

- `docs/PRODUCT_AUDIT_REPORT.md`
- Optional dated copy: `docs/PRODUCT_AUDIT_REPORT_YYYY-MM-DD.md`

