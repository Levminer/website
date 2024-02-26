---
title: "Authme 5 - Migrate from Authy Desktop"
date: "2024. February 26."
excerpt: "New year, new Authme version and it's time to migrate from Authy Desktop."
cover_image: "https://cdn.levminer.com/blog%2Fauthme-5%2Fauthme-5.png"
---

Happy new year everyone! Yes I know it's a little to late, Authme usually releases in late December or early January, but this year, things are different!
This release was supposed to be a small maintenance release, but then Twillio [announced](https://help.twilio.com/articles/22771146070299-User-guide-End-of-Life-EOL-for-Twilio-Authy-Desktop-app) that Authy is shutting down on March 19, and to my surprise quite a few people actually used Authy Desktop. So if you are using Authy Desktop you just found your new cross-platform desktop 2FA client: Authme 5

### Authme 5 TLDR:

-   Migrate from Authy Desktop
-   Apple Silicon support
-   Easier and faster import page
-   Translations
-   Import from 2FAS Authenticator and Aegis Authenticator
-   Fully backwards compatible with Authme 4
-   Authme Sync

### Migrate from Authy Desktop

Authy Desktop is shutting down on March 19, so you should migrate now to Authme. Of course Twillio doesn't provide any easy way to migrate
to other apps. Why would a multi-million dollar corporation with 6000 employees provide an easy way to export all your codes? You can find more
information in [this](https://github.com/Levminer/authme/issues/279) GitHub issue.

### Apple Silicon support

In last march I finally got a 2020 13" M1 MacBook Air. Apple Silicon was released 3 years ago, most of the apps already had an Apple Silicon version,
and now Authme supports Apple Silicon too.

### Easier and faster import page

The import page was cleaned up a little, and the instructions are a little bit more helpful. On the backend importing was made a little faster.

### Translations

Authme now supports multiple languages. Currently English, Spanish and Hungarian. If you want to translate Authme take a look at [this](https://github.com/Levminer/authme/issues/258) GitHub issue.

### 2FAS and Aegis support

These import methods are still under development, but they are available in the alpha version of Authme. You can track 2FAS Authenticator support [here](https://github.com/Levminer/authme/issues/288) and Aegis Authenticator support here [text](https://github.com/Levminer/authme/issues/264).

### Fully backwards compatible with Authme 4

Authme 5 is fully backwards compatible with Authme 4, if you are already using Authme you don't have to do anything

### Authme Sync

With Authme Sync you could easily sync your 2FA codes between devices without a central server.

-   Sync your 2FA codes between devices securely.
-   P2P, your codes don't touch other servers, only your devices.
-   Works inside internal networks and between firewalls.

If you are interested in this feature please fill out [this very short survey](https://tally.so/r/nWzkgj) .
