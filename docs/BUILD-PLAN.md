# Charmwell Hover Information Feature - Build Plan

## Project Goal
Add interactive hover functionality to charm items that displays detailed information including item stats, pricing, rarity details, usage instructions, and warnings.

---

## Build Steps (Each ~5 minutes)

### 1. **Plan Data Structure & Content**
- Review existing charm items in charms.html
- Define what additional information to display (price, duration, cooldown, warnings, stock status, crafting time)
- Create a sample data object structure for 2-3 charms
- Document field types and descriptions

**Deliverable:** Comment block or separate note with data structure schema

---

### 2. **Add Charm IDs to First Category (Healing)**
- Open charms.html
- Add `data-charm-id` to each charm-item in the Healing section
- Ensure each ID matches a key in data/charms.json
- Test with 3-4 items first

**Deliverable:** Updated HTML with data-charm-id on Healing charms

---

### 3. **Create Tooltip HTML Structure**
- Add a hidden tooltip div element at the bottom of charms.html (before closing body)
- Structure tooltip with sections: header, stats grid, description, footer
- Add semantic class names for styling hooks
- Keep it empty/template-based for now

**Deliverable:** Empty tooltip template in HTML

---

### 4. **Style Tooltip Container (CSS Base)**
- Open styles.css
- Create `.charm-tooltip` class with positioning (fixed/absolute)
- Style background, border, border-radius, shadow
- Add z-index to appear above other content
- Set initial state to `display: none` and `opacity: 0`

**Deliverable:** Basic tooltip styling in styles.css

---

### 5. **Style Tooltip Content Sections (CSS Details)**
- Add styles for tooltip header (item name, rarity color)
- Create grid layout for stats section
- Style description text area
- Add footer styling for warnings/notes
- Use CSS variables for rarity colors

**Deliverable:** Complete tooltip styling with sections

---

### 6. **Add Hover Animations & Transitions (CSS)**
- Add `.charm-tooltip.visible` class with `opacity: 1`
- Create transition effects for smooth fade-in
- Add subtle scale/slide animation
- Create rarity-based glow effects
- Test animation timing (0.2-0.3s recommended)

**Deliverable:** Smooth tooltip animations

---

### 7. **Create JavaScript File & Basic Setup**
- Create new file: `scripts/charm-tooltip.js`
- Link script in charms.html before closing body tag
- Set up variables: tooltip element, all charm items
- Add event listener setup function
- Test console.log on hover

**Deliverable:** charm-tooltip.js with basic event listeners

---

### 8. **Implement Show Tooltip Function**
- Write `showTooltip()` function
- Read data attributes from hovered charm
- Calculate tooltip position relative to charm item
- Handle edge cases (tooltip going off-screen)
- Add tooltip visible class

**Deliverable:** Working showTooltip() function

---

### 9. **Implement Populate Tooltip Content**
- Create `populateTooltipContent()` function
- Extract data from charm-item data attributes
- Dynamically generate HTML for each section
- Include rarity indicator and color
- Format price, stock, and other stats

**Deliverable:** Tooltip displays current charm data

---

### 10. **Implement Hide Tooltip Function**
- Write `hideTooltip()` function
- Remove visible class with smooth transition
- Clear tooltip content after fade-out
- Add mouseleave event listener
- Test show/hide interaction fluidity

**Deliverable:** Complete show/hide tooltip functionality

---

### 11. **Add Charm IDs to Index Page Charms**
- Open index.html
- Add data-charm-id to each carousel slide
- Ensure each ID matches a key in data/charms.json
- Test hover for all index page charms

**Deliverable:** Index page charms have working tooltips

---

### 12. **Create Rarity Information Mapper** (Completed)
- Add JavaScript object mapping rarity levels to descriptions
- Include: Common, Uncommon, Rare, Epic, Legendary
- Add rarity-specific details (drop rate, value multiplier)
- Display rarity info in tooltip header

**Deliverable:** Dynamic rarity information in tooltips

---

### 13. **Add Price Formatting Function** (Completed)
- Create `formatPrice()` utility function
- Format currency with appropriate symbol (gold coins, etc.)
- Handle ranges (e.g., "150-200 gold")
- Add "Price upon request" for special items
- Test with various price inputs

**Deliverable:** Nicely formatted prices in tooltips

---

### 14. **Implement Smart Positioning Logic** (Completed)
- Enhance tooltip positioning to detect viewport edges
- Add logic to flip tooltip position if near screen edge
- Calculate optimal x/y coordinates
- Test on different screen sizes
- Add offset from cursor/charm item

**Deliverable:** Tooltip always visible on screen

---

### 15. **Add ARIA Labels & Screen Reader Support**
- Add `aria-describedby` to charm items
- Add `role="tooltip"` to tooltip element
- Include `aria-live` for dynamic content
- Add descriptive text for screen readers
- Test with screen reader

**Deliverable:** Screen reader friendly tooltips

---

### 16. **Polish Visual Design**
- Review overall tooltip appearance
- Adjust spacing, padding, margins
- Fine-tune colors and contrast
- Ensure consistency across rarity levels
- Add subtle background texture or pattern

**Deliverable:** Visually polished tooltips

---

### 17. **Add Tooltip Entrance/Exit Delays**
- Implement small delay before showing tooltip (200-300ms)
- Prevent tooltip flicker on quick hover
- Add exit delay to allow mouse movement
- Use setTimeout/clearTimeout
- Test with rapid mouse movements

**Deliverable:** Smooth, non-flickering tooltip behavior

---

### 18. **Optimize Performance**
- Review event listeners (use delegation if needed)
- Debounce position calculations
- Minimize DOM manipulations
- Cache tooltip element references
- Test performance with all charms

**Deliverable:** Optimized tooltip performance

---

### 19. **Test Responsive Design**
- Test on desktop (1920px, 1366px)
- Test on tablet (768px)
- Test on mobile (375px, 414px)
- Adjust tooltip size for each breakpoint
- Verify scrolling doesn't break tooltips

**Deliverable:** Responsive tooltip on all screen sizes

---

### 20. **Final Testing & Documentation**
- Test all charm categories thoroughly
- Verify all data displays correctly
- Test all interactions (hover, keyboard, touch)
- Document any known issues
- Create brief usage notes for future updates

**Deliverable:** Fully tested feature with documentation

---

## Color Reference (Rarity System)
- **Common:** `#a0a0a0` (Gray)
- **Uncommon:** `#22c55e` → `#16a34a` (Green gradient)
- **Rare:** `#3b82f6` → `#1d4ed8` (Blue gradient)
- **Epic:** `#ec4899` → `#db2777` (Pink gradient)
- **Legendary:** `#fbbf24` → `#f59e0b` (Gold gradient)

## Suggested Additional Data Fields
- `data-price`: Price in gold (e.g., "150" or "200-300")
- `data-stock`: Stock status (e.g., "in-stock", "low-stock", "out-of-stock", "pre-order")
- `data-duration`: Effect duration (e.g., "1 hour", "permanent", "3 uses")
- `data-cooldown`: Cooldown time (e.g., "24 hours", "1 week", "none")
- `data-warning`: Safety warnings (e.g., "Requires license", "Handle with gloves")
- `data-usage`: Usage instructions (e.g., "Wear around neck", "Place under pillow")
- `data-crafting-time`: Custom order time (e.g., "3 days", "1 week")
- `data-related`: Related item names (comma-separated)
- `data-rarity`: Rarity level (e.g., "common", "legendary")

## Success Criteria
✅ Tooltip appears smoothly on hover
✅ All charm information displays correctly
✅ Responsive on all devices
✅ No performance issues
✅ Visually consistent with site design

---

**Total Estimated Time:** 1.5 - 2 hours (20 steps × 5 minutes)
**Complexity Level:** Intermediate
**Technologies:** HTML5, CSS3, Vanilla JavaScript
