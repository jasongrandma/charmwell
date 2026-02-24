// Charmwell Data Loader
// Loads charm data from JSON file and makes it available globally

(function () {
    // Global charm database - will be populated after loading
    window.charmDatabase = {};

    // Loading state
    let isLoading = true;
    let loadCallbacks = [];

    /**
     * Load charm data from JSON file
     */
    async function loadCharmData() {
        try {
            const response = await fetch('data/charms.json');

            if (!response.ok) {
                throw new Error(`Failed to load charm data: ${response.status}`);
            }

            const data = await response.json();
            window.charmDatabase = data;
            isLoading = false;

            console.log('✓ Charm data loaded:', Object.keys(data).length, 'charms');

            // Execute any callbacks waiting for data
            loadCallbacks.forEach(callback => callback(data));
            loadCallbacks = [];

            return data;

        } catch (error) {
            console.error('✗ Error loading charm data:', error);
            isLoading = false;
            return {};
        }
    }

    /**
     * Get charm data by ID
     * @param {string} charmId - The charm identifier (e.g., 'healing-amulet')
     * @returns {object|null} Charm data or null if not found
     */
    window.getCharmData = function (charmId) {
        return window.charmDatabase[charmId] || null;
    };

    /**
     * Register callback to execute when data is loaded
     * @param {function} callback - Function to call with charm data
     */
    window.onCharmDataLoaded = function (callback) {
        if (isLoading) {
            loadCallbacks.push(callback);
        } else {
            callback(window.charmDatabase);
        }
    };

    /**
     * Check if charm data is loaded
     * @returns {boolean}
     */
    window.isCharmDataLoaded = function () {
        return !isLoading;
    };

    // Start loading data immediately
    loadCharmData();

})();
