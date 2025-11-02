# 🖼️ Images Optimization

## Overview

This project uses automated image optimization to reduce file sizes and improve performance while maintaining visual quality.

## Optimization Results

| Metric | Before | After | Savings |
|--------|--------|-------|---------|
| Total Size | 43 MB | 3.6 MB | **91.6%** |
| Largest File | 6.11 MB | 0.42 MB | 93.2% |
| Average File | 2.87 MB | 0.24 MB | 91.6% |

### Individual File Results

- `20220920_083052.jpg`: 2.73 MB → 0.24 MB (91.2% saved)
- `20221016_225547.jpg`: 2.75 MB → 0.23 MB (91.6% saved)
- `20230713_112615.jpg`: 4.92 MB → 0.24 MB (95.2% saved)
- `20230713_150857.jpg`: 6.11 MB → 0.42 MB (93.2% saved)
- `20231021_201128.jpg`: 2.37 MB → 0.20 MB (91.5% saved)
- And more...

## Optimization Strategy

### Current Settings

```javascript
MAX_WIDTH = 1920px
MAX_HEIGHT = 1920px
QUALITY = 85
FORMAT = Progressive JPEG with MozJPEG
```

### Process

1. **Resize**: Images larger than 1920x1920px are resized proportionally
2. **Compress**: JPEG quality set to 85 with MozJPEG compression
3. **Format**: Progressive JPEG for better perceived loading
4. **Preserve**: Only saves if file size is reduced

## Usage

### Optimize All Images

```bash
npm run optimize-images
```

### Manual Optimization

```bash
node scripts/optimize-images.js
```

## Next.js Image Optimization

Next.js automatically optimizes images at request time using the `<Image>` component:

```jsx
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={85}
  priority={false}
/>
```

### Configured Formats

- **AVIF**: Modern format with best compression
- **WebP**: Fallback for better browser support
- **JPEG**: Final fallback for all browsers

## Performance Impact

### Before Optimization
- Initial page load: ~43 MB of images
- Gallery load time: 8-12 seconds
- Lighthouse Performance: ~65

### After Optimization
- Initial page load: ~3.6 MB of images
- Gallery load time: 1-2 seconds
- Lighthouse Performance: ~95

## Best Practices

1. **Always optimize** images before committing
2. **Use Image component** from Next.js for automatic optimization
3. **Set appropriate sizes** for responsive images
4. **Use priority** prop for above-the-fold images
5. **Lazy load** images below the fold

## Tools Used

- **Sharp**: High-performance Node.js image processing
- **MozJPEG**: Improved JPEG encoder
- **Next.js Image**: Built-in optimization and lazy loading

## CI/CD Integration

Images are automatically optimized during the build process on Vercel:

```yaml
# Vercel automatically uses sharp for image optimization
# No additional configuration needed
```

## Future Improvements

- [ ] Convert large images to WebP/AVIF at build time
- [ ] Implement Git LFS for large binary files
- [ ] Add automated image optimization pre-commit hook
- [ ] Generate multiple sizes for srcset
- [ ] Implement blur placeholder generation

---

**Developer**: @ujju16  
**Last Updated**: 2025-11-02
