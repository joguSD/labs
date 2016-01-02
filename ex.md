# An Introduction to Unix
Unix is a family of operating systems that share a common philosophy and follow
a set of standards. The operating system with the largest install base that
meets these standards (the Single UNIX Specifications) is Apple's OS X. Linux is
a popular clone of Unix that is largely compliant with these standards and follows
the same philosophies as Unix.

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
other variations do exist. Login to a workstation using your CSE 15L course
account, named "cs15xyz" where yz are specific to each student. Afterwards, right
click on the desktop and click 'Open in terminal'.
The bash shell will prompt you for input with
the aptly named __command prompt__, or just __prompt__. The __prompt__ is
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
The specific command to determine what user we are is `whoami`.
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

__Hint__:  The full command line is:  `who am i`

__Extra__:  Try the `w` command and the `id` command.

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
in the directory (in kB), rather than giving no output!

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
information about the usage and syntax for __command line arguments__ of a
specific command?

### Goal: Get more information on how to use a command

There are two main ways to ways to get information about a command from within
the shell: from the command in question itself and an external command `man`.
First we'll try getting help information from the command itself. Most commands will
respond to a *--help* or *-h* __command line option__. If a command is issued
with incorrect syntax the help information, or a message explaining how to get
the help information will be printed.

#### Question 10: What __option flag__ can you pass to `ls` to get help information?

Depending on the complexity of the command in question, getting all help
information printed directly to the terminal can be inconvenient, difficult to
read and doesn't support searching the text to find what we're looking for.
At this point in the lab you may start to notice that your terminal is beginning
to become cluttered with previous output, to remedy this you can use the `clear`
command to bring the __prompt__ to the top of the screen. To get help
information in an easier to read format we can use the `man` (short for __man__ual)
command. We can get information about a command by passing the name of the
command to `man` as a __command line argument__.

#### Question 11: Using `man`, what __option flag__ can we pass to `ls` to display *all* files in the __home__ directory?

Note: You can search the __man page__ by typing a __/__ and entering the string
to be located and then pushing the return key. To go to the next found instance of the
search string, push the n key. To quit `man` push the q key.

Upon successfully listing *all* contents of the __home__ directory you will see
something similar to the following:

```
.              .cshrc           .gvfs            .profile       Downloads
..             .dbus            .imsettings.log  .pulse         Music
.ICEauthority  .esd_auth        .kshrc           .pulse-cookie  Pictures
.Xauthority    .gconf           .lesshst         .ssh           Public
.abrt          .gconfd          .local           .vnc           Templates
.bash_history  .gnome2          .locallogin      .zprofile      Videos
.bash_profile  .gnote           .login           .zshenv
.bashrc        .gnupg           .modulesbegenv   .zshrc
.cache         .gstreamer-0.10  .nautilus        Desktop
.config        .gtk-bookmarks   .procmailrc      Documents
```

Notice how many files and directories begin with a __.__ this represents that
they are hidden and will not be displayed when asking for the contents of a
directory unless specifically asked for using the all option. Many of
these hidden files are used as configuration files for various
commands and programs on the system.

Now that we're getting a little bit more familiar with __option flags__ we can
begin to use many of them at once to get the exact output we want.

#### Question 12: Using `man`, what __option flags__ can we pass to `ls` to display the files in the __home__ directory in a *long* format, sorted by *timestamps*?

The correct output will look similar to this:
```
total 32
drwxr-sr-x 2 cs15x24 cs15x 4096 Dec 23 01:30 Videos
drwxr-sr-x 2 cs15x24 cs15x 4096 Dec 23 01:30 Pictures
drwxr-sr-x 2 cs15x24 cs15x 4096 Dec 23 01:30 Music
drwxr-sr-x 2 cs15x24 cs15x 4096 Dec 23 01:30 Documents
drwxr-sr-x 2 cs15x24 cs15x 4096 Dec 23 01:30 Public
drwxr-sr-x 2 cs15x24 cs15x 4096 Dec 23 01:30 Templates
drwxr-sr-x 2 cs15x24 cs15x 4096 Dec 23 01:30 Downloads
drwxr-sr-x 2 cs15x24 cs15x 4096 Dec 23 01:30 Desktop
```

Up until this point we've been doing actions that read the current context and
give us information about what is around us. How do we begin to create, move,
copy, and manipulate the filesystem like we would during normal usage?

### Goal: Create, move, and copy files

It's important to stay organized so let's begin this section by creating a new
directory where you will put all of the files used in this lab. To do this we
can use the `mkdir` command, which stands for __m__a__k__e __dir__ectory. The
`mkdir` command works similarly to `ls` in that we can pass a __path__ as a
__command line argument__ to specify the directory to be made.

#### Question 13: What is the full command to create a new directory in your __home__ directory named *Lab1*?
Please note that successful execution of the `mkdir` command will not produce
any ouput. How can we verify that desired directory was correctly created?

#### Question 14: What command can be used to verify that the *Lab1* directory was created in your __home__ directory?

Now that you have verified that your new directory has been correctly
created, it will be useful to make that directory the current working
directory so that its contents can be easily interacted with. To accomplish
this we can use the `cd` command, which is an acronym for __c__hange
__d__irectory. As is the trend with commands that interact with the filesystem
we can provide a __path__ as a __command line argument__ to specify the directory
we would like to change to.

#### Question 15: What is the full `cd` command to move to our new *Lab1* directory?

Upon successfully changing the current working directory to *Lab1* the __bash
prompt__ should now display the directory as such:

```
[cs15x@ieng6-202]:Lab1:98$
```

And the output of `pwd` should be similar to:

```
/home/linux/ieng6/cs15x/cs15x24/Lab1
```

#### Question 16: Where does the `cd` command go to when given no path in the __command line arguments__?

After issuing the `cd` command by itself, ensure that you're back inside of the
*Lab1* directory using `pwd`, as shown above.

While we're creating directories let's also cover how to remove a directory that
was created on accident or is no longer needed. The `rmdir`, __r__e__m__ove
__dir__ectory command is the complement to `mkdir` and works in the same fashion
as `mkdir`. Let's test the `rmdir` command by making a new temporary directory
called *deleteMe* within our *Lab1* directory. Verify that it exists with `ls`.
Next remove the directory with the `rmdir` command.

#### Question 17: What are the contents of the *Lab1* directory after removing the *deleteMe* directory?

Now that we know the commands for creating directories, we can begin looking
into creating files. Unfortunately, no command's sole purpose is to create a new
file and there are various ways to create new files, some of which don't involve
using a command at all. For now, we'll use the `touch` command. Before you use
the `touch` command to create a new file check the __man page__ on this command.

#### Question 18: What is the actual purpose of the `touch` command?

You may have also noticed in the man page that if the file argument given to
`touch` does not exist it will be created empty.
Use the `touch` command to create a new file in the *Lab1* directory named *temporary*.

#### Question 19: What is the *filesize* of the *temporary* file created with `touch`?

Let's try manipulating this newly created file. We can use the `mv` command to
__m__o__v__e files or directories from one directory to another. The `mv`
command takes two arguments: the path to a source file and the path to a
destination file. First create a new directory inside of the *Lab1* directory
called *names*. Then move the *temporary* file into *names* directory like so:

```
[cs15x@ieng6-202]:Lab1:204$ mv temporary names/
```

__Extra__: Many times you will be passing paths to commands and typing the entire
path can be tiring. In these cases you can use __tab completion__. __Tab
completion__ allows you to type part of the file or directory name and then push
the tab key to autocomplete the rest of the name, allowing you to quickly and
easily write pathnames. For example in the above command we could type *te* and
push tab to complete the name to *temporary*.

#### Question 20: What is the name of the *temporary* file after being moved into the *names* directory?

Notice that in the above `mv` command the destination path only contains a
directory, in this case the source file will maintain its name after being
moved. However, we can also specify a new name for the file in the destination
path, allowing us to also use the `mv` command to rename files. Use `mv` to
rename the *temporary* file now inside of the *names* directory to your name.

#### Question 21: What is the full command used to rename the *temporary* file inside of the *names* directory?

After renaming the *temporary* file the contents of the *names* directory should
be similar to this:

```
[cs15x@ieng6-202]:Lab1:211$ ls names
jordan
```

Where *jordan* is replaced with your name.
Now let's create another file in the *names* directory with your partner's name.
To achieve this we're going to use the `cp` command, which allows us to
__c__o__p__y files. The `cp` command works in a very similar manner to `mv` in
that it takes a source and destination path as arguments, the difference here is
that the `cp` command will keep the original file as well. Using the `cp`
command make a copy of the file named after you, named after your partner.

The *names* directory should now look like this:

```
[cs15x@ieng6-202]:Lab1:218$ ls names/
gary  jordan
```

Where *gary* and *jordan* are replaced with you and your partner's name.

#### Question 22: What is the full `cp` command used to achieve the above results?

We can also use the `cp` command to copy directories as well. Let's make a copy
of the *names* directory named *names.bak*. To make `cp` copy directories we
need to pass the *-r* __option__ so `cp` knows to copy __r__ecursively.
The full command will look like this:

```
[cs15x@ieng6-202]:Lab1:226$ cp -r names/ names.bak
```

And the *names.bak* folder should contain both files just like the *names*
folder:

```
[cs15x@ieng6-202]:Lab1:245$ ls names
gary  jordan
[cs15x@ieng6-202]:Lab1:246$ ls names.bak
gary  jordan
```

Much like the `rmdir` command we can use the `rm` command to __r__e__m__ove
files. The `rm` command takes one or many paths that are to be removed. Using
the `rm` command, remove one of the files inside the *names* directory.

#### Question 23: What is the full `rm` command used to remove one of the files?

What if we wanted to remove the entire *names* directory and all of its
contents? One might be tempted to try the `rmdir` command as we are trying to
remove a directory.

#### Question 24: What does the `rmdir` command output if you try to remove the *names* directory while it still has a file in it?

It should now be clear that we cannot use the `rmdir` command to delete
directories that still have contents inside of them. We'll actually need to use
the `rm` command for this. Using the `rm` command remove the *names* directory
and all of its contents.

#### Question 25: What __option__ needs to be passed to `rm` for it to *recursively* remove the *names* directory and all contents?

After removing the *names* directory we should now just be left with *names.bak*
directory:

```
[cs15x@ieng6-202]:Lab1:255$ ls
names.bak
```

__Extra__: Using `rm` to recursively delete directories can be extremely dangerous,
especially when paired with the *-f* option which will __f__orce the removal,
bypassing some safety measures. You'll often seen 'troll' or 'joke' posts online
that will tell new users to Unix to do things like `rm -rf /`. Such commands are
extremely dangerous and can be destructive to a system. It's important to be
careful when getting help from the internet, if a command seems fishy double
check its functionality before running it.

We've now covered all of the basic filesystem manipulations via the command line
and nearly anything you could do with a graphical interface such as Finder or
Windows Explorer, you should now be able to do from the __bash shell__!






















