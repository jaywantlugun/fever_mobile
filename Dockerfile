FROM node:20

# Install Java & basic tools
RUN apt-get update && apt-get install -y \
    unzip \
    openjdk-17-jdk \
    wget \
    git \
    curl \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Install Expo CLI & EAS CLI globally
RUN npm install -g @expo/cli eas-cli

# Set Android SDK path
ENV ANDROID_SDK_ROOT=/opt/android-sdk
RUN mkdir -p $ANDROID_SDK_ROOT

# Install Android Command Line Tools
RUN wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip -O cmdline-tools.zip \
    && unzip cmdline-tools.zip -d $ANDROID_SDK_ROOT \
    && rm cmdline-tools.zip \
    && mkdir -p $ANDROID_SDK_ROOT/cmdline-tools/latest \
    && mv $ANDROID_SDK_ROOT/cmdline-tools/* $ANDROID_SDK_ROOT/cmdline-tools/latest/ || true

# Accept licenses & install Android packages
RUN yes | $ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager --licenses \
    && $ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager \
       "platform-tools" \
       "platforms;android-34" \
       "build-tools;34.0.0"

# Work directory
WORKDIR /app

# Environment variables
ENV EXPO_NO_PREBUILD=1

# Default command: install dependencies and keep shell open
CMD npm install && bash
