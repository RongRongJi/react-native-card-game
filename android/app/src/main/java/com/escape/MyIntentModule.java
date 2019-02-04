package com.escape;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationCausedNativeException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyIntentModule extends ReactContextBaseJavaModule {
    public  MyIntentModule(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @ReactMethod
    public void startNewActivity(String name) {
        Activity activity = getCurrentActivity();
        if (activity instanceof StartNewActivity) {
            ((StartNewActivity) activity).startNewActivity(name);
        }
    }

    @Override
    public String getName() {
        return "startNew";
    }
}
