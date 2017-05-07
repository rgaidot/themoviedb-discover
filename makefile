.PHONY: install

install: install-npm

install-npm:
		@curl -o- -L https://yarnpkg.com/install.sh | bash
		@yarn
		@yarn config set version-git-message "v%s"

prettier:
		@./node_modules/.bin/prettier --write --single-quote \
			--jsx-bracket-same-line true --print-width 80 \
			--tab-width 4 --color --bracket-spacing true ./src/**/*.js

run-ios:
		@./node_modules/.bin/react-native run-ios

run-android:
		@./node_modules/.bin/react-native run-android

npm-check:
		@./node_modules/.bin/npm-check -u
