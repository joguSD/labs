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
with a command prompt, and learn some basic commands to help give us the context of
our shell and the ability to perform basic file operations that most of us are
probably used to doing in a graphical program such as Finder or Windows Explorer.

---

# Using the shell
The shell we will be using in these labs is __bash__ (__b__ourne-__a__gain __sh__ell), however
other variations do exist. To begin, right click on the desktop and click 'Open
in terminal'. Upon logging into the bash shell you will prompted for input with
the aptly named __prompt__. The __prompt__ is displayed after every executed
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
continue our analysis of the __prompt__ we'll look at the word between the colons,
*Desktop*. This word is the name of the current directory, often called a folder
in graphical interfaces. Directories contain files and other directories
composing a tree like structure that creates the overall filesystem. That being
said just having the name of the directory can be insufficient. What if we want
to know exactly where and what folder we're currently in the context of?

### Goal: Get the full path of the current directory
To do this we will again use a command: `pwd`, which stands for __p__resent
__w__orking __d__irectory. A common convention is for command names to either
describe or be an acronym for their functionality. Let's try it out! Type `pwd`
into the command prompt and it will output something similar to this:
```
/home/linux/ieng6/cs15x/cs15x/Desktop
```
The output given is formatted as a __path__, but how do we read it?
Let's begin by noting the importance of __/__. A forward slash is used to
seperate the names of directories that create the __path__. It is important to
note that a __/__ at the beginning of a file means that it is an __absolute
path__, or that the path begins from __/__ (read as __root__). In other words,
the path does not depend on the context of the current environment (the current
directory, user, etc). Using this we can understand the following from the above
path: Inside of the __root__ directory, there is a directory called *home*, and
inside of that directory is another called *ieng6* and so on until you reach the
current directory *Desktop*.

Earlier in the lab when we right clicked on the desktop and clicked 'Open in
Terminal' it did just that, it opened a terminal with the desktop as the current
directory. You'll likely not have any files on your desktop so we're going to
close the terminal we opened earlier. Let's reopen the terminal by clicking on
*Applications* in the upper left and navigate to the *Terminal* under *System
Tools*. You will now get a prompt that looks something like this:
```
[cs15x@ieng6-247]:~:25$
```

Looking at the prompt we can see that the current directory is __~__.
Let's check our current directory using `pwd` again.
```
/home/linux/ieng6/cs15x/cs15x
```
As you can see the name displayed in the prompt, __~__, doesn't match the one
that pwd gave to us, *cs15x*. This is because our current directory is our
__home__ directory, or the default directory that a shell will start in. The
directory's name will nearly always match the username and is the point at which
the user's files begin. Configuration files and other user specific files and
directories are all located in this folder, the user's __home__. The __home__
directory is represented by the tilde: __~__.

Now that we have a pretty good understanding of where we are, and the overall
structure of the filesystem let's get an idea of what files and directories are
around us. In a graphical interface we would likely have a list or grid of icons
representing the files and directories in the current directory. How can we get
the same information on the command line?

### Goal: View the contents of a directory
This time we're going to use the command `ls` to __l__i__s__t the contents of a
directory. Upon issuing the `ls` command we get something like the
following output:
```
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```

Nice! We have a list of the current directory's contents! But how did the `ls`
command know to give us the current directory's contents? Many commands are
context sensitive, meaning that they will use things in the current context as
defaults. In this case, `ls` will default to showing the current directory.
Let's try and get the contents of the *Desktop* folder.

### Goal: View the contents of a specified directory
To achieve this we're going to supply the `ls` command with __command line
arguments__. The __command line arguments__ are a space seperated array of
strings listed after the command name. In this case we're going to add the name
of the desired directory to the command. The command in it's final form will look
something like this:
```
[cs15x@ieng6-247]:~:48$ ls Desktop
```
If you execute this command you might not get any output, and the next prompt is
immediately after the previous command. Don't worry! Nothing went wrong, there's
just nothing in the *Desktop* directory yet. The `ls` command will append the
given directory name to the current directory's path to construct a full path so
that it can display the contents. That is, the path depends on the current
context making it a __relative path__, as opposed to an __absolute path__. If we
supply `ls` with an __absolute path__ instead we can get the same results
without relying on the current context. Let's re-write the command using an
__absolute path__.
```
[cs15x@ieng6-247]:~:53$ ls /home/linux/ieng6/cs15x/cs15x/Desktop/
```
This command will also display the contents of the *Desktop* directory in your
__home__ directory, but does not depend on the context of the current directory.


Certainly though the lack of output can be rather confusing. How can we tell
the `ls` command to be a little bit more explicit with the output it gives us?

### Goal: View the contents of a specified directory in more detail

Most commands will take __command line arguments__ formatted in a special way
that makes them __option flags__. Typically, the convention for __option flags__
is a dash followed by a letter(s) representing the option to be turned on. In this
case we want to turn on the __l__ flag for `ls`, telling it to use __l__ong
formatting. The final command will look like this:
```
[cs15x@ieng6-247]:~:54$ ls -l Desktop
```
This time the `ls` command explicitly states that the total files is zero,
rather than giving no output! However, this isn't the only additional
information the __-l__ flag gives to us. Let's try printing out the contents of
our __home__ directory with the __-l__ flag turned on.
```
total 32
drwxr-sr-x 2 cs15x cs15x 4096 Dec 23 01:30 Desktop
drwxr-sr-x 2 cs15x cs15x 4096 Dec 23 01:30 Documents
drwxr-sr-x 2 cs15x cs15x 4096 Dec 23 01:30 Downloads
drwxr-sr-x 2 cs15x cs15x 4096 Dec 23 01:30 Music
drwxr-sr-x 2 cs15x cs15x 4096 Dec 23 01:30 Pictures
drwxr-sr-x 2 cs15x cs15x 4096 Dec 23 01:30 Public
drwxr-sr-x 2 cs15x cs15x 4096 Dec 23 01:30 Templates
drwxr-sr-x 2 cs15x cs15x 4096 Dec 23 01:30 Videos
```
A lot more information this time! In addition the the name of each file or
directory we also have other information such as file permissions, ownership,
filesize, timestamps, etc. It's important to note that how a command reads the
__command line arguments__ is specific to that command. While there are strong
conventions that many commands follow (such as `ls` in the above example), how
to correctly pass arguments to a command can be unkown. Where can we find
information about the usage and sytanx for __command line arguments__ of a
specific command?

### Goal: Get more information on how to use a command
