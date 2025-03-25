# How to reproduce the issue
1. Clone the repository
2. Open the file ClockBug.spec.ts

_Test number one:_
1. Run the Test ONE in the debug mode (--debug)
2. Try to inspect elements during page.pause()

_Test number two_
1. Run Test TWO in the ui mode

**Actual result**
_For Test ONE:_
1. The browser freezes, and it's NOT possible to inspect elements after page.pause()
2. The test does NOT fail, but hangs indefinitely

_For Test TWO:_
1. The test does NOT fail on timeout, but hangs indefinitely

**Expected result**
1. _For Test number one:_ the test is PASSED
2. _For Test number two:_ the test is FAILED on timeout
