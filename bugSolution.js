The issue is resolved by properly URL encoding the URI before passing it to the `Image` component.  The `encodeURI` function from Javascript's built-in functions can be used for this purpose. This ensures that special characters are correctly handled by the component.

```javascript
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUri = 'https://example.com/image with spaces.jpg';
  const encodedUri = encodeURI(imageUri);

  return (
    <Image
      source={{ uri: encodedUri }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default MyComponent;
```