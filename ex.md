# An Introduction to Unix
Unix is a family of operating systems that share a common philosophy and follow
a set of standards. The operating system with the largest install base that
meets these standards (the Single UNIX Specifications) is Apple's OS X. Linux is
a popular clone of Unix that is largely compliant with these standards and follows
the same philosphies as Unix.

Nearly all of what will be learned in this course will be applicable to both systems;
though the lab computers are running CentOS a distribution of linux. One characteristic
of the Unix philosophy is the idea that programs should be small and focused,
accomplishing a single task well, then through a command-line interpreter (a shell)
we can weave these programs together to accomplish more complex tasks.

> "...the idea that the power of a system comes more from the relationships among
> programs than from the programs themselves". - The Unix Programming
> Environment

These philosophies make the system robust, flexible and extensible while
reducing complexity of any single program. To begin we'll familiarize ourselves
with a command prompt, and learn some basic commands to help gives us the context of
our shell and the ability to perform basic file operations that most of us are
probably used to doing in a program such as Finder or Windows Explorer.

---

# Using the shell
The shell we will be using in these labs is _bash_ (_b_ourne-_a_gain _sh_ell), however
other variations do exist. To begin, right click on the desktop and click 'Open
in terminal'. Upon logging into the bash shell you will prompted for input with
the aptly named _prompt_. The _prompt_ is displayed after every executed
command as a signal that the shell is ready for another command. A prompt
typically contains information of the current context and can look something
like this:
```
[cs15x@ieng6-247]:Desktop:512$
```
So what does this prompt mean? We'll begin by looking at the portion to
the right of the @ symbol, *ieng6-247*. This portion of the prompt is the
computer or server you are logged in to. Next, the portion to
the left, *cs15x*. This is the user we are currently logged in
as. It is important to note that the prompt is customizable and all information
present in this prompt may not be in everyone's customizations. This brings us
to our first task: who are we logged in as?

### Goal: Get the currently logged in user
To achieve this goal we will type a command into the shell. The most basic
syntax for a command is a single word, the name of the command. The name of a
command may be more than one actual English word, but it may not contain spaces.
The specific command to figure out what user we are is `whoami`.

Type `whoami` into the prompt so it looks like this:
```
[cs15x@ieng6-247]:Desktop:514$ whoami
```
With the command entered into the prompt we can hit the Enter/Return key to
execute the command, resulting in the desired output:
```
[cs15x@ieng6-247]:Desktop:516$ whoami
cs15x
[cs15x@ieng6-247]:Desktop:517$
```
Excellent! We were able to print out the user's name just like we wanted. To
continue our analysis of the _prompt_ we'll look at the word between the colons,
*Desktop*. This word is the name of the current directory, often called a folder
in graphical interfaces. Directories contain files and other directories
composing a tree like structure that creates the overall filesystem. That being
said just having the name of the directory can be insufficient. What if we want
to know exactly where and what folder we're currently in the context of?

### Goal: Get the full path of the current directory
To do this we will again use a command: `pwd`, which stands for _p_resent
_w_orking _d_irectory. A common convention is for command names to either
describe or be an acronym for their functionality. Let's try it out! Type `pwd`
into the command prompt and it should output something similar to this:
```
/home/linux/ieng6/cs15x/cs15x/Desktop
```
The output given is formatted as a _path_, but how do we read it?
Let's begin by noting the importance of _/_. A forward slash is used to
seperate the names of directories that create the _path_. It is important to
note that a _/_ at the beginning of a file means that it is an _absolute
path_, or that the path begins from _/_ (read as _root_). In other words,
the path does not depend on the context of the current environment (the current
directory, user, etc). Using this we can understand the following from the above
path: Inside of the _root_ directory, there is a directory called *home*, and
inside of that directory is another called *ieng6* and so on until you reach the
current directory *Desktop*.

Earlier in the lab when we right clicked on the desktop and clicked 'Open in
Terminal' it did just that, it opened a terminal with the desktop as the current
directory. You'll likely not have any files on your desktop so we're going to
close the terminal we opened earlier. Let's reopen the terminal by clicking on
*Applications* in the upper right and navigate to the *Terminal* under *System
Tools*. You should now get a prompt that looks something like this:
```
[cs15x@ieng6-247]:~:25$
```

Looking at the prompt we can see that the directory is _~_.
Let's check our current directory using `pwd` again.
```
/home/linux/ieng6/cs15x/cs15x
```
As you can see the name displayed in the prompt, _~_, doesn't match the one
that pwd gave to us, *cs15x*. This is because our current directory is our
_home_ directory, or the default directory that a shell will start in. The
directory's name will nearly always match the username and is the point at which
the user's files begin. Configuration files and other user specific files and
directories are all located in this folder, the user's _home_.

Now that we have a pretty good understanding of where we are, and the overall
structure of the filesystem let's get an idea of what files and directories are
around us. In a graphical interface we would likely have a list or grid of icons
representing the files and directories in the current directory. How can we get
the same information on the command line?

### Goal: View the contents of a directory
This time we're going to use the command `ls` to _l_i_s_t the contents of a
directory. Upon issuing the `ls` command we should get something like the
following output:
```
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```
