# NgxLet

Declare variables for blocks in your Angular templates.

## Example

```angular2html
  <!-- Without ngx-let -->
  <div>Name: {{ (person$ | async).name }}</div>
  <div>Age: {{ (person$ | async).age }}</div>

  <!-- With ngx-let -->
  <ng-container *ngxLet="person$ | async as person">
    <div>Name: {{ person.name }}</div>
    <div>Age: {{ person.age }}</div>
  </ng-container>
```

## Usage

```typescript
import { NgxLetModule } from 'ngx-let';

@NgModule({
    ...
    imports: [
        NgxLetModule
    ]
    ...
})
export class YourModule {
}
```
