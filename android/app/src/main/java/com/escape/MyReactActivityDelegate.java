package com.escape;

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v4.app.FragmentActivity;

import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;


public class MyReactActivityDelegate extends ReactActivityDelegate {
    private final Activity activity;

    public MyReactActivityDelegate(Activity activity, @Nullable String mainComponentName) {
        super(activity, mainComponentName);
        this.activity = activity;
    }

    public MyReactActivityDelegate(FragmentActivity fragmentActivity, @Nullable String mainComponentName) {
        super(fragmentActivity, mainComponentName);
        this.activity = fragmentActivity;
    }

    private boolean isLoadApp = false;

    public boolean isLoadApp() {
        return isLoadApp;
    }

    @Override
    protected void loadApp(String appKey) {
        if (activity instanceof StartNewActivity) {
            if (isLoadApp()) {
                return;
            }
            String mainComponentName = ((StartNewActivity) activity).getMainComponentName();
            super.loadApp(mainComponentName);
            isLoadApp = true;
        } else {
            super.loadApp(appKey);
        }
    }

    private static final String REDBOX_PERMISSION_MESSAGE =
            "Overlay permissions needs to be granted in order for react native apps to run in dev mode";

    private final int REQUEST_OVERLAY_PERMISSION_CODE = 1111;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        String mMainComponentName = null;
        if (activity instanceof StartNewActivity) {
            mMainComponentName = ((StartNewActivity) activity).getMainComponentName();
        }

        boolean needsOverlayPermission = false;
        if (getReactNativeHost().getUseDeveloperSupport() && Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            // Get permission to show redbox in dev builds.
            if (!Settings.canDrawOverlays(activity)) {
                needsOverlayPermission = true;
            }
        }

        if (mMainComponentName != null && !needsOverlayPermission) {
            loadApp(mMainComponentName);
        }

        super.onCreate(savedInstanceState);
    }

    protected Context getContext() {
        return activity;
    }
}