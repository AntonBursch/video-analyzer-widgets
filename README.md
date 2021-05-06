![ava_widgets_banner_github.png](./ava_widgets_banner_github.png)

# Azure video analyzer widgets - under construction

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)

This is the Azure video analyzer widgets repo, containing web component packages, examples, and documentation.

## Introduction

A collection of widgets (web components) using Azure Video Analyzer platform capabilities and APIs

## Installing AVA library

1. #### For consuming as NPM package from npm:
    1. Install the library:
        ```
            npm install video-analyzer-widgets
        ```

### `AVA player widget`

### Import

##### Typescript usage:

```typescript
import { Player } from 'video-analyzer-widgets';
```

### Getting Started

Player widget is a web-component that can be created using HTML or dynamically.

Creating using HTML:

```html live
  <body>
	<ava-player><ava-player>
  </body>
```

Creating dynamically:

##### Typescript usage:

```typescript
import { Player } from 'video-analyzer-widgets';

const avaPlayer = new Player();
document.firstElementChild.appendChild(avaPlayer).
```

### Properties

| Name   | Type             | Default | Description                         |
| ------ | ---------------- | ------- | ----------------------------------- |
| width  | string           | 100%    | Reflects the value of widget width  |
| height | string           | 100%    | Reflects the value of widget height |
| config | IAvaPlayerConfig | null    | Widget configuration                |

### Events

| Name          | Parameters | Description                                       |
| ------------- | ---------- | ------------------------------------------------- |
| TOKEN_EXPIRED | -          | Callback to invoke when AVA JWT token is expired. |

### Methods

| Name           | Parameters                                                               | Description                                                                                              |
| -------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| constructor    | width: string = '', height: string = '', config: IAvaPlayerConfig = null | Widget constructor. If called with config, you don’t need to call _configure_ function                   |
| setAccessToken | jwtToken:string                                                          | Update the widget token.                                                                                 |
| set apiBase    | apiBase:string                                                           | Control AVA-API base. Good for using mock API / testing API.                                             |
| configure      | config: IAvaPlayerConfig                                                 | Update widget configuration.                                                                             |
| load           | -                                                                        | Loads and initialize the widget according to provided configuration. If not called, widget will be empty |

### Code snippets:

1.  _Basic usage snippet:_ create a player widget with native JS code, configure the widget and load the data.

    ```html live
    <body>
        <ava-player></ava-player>
    </body>
    <script>
        (function () {
                // Get player instance
                const avaPlayer = document.querySelector("ava-player");

                // Configure widget with AVA API configuration
                avaPlayer.configure({
                    token: '<AVA-API-JWT-TOKEN>',
                    accountId: '<GUID-ACCOUNT-ID>',
                    longRegionCode: '<REGION-CODE>',
                    videoName: '<VIDEO-NAME-FROM-AVA-ACCOUNT>’
                });

                avaPlayer.load();
            })()
    </script>
    ```

2.  _Token refresh snippet:_ create a widget with native JS code, configure the widget and load the data. Once AVA-API token is expired, update the token.

    ```html live
    <body>
        <ava-player widget="”920px”" height="”300px”"></ava-player>
    </body>
    <script>
        (function () {
                    // Get player instance
                    const avaPlayer = document.querySelector("ava-player");

                    // Adding token expired listener
                    avaPlayer.addEventListener('TOKEN_EXPIRED', async () => {
                        const token = await fetch(‘<request-to-generate-token>’);
                        avaPlayer.setAccessToken(token);
                    });

                    // Configure widget with AVA API configuration
                    avaPlayer.configure({
                        token: '<AVA-API-JWT-TOKEN>',
                        accountId: '<GUID-ACCOUNT-ID>',
                        longRegionCode: '<REGION-CODE>',
                        videoName: '<VIDEO-NAME-FROM-AVA-ACCOUNT>’
                    });

                    // Load the widget
                    avaPlayer.load();
            })()
    </script>
    ```

3.  _Dynamically creating the widget:_ create a widget dynamically with native JS code, without using configure function.

    ```html live
    <body>
        <div id="”widget-container”"></div>
    </body>
    <script>
        (function () {
                        // Get widget container
                        const widgetContainer = document.querySelector("#widget-container");

                        // Create new player widget
                        const playerWidget = new window.ava.widgets.player(
                        '100%',
                        '100%',
                        {
                                    token: '<AVA-API-JWT-TOKEN>',
                                    accountId: '<GUID-ACCOUNT-ID>',
                                    longRegionCode: '<REGION-CODE>',
                                    videoName: '<VIDEO-NAME-FROM-AVA-ACCOUNT>’
                        });

                        widgetContainer.appendChild(playerWidget)

                        // Load the widget
                        playerWidget.load();
                })()
    </script>
    ```

4.  _Use ava-player in your angular application:_

    1. Go to your _src/main.ts_ file and add the following code:

        ```typescript
        import { Player } from 'video-analyzer-widgets';

        /*
         * Ensure that tree-shaking doesn't remove this component from * the bundle.
         * There are multiple ways to prevent tree shaking, of which this * is one.
         */
        Player;
        ```

    2. To allow an NgModule to contain Non-Angular element names, add the following code in your application module typescript file _app.module.ts_:

        ```typescript
            import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

            @NgModule({
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            });
        ```

    3. Now we can start using widget. Replace the HTML template in your app.component.html, file with the following markup:
        ```html live
        <template>
            <ava-player></ava-player>
        </template>
        ```
        Alternatively, you can create a new instance of the widget using typescript, and add it to the DOM.
