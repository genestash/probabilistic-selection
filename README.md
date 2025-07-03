# probabilistic-selection
Probabilistic selection from a discrete key distribution.

### Installation:

```bash
npm install probabilistic-selection
```

```ts
import ps from 'probabilistic-selection';
```

### Usage:

Create a distribution object:

```ts
const distribution = {};
```

Add some keys:

```ts
ps.addKey(distribution, 'bob'); // distribution = { bob: 1 }
ps.addKey(distribution, 'alice'); // distribution = { bob: 0.5, alice: 0.5 }
ps.addKey(distribution, 'eve', 0.2); // distribution = { bob: 0.4, alice: 0.4, eve: 0.2 }
```

Adjust the distribution:

```ts
ps.adjustDistribution(distribution, 'bob', -0.1); // distribution = { bob: 0.3, alice: 0.45, eve: 0.25 }
```

Remove the key:

```ts
ps.removeKey(distribution, 'bob'); // distribution = { alice: 0.6, eve: 0.4 }
```

Select a random key:

```ts
const key = ps.selectKey(distribution); // key = 'alice'
```