# ThemoviedbDiscover

## Install

```sh
make install
```

## Dev

Add your themoviedb key in config file (config/index.js)

### Lint sources codes

```sh
make prettier
```

### run on iOS

```sh
make run-ios
```

### run on Android

Do not forget to set ANDROID_HOME

```sh
make run-android
```

> **Note:**
> If you are getting this error: *Error calling Appregistry.runApplication*
> You can fix by `adb reverse tcp:8081 tcp:8081`
