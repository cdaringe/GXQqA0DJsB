# front-end-challenge

[![Greenkeeper badge](https://badges.greenkeeper.io/cdaringe/GXQqA0DJsB.svg)](https://greenkeeper.io/)

a small set of exercises pertinent to front end development!

## requirements

- your computer
- `git`
- [nodejs](http://www.nodejs.org)
- a web browser

## how

- clone & `cd [this-directory!]`
- create a new branch, `git checkout -b challenge-answers`

### part 1 - javascript

- run these commands:
  - `npm install`
  - `npm test`
- this will open up a browser.  **please follow the onscreen instructions.**
- your objective is to make all tests pass. when they have all passed, part 1 is complete.
  - by default we will use `chrome`. if you want to use `firefox` or `safari`, please edit `testem.json` accordingly for the exercise.
  - disregard any security warnings at the top of the chrome browser--these are expected.
- to complete the tasks, it's highly recommended to use the debug utilities included in your browser.  make use of `debugger` statements in your code, as your code will be bundled before it is shipped to your browser.
- lastly, the test suite will automatically re-compile and run in the browser every time you make a change. be aware of this :smile:.
- **please read the descriptions & comments fully before starting to code!**

### part 2 - css

each css exercise lives in the folder corresponding to the exercise.  please edit _just_ the `.html` pages to complete the solutions.  do not feel obligated to optimize for all browsers.  instead, use succint solutions, but feel free to annotate limitations of your solution inline in your code, if any at all.

the exercises are as follows:

- centering - `centering/strategy1.html`
  - make a black circle of any size appear on screen
  - center it in both dimensions on the page in `centering/strategy1.html`
    - extra credit, do it again with a different technique in `centering/strategy2.html`

- svg-scale - `svg-scale/index.html`
  - make the SVG scale to 3/4 the viewport width, maintaining the original aspect ratio

- header - `header/index.html`
  - make the `header` sticky such that it remains at the top of the page as the user scrolls down.

- responsive - `responsive/index.html`
  - write CSS to realize the intent of the markup in the file.

## submitting

Please submit your answers as a patch for e-mail instead of a (public) pull request

- git commit -a -m "challenge answers"
- git format-patch master

submit the patch output.
