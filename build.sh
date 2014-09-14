#!/bin/sh
VERSION="1.0.5"
dist_file="dist/csster.js"

echo "updating to $VERSION"
cat templates/bower.json   | sed "s/__VERSION__/$VERSION/" > bower.json
cat templates/package.json | sed "s/__VERSION__/$VERSION/" > package.json
cat templates/header.txt   | sed "s/__VERSION__/$VERSION/" > $dist_file
echo "// Generated `date`" >> $dist_file
echo "// "                 >> $dist_file
echo "// "                 >> $dist_file
cat src/utils.js src/core.js src/macros/macros.js src/functions/color.js src/filters/property_pre_processors.js src/filters/rule_post_processors.js src/init.js src/jquery.js >> $dist_file

git add -A
git commit -m  "build version $VERSION"
git tag $VERSION
