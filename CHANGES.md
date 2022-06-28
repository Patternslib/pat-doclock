# Changelog



## [3.0.0](https://github.com/patternslib/pat-doclock/compare/3.0.0-alpha.0...3.0.0) (2022-06-28)


### Maintenance


* @patternslib/patternslib needs to be installed. Adding to devDependencies to avoid version clashes with other packages depending on it. ([91946be](https://github.com/patternslib/pat-doclock/commit/91946bec92bed47b4b98fd734f40566a6e81922f))

* Upgrade to @patternslib/dev 2.2.0 and adapt module federation config. ([1f87b4d](https://github.com/patternslib/pat-doclock/commit/1f87b4db1ff545cff6b695ccc12afad5e294b985))

## [3.0.0-alpha.0](https://github.com/patternslib/pat-doclock/compare/2.0.0...3.0.0-alpha.0) (2022-06-15)


### Features


* **Build:** Build module federation enabled bundles. ([6301f27](https://github.com/patternslib/pat-doclock/commit/6301f271ffea54345028833ec37cefbc4ff7cbb1))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([8248023](https://github.com/patternslib/pat-doclock/commit/824802359208477c093f63d95b8221195706b976))

* Extend babel config from @patternslib/dev. ([ab78a01](https://github.com/patternslib/pat-doclock/commit/ab78a0196d6dab6428ea1f74f34509250822fbbe))

* Extend commitlint config from @patternslib/dev. ([30520b4](https://github.com/patternslib/pat-doclock/commit/30520b408be40611307c7c9cd94ccb755e2278dc))

* Extend eslint config from @patternslib/dev. ([e204de7](https://github.com/patternslib/pat-doclock/commit/e204de73d199f7da640cfdbeffb7a9ea8bf7607f))

* Extend jest config from @patternslib/dev. ([1d8b72c](https://github.com/patternslib/pat-doclock/commit/1d8b72cb30f75bdee521af3417a81fbcd30fa96c))

* Extend Makefile from @patternslib/dev. ([6be2c2a](https://github.com/patternslib/pat-doclock/commit/6be2c2ac4ee5459b0f0f3ab2d6caa9f73462ef17))

* Extend prettier config from @patternslib/dev. ([17c9a63](https://github.com/patternslib/pat-doclock/commit/17c9a63484578682aee63d866a0a4b97e0c1c142))

* Extend release-it config from @patternslib/dev. ([b208397](https://github.com/patternslib/pat-doclock/commit/b208397bdb776cb179f56b18f2628c199c7131ef))

* Extend webpack config from @patternslib/dev. ([2c11414](https://github.com/patternslib/pat-doclock/commit/2c1141461e16c4ca406c4566d0296c507db4658d))


### Maintenance


* **build:** Add build:dev script to package.json to create a unminified development build. ([9e8f845](https://github.com/patternslib/pat-doclock/commit/9e8f84560658e9cd3b7cf7a22a9865169d4abfa1))

* **Build:** @patternslib/patternslib as peerDependency. ([c2c0878](https://github.com/patternslib/pat-doclock/commit/c2c08784410ccae172806eea1c465c394bb32c2a))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([ecf2aa9](https://github.com/patternslib/pat-doclock/commit/ecf2aa979a280f311fd5c6ab7a6e1717b66ffc06))

* **Build:** Add keyword "patternslib" to package.json. ([d41546a](https://github.com/patternslib/pat-doclock/commit/d41546a584dc5747e7d0a0aa4e47b2e21c9ae6bd))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([2b58f3e](https://github.com/patternslib/pat-doclock/commit/2b58f3e99c1438fd0020953621ace715b2d61e18))

* **Build:** Keep yarn.lock in repository. ([a1bb43a](https://github.com/patternslib/pat-doclock/commit/a1bb43a69328368318c6c28f653e8f89234b446a))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([6cae42f](https://github.com/patternslib/pat-doclock/commit/6cae42f28cbb636b835f20352507deb2a51ff8c2))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([10e99c7](https://github.com/patternslib/pat-doclock/commit/10e99c77fa55d5d1e79124fb41092bcc973ddda8))

* **Build:** Update GitHub actions setup. ([175dbf9](https://github.com/patternslib/pat-doclock/commit/175dbf90c0738315d004e8e109afd3aa32b3185e))

* **Build:** Upgrade and cleanup dependencies. ([ec10e15](https://github.com/patternslib/pat-doclock/commit/ec10e15aed1cf6d2e011cf510fccc527b9275273))

* **webpack:** Configure devServer static directory. ([2d74f68](https://github.com/patternslib/pat-doclock/commit/2d74f68bc6246de84aded1aab287ce196e61ad72))

## [2.0.0](https://github.com/patternslib/pat-doclock/compare/1.2.0...2.0.0) (2021-11-17)


### Breaking Changes

* Upgrade to Webpack 5. ([22d559a](https://github.com/patternslib/pat-doclock/commit/22d559adcda3be7c774711cc58da338f537f2fc2))



### Maintenance

* **build:** Extend Patternslib release-it config file. ([a2870c2](https://github.com/patternslib/pat-doclock/commit/a2870c20c8c3715083498df11af34d06c1ecf90d))

* **build:** Release on GitHub releases. ([03cec09](https://github.com/patternslib/pat-doclock/commit/03cec09da7d1706090a6678e2288a4f2a858a888))

* Upgrade up to minor versions. ([94df2a3](https://github.com/patternslib/pat-doclock/commit/94df2a3df4f7c96b7a1be01a62258b41185df6e4))

## [1.2.0](https://github.com/patternslib/pat-doclock/compare/1.1.0...1.2.0) (2021-07-23)


### Bug Fixes

* Don't break when elements which should be replaced with lock results cannot be found. Also, remove dependency on jQuery. ([6649c86](https://github.com/patternslib/pat-doclock/commit/6649c86dc4e84931eb71f11bfe969774c4db4306))
* Use input event which also handles changed, paste and keyup, also for contenteditable elements. ([aebee20](https://github.com/patternslib/pat-doclock/commit/aebee20148f0061a382d4ac78771baeb526aa7de))
* Use MutationObserver instead of deprecated DOMNodeRemoved event. ([1487d78](https://github.com/patternslib/pat-doclock/commit/1487d7814b7ad75d3fcc7c4f0dd7fdc55feecefa))


### Maintenance

* Adding debug messages. ([d218da4](https://github.com/patternslib/pat-doclock/commit/d218da459c19ee6b8ac67603c1c84357932c3ca6))
* Modernize code. ([2c3c34d](https://github.com/patternslib/pat-doclock/commit/2c3c34d476363a8892d05ce8f88cfe337ec97f7e))
* Remove dependency on jQuery. ([fc62194](https://github.com/patternslib/pat-doclock/commit/fc6219470325510c294d15a6d411e35c0d54f600))
* Use async fetch to lock/unlock. ([bd44133](https://github.com/patternslib/pat-doclock/commit/bd44133bdd7ac28f65a1c462b0ba9f96fb5232c9))

## [1.1.0](https://github.com/patternslib/pat-doclock/compare/1.0.1...1.1.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([8feadef](https://github.com/patternslib/pat-doclock/commit/8feadefa73fcfab95764e74460bdb098c79b7c35))
* **dependencies:** Depend on Patternslib v4.4.0. ([e74a388](https://github.com/patternslib/pat-doclock/commit/e74a388d9ca8797242aa62beff4b880cb5c2e58c))
* **dependencies:** Upgrade dependencies on minor+patch level. ([6cf316a](https://github.com/patternslib/pat-doclock/commit/6cf316a265e2eda5dd8c01f26e19b58b6f81556a))
* **webpack:** Adapt start script to recent dependency changes. ([02eb547](https://github.com/patternslib/pat-doclock/commit/02eb547169f98694ce02842cd7d0e2768d2923e4))
* **webpack:** Simplify webpack. ([627b0ef](https://github.com/patternslib/pat-doclock/commit/627b0ef28731b50ebc256f3060070d8a8d3e43ab))

### [1.0.1](https://github.com/patternslib/pat-doclock/compare/1.0.0...1.0.1) (2021-04-23)


### Maintenance

* **make release-patch:** Add missing patch for patch level releases. ([5f3a2aa](https://github.com/patternslib/pat-doclock/commit/5f3a2aa894c7f0b6b46058514f649eb89dc37174))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([4e41fbc](https://github.com/patternslib/pat-doclock/commit/4e41fbc3c462ab01578e0dd5d4fae3e97e1bfc81))
* **Release process:** Do not include the release commit in the changelog. ([4b296a4](https://github.com/patternslib/pat-doclock/commit/4b296a49a0d24fc9822094325b963a6a5dba055a))

## 1.0.0 (2021-04-20)


### Maintenance

* Add basic test. ([9ecbfa2](https://github.com/patternslib/pat-doclock/commit/9ecbfa2c92e4e5a725539c573ea294d5ccc3fd26))
* Prepare release, move repo to github/patternslib ([11253a2](https://github.com/patternslib/pat-doclock/commit/11253a28ff497ee1638672ad51b331903a6b3c45))
* Upgrade to Patternslib v4 final - doclock customizations. ([0d0c4bb](https://github.com/patternslib/pat-doclock/commit/0d0c4bb5e663f6319eab09fc7c75ae5163dc2602))
* Upgrade to Patternslib v4 final. ([d5f1da1](https://github.com/patternslib/pat-doclock/commit/d5f1da1f565b830ce253dd5219ae74188097851d))


## 1.0.0 - unreleased

- Upgrade to ES6.