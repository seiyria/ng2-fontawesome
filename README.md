# ng2-fontawesome
An easy-to-use directive for [font awesome](https://github.com/FortAwesome/Font-Awesome) icons.

# Install
`npm i -s ng2-fontawesome`

# Sample Usage
It is recommended that you globally apply the Font Awesome directive like so:

```
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { FontAwesomeDirective } from 'ng2-fontawesome';
import { bootstrap } from '@angular/platform-browser-dynamic';

bootstrap(MyAppComponent, [
  provide(PLATFORM_DIRECTIVES, { useValue: FontAwesomeDirective, multi: true })
]);
```

Doing so will allow you to use the `fa` directive anyhwere. Supposing you don't want to do that, registering it and including it like normal will work as well.

Here is how you would use it in your templates:

```html
<i fa [icon]="'cog'" [fw]="true"></i>
```

# Options
Name    | Valid Values
----    | ------------
`icon`  | Any font awesome icon name
`fw`    | `true`, `false`
`size`  | `'lg'`, `'2x'`, `'3x'`, `'4x'`, `'5x'`
`spin`  | `true`, `false`
`pulse` | `true`, `false`
`rotate`| `'90'`, `'180'`, `'270'`
`flip`  | `'vertical'`, `'horizontal'`
`extra` | any other classes you want to attach to this icon
