# probabilistic-selection
Probabilistic selection from a discrete key distribution.

### Installation:

```bash
npm install probabilistic-selection
```

### Usage:

Create a distribution object:

```ts
const distribution = {};
```

Add some keys:

```ts
import { addKey } from 'probabilistic-selection';

addKey(distribution, 'bob'); // distribution = { bob: 1 };
addKey(distribution, 'alice'); // distribution = { bob: 0.5, alice: 0.5 };
addKey(distribution, 'eve', 0.2); // distribution = { bob: 0.4, alice: 0.4, eve: 0.2 };
```

Remove a key:

```ts
import { removeKey } from 'probabilistic-selection';

removeKey(distribution, 'alice'); // distribution = { bob: 0.6, eve: 0.4 };
```

Select a random key:

```ts
import { selectKey } from 'probabilistic-selection';

const key = selectKey(distribution); // key = 'bob';
```