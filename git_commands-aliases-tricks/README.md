# Git-commands, aliases and tricks
## About
This branch is about uncommon commands or common commands used in uncommon ways. It's also about tricks and making long commands into fast, easy to use aliases.

## Who is this branch for?
If you know your way around the basic git commands but are looking for more, or if you have interesting commands, aliases or tricks to share. This branch is for you. If you've had or are having a difficult problem it's likely that the command or trick to fix it will be discussed in this branch.

## Contributing
Please add to the Resources section any and all interesting tricks that you find during the discussion.

## Resources
### Fat fingers?
This config setting may help:
```
[help]
	autocorrect = 5
```
That will make git autocorrect your commands unless you abort it (*ctrl-c*-style) in 0.5s. Modify the number to get more time. Useful if you keep writing "git stauts" or "git puhs" all the time!

### Some cool aliases
#### Some basic aliases
These may make your everyday commands faster:
```
st  = status

cam = commit -a -m

br  = branch

co  = checkout
```

#### Prettier log
```
logg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```
[Source](https://coderwall.com/p/euwpig/a-better-git-log)

### Add files to previous commit
```
# Add all tracked files to previous commit, using the that commits message
amend = git commit --amend -C HEAD
# Add changes to be committed to previous commit, using a message you define
amendm = git commit --amend -m
```

### Be kind to others
```
praise = blame
```