#!/bin/sh

#Generate a new project from your HTML5 Boilerplate repo clone
#by: Rick Waldron & Michael Cetrulo


##first run
# $ cd  html5-boilerplate/build
# $ chmod +x createproject.sh && ./createproject.sh [new_project]

##usage
# $ cd  html5-boilerplate/build
# $ ./createproject.sh [new_project]

#
# If [new_project] is not specified the user we will prompted to enter it.
#
# The format of [new_project] should ideally be lowercase letters with no
# spaces as it represents the directory name that your new project will live
# in.
#
# If the new project is specified as just a name ( "foo" ) then the path
# will be a sibling to html5-boilerplate's directory.
#
# If the new project is specified with an absolute path ( "/home/user/foo" )
# that path will be used.
#

# find project root (also ensure script is ran from within repo)

version="1.0"
print_version() {
	echo "$0 (c) 2011 by Rick Waldron & Michael Cetrulo version $version"
}

print_help() {
	print_version
	echo "USAGE: $0 [--src SRC] [--dst DST] NAME"
	echo "OPTIONS:"
	echo "--src -s SRC \t set the source directory where your html5boilerplate lives"
	echo "--dst -d DST \t set the destination directory in which to create your project"
	echo "--vcs VCS    \t make the new location a VCS repository. Currently supported"
	echo "             \t VCSs are: git and hg(mercurial)."
	echo "--commit -c  \t if set will commit the copied h5bp sources into the VCS."
	echo "             \t this only works with the --vcs option set"
	echo ""
	echo "If --src is not set it will use the toplevel dir of the current git dir"
	echo "this behaviour expects that you are in the git repository of h5bp under /build"
	echo ""
	echo "If --dst is not set it will try to create the directory in the current directory"
	echo "You can also set the same options in the ~/.h5bprc file"
	echo "Here are the possible options:"
	echo "\tsrc\t\t-\tThe source directory from where h5bp is located"
	echo "\tdst\t\t-\tThe destination in which the new project shoul be created"
	echo "\twhich_vcs\t-\tThe vcs you want to use"
	echo "\tcommit_init\t-\tset this to \"yes\" if you want to commit the contents of the new project"
	echo "Here is an example for the syntax(It is basically how shell variables are set):"
	echo ""
	echo "src=\"~/src/html5boilerplate\""
	echo "dst=\"~/src\""
	echo "which_vcs=\"git\""
	echo "commit_init=\"yes\""
	echo ""
}

# this will be overridden if --src is set on the commandline
src="./"
dst="./"
project_name=""
with_vcs="no"
which_vcs=""
commit_init="no"

if [ -e $HOME/.h5bprc ]; then
	. $HOME/.h5bprc
fi

while test "$1" != "" 
do
	case $1 in
		--help|-h)
			print_help
			exit 0
			;;
		--version|-v)
			print_version
			exit 0
			;;
		--src|-s)
			shift
			if [ -d $1 ]
			then
				src="$1"
			fi
			;;
		--dst|-d)
			shift
			if [ -d "$1" ]
			then
				dst="$1"			
			fi
			;;
		--vcs)
			with_vcs="yes"
			shift
			which_vcs=$1
			;;
		--commit|-c)
			commit_init="yes"
			shift
			;;
		*)
			project_name="$1"
			shift
			;;
	esac
done

if [ ! -d "$src" ]; then
	src=$(git rev-parse --show-toplevel) || {
      		echo "fatal: could not determine html5-boilerplate's root directory." >&2
		exit 1
	}
fi

dst="$dst/$project_name/"

if [ -d $dst ]
then
	echo "ERROR: Project $project_name already exists at $dst"
	exit 1
fi

#create new project
mkdir -p "$dst" || exit 1

#success message
echo "Created Directory: $dst" 

cp -vr -- $src/css $src/js $src/img $src/build $src/*.html $src/*.xml $src/*.txt $src/*.png $src/*.ico $src/.htaccess "$dst"

if [ "$with_vcs" = "yes" ]
then
	if [ "$which_vcs" = "git" ]
	then
	       	git init $dst
		if [ "$commit_init" = "yes" ]
		then
			cd $dst
			git add css js img build *.html *.xml *.txt *.png *.ico .htaccess
			git commit -am 'initial commit'
		fi
	elif [ "$which_vcs" = "hg" ]
	then
		hg init $dst
		if [ "$commit_init" = "yes" ]
		then
			cd $dst
			hg add css js img build *.html *.xml *.txt *.png *.ico .htaccess
			hg commit -m 'initial commit' css js img build *.html *.xml *.txt *.png *.ico .htaccess
		fi
	fi
fi

#success message
echo "Created Project: $dst"

