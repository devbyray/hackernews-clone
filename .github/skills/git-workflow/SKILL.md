---
name: git-workflow
description: Simplified gitflow workflow with conventional commits. Use when creating branches, committing code, merging changes, or managing git operations. Applies to feature and bugfix branches merging to main, with conventional commit message format (type(scope): description).
---

# Git Workflow

This skill defines the git workflow using conventional commits and a simplified gitflow approach.

## Branch Strategy

### Branch Types

**main** - Production-ready code. All features and bugfixes merge here.

**feature/** - New features and enhancements
- Naming: `feature/<short-description>` (e.g., `feature/user-authentication`)
- Created from: `main`
- Merges to: `main`

**bugfix/** - Bug fixes
- Naming: `bugfix/<short-description>` (e.g., `bugfix/login-error`)
- Created from: `main`
- Merges to: `main`

### Branch Workflow

1. **Start new work:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **During development:**
   - Commit frequently using conventional commit messages
   - Keep branches focused on a single feature or fix
   - Rebase on main regularly to stay current

3. **Before merging:**
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/your-feature-name
   git rebase main
   ```

4. **Merge to main:**
   - Create pull request
   - After approval, merge to main
   - Delete feature/bugfix branch after merge

## Conventional Commits

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **build**: Build system or dependency changes
- **ci**: CI/CD configuration changes
- **chore**: Other changes that don't modify src or test files

### Scope

Optional. Indicates the area of the codebase affected (e.g., `auth`, `api`, `ui`, `database`).

### Examples

```bash
feat(auth): add login functionality
fix(api): resolve null pointer exception in user endpoint
docs(readme): update installation instructions
refactor(utils): simplify date formatting logic
test(auth): add unit tests for password validation
```

### Breaking Changes

For breaking changes, add `!` after the type/scope or add `BREAKING CHANGE:` in the footer:

```bash
feat(api)!: change response format to JSON API spec

BREAKING CHANGE: The API now returns responses in JSON API format
instead of the previous custom format. Update client code accordingly.
```

## Git Commands Reference

### Creating Branches

```bash
# Feature branch
git checkout -b feature/user-profile

# Bugfix branch
git checkout -b bugfix/navbar-overflow
```

### Committing Changes

```bash
# Stage changes
git add .

# Commit with conventional message
git commit -m "feat(auth): implement JWT token validation"

# Amend last commit
git commit --amend
```

### Syncing with Main

```bash
# Update your branch with latest main
git checkout main
git pull origin main
git checkout feature/your-branch
git rebase main

# If conflicts occur, resolve them then:
git add .
git rebase --continue
```

### Pushing Changes

```bash
# First push of new branch
git push -u origin feature/your-branch

# Subsequent pushes
git push

# After rebase (force push required)
git push --force-with-lease
```

## Best Practices

1. **Commit frequently** - Small, focused commits are easier to review and revert
2. **Write clear commit messages** - Follow conventional commits format consistently
3. **Keep branches short-lived** - Merge feature branches within a few days
4. **Rebase before merging** - Keep history clean by rebasing on main before creating PR
5. **Delete merged branches** - Clean up branches after they're merged to main
6. **Use `--force-with-lease`** - Safer than `--force` when pushing after rebase
7. **One feature per branch** - Don't mix unrelated changes in the same branch

## Pull Request Guidelines

1. **Clear title** - Use conventional commit format for PR title
2. **Description** - Explain what changed and why
3. **Link issues** - Reference related issues (e.g., "Closes #123")
4. **Small PRs** - Easier to review, faster to merge
5. **Review before merge** - At least one approval required
6. **Squash option** - Consider squashing commits if the branch has many small commits

## When to Use This Skill

This skill should be used when:
- Creating new branches for features or bugfixes
- Making commits (to ensure proper conventional commit format)
- Preparing to merge code to main
- Managing git operations within this project
- Reviewing or creating pull requests
