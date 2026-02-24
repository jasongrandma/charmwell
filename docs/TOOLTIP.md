# Tooltip Feature Implementation Notes

## Overview
Successfully implemented a hover tooltip feature for the Healing Amulet on the home page. This document records what was implemented for reference.

---

## Features Implemented

### 1. HTML Data Attributes (index.html)
Added comprehensive data attributes to the Healing Amulet carousel slide:

```html
<div class="carousel-slide charm-interactive"
     data-charm-name="Healing Amulet"
     data-price="150"
     data-rarity="uncommon"
     data-stock="in-stock"
     data-duration="2 hours"
     data-cooldown="none"
     data-usage="Wear around neck or hold close to affected area"
     data-description="Accelerates natural healing of minor wounds and bruises. The green gemstone glows softly when activated."
     data-warning="Not a substitute for professional medical care">
```

### 2. Tooltip HTML Structure
Created semantic tooltip structure with sections:
- **Header**: Item name + rarity badge
- **Stats Grid**: Price, Duration, Stock, Cooldown (2x2 grid)
- **Description**: Detailed item description with styled background
- **Usage**: How to use instructions
- **Warning**: Conditional warning section (only shows if data-warning exists)

### 3. CSS Styling Features

#### Tooltip Container
- Fixed positioning with smart edge detection
- Smooth fade-in animation (0.25s ease)
- Slide-up effect on appearance
- Box shadow for depth
- Purple gradient header matching site theme

#### Rarity Badge Colors
- **Common**: `#a0a0a0` (Gray)
- **Uncommon**: `#22c55e → #16a34a` (Green gradient)
- **Rare**: `#3b82f6 → #1d4ed8` (Blue gradient)
- **Epic**: `#ec4899 → #db2777` (Pink gradient)
- **Legendary**: `#fbbf24 → #f59e0b` (Gold gradient)

#### Stock Status Colors
- **In Stock**: Green `#22c55e`
- **Low Stock**: Amber `#f59e0b`
- **Out of Stock**: Red `#dc2626`

#### Warning Section
- Amber background `#fef3c7`
- Orange border `#f59e0b`
- Warning emoji (⚠️) in the label

### 4. JavaScript Functionality (charm-tooltip.js)

#### Core Functions
1. **populateTooltip()**: Extracts data attributes and fills tooltip content
2. **positionTooltip()**: Smart positioning with viewport edge detection
3. **showTooltip()**: Displays tooltip with 200ms delay (prevents flicker)
4. **hideTooltip()**: Hides tooltip with 150ms fade-out delay

#### Features Implemented
- ✅ Hover interaction for desktop
- ✅ Keyboard accessibility (Tab key + Focus/Blur)
- ✅ Touch support for mobile (tap to show/hide)
- ✅ Smart positioning (flips if near screen edge)
- ✅ Auto-hide on scroll
- ✅ Auto-hide on window resize
- ✅ ARIA attributes for screen readers
- ✅ Event delegation ready

#### Accessibility Features
- `tabindex="0"` for keyboard navigation
- `role="tooltip"` on tooltip element
- `aria-hidden` toggle on show/hide
- Focus/blur event listeners

#### Price Formatting
```javascript
function formatPrice(price) {
    if (!price) return 'Contact for Price';
    return `${price} gold`;
}
```

---

## Data Structure Used

### Required Data Attributes
- `data-charm-name`: Display name
- `data-price`: Price in gold (number or range)
- `data-rarity`: common | uncommon | rare | epic | legendary
- `data-stock`: in-stock | low-stock | out-of-stock | pre-order
- `data-duration`: Effect duration (e.g., "2 hours", "permanent")
- `data-cooldown`: Cooldown time (e.g., "24 hours", "none")
- `data-description`: Full description text
- `data-usage`: Usage instructions

### Optional Data Attributes
- `data-warning`: Warning text (only shows if present)
- `data-related`: Related items (comma-separated)
- `data-crafting-time`: Custom order time

---

## Technical Decisions

### Why Fixed Positioning?
Used `position: fixed` instead of `absolute` to ensure tooltip stays properly positioned relative to viewport, making edge detection easier.

### Why Delays?
- **Show delay (200ms)**: Prevents tooltip flicker when mouse quickly passes over items
- **Hide delay (150ms)**: Smooth transition, allows mouse movement between item and tooltip

### Why Event Parameter Removed?
Originally passed `event` to `positionTooltip()` but wasn't needed since we calculate position from element's bounding rect.

### Mobile Touch Handling
Used `{ passive: false }` on touchstart with `e.preventDefault()` to properly handle the tap-to-toggle behavior without triggering native touch scrolling.

---

## Browser Compatibility
- ✅ Chrome/Edge (tested)
- ✅ Firefox (expected to work)
- ✅ Safari (expected to work)
- Uses standard ES6 features
- No polyfills needed

---

## Performance Considerations
- Tooltip element reused (not recreated each time)
- Content updated via textContent (faster than innerHTML)
- Timeouts used to debounce rapid hover events
- Single tooltip for all charm items (efficient DOM usage)

---

## Next Steps for Full Implementation
1. Add `.charm-interactive` class to other items
2. Add data attributes to items on charms.html page
3. Consider adding "Related Items" section to tooltip
4. Add crafting time display for custom items
5. Implement carousel item highlighting on hover
6. Consider adding image preview in tooltip
7. Add animation when rarity badge appears

---

## File Locations
- **HTML**: `index.html` (Healing Amulet carousel slide + tooltip template)
- **CSS**: `styles.css` (lines ~903-1080, added after footer styles)
- **JavaScript**: `scripts/charm-tooltip.js` (new file, 189 lines)

---

**Date Implemented**: February 23, 2026
**Test Status**: Ready for browser testing
**Next Phase**: Extend to all charm items on site
