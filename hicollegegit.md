
# Introduction to configuration management and Git

## Course description:

Software Configuration Management (SCM) in development Projects means a
whole bunch of exciting challenges relating to the team, the code base,
tools and the organization.

Good SCM is a prerequisite for an efficient team striving to deliver 
high quality, but despite this such competence is fairly hard to 
acquire. This course aims to take you a step along that path.

*From the contents:*

* Why and what about Software Configuration Management
* SCM-plan, workflows and branching strategies
* Distributed / centralized systems
* Git and the other tools, what fits where
* Code review, test automation and continuos integration

*Target audience:* The course is for you who are interested in the SCM role
and software development efficiency in general. There are no 
prerequisites, but it is assumed that you have some experience from 
projects with multiple developers involved.


## Course outline:

### Notes regarding the outline

* We have two evenings at our disposal, undecided how long they should be
* ...


### First session

#### CM why and what, intro

"Now, up to now my plan went all right
'Til we tried to put it all together one night
And that's when we noticed that something was definitely wrong
The transmission was a '53 and the motor turned out to be a '73
And when we tried to put in the bolts all the holes were gone

So we drilled it out so that it would fit
And with a little bit of help with an adapter kit
We had that engine runnin' just like a song

...

You might say I went right up to the factory
And picked it up, it's cheaper that way
Uh, what model is it?

Well, it's a '49, '50, '51, '52, '53, '54, '55, '56
'57, '58' 59' automobile
It's a '60, '61, '62, '63, '64, '65, '66, '67
'68, '69, '70 automobile"

- Johnny Cash "One Piece At A Time" (1976)

http://en.wikipedia.org/wiki/One_Piece_at_a_Time

https://www.youtube.com/watch?v=rWHniL8MyMM


### 

* Configuration Management - http://en.wikipedia.org/wiki/Configuration_management

* Change Management - http://en.wikipedia.org/wiki/Change_management

* Software Configuration Management - http://en.wikipedia.org/wiki/Software_configuration_management

* Revision Control / Version Control / Source Control - http://en.wikipedia.org/wiki/Revision_control

* Distributed Revision (/Version) Control System  http://en.wikipedia.org/wiki/Distributed_revision_control

http://en.wikipedia.org/wiki/List_of_revision_control_software


### Version vs variant control


### The ultimate goal

Developer : Product == 1:1

* Review - http://en.wikipedia.org/wiki/Code_review

* Testing

* Static program analysis - http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis

* Release

* Experimental development

* Integration

* Build quality in - http://www.allaboutagile.com/7-key-principles-of-lean-software-development-2/

* Issue tracking

* Update / Hotfix / Service pack



http://en.wikipedia.org/wiki/Continuous_integration

http://en.wikipedia.org/wiki/Continuous_delivery

http://en.wikipedia.org/wiki/DevOps


#### PSA: We can't teach you all of git

* There's so much, ...
* We learnt it because we're curious and want to be helpful


#### Roleplay a CM scenario?

Demonstrate with [the lab](lab) that merging works.


#### Git / CM glossary and cheat sheet (Naim)

*insert cheat sheet links*

##### What you need to use git 

* clone
* branch / checkout (note about checkout on single files)
* pull / push
* add / commit

... yes, we wish these were simpler too

Though they are definitely doable even in the simplest GUI (go Sourcetree!)

##### What you will want to learn

* fetch (explain that pull = fetch+merge)
* rebase (show the man page)
* log
* diff
* remote 
* ...



---

---

tag

baseline

autocrlf (and BOM) - https://help.github.com/articles/dealing-with-line-endings/ - https://gitorious.org/bomstrip 

change set / commit

hook scripts - http://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

     client-side: pre-commit,     prepare-commit-msg , commit-msg, post-commit (pre-rebase, post-rewrite , post-checkout,post-merge, pre-push,pre-auto-gc  ) 

     server-side: pre-receive, update, post-receive

rebase - https://www.kernel.org/pub/software/scm/git/docs/git-rebase.html

merge-base - https://www.kernel.org/pub/software/scm/git/docs/git-merge-base.html

filter-branch  - https://www.kernel.org/pub/software/scm/git/docs/git-filter-branch.html

https://www.kernel.org/pub/software/scm/git/docs/git-merge.html

---

#### Distributed / centralized systems

#### Git and the other tools, what fits where

#### Insert suitable times for coffee and air

#### Insert more content from Naim and Johan?

*...but let's make sure we have some air to breathe,
for discussions and make good points, save heavier
stuff for later - CJ*


### Second session

#### Refreshing last session

#### SCM-plan, workflows and branching strategies 

#### Code review, test automation and continuos integration (guests?)

#### The CM role and where to allocate smarts

#### Insert suitable times for coffee and air

#### Insert more content from Naim and Johan?

---

# Git för dummies

## Kursbeskrivning

När du som utvecklare ska använda Git (elller andra CM-verktyg) kan det
hända att verktyget och CM-reglerna stjälper hellre än hjälper effektiv
utveckling. Kursen ska hjälpa dig upp på den inlärningskurvan så du
effektivt och självsäkert kan använda Git i det dagliga arbetet.

*Ur innehållet:* 

 * Så funkar git 
 
 * En effektiv git kommandorad 

 * De vanligaste stötestenarna och hur du kommer runt dem 

 * Hur github (pull-request) funkar

*Målgrupp:* Utvecklare och andra som vill jobba effektivt i
utvecklingsprojekt med konfigurationshantering baserad på Git eller
andra verktyg
