/**
 * Sorting Algorithm Visualizer
 * A comprehensive visualizer for various sorting algorithms
 */

class SortingVisualizer {
    constructor() {
        // Initialize properties
        this.array = [];
        this.arraySize = 50;
        this.speed = 5;
        this.isRunning = false;
        this.comparisons = 0;
        this.swaps = 0;
        this.startTime = 0;
        
        // Initialize the visualizer
        this.initializeElements();
        this.setupEventListeners();
        this.generateRandomArray();
        this.updateAlgorithmInfo();
    }

    /**
     * Initialize DOM elements
     */
    initializeElements() {
        this.arrayContainer = document.getElementById('arrayContainer');
        this.algorithmSelect = document.getElementById('algorithm');
        this.arraySizeSlider = document.getElementById('arraySize');
        this.speedSlider = document.getElementById('speed');
        this.sizeValue = document.getElementById('sizeValue');
        this.speedValue = document.getElementById('speedValue');
        this.generateBtn = document.getElementById('generateArray');
        this.startBtn = document.getElementById('startSort');
        this.stopBtn = document.getElementById('stopSort');
        this.comparisonsEl = document.getElementById('comparisons');
        this.swapsEl = document.getElementById('swaps');
        this.timeEl = document.getElementById('time');
        this.algorithmInfo = document.getElementById('algorithmInfo');
    }

    /**
     * Setup event listeners for all controls
     */
    setupEventListeners() {
        // Array size slider
        this.arraySizeSlider.addEventListener('input', (e) => {
            this.arraySize = parseInt(e.target.value);
            this.sizeValue.textContent = this.arraySize;
            if (!this.isRunning) this.generateRandomArray();
        });

        // Speed slider
        this.speedSlider.addEventListener('input', (e) => {
            this.speed = parseInt(e.target.value);
            this.speedValue.textContent = this.speed;
        });

        // Algorithm selection
        this.algorithmSelect.addEventListener('change', () => {
            this.updateAlgorithmInfo();
        });

        // Control buttons
        this.generateBtn.addEventListener('click', () => {
            if (!this.isRunning) this.generateRandomArray();
        });

        this.startBtn.addEventListener('click', () => {
            this.startSorting();
        });

        this.stopBtn.addEventListener('click', () => {
            this.stopSorting();
        });
    }

    /**
     * Generate a new random array
     */
    generateRandomArray() {
        this.array = [];
        for (let i = 0; i < this.arraySize; i++) {
            this.array.push(Math.floor(Math.random() * 350) + 10);
        }
        this.resetStats();
        this.renderArray();
    }

    /**
     * Render the array as visual bars
     */
    renderArray() {
        this.arrayContainer.innerHTML = '';
        const containerWidth = this.arrayContainer.clientWidth;
        const barWidth = Math.max(2, (containerWidth - (this.array.length * 2)) / this.array.length);

        this.array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = `${value}px`;
            bar.style.width = `${barWidth}px`;
            bar.id = `bar-${index}`;
            this.arrayContainer.appendChild(bar);
        });
    }

    /**
     * Sleep function for controlling animation speed
     * @param {number} ms - Milliseconds to sleep
     */
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Highlight bars with specific styling
     * @param {Array} indices - Array indices to highlight
     * @param {string} className - CSS class to apply
     */
    async highlightBars(indices, className) {
        indices.forEach(index => {
            const bar = document.getElementById(`bar-${index}`);
            if (bar) bar.className = `bar ${className}`;
        });
        await this.sleep(220 - (this.speed * 20));
        indices.forEach(index => {
            const bar = document.getElementById(`bar-${index}`);
            if (bar) bar.className = 'bar';
        });
    }

    /**
     * Swap two elements in the array with animation
     * @param {number} i - First index
     * @param {number} j - Second index
     */
    async swap(i, j) {
        if (!this.isRunning) return;
        
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        this.swaps++;
        this.swapsEl.textContent = this.swaps;

        await this.highlightBars([i, j], 'swapping');
        this.renderArray();
    }

    /**
     * Compare two elements with animation
     * @param {number} i - First index
     * @param {number} j - Second index
     */
    async compare(i, j) {
        if (!this.isRunning) return;
        
        this.comparisons++;
        this.comparisonsEl.textContent = this.comparisons;
        await this.highlightBars([i, j], 'comparing');
    }

    /**
     * Reset statistics counters
     */
    resetStats() {
        this.comparisons = 0;
        this.swaps = 0;
        this.comparisonsEl.textContent = '0';
        this.swapsEl.textContent = '0';
        this.timeEl.textContent = '0ms';
    }

    /**
     * Start the sorting process
     */
    async startSorting() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.startTime = performance.now();
        this.startBtn.disabled = true;
        this.generateBtn.disabled = true;

        const algorithm = this.algorithmSelect.value;
        
        try {
            switch (algorithm) {
                case 'bubble':
                    await this.bubbleSort();
                    break;
                case 'selection':
                    await this.selectionSort();
                    break;
                case 'insertion':
                    await this.insertionSort();
                    break;
                case 'merge':
                    await this.mergeSort(0, this.array.length - 1);
                    break;
                case 'quick':
                    await this.quickSort(0, this.array.length - 1);
                    break;
            }
            
            if (this.isRunning) {
                await this.showSortedAnimation();
            }
        } catch (error) {
            console.log('Sorting stopped');
        }

        this.stopSorting();
    }

    /**
     * Stop the sorting process
     */
    stopSorting() {
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.generateBtn.disabled = false;
        
        if (this.startTime > 0) {
            const endTime = performance.now();
            this.timeEl.textContent = `${Math.round(endTime - this.startTime)}ms`;
        }
    }

    /**
     * Show completion animation
     */
    async showSortedAnimation() {
        for (let i = 0; i < this.array.length; i++) {
            if (!this.isRunning) break;
            const bar = document.getElementById(`bar-${i}`);
            if (bar) bar.className = 'bar sorted';
            await this.sleep(20);
        }
    }

    // SORTING ALGORITHMS

    /**
     * Bubble Sort Algorithm
     * Time Complexity: O(n²)
     * Space Complexity: O(1)
     */
    async bubbleSort() {
        for (let i = 0; i < this.array.length - 1; i++) {
            for (let j = 0; j < this.array.length - i - 1; j++) {
                if (!this.isRunning) return;
                await this.compare(j, j + 1);
                if (this.array[j] > this.array[j + 1]) {
                    await this.swap(j, j + 1);
                }
            }
        }
    }

    /**
     * Selection Sort Algorithm
     * Time Complexity: O(n²)
     * Space Complexity: O(1)
     */
    async selectionSort() {
        for (let i = 0; i < this.array.length - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < this.array.length; j++) {
                if (!this.isRunning) return;
                await this.compare(minIdx, j);
                if (this.array[j] < this.array[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                await this.swap(i, minIdx);
            }
        }
    }

    /**
     * Insertion Sort Algorithm
     * Time Complexity: O(n²)
     * Space Complexity: O(1)
     */
    async insertionSort() {
        for (let i = 1; i < this.array.length; i++) {
            let key = this.array[i];
            let j = i - 1;
            
            while (j >= 0) {
                if (!this.isRunning) return;
                await this.compare(j, i);
                if (this.array[j] <= key) break;
                
                this.array[j + 1] = this.array[j];
                this.renderArray();
                j--;
                await this.sleep(220 - (this.speed * 20));
            }
            this.array[j + 1] = key;
            this.renderArray();
        }
    }

    /**
     * Merge Sort Algorithm
     * Time Complexity: O(n log n)
     * Space Complexity: O(n)
     */
    async mergeSort(left, right) {
        if (left >= right || !this.isRunning) return;
        
        const mid = Math.floor((left + right) / 2);
        await this.mergeSort(left, mid);
        await this.mergeSort(mid + 1, right);
        await this.merge(left, mid, right);
    }

    /**
     * Merge function for Merge Sort
     */
    async merge(left, mid, right) {
        const leftArr = this.array.slice(left, mid + 1);
        const rightArr = this.array.slice(mid + 1, right + 1);
        
        let i = 0, j = 0, k = left;
        
        while (i < leftArr.length && j < rightArr.length) {
            if (!this.isRunning) return;
            
            this.comparisons++;
            this.comparisonsEl.textContent = this.comparisons;
            
            if (leftArr[i] <= rightArr[j]) {
                this.array[k] = leftArr[i];
                i++;
            } else {
                this.array[k] = rightArr[j];
                j++;
            }
            
            await this.highlightBars([k], 'swapping');
            this.renderArray();
            k++;
        }
        
        while (i < leftArr.length) {
            if (!this.isRunning) return;
            this.array[k] = leftArr[i];
            await this.highlightBars([k], 'swapping');
            this.renderArray();
            i++;
            k++;
        }
        
        while (j < rightArr.length) {
            if (!this.isRunning) return;
            this.array[k] = rightArr[j];
            await this.highlightBars([k], 'swapping');
            this.renderArray();
            j++;
            k++;
        }
    }

    /**
     * Quick Sort Algorithm
     * Time Complexity: O(n log n) average, O(n²) worst
     * Space Complexity: O(log n)
     */
    async quickSort(low, high) {
        if (low < high && this.isRunning) {
            const pi = await this.partition(low, high);
            await this.quickSort(low, pi - 1);
            await this.quickSort(pi + 1, high);
        }
    }

    /**
     * Partition function for Quick Sort
     */
    async partition(low, high) {
        const pivot = this.array[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (!this.isRunning) return;
            await this.compare(j, high);
            if (this.array[j] < pivot) {
                i++;
                if (i !== j) {
                    await this.swap(i, j);
                }
            }
        }
        await this.swap(i + 1, high);
        return i + 1;
    }

    /**
     * Update algorithm information display
     */
    updateAlgorithmInfo() {
        const algorithm = this.algorithmSelect.value;
        const info = {
            bubble: {
                title: 'Bubble Sort',
                description: 'Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
                best: 'O(n)',
                average: 'O(n²)',
                worst: 'O(n²)',
                space: 'O(1)'
            },
            selection: {
                title: 'Selection Sort',
                description: 'Selection sort divides the list into sorted and unsorted parts, repeatedly finding the minimum element and placing it at the beginning.',
                best: 'O(n²)',
                average: 'O(n²)',
                worst: 'O(n²)',
                space: 'O(1)'
            },
            insertion: {
                title: 'Insertion Sort',
                description: 'Insertion sort builds the sorted array one item at a time by repeatedly taking elements and inserting them into their correct position.',
                best: 'O(n)',
                average: 'O(n²)',
                worst: 'O(n²)',
                space: 'O(1)'
            },
            merge: {
                title: 'Merge Sort',
                description: 'Merge sort divides the array into halves, recursively sorts them, and then merges the sorted halves back together.',
                best: 'O(n log n)',
                average: 'O(n log n)',
                worst: 'O(n log n)',
                space: 'O(n)'
            },
            quick: {
                title: 'Quick Sort',
                description: 'Quick sort picks a pivot element and partitions the array around it, then recursively sorts the sub-arrays.',
                best: 'O(n log n)',
                average: 'O(n log n)',
                worst: 'O(n²)',
                space: 'O(log n)'
            }
        };

        const selected = info[algorithm];
        this.algorithmInfo.innerHTML = `
            <div class="info-title">${selected.title}</div>
            <p>${selected.description}</p>
            <div class="complexity">
                <div class="complexity-item"><strong>Best Case:</strong> ${selected.best}</div>
                <div class="complexity-item"><strong>Average Case:</strong> ${selected.average}</div>
                <div class="complexity-item"><strong>Worst Case:</strong> ${selected.worst}</div>
                <div class="complexity-item"><strong>Space:</strong> ${selected.space}</div>
            </div>
        `;
    }
}

// Initialize the visualizer when the page loads
window.addEventListener('DOMContentLoaded', () => {
    new SortingVisualizer();
});