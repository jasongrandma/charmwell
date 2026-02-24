// Charm Tooltip Functionality
// Shows interactive tooltips for charm items using data from charms.json

(function () {
    // Get tooltip element
    const tooltip = document.getElementById('charm-tooltip');

    // Get all charm elements
    let charmElements = [];

    // Rarity display names
    const rarityNames = {
        'common': 'Common',
        'uncommon': 'Uncommon',
        'rare': 'Rare',
        'epic': 'Epic',
        'legendary': 'Legendary'
    };

    // Stock status display
    const stockStatus = {
        'in-stock': 'In Stock',
        'low-stock': 'Low Stock',
        'out-of-stock': 'Out of Stock',
        'pre-order': 'Pre-Order'
    };

    let hideTimeout;
    let showTimeout;

    /**
     * Format price with gold coin symbol
     */
    function formatPrice(price) {
        if (!price) return 'Contact for Price';
        return `${price} gold`;
    }

    /**
     * Populate tooltip with charm data from JSON
     */
    function populateTooltip(charmData) {
        if (!charmData) {
            console.warn('No charm data provided to tooltip');
            return;
        }

        // Set title
        tooltip.querySelector('.tooltip-title').textContent = charmData.name || 'Unknown Charm';

        // Set rarity badge
        const rarityBadge = tooltip.querySelector('.tooltip-rarity');
        const rarity = charmData.rarity || 'common';
        rarityBadge.textContent = rarityNames[rarity] || 'Common';
        rarityBadge.className = `tooltip-rarity ${rarity}`;

        // Set price
        tooltip.querySelector('.price-value').textContent = formatPrice(charmData.price);

        // Set stock status
        const stockValue = tooltip.querySelector('.stock-value');
        const stockKey = charmData.stock || 'in-stock';
        stockValue.textContent = stockStatus[stockKey] || 'Unknown';
        stockValue.className = `info-value stock-value ${stockKey}`;

        // Set description
        tooltip.querySelector('.tooltip-description').textContent =
            charmData.description || 'A mysterious magical item.';
    }

    /**
     * Position tooltip near the charm element
     */
    function positionTooltip(charmElement) {
        const rect = charmElement.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Default position: to the right of the element
        let left = rect.right + 15;
        let top = rect.top + scrollY;

        // Check if tooltip would go off right edge of screen
        if (left + tooltipRect.width > window.innerWidth) {
            // Position to the left instead
            left = rect.left - tooltipRect.width - 15;
        }

        // Check if tooltip would go off left edge
        if (left < 0) {
            // Center it horizontally
            left = (window.innerWidth - tooltipRect.width) / 2;
        }

        // Check if tooltip would go off bottom of screen
        if (top + tooltipRect.height > window.innerHeight + scrollY) {
            // Position above instead
            top = rect.bottom + scrollY - tooltipRect.height;
        }

        // Check if tooltip would go off top of screen
        if (top < scrollY) {
            top = scrollY + 10;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }

    /**
     * Show tooltip for a charm element
     */
    function showTooltip(charmElement) {
        // Clear any pending hide
        clearTimeout(hideTimeout);

        // Get charm ID from element
        const charmId = charmElement.dataset.charmId;

        if (!charmId) {
            console.warn('Charm element missing data-charm-id attribute');
            return;
        }

        // Get charm data from global database
        const charmData = window.getCharmData(charmId);

        if (!charmData) {
            console.warn(`No data found for charm: ${charmId}`);
            return;
        }

        // Add small delay before showing to prevent flicker
        showTimeout = setTimeout(() => {
            populateTooltip(charmData);
            positionTooltip(charmElement);
            tooltip.classList.add('visible');
            tooltip.setAttribute('aria-hidden', 'false');
        }, 200);
    }

    /**
     * Hide tooltip
     */
    function hideTooltip() {
        // Clear any pending show
        clearTimeout(showTimeout);

        // Add small delay before hiding
        hideTimeout = setTimeout(() => {
            tooltip.classList.remove('visible');
            tooltip.setAttribute('aria-hidden', 'true');
        }, 150);
    }

    /**
     * Initialize event listeners for all charm items
     */
    function initializeTooltips() {
        // Find all charm elements
        charmElements = document.querySelectorAll('.charm-item');

        if (charmElements.length === 0) {
            console.warn('No charm items found with .charm-item class');
            return;
        }

        console.log(`✓ Initializing tooltips for ${charmElements.length} charm items`);

        charmElements.forEach(charm => {
            // Check if this is a carousel item (to avoid interfering with carousel navigation)
            const isCarouselItem = charm.classList.contains('carousel-slide');

            // Mouse events (always safe)
            charm.addEventListener('mouseenter', () => showTooltip(charm));
            charm.addEventListener('mouseleave', hideTooltip);

            // Only add keyboard/touch for non-carousel items
            if (!isCarouselItem) {
                // Keyboard accessibility
                charm.setAttribute('tabindex', '0');
                charm.addEventListener('focus', () => showTooltip(charm));
                charm.addEventListener('blur', hideTooltip);

                // Touch events for mobile
                charm.addEventListener('touchstart', (e) => {
                    if (tooltip.classList.contains('visible')) {
                        hideTooltip();
                    } else {
                        showTooltip(charm);
                    }
                });
            }
        });

        // Hide tooltip when scrolling
        window.addEventListener('scroll', hideTooltip);

        // Reposition tooltip on window resize
        window.addEventListener('resize', () => {
            if (tooltip.classList.contains('visible')) {
                hideTooltip();
            }
        });
    }

    /**
     * Initialize when charm data is loaded
     */
    function init() {
        if (!tooltip) {
            console.error('Tooltip element not found. Make sure #charm-tooltip exists in HTML.');
            return;
        }

        // Wait for charm data to load before initializing tooltips
        if (window.onCharmDataLoaded) {
            window.onCharmDataLoaded(() => {
                initializeTooltips();
            });
        } else {
            // Fallback: try to initialize after short delay
            console.warn('charm-data.js not loaded. Retrying...');
            setTimeout(initializeTooltips, 500);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
