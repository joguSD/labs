# An Introduction to Unix
Unix is a family of operating systems that share a common philosophy and follow
a set of standards. The operating system with the largest install base that
meets these standards (the Single UNIX Specifications) is Apple's OS X. Linux is
a popular clone of Unix that is largely compliant with these standards and follows
the same philosphies as Unix.

Nearly all of what will be learned in this course will be applicable to both OS X
and all types of Linux systems although the lab computers are running CentOS a
distribution of Linux. One characteristic of the Unix philosophy is the idea that
programs should be small and focused, accomplishing a single task well, then
through a command-line interpreter (a shell) we can weave these programs together
to accomplish more complex tasks.

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
The shell is a command line interpreter that provides the user interface to the
operating system.
The shell we will be using in these labs is __bash__ (__B__ourne-__a__gain __sh__ell), however
other variations do exist. Login to a workstating using your CSE 15L course
account, named "cs15xyz" where yz are specific to each student. Afterwards, right
click on the desktop and click 'Open in terminal'.
The bash shell will prompt you for input with
the aptly named __comand prompt__, or just __prompt__. The __prompt__ is
displayed when the shell is ready for the user to input another command. A
prompt typically contains information of the current context
and can look something like this:
```
[cs15x@ieng6-247]:Desktop:512$
```
So what does this prompt mean? The first portion, *cs15x*, is the name of the user
account we are currently using. The next portion, *@ieng6-247*, is the @ symbol
followed by name of the computer or server where you are logged in.
The next portion, *Desktop*, is the name of the current working
directory or folder.  The next portion, *512*, is the count of how many commands
have been entered so far.  Finally, the *$* is the prompt symbol indicating the
user may enter a command.  Please note that the prompt is customizable and all
information present in this prompt may not be in everyone's customizations. This
brings us to our first task: what is the name of account are we using?


### Goal: Get information about the current user
To achieve this goal we will type a command into the shell. This is the way a
user asks the computer to run a program.  Each command is a single word, the
name of the program that runs to execute that command.
The specific command to determine what user we are is whoami.
Type `whoami` into the prompt so it looks like this:

```
[cs15x@ieng6-247]:Desktop:514$ whoami
```
With the command entered into the prompt you need to press the Enter/Return key to
execute the command, resulting in the desired output.

#### Question 1: What is the name of the account displayed?

Excellent! You were able to print out the user's account name just like we wanted.

Using Linux many ways often exist to produce similar information.  A similar
command to whoami is the who command used to give information about who is using
the computer.  A single word alone as a command may be all you need, but some
commands are capable of producing more detailed output when using command line
arguments and/or command line options and optionally arguments to those options.

#### Question 2:  What is the difference in the output of `who` when used as a single word command and when used with the two command line arguments am i?

Hint:  The full command line is:  `who am i`

Extra:  Try the `w` command and the `id` command.

To continue our analysis of the __prompt__ we'll look at the word between the colons,
*Desktop*. This word is the name of the current directory, often called a folder
in graphical interfaces. Directories contain files and other directories
composing a tree like structure that creates the overall filesystem. That being
said just having the name of the directory can be insufficient. What if we want
to know exactly where and what folder we're currently in the context of?

### Goal: Get the full path of the current directory
To do this we will again use a command: `pwd`, which stands for __p__rint
__w__orking __d__irectory. A common convention is for command names to either
describe or be an acronym for their functionality. Let's try it out! Type `pwd`
into the command prompt.

#### Question 3: What is the name of your current working directory?

The output given is formatted as a __path__, but how do we read it?
Let's begin by noting the importance of __/__. A forward slash is used to
separate the names of directories that create the __path__. Please
note that a __/__ at the beginning of a file means that it is an __absolute
path__, or that the path begins from __/__ (read as __root__). In other words,
the path does not depend on the context of the current environment (the current
directory, user, etc). If your current working directory is
*/home/ieng6/ieng9/cs15x/cs15xyz/Desktop*, inside of the __root__ directory,
there is a directory called *home*, and inside of that directory is another
called *ieng6* and so on until you reach the current directory *Desktop*.

Earlier in the lab when we right clicked on the desktop and clicked 'Open in
Terminal' it did just that, it opened a terminal window with the desktop as the current
directory. You'll likely not have any files on your Desktop so we're going to
close the terminal window we opened earlier. Let's reopen the terminal by clicking on
*Applications* in the upper left and navigate to the *Terminal* under *System
Tools*.

#### Question 4: From looking at the prompt, what is the name of your current working directory now?

Now, check your current directory using `pwd` again.

As you can see the name displayed in the prompt, __~__, doesn't match the one
that `pwd` produced.

#### Question 5: What can you deduce from the current working directory as displayed in your prompt and as displayed by `pwd`?

Your current directory is your __home__ directory, or the default directory where
a shell will start. The directory's name will nearly always match the username
and is the point at which the user's files begin. Configuration files and other
user specific files and directories are all located in this folder, the user's
__home__. The __~__ (a tilde) represents the current user's home directory.

Now that we have a pretty good understanding of where we are, and the overall
structure of the filesystem let's get an idea of what files and directories are
around us. In a graphical interface we would likely have a list or grid of icons
representing the files and directories in the current directory. How can we get
the same information on the command line?

### Goal: View the contents of a directory
This time we're going to use the command `ls` to __l__i__s__t the contents of a
directory.

#### Question 6: From using the `ls` command, how many files are in your home directory?

How did the `ls` command know to give us the current directory's contents? Many
commands are context sensitive, meaning that they will use the current directory
in the context of the results displayed. In this case, `ls` will default to showing
the current directory. Let's try and get the contents of the *Desktop* folder.

### Goal: View the contents of a specified directory
To achieve this we're going to supply the `ls` command with __command line
arguments__. The __command line arguments__ are a space separated list of
words following the command name. In this case you need to add the name
of the desired directory to the `ls` command.

#### Question 7: From using the ls command with the *Desktop* command line argument, home many files are in your *Desktop* directory?

If you execute this command you might not get any output, and the next prompt is
immediately after the previous command. Don't worry! Nothing went wrong, there's
just nothing in the *Desktop* directory yet. The `ls` command will append the
given directory name to the current directory's path to construct a full path so
that it can display the contents. That is, the path depends on the current
context making it a __relative path__, as opposed to an __absolute path__. If we
supply `ls` with an __absolute path__ instead we can get the same results
without relying on the current context. Let's re-write the command using an
__absolute path__.

#### Question 8: What is the `ls` command to list the contents of your *Desktop* directory using the __absolute path__?

Certainly the lack of output can be rather confusing. How can we tell
the `ls` command to be a little bit more explicit with the output it gives us?

### Goal: View the contents of a specified directory in more detail

In addition to __command line arguments__, most commands can also take __option flags__.
Typically, the convention for __option flags__ is a dash followed by one or more letters
representing each option to be enabled. In this case we want to turn on the __l__
flag for `ls`, telling it to use __l__ong formatting. The final command will look like this:
```
[cs15x@ieng6-247]:~:54$ ls -l Desktop
```
This time the `ls` command explicitly states that the total size of the files
in the directory (in kB),rather than giving no output!

#### Question 9: What is the full `ls` command line to list the contents of your __home__ directory using the __absolute path__?

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
In addition to the name of each file or
directory we also have other information such as file permissions, ownership,
filesize, timestamps, etc. Please note that each command reads the
__command line arguments__ in a manner specific to that command. Where can we find
information about the usage and sytanx for __command line arguments__ of a
specific command?

### Goal: Get more information on how to use a command
