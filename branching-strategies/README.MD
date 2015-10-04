# Branching workflows
## About
This branch is about structuring your commits, branches, rebases and merges in a way that is beneficial to the way your team works.

## Who is this branch for?
This branch is for anyone interested in team workflows using Git to make context switching, streamlined feature development or just general tricks to make git work together with your team. Discussion in this branch will center around ways to organize your git tree and your git  in a way that makes it easier to work on different projects. 

## Contributing
Please add to the Resources section any workflows that we could recommend for a specific situation, or just in general. 

## Resources
### Pro git 
#### Branching strategy
The Pro Git book recommends a multi-branch approach, where you could for an example have two branches; one stable `master` branch, one sometimes unstable `develop branch` that periodically gets merged into master when stable. [Read more about Pro Git-book branching strategy](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)

#### Distributed workflow
While not technically a branching workflow it is still not totally dissimilar. There are two workflows described in the book and we'll look a little at the first one, *Integration-Manager workflow*. This is the workflow generally used on GitHub for example. One workflow is the canonical project repository and each contributing developer has their own public repositories with write access and read access to everyone else's public repositories. The clones, or "forks", can be used to develop features in and requests can be sent to the maintainer to pull in the changes from the fork. The maintainer can then read from the fork, test changes, merge them if they meet demands and update the main repository with changes. A lot of projects on GitHub follow this workflow. [Read more about the two distributed workflows in the Pro Git book](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)

### Gitflow
Vincent Driessen introduced this branching model that works sort of similar to the Pro Git model but instead of three-way merging the unstable `develop` branch to `master` multiple times this approach merges hotfixes performed on the stable branch to the unstable branch. When close to release a new release branch is created for the release. On that branch only bugfixes are made. The bugfixes are then merged back to `develop` and the entire body of work in the release branch is merged into `master` when that code goes live. Furthermore the approach involves creating feature branches from develop to work on new features. `master` and `develop` are eternal while feature, hotfix and release branches are temporary. [Read more about Gitflow](http://nvie.com/posts/a-successful-git-branching-model/)