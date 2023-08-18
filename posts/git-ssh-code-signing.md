---
title: "It's time to kill your GPG agent - Git SSH code signing"
date: "2022. August 29."
excerpt: "Setup Git SSH code signing and you can finally get rid of your GPG agent"
cover_image: "https://cdn.levminer.com/blog/git-ssh-code-signing/git-ssh-code-signing.png"
---

Last week GitHub finally released [SSH code signing](https://github.blog/changelog/2022-08-23-ssh-commit-verification-now-supported/). Git introduced signing with an SSH key almost a [year ago](https://github.blog/2021-11-15-highlights-from-git-2-34/#tidbits). Technically you could use SSH code signing before, but GitHub just displayed a scary "Unverified badge".

## Advantages of code signing

If you contribute to big open source projects most of them make code signing required. Why? 

You can impersonate **anyone** with Git, by design. For example: 

```
git -c user.name='Linus Torvalds' -c user.email='torvalds@linux-foundation.org' commit -m "hi"
```

Now if you commit something on GitHub it will show up as something Linus Torvalds committed. Check out this [article](https://dev.to/martiliones/how-i-got-linus-torvalds-in-my-contributors-on-github-3k4g) for more information on this topic. Why is this not dangerous? Because of code signing, if you sign your code others can be 100% sure it was you.

## Why SSH over GPG?

There are a couple of valid points I think.

1. On Windows GPG signing is *terrible*, you can find countless StackOverflow threads about errors and bugs. My GPG agent likes to die at least once a week. Then I have to kill the agent, restart it, try committing again, it still doesn't work, restart it again and finally, it works. It's **VERY** annoying.

1. You can use the same SSH key for authentication and signing, so you don't have to deal with two separate keys.


## Setup

These commands _should_ work on Windows, Linux and macOS if you use Git Bash (If you have trouble with **~** on Windows, use relative paths).

Let's generate a new key (you can use existing SSH keys):

```
ssh-keygen -t ed25519 -C "email@example.com"
```

You can choose where you want to save the file and the file name, I recommend the defaults. And you will be prompted for a password. If you accepted the default options your key should be in `~/.ssh`. Now add your new key to the ssh-agent.

```bash
ssh-add ~/.ssh/id_ed25519
```

If you see an error your ssh-agent might not be running, run:

```
eval "$(ssh-agent -s)"
```

Now let's configure the Git integration.

```
git config --global gpg.format ssh
```

Now copy the contents of the `~/.ssh/id_ed25519.pub` public key file.

```
git config --global user.signingkey 'ssh-ed25519 AAAAC3... email@example.com'
```

## Uploading the key to GitHub

Now navigate to your [GitHub settings](https://github.com/settings/keys). Click add New SSH key. Make sure you select **Signing key**. And paste in the contents of the public key file.

Now push a commit to a repo, click on the commit and you will se a nice verified badge. You can verify the fingerprint with:

```bash
ssh-keygen -lf ~/.ssh/id_ed25519.pub
```

## Revoking the old GPG key

If you want you can revoke your old GPG easily.

List your current keys:

```
gpg --list-keys
```

You need your public key id in the first line, something like: `ABCD1234`, then revoke your key:

```
gpg --output revoke.asc --gen-revoke key 
```

Then import the revoke certificate you saved:

```
gpg --import revoke.asc
```

You have successfully revoked your key in your keyring, now you have to delete the *same* GPG key in your GitHub account and upload it again. If you did everything right take a look at an old commit and you will see a nice orange "Revoked" badge.