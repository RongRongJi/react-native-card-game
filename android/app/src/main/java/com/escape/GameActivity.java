package com.escape;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

import static android.provider.Settings.NameValueTable.NAME;

public class GameActivity extends ReactActivity implements  StartNewActivity {

    public static final String NAME = "_name";
    @Override
    protected ReactActivityDelegate createReactActivityDelegate(){
        return new MyReactActivityDelegate(this,getMainComponentName());
    }

    @Override
    public void startNewActivity(String name){
        Intent intent = new Intent(this,GameActivity.class);
        intent.putExtra(GameActivity.NAME,name);
        startActivity(intent);
    }

    @Nullable
    @Override
    public String getMainComponentName() {
        if (getIntent() == null) {
            return null;
        }
        String name = getIntent().getStringExtra(NAME);
        if (name == null || name.isEmpty()) {
            finish();
            return "";
        }
        return name;
    }
}
