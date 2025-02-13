---
title: "Authme 6 - New codes page"
date: "2025. February 13."
excerpt: "Authme 6 is released with a new codes page and many more improvements."
cover_image: "https://cdn.levminer.com/blog/authme-6/cover.webp"
---

Authme 1.0.0 was released more than 5 years ago. First it was built with Electron, then Tauri V1 and now the migration to Tauri V2 is completed.

### Authme 6 TLDR:

-   Background transparency
-   Smaller minimum window size
-   Update to Tauri V2
-   New codes page UI
-   Removed couple of unused features

### Background transparency

Authme now has a transparent background and uses Mica on Windows 11.

### Smaller minimum window size

You can resize the window to a smaller size now. Minimum size is now 550px instead of 1000px.

### Update to Tauri V2

The migration was surprisingly easy. You can check out the pr [here](https://github.com/Levminer/authme/pull/332). The main difference was the permission system,
also a lot of imports were changed because Tauri now ships difference packages for each API.

### New codes page UI

The new codes page UI is much more user friendly. Codes take up a smaller space.

![New codes page](https://cdn.levminer.com/blog/authme-6/comparison.png)

### Removed couple of unused features

I removed couple of features that were pretty useless.

-   Global shortcuts: Mostly pressed by accident, very annoying.
-   Blur codes: Authme is already hidden from screen capture.
-   Codes layout: The new codes layout adopts better to the screen size, so multiple layouts are not needed anymore.

### Download

You can download Authme from [GitHub](https://github.com/Levminer/authme/releases/tag/6.0.3) or from the [website](https://authme.levminer.com/).
