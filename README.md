# 64 links
### Create a permanent link to your short message without transferring any byte!

"64 links" has a dedicated URL to every reasonably short (TODO: specify the exact limit) clipboard message ever made and will be ever made, including the answers to all the questions ever asked. These messages are not stored anywhere, not sent to or downloaded from the network, so that, cannot be btute-forced or compromised. When you "create a link" to your message, no bytes are transferred. When you "visit a link", the browser downloads the WEB app only, but the message is not sent to or received from the Internet.

E.g., classic `Hello, world!` greeting has the following link: https://64links.github.io/u/#SGVsbG8sIHdvcmxkIQo%3d

> [!TIP]
> I strongly advise checking out the [manifesto](#manifesto) before using!  
> To delve into technical details, first check out a _WTF_ button at the footer of https://64links.github.io.

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

## Manifesto
### 1. We should stop exposing our secrets to the public
There's a plenty of "pastebins" over the Internet, however all of them store the actual messages on their premises or smbd's else servers. Some of them state they use clouds and convience us they comply with all kinds of GDPR, HIPAA, even the cookies are filtered out (_BTW, who cares what actually happens when you decline the cookies?_).

Regardless of are all these facts are true or not, the thing is: once you submit your clipboard message somewhere, you are under the risk of being compromised. By using such services, you literally expose your privacy to the public, and even worse, you exchange your secret to a shiny URL, which often is only a few letters long and really easy to brute-force.

### 2. We need a real KISS (keep it simple & stupid)
I've always wondered why there's no simple shell command which provides me a link to my stuff immediately, regardless of my environment and location.

One popular solution provides a weird cURL like `echo 'Message' | curl -s -F 'blabla=<-'` (_pardon my French, but why do I need passing a form param, and actually what is this `<-` arrow, I have never seen any similar cURL in my 10y+ WEB developer career_).

You might tell me the "64 links" CLI is even worse. Fair enough, if judging by the cover. Take a closer look and you find out every pipe is JUSTified:
```shell
echo 'My awesome message' \                                  # <-- Just echo
| base64 -w 0 \                                              # <-- Just base64 encode
| sed -e 's/+/%2b/g' -e 's/\//%2f/g' -e 's/=/%3d/g' \        # <-- Just sanitise for URL usage
| awk '{print "https://64links.github.io/u/#"$1}'            # <-- Just concatenate
```

All modern terminals recognize the links once they appear in the output. So highly likely you are willing to click on the link you just created.

### 3. We want sustainability
Microsoft seems to be immortal, that's why I've hosted "64 links" right on GitHub pages. Call Bill in case of some downtime, but so far just enjoy the global coverage. However, keep in mind, there are no any guarantees in stability no matter how good or bad the source code is.

##
Yours sincerely,  
Igops, _per aspera ad DevOps_  
<hi@igops.me>
