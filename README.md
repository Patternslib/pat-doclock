# pat-doclock

A [Patternslib](http://patternslib.com) pattern.


For example:
```html
<form class="pat-doclock"
      data-pat-doclock="url: mock/toggle-lock.html"
>
    ...
</form>
```

## Development

For standalone development run (installation and starting a server):
```shell
    > make all
```

To clean up local directory (after running make all) run:
```shell
    > make clean
```


## Purpose

This pattern is Quaive specific and is meant to lock
a document in order to prevent concurrent edits.

Every time a user starts typing or pastes content in a form that
has the class `pat-doclock`, an ajax call to the `url` specified
using the `data-pat-doclock` option is performed.
When the form is replaced or the user leaves the page, the same `url`
is called to unlock the document.
