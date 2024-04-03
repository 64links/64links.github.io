# 64 links
### Create a permanent link to your short message without transferring any byte!

E.g., classic `Hello, world!` greeting has the following link: https://64links.github.io/u/#SGVsbG8sIHdvcmxkIQo%3d

### Creating a link on Mac OS X
```shell
echo 'My awesome message' \
| base64 \
| sed -e 's/+/%2b/g' -e 's/\//%2f/g' -e 's/=/%3d/g' \
| awk '{print "https://64links.github.io/u/#"$1}'
```

### Creating a link on Linux
```shell
echo 'My awesome message' \
| base64 -w 0 \
| sed -e 's/+/%2b/g' -e 's/\//%2f/g' -e 's/=/%3d/g' \
| awk '{print "https://64links.github.io/u/#"$1}'
```

### Creating a link on Windows
TODO
